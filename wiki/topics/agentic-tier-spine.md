# Agentic Engineering — Tier Spine (T0–T6)

> Part of R-009. The 7 trunk tiers defining overall position on the developer→agentic-engineer progression.

The spine is a single scalar for orientation only. **Jaggedness is the headline:** a reader self-locates *per branch*, not as one number. The trunk tier is an emergent centroid gated by the three Transition-2 branches (Bounds-Setting/Granularity, Verification, Parallelism); strength on Prompting, Cognition, or Taste can raise the descriptive fit but never lift the tier past what those three gate-branches permit. Use the [Branch Ladders](agentic-branch-ladders.md) alongside this page; they are the diagnostic instrument. The spine is the map; the branches are the terrain.

**Spine stages (canonical bindings):**

| Range | Label |
|-------|-------|
| T0–T1 | Traditional SWE |
| T2–T3 | AI-assisted coder |
| T4–T5 | Agent operator / orchestrator |
| T6 | Product builder |

Two **transitions** cut across the spine:

- **Transition 1 (T0→T3):** Same activity relocated — from editor to chat to agent — but still IC thinking. More prompting skill compresses time to the ceiling; it does not raise it.
- **Transition 2 (T3→T4):** Role change, not activity change. The [Orthogonal Shift](agentic-orthogonal-shift.md). Everything above is linear improvement; this boundary is perpendicular to it.

---

## T0 — Manual Craftsperson

Writes and reasons about code by hand. AI is incidental autocomplete. The human is unambiguously the author of every decision and every structure.

### Indicators

- *"When stuck, my first move is docs, source, or debugger — not a model."*
- *"I can describe my entire change before I make it; the AI contributed none of the structure."*
- Any AI suggestion is judged keystroke-by-keystroke against a plan already held in the head. The model is a faster clipboard, not a collaborator.

### Outgrown

You routinely accept multi-line completions without first holding the shape in mind — you are already operating at T1.

### Bottleneck to T1

**Trust.** Specifically: trust that an inline model can produce code you *fully understand and would have written anyway*, faster. This is pure throughput of known-good code; it requires no new mental model, no delegation, no re-evaluation of authorship. The friction is almost always identity-based ("real programmers write their own code") or habit.

### Drill

One week of inline completion on a codebase you know cold. Accept only what you would have typed. Measure time saved. The goal is to calibrate the trust response, not to change what you accept.

### Failure Modes

Two poles, not one:

- **Fear-driven avoidance** — refusing assistance out of identity or professional self-image. The cost is pure throughput loss; no safety benefit.
- **Never building hand-craft** — the deskilling risk is already latent for juniors who skip T0 entirely. Verification judgment in later tiers depends on having built things by hand and knowing what "correct" feels like at the token level.

---

## T1 — Assisted Coder

Inline AI is a routine accelerant for code the human fully understands. Still the author; AI is a faster keyboard. The unit of AI contribution is a *line to a function*, never a *task*.

### Indicators

- *"I accept/reject completions fluently and rarely break stride — because I only accept what I already understand."*
- *"I use in-editor chat to recall an API or scaffold boilerplate, then edit by hand."*
- *"The model has never surprised me with a design choice I kept; it fills in code I'd already planned."*

The key self-test: if a completion contains a pattern you didn't already know, do you accept it without verifying it? If yes, you are running a silent comprehension debt and are closer to the T1/T2 boundary than you think.

### Outgrown

You've started handing whole chunks via a chat pane and iterating in prose rather than rewriting in the editor. That is T2.

### Bottleneck to T2

Move generation from *inline completion of known code* to *conversational generation of code you didn't pre-author*. The blocker is not prompting skill — it is willingness to let the model contribute structure you didn't already hold. This requires basic prompting craft: writing a clear intent, evaluating output against function not against "what I would have written."

### Drill

For one feature, generate the first draft entirely via chat from a written prompt. Refine in conversation, not the editor. The point is to experience the model producing structure you didn't pre-imagine and to practice evaluating it on its own terms.

### Failure Modes

- **Silent comprehension debt** — accepting completions you don't understand. Each one is a future bug you can't diagnose.
- **Autocomplete for logic that deserves design** — using inline completion to avoid thinking through a decision. The model may produce plausible-looking code that encodes the wrong approach.

---

## T2 — Conversational / Prompt-Driven Coder

Works mainly through chat or inline generation. Writes prompts, receives sizeable chunks, iterates in prose. **This is the top of Transition 1 and a documented plateau — the "illusion of having arrived."** Output jumped visibly, so it feels like mastery. It is still IC thinking, just relocated into natural language.

### Indicators

- *"I get usable code in one or two prompt turns and refine conversationally."*
- *"I keep a library of reusable prompt patterns for recurring tasks."*
- *"I still hold the whole plan; the model fills in my design. When it deviates I correct it back."*
- *"I review essentially everything line by line, because I'm accountable for every line shipped."* (Honest at T2 — and exactly what must change at T4.)

### Why a Plateau

Prompt fluency caps output at *what the human can already imagine and personally review*. More prompting skill makes the same ceiling arrive faster; it does not raise it. A T2 engineer with exceptional prompting skill can produce a lot — but only as fast as they can hold the design in their head and read the output. That is the ceiling. Breaking it requires delegating, not prompting better.

The plateau is also psychologically sticky: output is higher than it was at T1, the work feels different, and peers who haven't reached T2 visibly struggle. The signal that you're at the ceiling rather than still climbing is that adding prompting skill no longer opens new problem classes — it just runs the same loop faster.

### Outgrown

You've handed a *multi-step task with tool use* to an autonomous agent rather than dictating each chunk. You are at T3.

### Bottleneck to T3

Hand a multi-step task with tool use to an autonomous agent *as one brief* rather than dictating each chunk conversationally. The shift is from "I generate code through chat" to "an agent edits files, runs commands, and takes steps on my behalf" — still supervised, but not re-dictated step by step.

### Drill

Take a task you'd normally do in 5–10 chat turns and give it to a coding agent as one brief. Supervise, but resist re-dictating each step. Watch where the instinct to take the keyboard back fires — that instinct is the T3 diagnostic.

### Failure Modes

- **Plateau complacency** — feeling advanced because output jumped relative to T1, without noticing the ceiling.
- **Prompt-as-script creep** — prompts growing into long numbered step-lists. This is the seed of the boxing-in failure that defines Transition 2. A prompt that specifies every step is not a prompt; it is a manual that the model executes. The problem compounds: prompt-as-script practitioners often become the most stuck at T3 because their skill looks like sophistication.

---

## T3 — Agent Director

*Transitional / late-IC; one foot in prompting, one reaching for delegation. The IN-LOOP tier. The last tier before the orthogonal shift.*

Runs a real coding agent (autonomous edits, tool use, multi-step execution) but stays largely **in the loop**: approves steps, supplies context reactively, treats the agent as a closely-supervised junior whose every move is monitored.

### Indicators

- *"I run an agent, but I watch it work and approve most steps."*
- *"When it heads somewhere unexpected, my instinct is to stop and steer it back."*
- *"I feed it context reactively, as it asks — I don't front-load my intent."*
- *"I'd feel irresponsible kicking off a run and walking away."*

The last indicator is the most diagnostic. The feeling of irresponsibility is not a sign of quality consciousness — at T3, it is the ceiling. A T4 operator has found a way to walk away *and* verify rigorously on return. The inability to imagine doing that safely is the T3 boundary condition.

### Not Yet Across

If your prompts are still numbered steps and you correct any deviation back to your exact plan, you are *running an agent in T2 style* — the agent is new, but the mindset is not. Surfacing this gap is the whole point of the boundary that follows. Many high-skill T3 practitioners are invisible to themselves as T3 because they are clearly "using agents." The diagnostic is not whether an agent is running — it is whether *you* are in the loop directing it.

### Bottleneck to T4

The [Orthogonal Shift](agentic-orthogonal-shift.md). Not "a harder prompting trick" — a role change. This is where strong ICs often struggle *more* than weaker ones, because the IC skills that made them effective at T2–T3 (holding the whole design, reviewing every line, correcting deviations) are exactly the habits that block the shift.

### Drill

"No-peeking run" — write a brief, launch the agent, don't intervene until it completes, then critique the *brief* not the agent. The goal is to experience the gap between what the brief specified and what "done well" actually requires. Most practitioners find the brief was underspecified; the instinct to intervene mid-run was compensating for that deficiency.

### Failure Modes

- **In-loop addiction** — the inability to let a run complete without steering. Often rationalized as quality discipline; actually a failure to write briefs that front-load intent.
- **Step-by-step prescriptive prose** — prompts that specify the path rather than the destination. See [Branch Ladders](agentic-branch-ladders.md), Branch 1 (Bounds-Setting/Granularity).
- **Interrupting mid-task to correct trivia** — stopping a run to fix a minor deviation costs more than it saves; the agent loses context and the human loses the "what would it have done?" signal.
- **Conflating "I approved each step" with "I understand the whole"** — step-by-step approval is local; it does not give you a system-level picture of what was built.

---

> **⭐ THE ORTHOGONAL SHIFT — between T3 (in-loop) and T4 (out-of-loop)**
>
> This boundary is the centerpiece of the entire spine. See [The Orthogonal Shift](agentic-orthogonal-shift.md) for full treatment.
>
> Everything above this line is **Transition 1**: same activity (writing + reviewing code), relocated from editor → chat → agent. High prompting skill says nothing about whether you've crossed this boundary.
>
> Everything below this line is **Transition 2**: a different *role*. From author/reviewer to principal + verifier. The skills that make someone excellent at T1–T3 are orthogonal to the skills that gate T4+.

---

## T4 — Agent Operator

*The first OUT-OF-LOOP tier.* Has crossed the orthogonal shift. Delegates whole bounded tasks, steps *out* of the loop, and returns to **verify via evidence**. Intent, bounds, and done-criteria are specified up front. Rigorous evaluation happens after. Owns blast-radius and risk for everything delegated. Throughput is still capped by single-human attention.

### Indicators

- *"My last 3 agent tasks started with a paragraph of intent + constraints + how I'd judge 'done', and I let the agent choose the approach."*
- *"I launched a task and did something else; I came back to evidence (tests, diffs, a passing CI run, an eval result), not a transcript I read line by line."*
- *"I had the agent write tests and reviewed the tests more carefully than the implementation."*
- *"Before delegating, I decide what the agent may touch, what it must not, and what 'done' means."*
- *"I can name what I'd accept blind vs. what I must guard — by blast radius, not by feeling."*

### Not Yet Across — Both Poles

**Over-boxing (the T3-in-T4-clothes failure):** Prompts are still step-lists. You re-derive the agent's path and correct deviations. The agent is new; the mindset is not. Output is capped by what you can pre-imagine, exactly as at T2–T3.

**Under-verification / over-trust (the mirror failure):** You stopped watching *and* stopped checking. You merge because the diff "looked plausible." Stepping out of the loop without building an evidence-based verification habit is not T4 — it is vibe-merging. Both poles fail; maturity is the calibrated middle.

### Capabilities Unlocked at T4

Output is decoupled from typing speed and from what you can pre-imagine. The agent can usefully *surprise* you — finding an approach you hadn't considered — because you left it room. This is the first tier at which the model's generative capacity contributes something genuinely new rather than executing your plan faster.

### Bottleneck to T5

Single-attention throughput. One principal can only review and integrate so many completed tasks per day. Breaking this cap requires decomposing goals into *parallelizable, independently-verifiable* units — and building reusable harness (skills, sub-agents, shared context) so each new delegation costs less than the last.

### Drills

- **Bounds-only prompts** — ban imperative step-lists for one week. Write only: intent, constraints, done-criteria. Let the agent route.
- **Manager-mode rewrite** — take a step-by-step prompt from your history and rewrite it as intent + constraints + done-criteria. Compare outputs.
- **Deliberate-derail** — let a run fail intentionally. Practice root-causing the brief rather than the agent. What was underspecified? What assumption was wrong?

### Failure Modes

- **Over-boxing** — caps output at what you can pre-imagine; you've added an agent without adding throughput or generativity.
- **Under-verification / vibe-merging** — the mirror of over-boxing. Throughput goes up; quality collapses silently.
- **Trivia interruptions** — stopping runs for non-blast-radius deviations. Symptom of T3 in-loop habits persisting.
- **"I read every line" ≠ "I verified it works"** — reading is not verification. Evidence is: tests pass, eval passes, CI is green, a human ran the flow.
- **Ignoring blast radius** — delegating to an agent with broad file-system or API access without bounding what it may touch. Blast-radius mapping is a pre-delegation discipline, not a post-incident retrospective.

---

## T5 — Agent Orchestrator

Manages **multiple agents in parallel** and builds the harness — sub-agents, MCP servers, custom skills, background and scheduled runs. Decomposes goals into parallelizable, independently-verifiable units. Manages cost and human↔agent coordination actively.

### Indicators

- *"I routinely have several agents working at once (worktrees, branches, queues) and a discipline for integrating their output."*
- *"I build reusable scaffolding — skills, sub-agents, MCP servers, project memory — so each delegation makes the next one cheaper."*
- *"I think in cost-per-task: cheap model for routine ops, expensive model for judgment calls, and I know when adding another parallel agent stops paying off."*
- *"I onboard teammates into my harness and coordinate humans + agents toward one outcome, with bounded review responsibilities for each person."*

### Outgrown

If parallelism collapses your quality or your budget, you are an Operator running several tabs, not an Orchestrator. The differentiator is *managed* parallelism: structured decomposition, queueing, integration discipline, and cost awareness. Throughput is not the measure; managed throughput is.

### Bottleneck to T6

The cap is no longer execution throughput — it is *judgment about what to build and whether it is good*. More parallelism produces more output; it does not improve product taste or help you distinguish impressive-looking output from actually-good output. Crossing to T6 requires leading with product judgment and owning outcomes beyond engineering execution.

### Drills

- **Parallel pair, then scale** — run two concurrent agent tasks with a defined integration protocol, then three, watching exactly where integration discipline breaks and why.
- **Build one reusable skill or sub-agent** — measure its payoff across five subsequent tasks. Is it actually cheaper, or did building it cost more than it saved?
- **Per-task cost budget + stop rule** — before each parallel run, set a cost ceiling and a parallelism stop rule ("if integration takes more than X, collapse to serial"). Review against actual.

### Failure Modes

- **Throughput-for-its-own-sake** — parallelism without integration discipline leads to merge chaos, conflicting assumptions across branches, and output that can't be assembled into a coherent whole.
- **Fleet cost blowout** — running expensive models on tasks that don't require them; no cost model for the fleet.
- **Harness sprawl** — accumulating skills, sub-agents, and MCP servers that aren't actually cheaper than ad-hoc delegation. Infrastructure debt without ROI.
- **Coordination debt** — humans and agents working toward subtly incompatible goals because decomposition was done without checking interface contracts between units.

---

## T6 — Product Builder (T-shaped Builder)

Takes an intent to a *shipped product* largely via agents across engineering, QA, and product — and often design and GTM. Leads with product judgment and taste. Makes do-vs-delegate a real-time strategic call. **The far edge of this tier is genuinely open — it is the frontier of current practice.**

**The T-shape:** Deep stem = engineering judgment sufficient to evaluate agent output at a technical level. Broad bar = product taste, user empathy, and discernment of *what* to build and *whether it is good*. Both are required; the stem without the bar produces technically correct product-misses; the bar without the stem produces confident ships of things that don't work.

### Indicators

- *"I measure myself in shipped value, not code authored or agents run."*
- *"I decide what is worth building and what 'good' means; I judge agent output against a product bar I set before the work starts."*
- *"I make the do-vs-delegate call instantly and it's usually right — weighing stakes, agent reliability, verification cost, learning value, and whether the task is one agents get traction on."*
- *"I deliberately drop to hands-on work in novel or ambiguous domains where the agent has no traction — and I can distinguish that strategic regression from fear-driven avoidance."*

The last indicator is critical. Strategic regression (going hands-on because the domain is too novel for agents) looks superficially like T0 fear-driven avoidance. The difference: T6 practitioners can articulate *why* they're going hands-on and what conditions would change that decision. T0 practitioners cannot.

### Not Here

If you can ship features via agents but can't tell impressive-looking output from actually-good output — if the taste layer is absent — you are a high orchestrator without the product bar. That is T5, not T6. The bar is the tier, not the throughput.

### Drills (Frontier — Many Open)

- **Intent-to-ship** — take a product intent fully to ship through agents across engineering, QA, and product. Measure cycle time and the number of decisions you personally made vs. delegated vs. let the agent resolve.
- **Pre-declare the product bar** — before judging any agent output, write down what "good" looks like in product terms. Then evaluate. Track how often your pre-declared bar and your post-hoc judgment match.
- **Do-vs-delegate decision log** — for one month, log every do-vs-delegate call with a brief rationale. Review: what was your hit rate? Where were you systematically wrong?

### Failure Modes

- **Deskilling** — over-delegating until verification judgment atrophies. This is the catastrophic failure mode of T6: the judgment layer the whole stack depends on rots from disuse. T6 practitioners must deliberately maintain hands-on contact with enough of the stack to keep the evaluation sense calibrated.
- **Taste-blindness** — shipping plausible-but-wrong. Output that passes technical review and satisfies stated requirements but misses what the user actually needed. The taste bar is what catches this; its absence is not detectable from inside the failure.
- **Mistaking GTM/product breadth for the elimination of engineering depth** — the broad bar of the T-shape does not replace the stem. A builder who has traded away engineering depth for product breadth loses the ability to evaluate agent output technically, which quietly degrades everything downstream.

---

## Cross-Cutting Reminders

**Jaggedness is the headline.** A reader self-locates *per branch*, not as one scalar. The trunk tier is an emergent centroid gated by the three Transition-2 branches (Bounds-Setting/Granularity, Verification, Parallelism). Strength on Prompting, Cognition, or Taste can raise the descriptive fit but cannot lift the tier past what those three permit. See [Branch Ladders](agentic-branch-ladders.md).

**The most invisible failure to surface.** High prompting skill (R3–R4 on Branch 1) with near-zero delegation skill (R1 on Branch 3) — the "Prescriptive-Prose Veteran" who feels advanced and is stuck at T3. This is invisible because the practitioner is clearly doing sophisticated work with agents. The diagnostic is the step-list prompt and the in-loop habit, not the presence of an agent.

**Both poles, everywhere relevant.** Wherever a branch has a "too little" failure (over-boxing, distrust-all, do-it-all-myself), name its mirror (under-verification, blanket-trust, delegate-everything). Maturity is calibration between poles, not maximizing one direction. This applies at every tier from T0 onward.

**The orthogonal shift is not a prompting achievement.** High T2–T3 prompting skill says nothing about whether you've crossed T3→T4. Practitioners who have been told they are "good at AI" often have the hardest time crossing because their prompting sophistication is exactly the habit that prevents stepping out of the loop.

**Spine stages (canonical bindings):**

| Tiers | Label |
|-------|-------|
| T0–T1 | Traditional SWE |
| T2–T3 | AI-assisted coder |
| T4–T5 | Agent operator / orchestrator |
| T6 | Product builder |

---

## See Also

- [Orthogonal Shift](agentic-orthogonal-shift.md) — the T3→T4 boundary in depth
- [Branch Ladders](agentic-branch-ladders.md) — 10 orthogonal skill branches
- [Fluency Instrument](agentic-fluency-instrument.md) — 6-axis self-assessment
- [Skew Profiles](agentic-skew-profiles.md) — named recurring patterns
- [Overview](agentic-engineering-overview.md) — hub page

---

## Sources

- Addy Osmani, "Agentic Engineering" (Feb 2026) — test-driven delegation, skill-atrophy warning, the deskilling failure mode at T6
- Eleanor Berger, "Working with Asynchronous Coding Agents" — driver→delegator framing, spec-before-delegate discipline, the T3→T4 in-loop/out-of-loop distinction
- arXiv 2506.12347, Kumar et al., Microsoft (2025) — empirical study of developer–agent workflows; developer-as-manager analogy; evidence-based verification discipline
- arXiv 2506.12469, Feng, McDonald, Zhang / UW (2025) — autonomy levels framework; parallelism decomposition; human↔agent coordination models
