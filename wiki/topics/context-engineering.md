# Context Engineering — Techniques and Production Examples

> Part of R-010. See hub: [Context and Memory Engineering Overview](context-memory-engineering-overview.md)

Context engineering is the discipline of designing what enters an LLM's active context window for a specific inference call — what to include, how to compress it, where to place it, and what to discard. Every decision has measurable impact on cost, latency, and task quality.

---

## The Four Core Techniques

### 1. Selective Inclusion
Not everything available should enter the context. A database query returning hundreds of rows, a web search returning five complete articles, verbose executor logs — all of these bloat the window and reduce reasoning quality before the token limit is reached.

**The decision**: what gets included verbatim, what gets compressed to key facts, and what gets dropped entirely. This is a deliberate design choice, not a default.

**Production example — Claude Code (Anthropic):**
- Uses **Just-In-Time (JIT) retrieval**: lightweight identifiers (file paths, search queries) are included upfront; actual content is loaded dynamically via `glob`, `grep`, and file-read tools at runtime. Nothing enters context speculatively.
- **Sub-agent compaction**: when reading large codebases, Claude Code delegates exploration to a sub-agent that burns its own context and returns a 1,000–2,000 token condensed summary. The main agent's context is preserved for implementation.
- **CLAUDE.md drop-in**: skill names and descriptions only upfront; full skill content loaded on-demand.

**Production example — LangGraph:**
Documented that agent performance **degrades beyond 5–10 tools exposed per agent**. Over-inclusion of tool definitions is a recognized anti-pattern — more tools means more context noise, not more capability.

---

### 2. Structural Placement (The Lost-in-the-Middle Effect)
Where information sits in the window determines how reliably the model uses it. Models attend more strongly to content at the **beginning and end** of long contexts; material in the middle receives significantly less weight.

**The evidence:**
- **Liu et al., TACL 2024** — foundational paper on multi-document QA and key-value retrieval. Performance peaks at beginning and end; significant drop when relevant info is in the middle.
- **Chroma 2025 Context Rot Report** — tested 18 frontier models (GPT-4.1, Claude 4, Gemini 2.5, Qwen3). Finding: every model degraded with increasing context. Performance follows a **U-shaped curve**. Even models with 1M+ token windows exhibit the effect.
- **MIT/Google Cloud AI (2024)** — traced the effect to a positional attention bias creating a U-curve from training dynamics.
- **arxiv 2510.10276 (2025)** — reframes lost-in-the-middle as an **emergent property** mirroring the human serial position effect (Murdock, 1962). Not a fixable architectural bug — arises from training itself.

**Practical placement rules:**
1. Hard constraints and task-critical instructions → **beginning** of context
2. Retrieved information most relevant to the current step → **near the end**
3. Current user query or task → **immediately after retrieved context**, close to the generation point
4. Low-priority background → middle (or compress/drop it)

**Counterintuitive finding (Chroma 2025):** Models performed *worse* when the retrieved documents preserved logical narrative flow. Shuffling the haystack *improved* accuracy — models use semantic coherence cues in unexpected ways that can backfire.

---

### 3. Compression on Arrival
Tool outputs should be compressed **after a call returns, not after the window fills**. A raw API response carrying 3,000 tokens, of which the agent needs 150, should be summarized before it re-enters context for the next step.

**Production example — GitHub Copilot (June 2026):**
- Copilot CLI automatically compacts conversation context when reaching **~80% of window capacity**.
- Summarizes older messages while keeping recent turns verbatim — a tier-aware rolling summarization pattern.

**Production example — Microsoft Expense Agent (arxiv 2606.10209):**
Four context configurations tested on GPT-5 for hotel expense itemization across 50 tasks:

| Config | Strategy | Task Completion | Tokens Used |
|---|---|---|---|
| C1 | No user model (ablation) | 8.0% | — |
| C2 | Full history retained | 71.0% | 1,481K |
| C3 | Rolling window (last 5 pairs) | 79.0% | — |
| **C4** | **Window + automated summarization** | **91.6%** | **553K** |

C4 vs C2: **62.7% fewer tokens**, **60.2% faster** (5.79 vs 14.56 hours), premature terminations **reduced 6×**.

**Compression tools:**

#### LLMLingua / LLMLingua-2 (Microsoft Research, arxiv 2403.12968)
Uses a small LLM to score token importance and selectively remove low-importance tokens.

Benchmarks:
- Up to **20× compression** maintaining 90%+ performance on reasoning tasks (GSM8K)
- **3–6× faster** than original LLMLingua
- End-to-end inference speedup: **1.6–2.9×** at 2–5× compression ratios
- At 5× compression on single-doc QA: 16.1% performance drop
- At 20× compression on GSM8K: EM scores decrease by **less than 2 points**

**Critical failure mode**: compression exceeding **30% breaks structured agent action tasks** (web shopping, ACON evaluation) completely. Format loss is catastrophic for agents even when semantic meaning is preserved. Use carefully for action-taking agents.

#### ACON (Microsoft Research, arxiv 2510.00615)
Designed specifically for long-horizon LLM agents.
- Lowers peak memory usage by **26–54%**
- Preserves **95% of teacher model accuracy** across benchmarks
- Outperforms LLMLingua-2 at equivalent compression ratios for multi-step tasks

#### AttentionRAG (2025, arxiv 2503.10720)
Attention-guided context pruning — uses the model's own attention as the salience signal.
- **18% higher score** than best LLMLingua model on BABILong 1k benchmark

#### Simple observation masking (arxiv 2508.21433 — "The Complexity Trap")
A notable contrarian result: **basic rule-based removal of irrelevant observations performs comparably to LLM summarization** for agent context management. Complex AI-driven summarization pipelines are not always necessary. This is important — it suggests many teams are over-engineering compression when simpler heuristics suffice.

---

### 4. Conversation History Management
Conversation history grows faster than any other context component. For long-running agents, carrying full history into every call makes each inference more expensive and less reliable.

**Strategies:**
- **Rolling window** — keep the last N turns verbatim; drop older ones
- **Hierarchical summarization** — compress older turns progressively; recent turns stay verbatim
- **Structured state extraction** — extract typed, validated facts from conversation rather than embedding raw chunks. Produces more consistent results for facts that must be applied reliably across sessions.

**Warning — recursive summarization degradation:** Sourcegraph's Codex team documented that multi-round summarizations ("summaries of summaries") measurably distort earlier reasoning. Apply summarization at defined intervals, not recursively across already-summarized content.

---

## Production System Case Studies

### Claude Code (Anthropic) — Grep-first, No Vector DB
Anthropic's flagship coding agent uses **no vector database, no embeddings**. Its retrieval is: files on disk + markdown index + lexical search (grep/ripgrep) + smart compaction.

- `context editing` (tool result clearing): when approaching token limits, stale tool calls are cleared. A 100-turn web search evaluation showed **84% token reduction** while enabling workflows that would otherwise hit context exhaustion.
- Structural note-taking: agents write NOTES.md files outside the context window and retrieve them on demand — demonstrated across thousands of Pokémon game steps as a proxy for long-horizon task tracking.

This is not a resource-constrained choice. Anthropic has the resources for a vector pipeline. They chose lexical retrieval. The "Is Grep All You Need?" paper (arxiv 2605.15184) evaluated this: Claude Code + grep achieves 76.7% vs vector 75.0% on CodeScaleBench. Narrow margin — but grep wins.

### Sourcegraph / Cody — Structured Graph Retrieval
Uses SCIP (Scalable Code Intelligence Protocol), a Protobuf-based graph, instead of text embeddings. MCP server exposes 13 tools including symbol resolution and dependency tracing.

CodeScaleBench results comparing local grep vs. Sourcegraph MCP:
- File recall: 0.127 → **0.277**
- Precision@5: 0.140 → **0.478**
- F1@5: 0.099 → **0.262**

One Kubernetes monorepo task that exceeded baseline's 2-hour timeout completed in **89 seconds**. A cross-file refactor: 96 tool calls / 84 minutes → **5 tool calls / 4.4 minutes**.

**Documented failure:** recursive summarization drift — "summaries of summaries" distorted earlier reasoning as sessions extended.

### Cursor IDE — Full Repository Indexing
- Full repository indexing with embeddings stored in Turbopuffer (not source code). Hashed file structures track changes incrementally.
- Separate **Inline Tab model**: sub-second completion model avoids burning large-model context for trivial completions.
- `@Codebase`, `@Docs`, `@Git` selectors pull dependency graphs minimizing hallucinations from cross-module references.

### GitHub Copilot (June 2026) — Tier-aware Compaction
Supports 1M-token context windows. Compaction at 80% capacity with STREAM-style tier-aware rolling summarization. `@workspace` for conceptual questions; `#codebase` for file-modifying tasks.

**Known issue**: developers report token-limit failures on Copilot Cloud Agent for complex multi-repository tasks. Large windows do not eliminate the need for context management.

### LangChain / LangGraph — Formalized Strategies
LangChain's four context operations (mid-2025 documentation):
- **Write**: scratchpad, files, external memory stores
- **Select**: RAG, memories, tool descriptions (embedding search, AST parsing, grep, knowledge graphs)
- **Compress**: summarization and fact distillation pipelines
- **Isolate**: separate memory stores by topic/scope

LangGraph built-in: thread-scoped and long-term memory with checkpointing. Research finding: performance degrades beyond 5–10 tools per agent — over-provision of tools is a recognized anti-pattern. "Most agentic systems in production are a combination of workflows and agents" with explicit state machines managing what enters context at each step.

---

## Retrieval-Aware Context Assembly Pattern

The correct architecture treats retrieval not as a separate system but as the **first step in context construction**:

```python
async def retrieve_for_step(self, step: AgentStep, max_tokens: int) -> str:
    candidates = await self.memory.search(
        query=step.retrieval_query,
        max_results=10,
        filters={
            "trust_level": {"gte": 0.5},
            "expires_at": {"gt": datetime.now()}
        }
    )
    selected = []
    used = 0
    for entry in sorted(candidates, key=lambda e: e.relevance_score, reverse=True):
        cost = self.token_count(entry.content)
        if used + cost > max_tokens:
            break
        selected.append(entry.content)
        used += cost
    return "\n\n".join(selected)
```

Key idea: retrieval must operate **within context constraints**, not assume unlimited space downstream. Allocate token budgets per context component *before* retrieval — not after.

---

## The Real Cost of Bad Context Engineering

- Multi-agent architectures use **5–30× more tokens** than standard chatbot queries (Anthropic, via LangChain)
- Re-sent context represents **62% of total agent inference bills** (Stanford Digital Economy Lab)
- A Reflexion loop running 10 cycles consumes ~50× the tokens of a single linear pass
- **65% of enterprise agent failures** attributed to context drift or memory loss during multi-step reasoning (2025 enterprise analysis)
- Healthcare company: costs jumped from $12,000 to $68,000/month in six weeks due to retrieval faults causing additional agent steps

A 10× token overhead is business-critical at scale. The failure mode is agent failure, not just wasted tokens.

---

## Sources
- Anthropic Engineering: "Effective Context Engineering for AI Agents"
- MachineLearningMastery source: `sources/context-memory-engineering-agentic-ai.txt`
- arxiv 2606.10209 — Less Context, Better Agents (Microsoft Expense Agent benchmark)
- arxiv 2403.12968 — LLMLingua-2
- arxiv 2510.00615 — ACON
- arxiv 2503.10720 — AttentionRAG
- arxiv 2508.21433 — Complexity Trap (simple masking = LLM summarization)
- arxiv 2510.10276 — Lost-in-middle as emergent property
- arxiv 2605.15184 — "Is Grep All You Need?"
- Chroma Context Rot Study (2025): trychroma.com/research/context-rot
- Sourcegraph Context Engineering Blog
- LangChain Context Engineering for Agents
- GitHub Copilot Changelog June 2026
