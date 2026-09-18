# Vector Search — Beyond Cosine: Hybrid Retrieval Techniques

> Source: [InfoQ — Why Vector Search Alone Isn't Enough](/sources/infoq-vector-search-hybrid-retrieval-rag.txt) (Jun 2026, Aaditya Chauhan)

## Why Vector-Only Search Fails

Embedding models convert text into fixed-dimensional vectors capturing semantic meaning.
This is powerful for conceptual similarity, but systematically weak at distinguishing:
- Specific identifiers (error codes, version numbers, feature flag names)
- Operations that differ in one keyword ("enable" vs "disable")

Two nearly-identical documents produce nearly-identical vectors — ranking between them
becomes unreliable noise, not signal.

## Three Query Categories

| Type | Example | Best retriever |
|---|---|---|
| **Semantic** | "protocol when a region goes offline" | Vector search |
| **Exact-match (lexical)** | `ERR_PAYMENT_GATEWAY_TIMEOUT` | [BM25](../concepts/bm25.md) |
| **Hybrid** | "rollback runbook for v3.2 deployment" | Both |

Production query distributions are dominated by the hybrid type — most real queries
combine semantic intent with specific tokens that demand exact matching.

## The Production Retrieval Stack

```
Query
  ├─ BM25 retriever  ─────┐
  └─ Vector retriever ────┤ RRF fusion → top-N candidates → Cross-encoder reranker → top-K → LLM
```

Three stages, each addressing a distinct gap:

1. **[BM25](../concepts/bm25.md)** — exact/lexical precision via probabilistic keyword scoring
2. **[RRF](../concepts/reciprocal-rank-fusion.md)** — rank-based fusion of BM25 and vector lists, no score normalisation needed
3. **[Cross-encoder reranking](../concepts/cross-encoder-reranking.md)** — fine-grained relevance on the small candidate set

## Elasticsearch / OpenSearch Implementation

Both engines support native hybrid retrieval (Elasticsearch 8.13+). A single query
runs both retrievers and fuses with RRF server-side — no application-level merging.

**Index mapping:**
```json
{
  "mappings": {
    "properties": {
      "content": { "type": "text", "analyzer": "standard" },
      "content_vector": { "type": "dense_vector", "dims": 768, "index": true, "similarity": "cosine" }
    }
  }
}
```

**Hybrid query:**
```json
{
  "retriever": {
    "rrf": {
      "retrievers": [
        { "standard": { "query": { "match": { "content": "<query>" } } } },
        { "knn": { "field": "content_vector", "query_vector": [...], "k": 50, "num_candidates": 100 } }
      ],
      "rank_constant": 60
    }
  }
}
```

## Tuning Parameters

| Parameter | Default | Lower → | Higher → |
|---|---|---|---|
| `rank_constant` (k in RRF) | 60 | Favour top-ranked hits (precision) | Flatten decay, favour consensus (recall) |
| `num_candidates` | 100 | Faster, lower recall | Slower, higher recall |

- Lower k (20–30): useful when BM25 hits are highly precise (error codes, version strings)
- Higher k (80–100): useful when you want documents appearing in both lists to win

## Key Takeaways

- Embeddings are approximation engines — strong on meaning, weak on identity
- BM25 and vector search have complementary failure modes; neither alone is sufficient
- RRF fuses the two without requiring score normalisation
- A cross-encoder reranking stage on 20–50 candidates adds meaningful relevance for the cost of ~100 ms on GPU
- This layered pattern is convergent across production RAG systems (Perplexity, Glean, etc.)

## See Also

- [BM25](../concepts/bm25.md)
- [Reciprocal Rank Fusion (RRF)](../concepts/reciprocal-rank-fusion.md)
- [Cross-Encoder Reranking](../concepts/cross-encoder-reranking.md)
