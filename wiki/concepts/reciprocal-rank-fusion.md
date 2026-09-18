# Reciprocal Rank Fusion (RRF)

RRF is a rank-combination algorithm that fuses multiple ranked lists into one without requiring
score normalisation. It operates on rank position alone, making it ideal for combining
[BM25](bm25.md) and vector search, whose raw scores live on incompatible scales.

## Formula

```
RRF_Score(d) = Σ  1 / (k + rank_r(d))
               r
```

- `k` — smoothing constant (default **60**, from Cormack, Clarke & Buettcher 2009)
- `rank_r(d)` — rank of document `d` in retriever `r`'s list
- Documents absent from a retriever's top-K contribute **0** from that retriever

### Example contributions

| Rank | Contribution (k=60) |
|---|---|
| 1 | 1/61 ≈ 0.0164 |
| 10 | 1/70 ≈ 0.0143 |
| 50 | 1/110 ≈ 0.0091 |
| absent | 0 |

## Core Behaviour

**RRF rewards consensus.** A document ranked highly by *both* retrievers accumulates
contributions from each and rises above documents that only one retriever finds.
A document at rank 1 in BM25 but absent from vector search still scores below a document
at rank 5 in both.

## Why No Score Normalisation?

BM25 scores are unbounded. Cosine similarities are in [−1, 1]. Calibrating a meaningful
weighted sum between them is query-dependent and impractical at scale. RRF sidesteps
this entirely — it never looks at raw scores.

## Tuning the Rank Constant (k)

| k value | Effect |
|---|---|
| 20–30 | Steeper decay — top-ranked results dominate; prefer when BM25 hits are very precise |
| 60 | Default; good for general-purpose retrieval |
| 80–100 | Flatter decay — consensus across both lists matters more than rank-1 hits |

## Honest Limitations

On pure exact-match queries (e.g., an error code), BM25 alone produces a cleaner top-K
than hybrid+RRF. RRF's runner-up slots may be filled by semantically adjacent but
identifier-distinct documents (e.g., the wrong error-code runbook) rather than unrelated
documents the LLM can safely ignore. Hybrid retrieval is a distribution-level improvement,
not a per-query strict improvement.

## See Also

- [BM25](bm25.md)
- [Cross-Encoder Reranking](cross-encoder-reranking.md) — the stage that follows RRF
- [Vector Search — Hybrid Retrieval](../topics/vector-search-hybrid-retrieval.md)
