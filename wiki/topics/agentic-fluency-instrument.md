# Agentic Engineering — Fluency Instrument (6 Axes + Self-Assessment)

> Part of R-009. The self-location tool for this skill framework. Six axes, a deterministic gating rule, a 24-item retrospective questionnaire, and three worked examples. The headline output is always a six-value vector, never a scalar.

**The core principle:** your tier is gated by your *weakest* Transition-2 axis, not your average. A vector of `Cog L2 / Gran L0 / Ver L0 / Par L0 / Scope L2 / Taste L2` produces Tier 3 — the L0s cap the verdict regardless of the L2s. This is the anti-flattery design.

---

## The Six Axes

Each axis has three levels: L0, L1, L2. Each level is a concrete, first-person, falsifiable behavior — *what you did on your last task*, not an attitude. The label "L2" does not mean "excellent"; it means your behavior on the most recent relevant task showed these specific signals.

### ★ Three Transition-2 Gating Axes

These three alone cap the tier verdict. All other axes enrich the description but cannot raise the tier past what these permit.

---

#### Axis 2 — Instruction Granularity *(sharpest discriminator; T2-GATE)*

**L0 — Prescriptive prose:** "My last 3 agent prompts were numbered implementation steps. When the agent deviated from my plan, I stopped it and corrected it back to my steps. My prompt described *how* to implement, not just *what* to achieve."

**L1 — Mixed/hedged:** "My prompt stated a goal, but I surrounded it with heavy step-by-step hand-holding ('and then make sure to...', 'don't forget...'). I was describing my design in prose. The agent had little freedom to choose its approach."

**L2 — Bounded delegation:** "My prompt stated: the outcome to achieve + hard constraints (what NOT to touch) + how I'd judge done. The agent chose the approach. It sometimes surprised me usefully because I left it room."

*Trap tell:* "My prompts are long" ≠ L2. Long step-lists are L0. Brief, well-bounded outcome statements are L2. Length is not the signal; *whether the agent chose the approach* is the signal.

---

#### Axis 3 — Trust & Verification Posture *(T2-GATE; calibration, not volume; both extremes L0)*

**L0 — Uncalibrated, either pole:** "I re-read every generated line before merging" OR "I merged without reading the diff — it looked plausible." Both are L0. The high-volume-checking pole feels rigorous but is still L0 because it is not calibrated (it treats all output the same regardless of blast radius) and it is not evidence-based (reading ≠ verified).

**L1 — Spot-check by feel:** "I skim the diff, run the main path once, and ship if it seems plausible. I rely on feel rather than a systematic evidence substrate."

**L2 — Evidence-gated:** "The agent wrote the tests. I reviewed the *tests* more carefully than the implementation. CI/types/evals pass → the merge gates open. My verification depth scales with blast-radius and reversibility, not uniformly."

*Trap tell:* "I reviewed every line" is explicitly listed as L0, not L2. The Tier-4 anchor is *agent-driven tests I reviewed harder than the code*, not exhaustive line reading.

---

#### Axis 4 — Throughput & Parallelism *(T2-GATE)*

**L0 — Serial:** "I watch the agent work and feel uncomfortable starting anything else while it's running. I'd lose track or miss something important if more than one agent were active."

**L1 — Pipelined:** "I run one agent unattended while I do other work. I check back at breakpoints — coming back to evidence (tests, CI), not a running transcript."

**L2 — Orchestrator/fleet:** "I routinely run several agents or worktrees in parallel, decomposed so their outputs merge cleanly. My review bandwidth and cost are the real constraints, not agent count."

---

### Three Non-Gating Axes *(enrich description, cannot raise tier)*

---

#### Axis 1 — Locus of Cognition *(who decomposes, plans, and reasons)*

**L0 — Author:** "I hold the whole plan. The AI fills in code I designed. Any AI suggestion is judged against a plan already in my head. I am unambiguously the author."

**L1 — Co-thinker:** "The model proposes approaches and I pick and refine, but I own the decomposition. I'm still the lead thinker; the model contributes ideas."

**L2 — Delegated cognition:** "I state intent + constraints. The agent decomposes and plans. I *audit its reasoning* rather than authoring the plan. The agent's decomposition can usefully differ from what I'd have produced."

*Note:* A senior architect can have L2 Cognition while still at L0 Granularity — they frame intent and audit reasoning (L2 Cognition) but still write the implementation plan as numbered steps (L0 Granularity). These are distinct. Keep separate.

---

#### Axis 5 — Scope of Ownership *(the unit you measure yourself in)*

**L0 — Code-unit:** "I'm done when my function or PR is correct. I measure my contribution in lines and features."

**L1 — Feature:** "I own a feature end-to-end: definition, implementation, tests, edge cases. I'm done when the feature works."

**L2 — Product/outcome:** "I measure myself in shipped value across eng + QA + product — sometimes design and ops. I'm done when the outcome is delivered, not when the code is committed."

*Note:* A staff engineer can own product-level Scope (L2) while deferring all "what to build" calls to a PM (Taste L1). Keep separate.

---

#### Axis 6 — Taste & Product Judgment *(frontier)*

**L0 — Spec-follower:** "I build what the ticket says. My success metric is 'did I implement the spec.'"

**L1 — Quality-shaper:** "I improve *how* within a given *what*. I notice and fix UX and quality issues in agent output. I have opinions about implementation."

**L2 — Intent-shaper:** "I decide *what* is worth building and set the bar for *good* before evaluating agent work. I can tell genuinely good output from impressive-looking output."

---

## The Deterministic Gating Rule

The verdict is **reproducible**: two readers with the same six-tuple reach the same tier.

### Step 1 — Candidate tier

Compute the centroid of all six axes (L0=0, L1=1, L2=2):
- Sum the six values → divide by 6 → a rough candidate tier (0.0–2.0 maps to T0–T6 proportionally).
- This is *not* the verdict. It's the starting point.

### Step 2 — Cap

Let `g = MIN(Granularity, Verification, Parallelism)`.

| g | Tier cap | Meaning |
|---|---|---|
| L0 | Cannot exceed Tier 3 | Stuck in Transition 1, regardless of other axes |
| L1 | Cannot exceed Tier 4 | Approaching the shift; one gating axis still at mid |
| L2 | At least Tier 4 | Has crossed Transition 2; other axes determine upper range |

### Step 3 — Describe

Cognition, Scope, Taste can **raise the description** (e.g., "product-builder-shaped") but never LOWER the tier below what Step 2 permits, and never RAISE it past the cap.

Example: all three gating axes at L2, plus Scope L2 + Taste L2 → tier is Agent Operator (T4), description is "product-builder-shaped (T4 trending T6)." The *tier* stays where the gate clears.

### Step 4 — Name the capping axis

Always print which axis imposed the cap (the argmin of the three gating axes). Ties → name all tied axes. This is the single most actionable output: it tells you which axis to develop next.

**Honest caveat to print with every readout:**
> *Your tier is gated by your weakest Transition-2 axis, not your average. Cognition/Scope/Taste at L2 promote wording only, not tier.*

---

## Layer C1 — "You Are Here" Fast Triage

One pair per axis. Hard to flatter.

| Axis | Low tell (L0) | High tell (L2) |
|---|---|---|
| Granularity | "My last 3 prompts were numbered implementation steps; I corrected deviations back to my plan." | "My last 3 prompts stated success criteria + what NOT to touch, and let the agent choose the approach." |
| Verification | "I re-read every line" OR "I merged without reading" — both low | "I reviewed the agent's tests more carefully than its implementation." |
| Parallelism | "I can't start anything else while an agent is running." | "I routinely have ≥2 agents in parallel, decomposed to merge cleanly." |
| Cognition | "I hold the whole plan; the AI fills in code I designed." | "I state intent; the agent decomposes and plans; I audit its reasoning." |
| Scope | "I'm done when my PR is correct." | "I measure myself in shipped value, not commits." |
| Taste | "I build what the ticket says." | "I set the bar for 'good' before evaluating agent output." |

---

## Layer C2 — The 24-Item Retrospective Questionnaire

### Evidence gate (mandatory — open before scoring)

Before answering any item, open:
1. Your **last 3 agent prompts** (not from memory — the actual text)
2. The **last PR you shipped via an agent** (look at the diff and your review notes)
3. Your **last test-writing session** (who wrote the tests, and what you reviewed)

Score from these *artifacts*, not from memory or self-image. An unscored memory answer is invalid. This is the primary defense against self-flattery.

---

### Axis 1 — Locus of Cognition (4 items)

**C1-1.** On your last agent task, who decomposed the problem into subtasks?
- 0: I listed the subtasks in my prompt; the agent executed them.
- 1: I gave a high-level breakdown; the agent filled in some sub-steps I hadn't specified.
- 2: I stated the goal and constraints; the agent proposed the decomposition; I audited and approved it.

**C1-2.** If the agent proposed an approach you hadn't considered, what happened?
- 0: I redirected it to my original plan.
- 1: I considered it but ultimately used my plan.
- 2: I evaluated its approach on the merits; I adopted it when it was better.

**C1-3.** After the agent's run, could you reconstruct its full reasoning without reading the transcript?
- 0: Yes — I described the plan in my brief; the agent followed it.
- 1: Mostly — I knew the shape, not all the details.
- 2: No — the agent's decomposition ranged further than my brief; I reviewed its reasoning after the fact.

**C1-4.** How did you verify that the agent's plan was correct?
- 0: I wrote the plan, so I knew it was correct.
- 1: I reviewed the plan before the agent started and made some adjustments.
- 2: I reviewed the plan the agent produced, evaluated it against my acceptance criteria, and approved or corrected it.

*Scoring: sum C1-1 through C1-4 (0–8). 0–2 → L0. 3–5 → L1. 6–8 → L2.*

---

### Axis 2 — Instruction Granularity (4 items, incl. 1 forced-choice trap)

**C2-1 (forced choice — look at your last real prompt).** Which most resembles your last agent prompt?
- **Prompt A:** "Step 1: open `auth.ts`. Step 2: add a rate-limit middleware. Step 3: use the existing logger. Step 4: write a unit test for the middleware. Step 5: make sure it doesn't break the existing tests."
- **Prompt B:** "Add rate-limiting to the auth endpoint. Don't touch the existing auth logic or the logger interface. A failing test is not acceptable. Use whatever approach fits best — I'll judge done by: tests pass, existing tests pass, no changes outside `auth/`."
- 0: A (implementation script)
- 1: Blend — goal stated but with heavy hand-holding around it
- 2: B (outcome + constraints + done-criteria)

**C2-2.** When the agent on your last task took a different approach from what you expected, what did you do?
- 0: Stopped it and corrected it back to the approach I had in mind.
- 1: Noted the difference but let it continue; reviewed carefully after.
- 2: Evaluated whether its approach met my acceptance criteria; didn't require it to match my approach.

**C2-3.** Open your last 3 agent prompts and count how many specify the implementation approach (which functions to write, which files to change, what steps to follow).
- 0: All 3 specify the approach in detail.
- 1: 1–2 specify the approach; 1–2 specify only the outcome.
- 2: All 3 specify outcome + constraints + done-criteria, not the approach.

**C2-4.** Your last prompt: did it specify what the agent should NOT touch (blast-radius scoping)?
- 0: No — I described what to do, not what to leave alone.
- 1: Partially — I mentioned one or two things to avoid, but it wasn't a deliberate bounds-spec.
- 2: Yes — I explicitly listed what the agent may not touch or modify.

*Scoring: sum C2-1 through C2-4 (0–8). 0–2 → L0. 3–5 → L1. 6–8 → L2.*

---

### Axis 3 — Trust & Verification Posture (4 items, incl. 1 forced-choice trap)

**C3-1 (forced choice).** On your last agent PR:
- 0: I read every line of generated code before merging. OR: I merged after a quick look — it seemed plausible.
- 1: I skimmed the diff and ran the main path; if it worked, I shipped.
- 2: I reviewed the agent-written tests more carefully than the implementation; CI, types, or evals passed; that was my merge gate.

**C3-2.** Who wrote the tests for your last agent-implemented feature?
- 0: I wrote them manually after the fact, or there are no tests.
- 1: I wrote some; the agent wrote some; I reviewed mine more carefully.
- 2: The agent wrote them; I reviewed the tests more carefully than the code.

**C3-3.** How do you calibrate review depth across different types of agent tasks?
- 0: I review everything equally — I read every line regardless of what it is.
- 1: I review more carefully for things that seem risky, less carefully for boilerplate, but it's by feel.
- 2: I have an explicit model: blast-radius and reversibility determine depth. High-stakes tasks get harder review; clearly reversible boilerplate gets lighter review.

**C3-4.** When CI/types/evals pass on agent output, how confident are you in the result?
- 0: Not confident — CI doesn't catch everything; I still read the code.
- 1: Somewhat confident — CI passing plus a quick check is usually enough.
- 2: Confident within the scope my tests cover — I designed the test suite to catch the failure classes that matter, and I reviewed the tests to verify that.

*Scoring: sum C3-1 through C3-4 (0–8). 0–2 → L0. 3–5 → L1. 6–8 → L2.*

---

### Axis 4 — Throughput & Parallelism (4 items, incl. 1 forced-choice trap)

**C4-1 (forced choice).** While your last agent task was running, you were:
- 0: Watching the agent work. I felt uncomfortable doing other things while it ran.
- 1: Doing other unrelated work with one agent running. I checked back at natural breakpoints.
- 2: Running ≥2 agents or worktrees in parallel on tasks I'd decomposed to merge cleanly.

**C4-2.** Have you run multiple agents simultaneously on distinct, independently-verifiable tasks in the last month?
- 0: No — I run one agent at a time.
- 1: Occasionally — I've tried it but don't do it routinely.
- 2: Yes, routinely — I decompose work into parallelizable units and manage the fleet.

**C4-3.** When you have multiple tasks ready to delegate, what determines how many agents you run simultaneously?
- 0: One at a time — I finish before starting the next.
- 1: My attention — I run as many as I can watch.
- 2: Integration discipline and review bandwidth — I run as many as I can verify independently; I stop when adding more agents stops paying off.

**C4-4.** Do you have a cost awareness model for agent runs?
- 0: No — I run the agent on what needs to be done; cost is not a decision variable.
- 1: Somewhat — I'm aware that longer runs cost more and try to be efficient.
- 2: Yes — I think in cost-per-task; I select model tier and run length to match task complexity; I have a stop rule for when parallelism stops paying off.

*Scoring: sum C4-1 through C4-4 (0–8). 0–2 → L0. 3–5 → L1. 6–8 → L2.*

---

### Axis 5 — Scope of Ownership (4 items)

**C5-1.** How do you describe what you accomplished last week?
- 0: In terms of PRs merged or features shipped.
- 1: In terms of features end-to-end, including edge cases and testing.
- 2: In terms of outcomes delivered — shipped value, user impact, business metrics.

**C5-2.** If a feature you built via an agent had a UX problem that wasn't in the spec, whose problem is it?
- 0: The PM's — I built what was specified.
- 1: Mine — I should have caught it in review.
- 2: Mine — I own the outcome, not just the spec-compliance.

**C5-3.** Do you routinely think about QA and product quality as part of your own scope, or do you hand that off?
- 0: I hand it off — QA is a separate function.
- 1: I do some QA as part of development but think of it as a dev task, not ownership.
- 2: I own the quality outcome; I direct agent QA, design the eval suite, and treat quality as part of my deliverable.

**C5-4.** When an agent task is "done," what is your completion criterion?
- 0: The code works and the PR is approved.
- 1: The feature works end-to-end, tests pass, edge cases covered.
- 2: The outcome is delivered: tests pass, the product experience is correct, the user or business goal is met.

*Scoring: sum C5-1 through C5-4 (0–8). 0–2 → L0. 3–5 → L1. 6–8 → L2.*

---

### Axis 6 — Taste & Product Judgment (4 items)

**C6-1.** If agent output meets the spec but feels wrong — clunky UX, awkward interface, off-brand — what do you do?
- 0: Ship it — it meets the spec.
- 1: Note it for later; ship now.
- 2: Fix it — the spec is a floor, not a ceiling; I own the quality bar.

**C6-2.** Before evaluating agent output on your last task, did you state explicitly what "good" would look like?
- 0: No — I evaluated it when I saw it.
- 1: Somewhat — I had a mental model but didn't write it down.
- 2: Yes — I wrote or stated acceptance criteria before the agent started; evaluation was against those criteria.

**C6-3.** Can you tell the difference between impressive-looking agent output and genuinely good output?
- 0: Not reliably — if it seems sophisticated and works, I trust it.
- 1: Sometimes — I catch obvious issues but may miss subtle quality gaps.
- 2: Yes — I have an explicit product bar I apply before evaluation; I catch both obvious and subtle quality gaps.

**C6-4.** On your last 3 agent tasks, how many times did you push back on the *direction* (what to build) vs. just the *implementation* (how it was built)?
- 0: Never — I build what I'm given.
- 1: Once or twice — I shaped the how but not the what.
- 2: Routinely — I question the what when it seems wrong, even under time pressure.

*Scoring: sum C6-1 through C6-4 (0–8). 0–2 → L0. 3–5 → L1. 6–8 → L2.*

---

## Layer C3 — Readout Format

### 1. Six-Tuple Vector (headline)

Always report as a six-value profile, never a single tier:

```
Cog L_ / Gran L_ / Ver L_ / Par L_ / Scope L_ / Taste L_
```

Example: `Cog L2 / Gran L1 / Ver L1 / Par L0 / Scope L1 / Taste L2`

### 2. Tier Verdict

Apply the gating rule. Example for above:
- g = MIN(Gran L1, Ver L1, Par L0) = L0 → **cannot exceed Tier 3**
- Cog L2 + Taste L2 → description: "product-builder-shaped thinker"
- Verdict: **AI-assisted coder (Tier 3), product-builder-shaped**
- Capping axis: **Parallelism** (sole L0)

### 3. Leading / Lagging Edge

- Leading edge (highest axis): Cognition and Taste (both L2)
- Lagging edge (lowest axis): Parallelism (L0)

### 4. One Prescribed Next Rung

The lowest Transition-2 axis's next rung is the one prescribed move. In the example: Parallelism is L0 → prescribed next rung: Parallelism L1 = "launch one agent unattended while you do other work; come back to evidence at breakpoints." But since Granularity and Verification are also sub-L2, note the prerequisite: bounded-delegation prompting (Branch 3) and agent-written tests (Branch 5) must precede parallelism to make parallelism payoff.

---

## Worked Examples

### Example A — Priya (jagged; the Prescriptive-Prose Veteran)

**Vector:** `Cog L2 · Gran L1 · Ver L1 · Par L0 · Scope L1 · Taste L2`

**Step 1 — Centroid:** (2+1+1+0+1+2)/6 ≈ 1.17 → rough T3–T4.

**Step 2 — Cap:** Gating axes: Gran L1, Ver L1, Par **L0** → g = L0 → **cannot exceed Tier 3 (AI-assisted coder)**.

**Step 3 — Describe:** Cog L2 + Taste L2 → "product-builder-shaped thinker."

**Step 4 — Capping axis:** Parallelism (sole L0). Verdict: **AI-assisted coder (Tier 3) despite two L2 axes.**

**Shape read:** Spiky toward Cognition/Taste, collapsed on Parallelism → Prescriptive-Prose Veteran. A senior IC who upgraded *typing* to natural language but never delegated. Deep craft produces good results *despite* boxing the agent in, hiding the gap.

**Why it persists:** High Cognition + Taste produces good output at T3 — the senior engineer's taste catches problems before they ship, so the gap is masked. The engineer feels advanced (and is, in some dimensions) but has never taken the step out of the loop.

**Next move:** Because Granularity is also sub-L2 and is the prerequisite habit before parallelism pays, prescribe **bounded-delegation practice first**: bounds-only prompts for one week, then the no-peeking run. Point to Branch 3 (Bounds-Setting), then Branch 5 (Verification), then Branch 6 (Parallelism).

---

### Example B — Uniform Advanced (gate clears)

**Vector:** `Cog L2 · Gran L2 · Ver L2 · Par L2 · Scope L2 · Taste L2`

**g = L2** → at least Tier 4; Scope L2 + Taste L2 + fleet-level Par L2 → description: **Agent Orchestrator / Product Builder (T5–T6)**.

No capping axis (all gating axes tied at L2).

**Next move:** Frontier drills, not remediation. Take an intent fully to ship through agents across eng+QA+product; keep a do-vs-delegate decision log and review hit rate; set a per-task cost budget.

---

### Example C — Boundary Case (cap resolves ambiguity)

**Vector:** `Cog L2 · Gran L1 · Ver L2 · Par L1 · Scope L2 · Taste L1`

**g = MIN(Gran L1, Ver L2, Par L1) = L1** → **cannot exceed Tier 4 (Agent Operator)**.

Centroid would suggest higher, but L1 floor resolves it to exactly **Agent Operator (Tier 4)**, capping axes: Granularity + Parallelism (both L1, tied).

**Tie-breaking:** Look at raw item sums for Gran and Par. Whichever has the lower sum is the prescribed next rung. Both get named as lagging.

---

### Reproducibility Check

A reader with `Cog L2 · Gran L0 · Ver L0 · Par L0 · Scope L1 · Taste L2`, using only the printed rules, reaches exactly one verdict:
- g = MIN(L0, L0, L0) = L0 → **cannot exceed Tier 3**
- Capping axes: Granularity, Verification, Parallelism (all L0)
- Description: "product-builder-shaped thinker" (Cog L2 + Taste L2)
- Verdict: **AI-assisted coder (Tier 3), product-builder-shaped**
- Next rung: all three gating axes tied at L0 → report all three; prescribe the axis with the lowest raw item-sum as the starting point

Same vector → same verdict, always.

---

## See Also

- [Skew Profiles](agentic-skew-profiles.md) — named patterns and their vectors
- [Branch Ladders](agentic-branch-ladders.md) — the 10 orthogonal branches with 4-rung ladders
- [Tier Spine](agentic-tier-spine.md) — the 7 trunk tiers in context
- [Orthogonal Shift](agentic-orthogonal-shift.md) — the T3→T4 boundary the instrument measures
- [Overview](agentic-engineering-overview.md) — hub and navigation

## Sources

- arXiv 2506.12347, Kumar et al., Microsoft (2025) — empirical basis for the "review every line" trap and premature stopping data
- arXiv 2506.12469, Feng, McDonald, Zhang / UW (2025) — five-level autonomy framework; autonomy ≠ capability
- Addy Osmani, "Agentic Engineering" (Feb 2026) — test-driven delegation as the Tier-4 anchor
- Eleanor Berger, "Working with Asynchronous Coding Agents" — spec-before-delegate; the driver→delegator transition
