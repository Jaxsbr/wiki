# Cross-Encoder Reranking

A reranking stage applied *after* first-stage retrieval ([BM25](bm25.md) + vector + [RRF](reciprocal-rank-fusion.md))
to improve final relevance on a small candidate set.

## How It Differs from Bi-Encoders

| | Bi-encoder (standard embeddings) | Cross-encoder |
|---|---|---|
| Query & document | Encoded **independently** | Encoded **jointly** in one forward pass |
| Token interaction | None — only via cosine distance | Full token-level attention between query and document |
| Speed | Fast — pre-compute document vectors | Slow — one forward pass per query-document pair |
| Relevance quality | Lower | Consistently higher |

Because cross-encoders process the query-document pair together, they can model nuanced
relationships that independently encoded vectors cannot capture (e.g., "rollback" vs "rollout"
in context).

## Practical Pattern

1. [RRF](reciprocal-rank-fusion.md) retrieves **20–50 candidates**
2. Pass all candidates to cross-encoder for scoring
3. Re-sort by cross-encoder score → final top-K → LLM

## Latency

Cross-encoders are too slow for first-stage retrieval (full corpus × every query is infeasible),
but re-ranking 20–50 candidates typically takes **< 100 ms on GPU** — acceptable for most
production latencies.

## Model

A common lightweight choice: `ms-marco-MiniLM-L-6-v2`
- Trained on MS MARCO passage ranking
- Even small models provide meaningful in-domain gains
- Larger models show the largest gains on out-of-domain queries

## When to Add This Stage

Worth the investment when:
- Per-percentage-point relevance improvements matter (enterprise search, high-stakes RAG)
- Candidate set after RRF is ≤ 50 documents
- A GPU is available (CPU inference is feasible but slower)

Cross-encoders consistently outperform bi-encoders on standard benchmarks (BEIR) and
represent the standard third stage in production retrieval stacks.

## See Also

- [Reciprocal Rank Fusion](reciprocal-rank-fusion.md)
- [BM25](bm25.md)
- [Vector Search — Hybrid Retrieval](../topics/vector-search-hybrid-retrieval.md)
