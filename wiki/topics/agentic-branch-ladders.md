# Agentic Engineering — Branch Ladders (10 Orthogonal Skills)

> Part of R-009. Engineers are jagged: a real practitioner is at different rungs across these 10 branches. Self-locate per branch, not as one scalar.

## Overview

The branches are the orthogonal skills that make up a tier. A real engineer is **jagged** across them — e.g., Tier 4 on Tooling, Tier 2 on Trust Calibration. Branches let you self-locate with precision and identify your actual next move, independent of your "tier."

**Three gating branches** cap the tier verdict (Branches 3, 5, 6). Strength on any other branch enriches the *description* but cannot raise the *tier*. See [Fluency Instrument](agentic-fluency-instrument.md) for the gating rule.

**The most invisible failure:** high prompting skill (R3–R4 on Branch 1) with near-zero delegation skill (R1 on Branch 3) — the "Prescriptive-Prose Veteran" who feels advanced and is stuck at Tier 3. If you are at R4 on Branch 1 and R1 on Branch 3, you are still an Agent Director (T3) regardless of your overall impressiveness.

**Both poles everywhere relevant:** wherever a branch has a "too little" failure (over-boxing, distrust-all, do-it-all-myself), its mirror exists (under-verification, blanket-trust, delegate-everything). Maturity is calibration between poles, not maximizing one direction.

---

## Branch 1 — Prompting Craft *(Transition 1; does not gate the tier)*

**Rung 1 (→T0/T1):** "My prompts are vague one-liners; when the output is wrong I re-roll rather than refine. I can't reliably describe why one prompt worked better than another."

**Rung 2 (→T2):** "I write a single clear instruction and usually get usable output. I know how to include key constraints and what the output format should be."

**Rung 3 (→T2/T3):** "I decompose complex requests, add few-shot examples, and specify output formats explicitly. My prompts reliably produce usable output in 1–2 turns."

**Rung 4 (→T3):** "I maintain reusable prompt patterns. I can refine prompts based on failure analysis. I produce reliable usable output in 1–2 turns across diverse task types."

*Maturity signal:* reliable usable output in 1–2 turns. Note: R4 here does not indicate T4 or above — Branch 1 does not gate the tier. The most common trap: treating R4 on this branch as evidence of overall high maturity.

---

## Branch 2 — Intent & Spec Writing

**Rung 1 (→T2):** "My briefs look like implementation specs: numbered steps, 'step 1: open file X, step 2: add function Y.' I correct the agent when it deviates from my plan."

**Rung 2 (→T3):** "I state a goal, but I surround it with so much hand-holding ('and then make sure to…', 'don't forget to…') that the agent has little freedom. I'm describing my design in prose."

**Rung 3 (→T4):** "My briefs state the goal + constraints + 2–3 examples of what 'done' looks like. The agent can choose its approach within those bounds."

**Rung 4 (→T4/T5):** "I write full acceptance criteria and a definition of done *before* the agent starts. I can state when the task is done before it begins, and the agent's output is evaluated against that standard, not against my mental plan."

*Maturity signal:* you can state when the task is *done* before it begins.

---

## Branch 3 — Bounds-Setting & Delegation *(T2-GATE — carries the orthogonal shift)*

This branch gates the tier verdict. See [The Orthogonal Shift](agentic-orthogonal-shift.md).

**Rung 1 (→T3) — over-boxing pole:** "I write step-by-step scripts. I correct any deviation back to my exact plan. My prompts look like implementation specs. The agent is a faster keyboard for a plan I already held."

**Rung 2 (→T3/T4) — under-specifying pole (opposite immaturity):** "'Build the thing' — I give the agent a vague goal and let it range without constraints. I'm surprised when it goes wrong. I haven't specified what it may/may-not touch."

**Rung 3 (→T4) — calibrated bounds (the crossing):** "My prompt states: outcome to achieve, what the agent may NOT touch, what I prefer but won't mandate, and how I'll judge done. The agent can choose the approach within those bounds and often surprises me *usefully* because I left it room."

**Rung 4 (→T5):** "I tune bounds per task risk and agent reliability. High-stakes tasks get tighter bounds + explicit blast-radius spec; well-scoped boilerplate tasks get wide bounds. I have a mental model of which tasks earn R3 bounds and which need R4 precision."

*Maturity signal:* the agent surprises you *usefully* because you left it room. **Both R1 (over-boxing) and R2 (under-specifying) are failures; R3 is the crossing.**

---

## Branch 4 — Trust Calibration

**Rung 1 (→T2/T3) — distrust pole:** "I re-read every line of generated code. I cannot ship anything I haven't read. I'd feel irresponsible merging un-read output." OR the mirror: "I trust the agent's output wholesale; if it declared done, it's done."

**Rung 2 (→T3):** "I skim the diff and run the app once. If it looks plausible and the basic path works, I ship. I don't have a systematic check; I rely on feel."

**Rung 3 (→T4):** "I calibrate per task type: boilerplate changes I review lightly; production auth code or data-mutation logic I guard hard. I know which work I'd hand off blind and which I must guard."

**Rung 4 (→T5):** "I maintain an explicit model of trust per task category, based on agent reliability data from past runs. I have explicit stakes/blast-radius gates: tasks above blast-radius threshold X require additional verification Y."

*Maturity signal:* you know exactly which work to hand off blind and which to guard. **Both extremes are failures — calibration, not amount; more checking is not better.**

---

## Branch 5 — Verification, Eval & Agent-QA *(T2-GATE — carries the testing transformation)*

This branch gates the tier verdict.

**Rung 1 (→T2):** "I verify by running the app and clicking through the paths. I review code by reading it. My confidence comes from having read what the agent wrote."

**Rung 2 (→T3):** "I do ad-hoc spot checks: run the main path, look at the most changed files, run the tests if they exist. I rely on feel for whether it's right."

**Rung 3 (→T4) — the anchor level:** "I directed the agent to write tests. I review the *tests* more carefully than the implementation. CI/types pass → I'm satisfied. I verified by evidence, not by having read every line."

**Rung 4 (→T5):** "I have systematic eval suites and/or eval harnesses that *gate* output before merge. I use LLM-as-judge where appropriate, with human review of low-confidence slices. When a delegated run fails, I can root-cause whether it was a brief problem, a context problem, or a tool problem."

*Maturity signal:* you verify by evidence; your checks catch the failure class that matters; you recover failed runs without flailing. *Note: hand-testing every path is an R1 signal, not a high-rigor signal. The anchor is agent-driven tests you reviewed harder than the code.*

---

## Branch 6 — Parallel Orchestration / Multi-Agent Throughput *(T2-GATE; includes cost lens)*

This branch gates the tier verdict. Degenerate at T0–T1 — pre-emergent.

**Rung 1 (→T3):** "I run one agent at a time and watch it work. I feel uncomfortable starting other work while an agent is running. I'd lose track if more than one agent were active."

**Rung 2 (→T4):** "I run one agent unattended while I do other work. I come back to evidence (tests, CI, diff) at breakpoints, not a running transcript."

**Rung 3 (→T4/T5):** "I run a few agents in parallel (e.g., different features on separate branches or worktrees). I manually merge and check for conflicts. The main constraint is my review bandwidth, not the agent count."

**Rung 4 (→T5):** "I routinely manage a fleet of agents: I decompose goals into parallelizable units, queue tasks, and have integration discipline (merges go through a verification gate). I track cost-per-task and have a stop rule for when adding more parallel agents stops paying off. I onboard teammates into my harness."

*Maturity signal:* throughput scales without quality or budget collapse; you delegate only what's worth delegating; you have a judged ROI per delegation.

---

## Branch 7 — Tooling, Harness & Model Selection *(MCP, sub-agents, skills, background runs)*

**Rung 1 (→T1/T2):** "I use a stock chat interface with no configuration. I have no project memory, no rules files, no customization."

**Rung 2 (→T3):** "I have a configured agent with project memory (CLAUDE.md, rules files, or equivalent). The agent knows my project structure and conventions."

**Rung 3 (→T4/T5):** "I have custom skills, sub-agents, or MCP servers that extend the agent's capabilities. I've set up background or scheduled agent runs for recurring tasks."

**Rung 4 (→T5):** "I have reusable, composable infrastructure that compounds: each skill/sub-agent I build makes the next delegation cheaper. I also have a model/agent/interface selection model — I know which interface (CLI vs. IDE vs. background runner), which agent type, and which model tier fits which job."

*Maturity signal:* each delegation makes the next one cheaper.

*Note: this branch has a distinct facet for model/agent/interface selection, separate from harness-building. R4 includes both.*

---

## Branch 8 — Context Engineering

**Rung 1 (→T2):** "I dump everything I think might be relevant into the prompt (or nothing, and hope). I'm surprised when the agent lacks context I didn't mention."

**Rung 2 (→T3):** "I attach relevant files by hand — the ones I know matter for the current task. I've started maintaining a project-level context file."

**Rung 3 (→T4):** "I maintain curated project memory and conventions that agents load automatically. I have a model for what context each task type needs."

**Rung 4 (→T5):** "I manage context deliberately across agents: scoped, budgeted, layered. I know the cost of each context source and prune accordingly. Agents rarely fail for context reasons I control."

*Maturity signal:* agents rarely fail for context reasons you control. *Context engineering = curating the optimal token set across a multi-turn agent — a superset of single-turn prompt engineering.*

---

## Branch 9 — Risk, Security & Human↔Agent Coordination *(Tier 4+ only; degenerate below T4)*

Pre-emergent below T4 — these signals are not meaningful at T0–T3.

**Rung 1 (→T3):** "I have no explicit risk posture for agent runs. I haven't thought about what the agent is allowed to touch or what blast-radius means for my specific tasks."

**Rung 2 (→T4):** "I handle secrets and permissioning ad-hoc: I know not to give the agent prod credentials, but I don't have a systematic policy. I sometimes review agent output with a colleague for risky changes."

**Rung 3 (→T4/T5):** "I have permissioning and blast-radius discipline: explicit policies for what agents may touch (files, APIs, environments), secrets management, and a review protocol for changes above a risk threshold. I sometimes review output with teammates."

**Rung 4 (→T5/T6):** "I run a shared harness: I've onboarded teammates with bounded review responsibilities. We coordinate humans + agents toward shared outcomes. Agent safety policies are codified and enforced consistently across the team."

*Maturity signal:* you safely scale agent autonomy across prod and across a team.

---

## Branch 10 — Product Sense & Taste, incl. Do-It-vs-Delegate *(meta + frontier; two sub-ladders)*

This branch has two sub-ladders that run in parallel.

### Sub-ladder A: Product / Taste

**Rung 1 (→T2/T3):** "I build what I'm told. My measure of success is 'it does what the ticket says.'"

**Rung 2 (→T4):** "I notice UX and quality issues in agent output and flag or fix them. I have opinions about *how* things should be built."

**Rung 3 (→T5):** "I form and defend opinions on *what* to build and what 'good' means. I push back when a spec seems wrong, even under time pressure."

**Rung 4 (→T6):** "I own product judgment end-to-end. I can tell genuinely good output from impressive-looking output. I set the bar for 'good' before evaluating agent work, not after."

### Sub-ladder B: Do-It-vs-Delegate

**Rung 1 (→T2/T3):** "I always do it myself. The idea of handing a task to an agent feels unsafe or unclear." OR the mirror: "I delegate everything — I hand tasks to agents regardless of whether they have traction on the domain."

**Rung 2 (→T3/T4):** "I have rough rules of thumb: CRUD → delegate; novel algorithms → do it myself. But I apply them uniformly rather than per-situation."

**Rung 3 (→T5):** "I make situational do-vs-delegate calls, weighing: task type (agent-tractable or not?), stakes (blast radius if wrong), verification cost, and learning value (is this a domain I need to stay sharp in?)."

**Rung 4 (→T6):** "My do-vs-delegate call is fast and usually right. I can articulate *why* in real-time. I deliberately drop to hands-on work in novel/ambiguous domains where the agent has no traction — and I can distinguish that strategic regression from fear-driven Tier-0 avoidance."

*Maturity signal:* the do-vs-delegate decision is instant and usually right. **Distinguish strategic "do it myself" from Tier-0 fear-driven avoidance — the same hands-on behavior means opposite things.**

---

## Jaggedness Grid

Branch activation by tier — which branches are pre-emergent (no meaningful signal) at each level:

| Branch | T0 | T1 | T2 | T3 | T4 | T5 | T6 |
|--------|----|----|----|----|----|----|-----|
| 1 — Prompting Craft | pre | active | active | active | — | — | — |
| 2 — Intent & Spec Writing | pre | pre | active | active | active | active | active |
| 3 — Bounds-Setting (GATE) | pre | pre | pre | active | **gates** | active | active |
| 4 — Trust Calibration | pre | pre | active | active | active | active | active |
| 5 — Verification (GATE) | pre | pre | pre | active | **gates** | active | active |
| 6 — Parallel Orchestration (GATE) | pre | pre | pre | active | **gates** | active | active |
| 7 — Tooling & Harness | pre | active | active | active | active | active | active |
| 8 — Context Engineering | pre | pre | active | active | active | active | active |
| 9 — Risk & Security | pre | pre | pre | pre | active | active | active |
| 10A — Product Taste | pre | pre | active | active | active | active | active |
| 10B — Do-It-vs-Delegate | pre | pre | active | active | active | active | active |

**Key callouts:**

- **Branches 6 and 9** are pre-emergent at T0–T2 (no meaningful signal below T3 for Branch 6; below T4 for Branch 9).
- **Branch 10/B** is pre-emergent at T0–T1; activates at T2.
- **Branch 3** is the earliest gating branch and operationalizes the T3→T4 crossing — the orthogonal shift. An engineer stuck at R1 or R2 on Branch 3 cannot reach T4 regardless of strength on other branches.
- **Branches 3, 5, 6** together constitute the three gating branches. All three must clear R3 before a T4 verdict is warranted.
- **Branch 1** activates earliest and fades — its rungs top out at T3. Being strong here is a baseline, not a differentiator above T3.

---

## See Also

- [Tier Spine](agentic-tier-spine.md) — how branches roll up to trunk tiers
- [Orthogonal Shift](agentic-orthogonal-shift.md) — the T3→T4 boundary that Branches 3, 5, 6 operationalize
- [Fluency Instrument](agentic-fluency-instrument.md) — the 6-axis gating rule
- [Skew Profiles](agentic-skew-profiles.md) — named patterns across branches

---

## Sources

- Addy Osmani, "Agentic Engineering" (Feb 2026)
- arXiv 2506.12347, Kumar et al., Microsoft (2025)
- arXiv 2506.12469, Feng, McDonald, Zhang / UW (2025)
- Philipp Schmid, "Inner Loop vs Outer Loop" — inner/outer loop distinction informs Branch 7
- Thoughtworks, "Supervisory Engineering" — middle loop informs Branch 9
