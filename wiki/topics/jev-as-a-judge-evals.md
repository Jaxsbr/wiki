# Jev-as-a-Judge (JaaJ) for agent evaluation

> Ingested 2026-09-22 from LangChain blog post "Jev-as-a-Judge for Agent Evals" (D. Shea, S. Roche, Sep 20 2026).
> Source: https://www.langchain.com/blog/jev-agent-evals-langsmith

## Why this matters

Agent evals today choose between two bad deals:

| Evaluator | Strength | Weakness |
|---|---|---|
| **Code-based** | Cheap, fast, deterministic | Narrow scope; can't handle stochastic open-ended outputs |
| **LLM-as-judge** | Semantic, handles open-ended traces | Slow, expensive, non-deterministic; poor foundation for a testing apparatus |

Jev (TypeSafe AI's System One model — see [typesafe-ai-system-one](typesafe-ai-system-one.md)) fits agent evaluation differently: **evaluation is a decision task**, and Jev is designed for decision tasks. Where an LLM judge generates text and then maps that text into a score, Jev evaluates typed questions against structured state and returns typed answers and calibrated probabilities natively.

## The JaaJ pattern

Jev-as-a-Judge replaces the LLM judge step in a standard eval pipeline. Instead of sending the agent trace to a generative model and parsing its text output into a score, you send the trace as **state** to Jev alongside typed evaluation questions.

```text
agent trace (as state)
  + typed eval questions (Choice / Score / Noul)
      → Jev
      → typed verdicts + probabilities + confidence
      → pass/fail logic owns what happens next
```

Multiple atomic questions can be fanned out against the same trace in one call. Example questions for a RAG agent:

- `Score` — "How useful is the final answer to the user's question?" (1–5)
- `Noul` — "Is the final answer grounded in the retrieved evidence?" (0.0–1.0)
- `Choice` — "Which search outcome best describes this run?" (`searched_appropriately` / `searched_unnecessarily` / `failed_to_search`)

For the LLM-as-judge diagram of how this differs, see the LangChain article: an LLM judge generates structured results through text generation; a Jev judge returns structured results natively because the answer space was defined up front.

## Experiment setup (LangChain, Sep 2026)

- **Agent:** weather agent built with Deep Agents (open-source harness by LangChain)
- **Dataset:** 5 weather-request examples in LangSmith, with captured fixed responses
- **Repetitions:** 100 per case per evaluator (same trace, same judge, repeated to measure variance)
- **Human oracle:** a human reviewer labeled each fixed response against the rubric
- **Signals measured:** `quality` (continuous 1–5 Score) and `does_pass` (binary Noul)
- **Judges compared:** Jev, GPT-5.6 Luna, GPT-5.6 Terra, Claude Sonnet 4.6
- **Tooling:** Deep Agents 0.7.15, LangSmith 0.12.6, langchain-typesafe==0.0.1a2, LangSmith Gateway for LLM judges

## Results

### Accuracy (does_pass, binary)

Agreement with the human oracle across 500 decisions (5 cases × 100 repetitions):

| Judge | Oracle agreement |
|---|---|
| **Jev** | **100%** |
| GPT-5.6 Terra | 99.8% |
| GPT-5.6 Luna | 96.4% |
| Claude Sonnet 4.6 | 80.0% |

### Precision (quality score variance)

Lower variance = more repeatable on identical agent behavior. Jev mean per-case variance: `0.0000149`.

| Judge | Relative variance |
|---|---|
| **Jev** | **1× (baseline)** |
| Claude Sonnet 4.6 | 92× higher |
| GPT-5.6 Luna | 433× higher |
| GPT-5.6 Terra | 913× higher |

The article notes this is observational, not causal proof: LLMs optimize for text generation; Jev is optimized for decision output. The lower variance likely follows from the different output path (typed answer vs text-then-parse), but the experiment cannot prove this.

### Latency and cost

| Judge | Avg latency | Cost/call | 1,000 calls |
|---|---|---|---|
| **Jev** | **0.44 s** | **$0.00035** | **$0.34** |
| Claude Sonnet 4.6 | — | — | $28.17 |

TypeSafe AI's headline claims for Jev: **200× faster inference** and **400× lower cost** than comparable LLMs on classification tasks. The LangChain experiment observed this directionally.

## Signal value — the right metric for an evaluator

Cost alone is not enough: a cheap judge that is consistently wrong is worse than no judge. The article defines **signal value**:

```
signal value = binary oracle agreement × binary repeatability
```

Repeatability = probability that two independent calls on the same trace return the same verdict.

This rewards judges that are **both accurate and stable** and penalizes a high-accuracy judge that drifts per call or a perfectly consistent but wrong judge.

## Online evals at scale

For a production agent producing 10,000 traces/day:

- At $28.17 / 1,000 calls, evaluating every trace with Claude costs ~$281/day per evaluator dimension.
- At $0.34 / 1,000 calls, Jev costs ~$3.40/day.

The practical unlock: teams can afford to run **multiple atomic judgments per trace** (not just one binary pass/fail), run more repetitions for confidence-critical decisions, and cover a much larger share of production traces rather than sampling. Tighter feedback loops → faster agent development cycles.

## What this does not change

- **Open-ended evals still need LLMs.** If the evaluation criterion requires prose reasoning, comparing two explanations, or grading a creative output, a generative judge is the right tool.
- **Low cost can amplify consistent errors.** A wrong judge producing 10,000 bad labels per day is worse than an expensive wrong judge covering 100 traces. Human review and judge alignment remain mandatory.
- **Narrow experiment.** Five weather-request tasks do not generalize to all agents. The article explicitly flags this; treat results as directional, not universal.
- **Jev's own jagged edges still apply.** Negation, numeric comparisons, date reasoning, and long lists are documented weaknesses. Design eval questions to avoid them. (See [typesafe-ai-system-one](typesafe-ai-system-one.md) — "Where it is a poor fit".)

## Design guidance for JaaJ evals

1. **Decompose into atomic questions.** One `Score`, one `Noul`, one `Choice` per dimension. Avoid compound questions like "Is this answer correct and well-formatted and grounded?" — split these.
2. **Define the answer space before seeing data.** `Choice` options and `Score` rubric levels should be set when designing the eval, not fit to what the model tends to produce.
3. **Use human oracle labels for at least a sample.** Even a small calibration set (20–50 examples) lets you check oracle agreement before running Jev on thousands of traces.
4. **Measure variance before trusting scores.** Run the same trace through Jev 5–10 times and confirm variance is low for your domain before treating the score as stable signal.
5. **Set confidence thresholds in code, not in the eval question.** Low-confidence results should route to human review; the threshold is a product/risk decision, not a model one.
6. **Use LangSmith (or equivalent) to capture fixed runs.** Replaying the same captured trace across evaluators is the correct comparison methodology; agent behavior or retrieved data changing between runs contaminates results.

## Related pages

- [typesafe-ai-system-one](typesafe-ai-system-one.md) — Jev internals, three primitives, calibration, local reproduction forecast, legal constraints
- [agent-memory-critiques](agent-memory-critiques.md) — overlapping theme: reliable evals for agent behavior are hard; JaaJ is one path to cheaper, more frequent checking
- [agentic-landscape](agentic-landscape.md) — "eval-driven development" as a field direction; JaaJ reduces the cost barrier to that practice
- [context-memory-engineering-overview](context-memory-engineering-overview.md) — retrieval quality is a common eval target; JaaJ can score grounding and relevance

## Sources

- LangChain blog — [Jev-as-a-Judge for Agent Evals](https://www.langchain.com/blog/jev-agent-evals-langsmith), D. Shea and S. Roche, Sep 20 2026
- GitHub reproducibility repo: linked from article (exact URL not captured in snapshot)
- LangSmith dataset and Deep Agents — infrastructure used in the experiment; see article for version pins
- [TypeSafe AI Jev](https://docs.typesafe.ai/) — primary documentation for Jev model details
