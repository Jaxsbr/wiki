# Agent Memory Platforms: Mem0, Zep, Letta, LangChain, OpenAI

> Part of R-010. See also:
> [Memory Engineering Concepts](agent-memory-engineering.md) |
> [Critiques, Trade-offs, and Failure Modes](agent-memory-critiques.md)

Concrete comparison of production memory-as-a-service and agent memory frameworks with
pricing, latency data, and architectural trade-offs.

---

## Platform Overview

| Platform | Approach | Primary differentiator | Self-hostable |
|---|---|---|---|
| **Mem0** | Vector store + LLM extraction router | Fastest ecosystem integration; AWS-exclusive | Yes (Apache 2.0) |
| **Zep (Graphiti)** | Bi-temporal knowledge graph | Temporal reasoning over when facts were true | Yes |
| **Letta (MemGPT)** | OS-inspired tiered memory | Agent manages its own memory via tool calls | Yes (open-source) |
| **LangChain Memory** | Framework-level memory primitives | Embedded in LangChain/LangGraph pipelines | Yes (in-framework) |
| **OpenAI Dreaming V3** | Background synthesis over conversation history | Fully managed; no retrieval call from developer | No (ChatGPT only) |
| **Redis Agent Memory Server** | Redis-native K/V + vector hybrid | Sub-ms working memory; existing Redis infra | Yes |

---

## 1. Mem0

**What it is:** A memory layer that extracts salient facts from conversation turns and
maintains them in a dense vector store. An LLM-based routing controller inspects the
top-k most similar existing memories and classifies each candidate fact as ADD / UPDATE /
DELETE / NOOP.

### Architecture

```
Conversation turn
      │
      ▼
LLM extraction router (GPT-4o or configurable)
      │
      ├─ ADD  → embed + write to vector store
      ├─ UPDATE → overwrite existing entry
      ├─ DELETE → mark deleted
      └─ NOOP  → discard (no write)
           │
           ▼
Vector store (Qdrant / Chroma / Pinecone / 20 others)
           │
           ▼
Retrieval at query time → inject as context
```

Async writes enabled by default since v1.0.0. Graph memory (Mem0g) adds a relational
layer capturing entity relationships at a ~2% accuracy improvement on benchmarks.

### Performance benchmarks

| Benchmark | Score | Notes |
|---|---|---|
| LoCoMo | 92.5 | ~6,956 tokens per query |
| LongMemEval (GPT-4o) | 49.0% | Versus Zep's 63.8% on same benchmark |
| BEAM (1M tokens) | 64.1 | |
| BEAM (10M tokens) | 48.6 | 25% performance drop at 10M scale |
| vs OpenAI memory | +26% LLM-as-a-Judge | Mem0's claimed improvement |
| p95 latency reduction | 91% vs full-context replay | |
| Token cost savings | 90%+ vs full-context baseline | |

### Pricing (2026)

| Tier | Price | Memories | Retrieval calls |
|---|---|---|---|
| Hobby | Free | 10,000/month | 1,000/month |
| Starter | $19/month | 50,000/month | 5,000/month |
| Growth | $79/month | Expanded | Expanded |
| Pro | $249/month | Unlimited + Graph memory | Unlimited |
| Enterprise | Custom | On-premise, SSO, HIPAA BAA | — |

**Note:** Graph memory (entity relationship tracking) is locked to $249/month Pro tier.
Zep offers graph memory at all tiers, which is its main pricing advantage.

### Adoption (as of 2026)

- 41,000 GitHub stars; 14 million downloads
- API calls: 35M (Q1 2025) → 186M (Q3 2025)
- Integrated natively into CrewAI, Flowise, Langflow
- AWS chose Mem0 as exclusive memory provider for its Agent SDK
- $24M Series A raised

### When to choose Mem0

- Need the fastest path to functional memory
- Already using LangChain, CrewAI, or AWS
- Temporal reasoning (when facts changed) is not a requirement
- Want managed cloud with minimal setup (2 minutes to first API call)

---

## 2. Zep (Graphiti)

**What it is:** A temporal knowledge graph engine that synthesises both unstructured
conversational data and structured business data while maintaining historical relationships.
Core innovation: bi-temporal timestamps — both "when was this true in the world" (valid
time) and "when did we record it" (transaction time).

### Architecture

```
Conversation episode
      │
      ▼
Graphiti engine
      │
      ├─ Entity extraction
      ├─ Relationship mapping
      ├─ Temporal tagging (valid_from, valid_to, transaction_time)
      │
      ▼
Knowledge graph (nodes + timestamped edges)
      │
      ▼
Retrieval: graph traversal + BM25 hybrid
```

Zep paper: arXiv:2501.13956 (January 2025).

### Performance benchmarks

| Benchmark | Zep | Mem0 |
|---|---|---|
| LongMemEval (GPT-4o) | **63.8%** | 49.0% |
| Temporal retrieval | **71.2%** | (lower) |
| LOCOMO (disputed) | 75.14% (Zep claim) / 58.44% (Mem0 counter-claim) | 84% (Zep) |
| Deep Memory Retrieval (DMR) | **94.8%** | vs MemGPT's 93.4% |
| p95 graph search | 150 ms (after 2025 optimisation; was 600 ms) | N/A |

Zep scaled 30× in two weeks during a late 2025 traffic event.

### Pricing (2026)

| Tier | Price | Graph memory |
|---|---|---|
| Free | 10,000 credits/month | Yes |
| Flex | ~$25/month | Yes |
| Enterprise | Custom | Yes |

Credits are consumed per episode: episodes up to 350 bytes = 1 credit; each additional
350 bytes = 1 additional credit. Memory, retrieval, storage, and users are unmetered.

**Key advantage over Mem0:** graph memory available at every tier, including free.

### When to choose Zep

- Agents must reason about *when* facts were true, not just what the facts are
- Enterprise use cases with facts that change over time (prices, policies, roles)
- Temporal queries: "What was the user's plan before they downgraded?"
- Native MCP Server integration required (Claude Desktop, Cursor)

---

## 3. Letta (MemGPT)

**What it is:** An open-source stateful agent framework where the agent itself manages
memory via tool calls. The agent reads, writes, and compresses its own memory — analogous
to an OS managing its own RAM and disk.

### Architecture

```
Agent context window (Core Memory)
├── persona block (character-limited string)
├── human block (user preferences, key facts)
└── tool call scratchpad

      │ overflow
      ▼

Recall Memory (conversation history)
   SQLite / PostgreSQL — searchable via conversation_search()

      │ explicit agent write
      ▼

Archival Memory (unlimited external store)
   SQLite / PostgreSQL / Vector DB
   Agent calls: archival_memory_insert(), archival_memory_search()
```

### Write triggers (explicit, agent-initiated)

- `core_memory_replace()` — update always-in-context working memory
- `archival_memory_insert()` — push observation to archival store
- `memory_rethink()` — revise a stored memory block
- Agent decides when to write based on its own reasoning during the pre-response pass

### Benchmark

- 89% on document analysis tasks vs. 63% for GPT-4 baseline with fixed context
- Letta Code (Dec 2025): 42.5% on Terminal-Bench, ranked #1 model-agnostic open-source
  coding agent

### Production stack

- Default: SQLite for all three storage tiers (good for dev)
- Production: PostgreSQL for metadata + recall; Pinecone/Weaviate/Chroma for archival vector search
- Funding: $10M seed (Felicis, Founders Fund, YC); emerged from stealth September 2024

---

## 4. LangChain Memory Types

LangChain provides memory primitives that wrap any LLM chain or agent.

### Memory types and use cases

| Memory class | Storage | Token growth | Best for |
|---|---|---|---|
| `ConversationBufferMemory` | Full history in RAM | Linear — collapses at ~15–25 turns | Short single-session |
| `ConversationBufferWindowMemory(k=N)` | Last N turns only | Constant | Task-oriented bots |
| `ConversationSummaryMemory` | LLM-compressed summary | Sub-linear | Long creative/collaborative sessions |
| `ConversationSummaryBufferMemory` | Recent turns verbatim + summary of older | Bounded | General production |
| `ConversationEntityMemory` | Named entity dict injected at start | Grows with entity count | Personal assistants |
| `VectorStoreRetrieverMemory` | Pinecone/Chroma/etc. | Constant (retrieves top-k) | Long-term episodic |

### Production persistence

Replace the default in-RAM store with:

```python
from langgraph.checkpoint.postgres import PostgresSaver
# or
from langgraph.checkpoint.redis import RedisSaver
```

State is serialised and stored externally, surviving restarts and horizontal scaling.

---

## 5. OpenAI Dreaming V3 (ChatGPT Memory)

**What it is:** A background synthesis architecture that reads across years of past
ChatGPT conversations and maintains a semantic user profile — without developer-facing
retrieval APIs. Fully managed; only available inside ChatGPT products.

### Evolution

| Version | Date | Mechanism |
|---|---|---|
| V1 ("Notepad") | April 2024 | User explicitly tells ChatGPT to remember a fact; frozen until changed |
| V2 ("Dreaming") | April 2025 | Background process curates memories from chat history automatically |
| V3 ("Dreaming V3") | June 2026 | Background synthesis reads all past sessions; memory injected as system prompt prefix at inference time |

### Architecture (V3)

- Memory state maintained in a separate data layer (not in conversation log)
- Injected into system prompt at inference time — every new conversation starts with
  synthesised user context already loaded
- No explicit retrieval call — synthesis runs as a background job between sessions

### Performance (OpenAI internal evaluations)

| Metric | 2025 (V2) | 2026 (V3) |
|---|---|---|
| Factual recall | 67.9% | 82.8% |
| Preference adherence | 55.3% | 71.3% |
| Accuracy over time | 52.2% | 75.1% |

### Developer API

OpenAI has not published a memory API for third-party developers (as of July 2026). The
memory system is internal to ChatGPT. Developers building on the OpenAI API must use
their own memory layer (Mem0, Zep, etc.).

---

## 6. Redis Agent Memory Server

**What it is:** An open-source server by Redis that provides both short-term working
memory and long-term semantic/episodic memory using Redis's built-in vector search
(RediSearch) and K/V capabilities.

### Architecture

- **Short-term (working memory):** Redis HASH with session-scoped TTL; stores conversation
  events as they happen; sub-ms access
- **Long-term (episodic + semantic):** Redis vector index; LLM extraction pulls facts and
  preferences; embeddings stored with metadata filters
- **Hybrid search:** vector similarity + BM25 keyword combined in a single query
- **Promotion:** high-signal facts auto-promoted from short-term to long-term via
  configurable extraction policy

### Latency

Sub-millisecond for working memory (in-process Redis). Vector search adds 1–5 ms at
moderate scale. Eliminates the separate vector database service for teams already running
Redis.

---

## Vector Store Latency Benchmarks

Latency data for the storage backends used by all platforms above.

### Small-to-medium scale (< 10M vectors)

| Database | p50 latency | p99 latency | QPS (throughput) | Recall@10 |
|---|---|---|---|---|
| Weaviate | 1.8 ms | 6.1 ms | 5,800 | 97.2% |
| Pinecone | 2.5 ms | 8 ms | 4,500 | 96.5% |
| ChromaDB | 3 ms | 10 ms | 2,200 | 96.0% |

Source: Datastores.ai cross-database benchmark snapshot (via Sesame Disk).

### Scale-specific data

- **Pinecone at 10M vectors:** p50 = 16 ms, p90 = 21 ms, p99 = 33 ms for dense embeddings
  (Dedicated Read Nodes)
- **Pinecone at 135M vectors (600 QPS):** p50 = 45 ms, p99 = 96 ms (customer-reported)
- **Chroma at 100K vectors (384 dims):** p50 = 20 ms (Cloud)
- **Weaviate at billion-vector scale:** ~123 ms average latency

### HNSW degradation at scale

HNSW recall degrades as vector databases grow because "vector search becomes noisy when
too many vectors are packed close together in N-dimensional space." Tuning `ef_search`
cannot fix this structural problem. Practical implication: agent memory stores should
be pruned and deduplicated, not allowed to grow unboundedly.

### Full-stack latency breakdown (production RAG)

A production RAG system call involves:

| Stage | Typical latency |
|---|---|
| Query encoding (embed) | 10–50 ms |
| Network to vector DB service | 5–100 ms |
| ANN search | 1–50 ms |
| Retrieve and transmit chunks | 5–20 ms |
| **Context formatting (naive)** | **39% of p99 latency** — biggest single factor |

Context formatting dominated p99 in Timescale's PostgreSQL benchmarks, exceeding vector
search and LLM inference combined. A Databricks deployment cut p50 latency 43% and p99
37% simply by reducing mean context from 4,200 to 2,050 tokens via LLMLingua-2
compression (which added only 80–120 ms CPU overhead on the compressor side).

---

## Cross-References

- [Agent Memory Engineering: Concepts and Examples](agent-memory-engineering.md)
- [Critiques, Trade-offs, and Failure Modes](agent-memory-critiques.md)
- [Vector Search Hybrid Retrieval](vector-search-hybrid-retrieval.md)

## Sources

- Mem0 paper: arXiv:2504.19413
- Mem0 State of AI Agent Memory 2026: mem0.ai/blog/state-of-ai-agent-memory-2026
- Zep paper: arXiv:2501.13956
- Zep vs Mem0 comparison: atlan.com/know/zep-vs-mem0/
- MemGPT paper: arXiv:2310.08560
- Letta blog: letta.com/blog/memgpt-and-letta/
- OpenAI Dreaming V3: openai.com/index/chatgpt-memory-dreaming/
- LangChain Memory docs: docs.langchain.com/oss/python/concepts/memory
- Vector store benchmarks: sesamedisk.com/vector-databases-benchmarks-performance/
- RAG latency analysis: ragaboutit.com/9-rag-context-tricks-that-cut-latency-by-43/
- Redis Agent Memory: redis.io/agent-memory/
