# Agentic Engineering — Overview Hub

> R-009 · 2026-06-23
> A deep knowledge base on the developer→agentic-engineer progression: skill tiers, branch ladders, terminology, self-assessment, and the field landscape.

**Agentic engineering** is what disciplined software professionals do when they use AI agents to implement software — while staying fully accountable for architecture, quality, correctness, and product judgment. It is the professional counterpart to *vibe coding* (building without reviewing the code). The term was popularised by Addy Osmani (Feb 2026) and has largely displaced "vibe engineering" (Simon Willison, Oct 2025) as the field's preferred label for accountable, test-driven, agent-accelerated development.

---

## The Core Claim

There are **two distinct transitions** on the path from traditional engineer to agentic engineer. Almost everyone notices the first; almost everyone underestimates the second.

**Transition 1 — Relocation.** Moving generation from your fingers to a model: autocomplete → conversational/chat prompting → agent-with-tools. The activity relocates; the mental role stays the same. You are still the author, designer, and step-by-step specifier. More prompting skill makes this ceiling arrive faster; it does not raise it.

**Transition 2 — The Orthogonal Shift.** Changing your role from step-by-step specifier to outcome-owner who delegates whole tasks and verifies by evidence. This turns ~90°: less *how*, more *what + within-what-limits + how-I'll-check*. The Transition-1 skills do not extend into this; they are roughly orthogonal to it. Strong IC engineers often struggle *more* here than weaker ones, because the IC's superpower — precise, exhaustive specification — becomes a liability.

---

## Navigation

| Page | Content |
|---|---|
| [Terminology](agentic-terminology.md) | Vibe coding vs. agentic engineering vs. AI Engineer; competing autonomy scales; context engineering vs. prompt engineering |
| [Tier Spine](agentic-tier-spine.md) | 7 trunk tiers T0–T6: indicators, drills, failure modes, bottlenecks |
| [Orthogonal Shift](agentic-orthogonal-shift.md) | T3→T4 deep dive: the six hard Transition-2 competencies; both failure poles; why engineers specifically struggle |
| [Branch Ladders](agentic-branch-ladders.md) | 10 orthogonal skill branches, each with a 4-rung low→high ladder |
| [Fluency Instrument](agentic-fluency-instrument.md) | 6 axes, deterministic gating rule, 24-item retrospective questionnaire, worked examples |
| [Skew Profiles](agentic-skew-profiles.md) | Named recurring shapes: Prescriptive-Prose Veteran, Vibe Coder, Cautious Adopter |
| [Landscape](agentic-landscape.md) | Tool families, agent frameworks, the brownfield reality, where the field is heading |
| [Agent Traction](agentic-traction.md) | What work delegates well vs. poorly; empirical data; the moving line |

---

## The Skill Tree in Brief

**7 trunk tiers** define your overall position. **10 branch ladders** define where you are jagged across skills. **6 fluency axes** produce a deterministic tier verdict. Real engineers are *jagged* — the headline is always a six-value vector, never a scalar.

### Trunk tiers and spine stages

| Tier | Name | Spine Stage |
|---|---|---|
| T0 | Manual Craftsperson | Traditional SWE |
| T1 | Assisted Coder | Traditional SWE |
| T2 | Conversational / Prompt-Driven Coder | AI-assisted coder |
| T3 | Agent Director (in-loop) | AI-assisted coder |
| — | **⭐ THE ORTHOGONAL SHIFT** | T3 → T4 |
| T4 | Agent Operator (out-of-loop) | Agent operator / orchestrator |
| T5 | Agent Orchestrator | Agent operator / orchestrator |
| T6 | Product Builder | Product builder |

### The three Transition-2 gating branches

Branches 3, 5, and 6 gate the tier verdict: **Bounds-Setting**, **Verification/Eval**, and **Parallel Orchestration**. High scores on any other branch enrich the description but cannot raise the tier past what these three permit. A senior engineer with Cognition L2 and Taste L2 but Bounds-Setting L0 is still Tier 3. This is the "Prescriptive-Prose Veteran" — the most important pattern to surface.

---

## Key Sources

All sources fetched and preserved in `sources/`:

| Source | Key Contribution |
|---|---|
| Karpathy, "Software 3.0" (YC AI Startup School, Jun 2025) | 1.0/2.0/3.0 framing; autonomy slider; demo vs. product gap; jagged intelligence |
| swyx, "The Rise of the AI Engineer" (Latent Space, 2023) | AI Engineer role definition; AI Engineer vs. ML Engineer |
| Addy Osmani, "Agentic Engineering" (Feb 2026) | Test-driven delegation; skill-atrophy warning; the spectrum |
| Addy Osmani, "Conductors to Orchestrators" (Jan 2026) | Conductor vs. orchestrator framing; skill indicators |
| Addy Osmani, "The Code Agent Orchestra" (Mar 2026) | Three multi-agent patterns; quality gates; the factory model |
| Simon Willison, "Not all AI-assisted programming is vibe coding" (Mar 2025) | Precise vibe-coding definition; the code-review standard |
| Simon Willison, "Vibe Engineering" (Oct 2025) | 12 enabling practices; "manager of weird digital interns" |
| arXiv 2506.12347 — Microsoft (2025) | Empirical: devs prompt like engineering managers; ~50% success on real issues; premature stopping; traction/failure task taxonomy |
| arXiv 2506.12469 — Feng, McDonald, Zhang / UW (2025) | Five-level autonomy framework (L1 Operator → L5 Observer); autonomy ≠ capability |
| Eleanor Berger, "Working with Asynchronous Coding Agents" | Driver→delegator mindset; spec-before-delegate |
| Philipp Schmid, "Inner Loop vs Outer Loop" | Inner (within-task) vs. outer (cross-session/AGENTS.md) loop |
| Thoughtworks, "Supervisory Engineering" | Middle loop; directing/evaluating/correcting |

---

## Guardrails (Content Rules)

These encode the thesis's core commitments — a checklist for internal consistency:

- Don't flatten the two transitions into one smooth ramp — preserve T2's orthogonality.
- Don't treat prompting mastery (T2) as the end state — it's a documented plateau ("illusion of having arrived").
- Name **both** failure poles (over-boxing AND under-verification/over-trust) at the right tiers.
- Don't imply craft becomes obsolete — it's repositioned as the judgment/verification layer.
- Don't conflate "I read every line" with "I verified it works."
- Don't reward "more checking = better" on Verification — it's calibration; agent-driven QA is the high signal.
- Don't reduce any stage or the instrument to a single scalar.
- Indicators are concrete, first-person, and falsifiable — never adjectives or attitudes.
- Cover brownfield/team/non-solo-greenfield contexts. The solo greenfield dyad is not the default.
- Where practice is unsettled, present competing positions; the "second transition is orthogonal" thesis is where dissent matters most.

## Sources

- All source files in `/workspace/agent/sources/` — see notes files (e.g. `arxiv-2506.12347-notes.md`) for extracted key claims.
