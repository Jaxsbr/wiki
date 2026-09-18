# Agent Memory Engineering: Production Systems and Concrete Examples

> Part of R-010. See also:
> [Memory Platforms Compared](agent-memory-platforms.md) |
> [Critiques, Trade-offs, and Failure Modes](agent-memory-critiques.md) |
> [Context vs Memory Engineering](agent-memory-overview.md)

The base taxonomy (Working / Episodic / Semantic / Procedural) maps cleanly to real
infrastructure choices. This page shows where and how each type is actually built.

---

## 1. Working Memory — "What's happening right now"

### Definition

Working memory is the agent's active context window: current tool outputs, user turn,
retrieved snippets, and scratchpad reasoning. It is inherently **volatile** — scoped to
the running turn or session and lost on eviction unless explicitly promoted.

### Production implementations

| System | Working memory backend | Notes |
|---|---|---|
| Letta / MemGPT | In-context "Core Memory" blocks (SQLite-backed, character-limited) | Agent calls `core_memory_replace()` to self-edit; survives restart via DB |
| LangChain | `ConversationBufferMemory` (in-RAM list) | Grows linearly; typical token cap 4K–8K |
| Redis Agent Memory Server | Redis `HASH` + TTL for session events | Supports `EXPIRE` so stale sessions auto-evict |
| Custom production stacks | Redis or Valkey for ephemeral K/V | p50 < 1 ms round-trip; zero-cost on cache hit |

### The buffer-growth problem

`ConversationBufferMemory` stores conversation verbatim and passes the full history on
every call. Growth is linear in turns. At 50 turns × 200 tokens each = 10K tokens per
call — 4–8× the output budget on GPT-4o. Production systems hit this wall at ~15–25
turns and must implement truncation or summarisation.

**LangChain's production-pattern ladder:**

1. **Buffer** — use for single-exchange or very short sessions (< 10 turns)
2. **Window** — `ConversationBufferWindowMemory(k=5)` keeps only last k turns; good for
   task-oriented chatbots where older turns become irrelevant
3. **Summary** — `ConversationSummaryMemory` compresses old turns via an LLM call; grows
   sub-linearly; adds 50–100 ms extra inference per compression pass
4. **Entity** — tracks named entities as a structured dict injected at session start;
   used for personal assistants tracking user facts

**Persistence in production:** the default `MemorySaver` is in-RAM and lost on restart.
Production swaps this for `PostgresSaver` or `RedisSaver`, serialising state to an
external store. State then survives restarts and horizontal scaling.

---

## 2. Episodic Memory — "What happened before"

### Definition

Episodic memory stores conversation transcripts, past interaction summaries, and
session-level events indexed by time and/or semantic similarity. It is the **long-term
history layer**.

### Production implementations

| System | Episodic backend | Retrieval mechanism |
|---|---|---|
| Letta | "Recall Memory" — SQLite or PostgreSQL for conversation history | Tool call `conversation_search()` — semantic search over past sessions |
| Zep (Graphiti engine) | Bi-temporal knowledge graph (valid time + transaction time) | Graph traversal + BM25 hybrid; p95 graph search ~150 ms after 2025 optimization |
| Mem0 | Qdrant / Chroma / Pinecone / 20 other backends | Dense vector retrieval; async writes by default in v1.0.0 |
| OpenAI Dreaming V3 (Jun 2026) | Separate data layer, injected into system prompt at inference time | Background synthesis process reads years of past sessions; no explicit retrieval call |
| Redis Agent Memory Server | Redis with vector index (RediSearch) | Hybrid: keyword + semantic; TTL-based eviction for stale episodes |

### The MemGPT / Letta architecture in detail

MemGPT (arXiv:2310.08560, Packer et al. 2023) coined the OS-memory analogy:

- **Main context** = RAM — the context window. Always present.
- **Archival storage** = disk — unbounded external store (vector DB or files).

When main context fills, the agent compresses older content into archival storage and
retrieves on demand via semantic search. The agent calls explicit tool functions
(`archival_memory_insert`, `archival_memory_search`) — the model itself decides what to
archive and when.

**Benchmark result:** MemGPT scored 89% on document analysis tasks versus 63% for a
GPT-4 baseline with a fixed context window. Multi-session conversation quality improved
similarly.

Letta (the production successor as of September 2024) adds:
- Metadata database (SQLite default, PostgreSQL for production)
- "Recall Memory" for conversation history with recursive summarisation on eviction
- Three configurable storage backends: SQLite (dev), PostgreSQL (prod), external vector DB

### Episodic write triggers in real systems

Letta: agent initiates write with `archival_memory_insert()` during its reasoning pass
before responding to the user. The agent decides what is worth archiving.

Zep: writes happen automatically on episode close (end of conversation turn). The
Graphiti engine extracts entities and relationships and writes them to the knowledge graph
without the agent needing to manage writes manually.

Mem0: LLM-based extraction router classifies each candidate fact as ADD / UPDATE /
DELETE / NOOP. It inspects the top-k most similar existing memories and picks the
operation. Only novel or updated information triggers a write.

---

## 3. Semantic Memory — "What is generally true"

### Definition

Semantic memory stores persistent facts, user preferences, domain knowledge, and entity
profiles that are true across sessions — not tied to a specific conversation.

### Production implementations

| System | Semantic backend | Examples stored |
|---|---|---|
| Mem0 (Managed) | Dense vector store + structured metadata | `"user prefers Python over JavaScript"`, `"account tier: enterprise"` |
| Zep (Graphiti) | Temporal knowledge graph nodes | Entities with validity windows: `company = "Anthropic"` valid from 2021-01-01 |
| Redis Agent Memory | Redis HASH for structured facts + vector index for retrieval | Customer profiles, product specs, domain expertise |
| Claude Code (CLAUDE.md) | Flat markdown file, read at session start | Project conventions, architecture details, known pitfalls |
| OpenAI Dreaming V3 | Synthesised semantic profile injected as system prompt prefix | User preferences, communication style, life context — updated by background synthesis |

### The Anthropic / Claude pattern

Claude Code uses a three-layer semantic memory pattern revealed by source analysis:

1. **CLAUDE.md** — a persistent markdown file read at every session start, containing
   project-level semantic facts. Developer maintains it explicitly. Works well at small
   scale; degrades when it grows too large (model loses ability to locate the most relevant
   section within a monolithic context block).
2. **Grep-based search** — for live codebase navigation; retrieves semantically relevant
   code sections on demand.
3. **Background component (Chyros daemon)** — reportedly synthesises project understanding
   across sessions; analogous to OpenAI's Dreaming.

**Key problem with flat-file semantic memory:** as the file grows, signal-to-noise ratio
drops. Model over-attends to beginnings and ends of the file (2.3× and 1.7× more
attention weight respectively; Cornell Tech study) versus the middle — meaning important
facts buried in the middle get ignored regardless of relevance.

### Write policy for semantic memory (what real systems enforce)

From production analyses:

- **Confidence floor:** facts need a confidence score ≥ 0.5 (or similar threshold) before
  being stored. Preferences often require explicit user confirmation or repeated observation
  across multiple turns.
- **Contradiction handling:** conflicting facts route to a supersession path — the new
  fact replaces the old rather than creating duplicate entries. Contradictions must never
  accumulate.
- **Scope:** agent-scoped preferences enter as `active`; tenant-wide facts enter as
  `provisional` until validated.
- **TTL:** volatile semantic facts (e.g., temporary user context) get a TTL. Stable
  preferences (e.g., language preference) are TTL-free but subject to confidence decay
  over time.

---

## 4. Procedural Memory — "How to do things"

### Definition

Procedural memory encodes learned workflows, tool-call sequences, and repeatable
automation patterns the agent can re-invoke. Semantic memory encodes "I know what revenue
means"; procedural memory encodes "I know the steps to run the quarterly revenue report."

### Production implementations

| System | Procedural approach | How it's triggered |
|---|---|---|
| Letta / MemGPT | Agent writes workflow patterns to archival memory; retrieves and re-executes them | Semantic search on task description finds matching past workflow |
| Magentic-One (Microsoft) | Orchestrator agent decomposes goal, delegates to specialised sub-agents; workflow structure persists across runs | Lead orchestrator holds workflow plan in core context; sub-agents have specialised tool access |
| Web navigation agents | Agents induce task workflows from past trajectories and store them as reusable programs | Task description triggers retrieval; stored procedure is re-run with new params |
| LEGOMem (arXiv:2510.04851) | Modular multi-agent memory: orchestrator holds full-task memories; sub-agents hold subtask memories | Task decomposition maps task to stored subtask programs |

### The emerging research frontier (2025–2026)

Several papers address procedural memory specifically:

- **"Remember Me, Refine Me" (arXiv:2512.10696):** Dynamic procedural memory that updates
  stored workflows when a better execution is observed.
- **"Learning Hierarchical Procedural Memory" (arXiv:2512.18950):** Hierarchical workflow
  storage from coarse plans down to fine-grained tool-call sequences.
- **PROJECTMEM (arXiv:2606.12329):** A local-first, event-sourced memory and judgment
  layer for AI coding agents — stores procedural decisions and the rationale behind them,
  enabling agents to learn from their own history of coding judgments.

### Procedural memory in coding agents (concrete)

Coding agents (Cursor, Devin, Claude Code) accumulate procedural patterns in a hybrid way:

1. Project-level procedures (build commands, test patterns) in `CLAUDE.md` / project config
2. Session-level procedures in working memory (active task plan)
3. Cross-session procedures as yet partially solved — most production coding agents reset
   procedural state per session and rely on the human to re-specify via config files

**PROJECTMEM** is the first published attempt at truly persistent procedural memory for
coding agents: event-sourced log of coding decisions + a judgment layer that retrieves
relevant past decisions when a similar situation arises.

---

## Storage Layer Reference

| Memory type | Typical backend | Notes |
|---|---|---|
| Working | Redis, in-process RAM | Sub-ms latency; ephemeral by default |
| Episodic | Pinecone, Weaviate, Qdrant, Chroma, pgvector | See [platform comparison](agent-memory-platforms.md) for latency numbers |
| Semantic (structured) | PostgreSQL, SQLite, MongoDB | K/V for preferences; relational for entity profiles |
| Semantic (conceptual) | Vector DB with metadata filters | Hybrid search: dense + keyword |
| Procedural | Vector DB or structured K/V | Indexed by task description; retrieved by similarity |

---

## Cross-References

- [Agent Memory Platforms Compared](agent-memory-platforms.md) — deep-dive on Mem0, Zep,
  Letta, LangChain, OpenAI Memory, and pricing
- [Critiques, Trade-offs, and Failure Modes](agent-memory-critiques.md) — complexity cost,
  memory poisoning, stateless arguments
- [Vector Search Hybrid Retrieval](vector-search-hybrid-retrieval.md) — BM25 + dense
  vector + reranking stack used in episodic retrieval
- [Agentic Engineering Overview](agentic-engineering-overview.md)

## Sources

- MemGPT paper: arXiv:2310.08560 (Packer et al., 2023)
- Letta blog: letta.com/blog/memgpt-and-letta/
- Mem0 paper: arXiv:2504.19413
- MemTier paper: arXiv:2605.03675
- PROJECTMEM: arXiv:2606.12329
- LEGOMem: arXiv:2510.04851
- Redis Agent Memory: redis.io/agent-memory/
- LangChain Memory docs: docs.langchain.com/oss/python/concepts/memory
- Anthropic Claude Code memory analysis: mindstudio.ai/blog/claude-code-source-leak-three-layer-memory-architecture
