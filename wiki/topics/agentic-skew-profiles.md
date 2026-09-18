# Agentic Engineering — Skew Profiles

> Part of R-009. Named recurring shapes in the 6-axis fluency vector. Each profile notes the vector signature, the branch cells it lights, why it persists, and the single unlock.

A skew profile is a *recurring jagged pattern* — not a tier, but a recognizable shape. Two engineers at the same tier can have very different profiles; two engineers with the same profile can be at different tiers. The profiles name the shape so you can recognize it in yourself and understand why it sticks.

---

## The Prescriptive-Prose Veteran

**The most important profile to surface — and the most common blind spot.**

**Vector signature:** Cog L2, Taste L2, Gran L0–L1, Par L0–L1. Often: Ver L1.

**Branch cells:** High on Branch 1 (Prompting Craft), Branch 2 (Intent/Spec), Branch 10A (Product Taste). Collapsed on Branch 3 (Bounds-Setting), Branch 6 (Parallelism), and usually Branch 5 (Verification/Eval).

**The tier verdict:** Despite two L2 axes (Cognition and Taste) and often impressive output, this profile is capped at Tier 3 (Agent Director / AI-assisted coder) by the L0 gating axes.

### What it looks like

A senior engineer who has fully integrated AI into their workflow — they use an agent for every task, keep reusable prompt patterns, review everything carefully, and produce consistently good output. They feel like they're at the frontier. They're not wrong about the output; they're wrong about the process.

Their last three agent prompts are numbered implementation steps. When the agent deviated from plan, they stopped it and corrected it. Their "agent runs" are elaborate prompt-and-correct sessions, not delegations.

### Why it persists

The gap is masked by the IC's strength: **deep engineering judgment produces good results even when the agent is being boxed in**. The senior engineer's taste catches problems before they ship, so the output looks like what a T4 operator would produce — it just cost 3× as much cognitive effort and is capped at what the engineer could already imagine.

The Prescriptive-Prose Veteran has upgraded *typing* to natural language. The upgrade was real and valuable. But the mental role hasn't changed: they're still the author, designer, and step-by-step specifier. The agent is a faster keyboard for a plan they already hold.

**The second mask:** Strong Cognition (L2) can feel like delegation. Framing intent at a high level (L2 Cognition) while writing the implementation plan as numbered steps (L0 Granularity) is *not* delegation — it's the most sophisticated form of over-boxing. The engineer audits the agent's reasoning *within their own plan*.

### The single unlock

**Bounds-only prompts for one week.** Ban every imperative step from prompts. If the agent must understand a constraint, state it as a constraint ("the agent may not modify any file outside `auth/`") not as a step ("Step 1: open `auth.ts`"). If you can't write the prompt without steps, that's information: the task may need decomposition or the agent needs more context, but the answer is not to script the implementation.

Then: the **no-peeking run**. Write a brief, launch, don't intervene until it reports done. Evaluate the evidence (tests, CI, diff), not the transcript. Critique the brief, not the agent. If it went wrong, what constraint was missing from the brief?

The transition is often uncomfortable for strong engineers — releasing the step-by-step plan feels like losing quality control. The discomfort is precisely the sign that the shift is real. The quality control moves from the brief to the verification layer; it's not eliminated, it's repositioned.

---

## The Vibe Coder

**Vector signature:** Par L1–L2 (eager to scale), Ver L0, Taste L0–L1. Granularity varies.

**Branch cells:** High (or high-aspirational) on Branch 6 (Parallelism), sometimes Branch 7 (Tooling). Collapsed on Branch 5 (Verification/Eval) and Branch 10A (Product Taste). Branch 3 may be L1–L2 (good at writing briefs) but the verification failure undermines what bounds-setting achieved.

**The tier verdict:** Granularity and Parallelism may be L1–L2, but Ver L0 caps the tier at T3 regardless.

### What it looks like

Fast. Shipping quickly. Multiple agents running. "It worked when I ran it." The PRs are merged because they look plausible.

The Vibe Coder may be quite good at writing briefs (high Branch 3) and may be scaling to multiple agents (Branch 6). But without the verification layer, the output quality is random. The agent is the author of unreviewed code. This is vibe coding at scale — "vibe-merging" with parallel agents.

### Why it persists

Speed feels like productivity. The Vibe Coder is shipping faster than they ever have. The failures are intermittent and not always immediately visible. When something breaks, it's attributed to the agent ("the AI got it wrong") rather than to the verification gap.

The pattern often emerges in greenfield personal projects and spreads to production work. It works until it doesn't — and the failure modes (undocumented bugs, tech debt accumulation, regressions that weren't caught) are insidious.

### The single unlock

**Make agent-driven QA the non-negotiable habit.** Before the agent declares done, it writes tests. You review the tests before the PR merges. The CI gate must pass. This is not optional overhead — it's the safety system the whole delegation model depends on.

Concretely: the next time you're about to merge an agent PR, stop and ask: "Did the agent write tests? Did I review those tests harder than the implementation? Is CI green?" If not, it's not done.

The deeper shift: from "it ran once" as the merge criterion to "the evidence substrate passes" as the merge criterion. This requires front-loading test design — setting up what counts as done before the agent runs, not after.

---

## The Cautious Adopter

**Vector signature:** Everything L1, nothing L2. Uniformly mid across all six axes.

**Branch cells:** Even spread at R2 across all 10 branches — no dramatic highs or lows.

**The tier verdict:** With all gating axes at L1, the tier is capped at T4 (Agent Operator) by the gating rule. But the centroid of all L1s barely crosses T3 → the Cautious Adopter is typically at T3, trending T4.

### What it looks like

An engineer who has integrated agents thoughtfully and carefully. They use agents on real tasks, do some verification, run one agent at a time, write reasonable briefs. They're not making major mistakes. They're also not pushing any dimension to its ceiling.

The Cautious Adopter is at the comfortable plateau at the top of Transition 1 — the "illusion of having arrived." No single axis hurts enough to demand attention; improvement in any dimension feels marginal rather than transformational.

### Why it persists

The profile has no obvious lagging edge. There's nothing "wrong." The engineer is producing solid work, avoiding major failures, and feels competent. The gap is opportunity cost: at L1 everywhere, there's a consistent headroom of L2 on every axis, but no single axis screams for development.

This profile often appears in engineers who have read widely about agentic engineering, apply best practices, but haven't had the forcing function to push any dimension to L2.

### The single unlock

**Pick the lowest gating axis by raw item-sum and force one L2 behavior on the next real task.**

Don't try to improve all six dimensions simultaneously — that produces marginal improvement everywhere. Instead: identify which gating axis has the lowest raw score (even if they're all L1 by band), and commit to one specific L2 behavior on the very next agent task.

If it's Granularity: the next brief must contain no imperative steps. Write it until that's true.
If it's Verification: the next agent PR cannot merge until the agent has written tests you reviewed harder than the code.
If it's Parallelism: the next task must run while you work on something else.

The forcing function is key — L1 patterns are comfortable and self-reinforcing. The only way out is a committed experiment with a specific L2 behavior, observed for result.

---

## Cross-Axis Meta-Diagnostic: Delegate vs. Do-It-Yourself

This diagnostic applies across all profiles, not as its own profile.

**Two poles of immaturity on Branch 10B (Do-It-vs-Delegate):**

**Fear-driven avoidance (Tier-0 reflex):** "I always do it myself. Delegating feels unsafe." This may look like the Prescriptive-Prose Veteran but the driver is comfort, not strategy. The engineer is avoiding the discomfort of delegation, not making a deliberate traction call.

**Indiscriminate delegation (the mirror):** "I delegate everything. Any task goes to an agent." This looks like high Branch 6 but may be paired with low Branch 5 (Vibe Coder) or a failure to consider where agents lack traction.

**Maturity (T6):** Fast, usually-right do-vs-delegate calls that weigh: task type (agent-tractable or not?), stakes (blast radius), verification cost, learning value (do I need to stay sharp in this domain?), and timing (is there a better brief I could write later?).

**The strategic regression distinction:** A high-tier engineer who deliberately drops to hands-on work in a novel/ambiguous domain where agents lack traction is *not* reverting to fear-driven avoidance. The behavioral marker is the same (doing it themselves), but the underlying reasoning is opposite:
- Fear-driven: "I don't want to delegate because it feels unsafe."
- Strategic: "Agents have no traction on this class of problem right now; delegating would produce output I can't verify; I'll do it myself and save the agent for the parts it handles well."

Surface this distinction in both directions. "Delegates nothing" is always at least partly worth questioning; "delegates everything blindly" is always a problem. The question is whether the hands-on choice is deliberate or reflexive.

---

## Jaggedness as the Baseline

All three profiles above — and any real engineer — are jagged. The point of the profiles is not that jaggedness is a failure; it's that specific shapes of jaggedness have specific names, specific causes, and specific unlocks.

An engineer who is L2 on all six axes simultaneously is at the upper frontier of current practice. An engineer who knows precisely where they're L0 and what to do about it is already better-positioned than one who carries an unclear self-image of "advanced."

The self-location instrument exists not to grade, but to locate. The readout's value is the **prescribed next rung** — one concrete behavior, on the next real task.

---

## See Also

- [Fluency Instrument](agentic-fluency-instrument.md) — the 6-axis scoring and gating rule that produces these profiles
- [Branch Ladders](agentic-branch-ladders.md) — the 10 branches each profile lights or collapses
- [Orthogonal Shift](agentic-orthogonal-shift.md) — the boundary the Prescriptive-Prose Veteran hasn't crossed
- [Tier Spine](agentic-tier-spine.md) — where each profile sits in the trunk tiers
- [Agent Traction](agentic-traction.md) — informs the do-vs-delegate meta-diagnostic

## Sources

- Addy Osmani, "Agentic Engineering" (Feb 2026) — skill-atrophy warning for juniors; seniors benefit disproportionately
- Simon Willison, "Not all AI-assisted programming is vibe coding" (Mar 2025) — the vibe coder profile, defined precisely
- arXiv 2506.12347, Kumar et al., Microsoft (2025) — empirical basis for "developers prompt like managers" (Prescriptive-Prose Veteran); premature stopping (Cautious Adopter)
