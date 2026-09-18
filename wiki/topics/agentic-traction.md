# Agentic Engineering — Agent Traction by Task Type

> Part of R-009. Where agents get vs. lack traction — empirically grounded. A first-class input to the do-vs-delegate decision (Branch 10B).

The do-vs-delegate decision is not binary and not static. Agents gain traction on some tasks and lack it on others, and the line is moving as models improve. This page catalogs the empirical and practical findings on where that line sits as of mid-2026.

---

## Empirical Baseline

### arXiv 2506.12347 — Kumar et al., Microsoft (2025)

19 professional developers used Cursor Agent on 33 real open-source issues they had previously worked on. Results:

**Overall:** ~50% full or patch success on real-world issues.

**Where agents got traction:**
- Code generation and structural changes (adding features, implementing well-specified logic)
- Single-file or well-scoped changes where the target location is clear
- Tasks where the developer could provide clear contextual + expert information

**Where agents failed or struggled:**
- **Localization / debugging** — finding *where* in the codebase an issue lives. P12: "I think the main part [of solving the issue] was finding where to put the code, so it might have been marginally faster to do it myself."
- **Debugging loops** — the "convert a repro into a test" loop that requires iterative understanding of a failing system. P8: agent "not too great or useful at the debugging and converting-a-repro-into-a-test loop."
- **Environmental commands** — basic setup, tooling, environment management. P11: "It's puzzling to me why [the agent is] so good at generating code but bad at dealing with basic environmental commands."
- **Tacit knowledge** — conventions, social context of the repo, undocumented patterns. Developers found it hard to even articulate this knowledge in prompts.

**A key nuance:** The study found that premature stopping (developers cutting off the agent mid-run) was most common in **39% of responses where the agent performed >3 actions** (vs. 9% for ≤3 actions). The agent may have been gaining traction that the developer didn't let it complete.

---

## The Traction/Friction Matrix

Based on the empirical study, community practice, and the source literature:

### High traction (delegate confidently)

| Task type | Why it works | Notes |
|---|---|---|
| Boilerplate generation | Clear template; easy to verify | Accept output more liberally; review for correctness |
| CRUD implementations | Structured, specifiable, testable | Write clear acceptance criteria; agent handles volume |
| Test writing (from spec) | Structured output; verifiable against spec | Review tests harder than the code they test |
| Refactoring to a pattern | Clear before/after; testable | Provide an example of the target pattern |
| Documentation | Low blast radius; human-reviewable | Check for accuracy and completeness |
| Single-file logic changes | Bounded scope; easy to diff | Specify file bounds explicitly |
| Well-understood algorithms | Specifiable correctness criterion | Provide test cases in the brief |
| Format/style transformations | Mechanical; objectively verifiable | CI/linter can gate |

### Moderate traction (delegate with tighter bounds)

| Task type | Why it's harder | Strategy |
|---|---|---|
| Multi-file refactors | Risk of scope bleed; integration errors | Specify every file in scope explicitly |
| API integrations | Environmental + tacit knowledge | Provide the target API's docs or a working example |
| Debugging simple failures | Localization is where agents slip | Specify the exact file/line range first |
| Test writing (exploratory) | Agent may miss edge cases | Review for coverage; specify the classes of failure you care about |
| Architecture changes | High blast radius; hard to verify | Use smaller, bounded sub-tasks |
| Greenfield module design | Agent makes structural choices you may not agree with | Specify the interface and constraints; let agent fill the implementation |

### Low traction (do it yourself, or delegate with extreme caution)

| Task type | Why it fails | Notes |
|---|---|---|
| Novel algorithm development | No clear specifiable correctness; agent hallucinates plausibility | Do it yourself; use agent for implementation once you have the algorithm |
| Debugging complex, ambiguous failures | Requires localization + tacit knowledge + iterative hypothesis testing | Do yourself; use agent for specific sub-hypotheses |
| Environmental setup / devops debugging | Agents consistently struggle (P11 in the study) | Do it yourself, or provide very specific scripted steps |
| Decisions requiring product judgment | Agent has no taste | You must set the bar; don't delegate the judgment |
| Security-critical logic | High blast radius; hard to verify correctness | At minimum: do the design yourself; delegate only the mechanical implementation |
| Tasks requiring institutional knowledge | Tacit knowledge can't be fully articulated in a prompt | Do yourself, or invest in encoding the knowledge in AGENTS.md/CLAUDE.md first |
| Concurrency and correctness-critical code | Agent can produce plausible but subtly wrong code | Strong test suite required before delegation; review intensely |

---

## The Moving Line

The traction/friction boundary is not static. As models improve:

**Improving:** Code generation quality; multi-file coordination; test writing; documentation; standard API integrations; well-understood algorithm implementations.

**Stubbornly hard:** Tacit knowledge (by definition, it's hard to articulate); novel problem-solving where the correct approach isn't known; product judgment and taste (what to build, what "good" means); environmental debugging; codebase localization in large, poorly-documented codebases.

**The strategic implication:** Stay current on where the line is. Tasks that were low-traction in 2024 may be moderate-traction in 2026. Periodically re-run the traction assessment for your domain.

---

## The Traction Assessment

Before delegating a task, run this quick triage:

**1. Can I specify it?**
If I can't write clear acceptance criteria + constraints + a falsifiable done-criteria, the task isn't ready to delegate. Invest in specification first; delegation second.

**2. Is there tacit knowledge the agent can't have?**
If the task requires knowing why the codebase is structured a certain way, or understanding conventions that aren't documented, the agent will get it wrong in subtle ways. Either encode the knowledge (AGENTS.md, brief context) or do it yourself.

**3. What's the blast radius if it goes wrong?**
High blast radius (production data, security logic, API contracts) → tighter bounds, stronger verification, or manual execution. Low blast radius (dev-only scripts, test utilities, documentation) → wider bounds, lighter verification.

**4. Can I verify the output efficiently?**
If verifying the output requires more effort than doing it, delegation doesn't pay. Agent-written tests (that I review) shift this calculus significantly — verification can be automated.

**5. Does the agent have traction on this class of problem?**
Use the matrix above. If it's in the low-traction zone, do it yourself — delegating won't save time and may create cleanup work.

---

## Strategic Tier Regression vs. Fear-Driven Avoidance

The same behavior — doing the work yourself instead of delegating — means opposite things depending on the reasoning:

**Strategic tier regression (T6 behavior):** "Agents lack traction on this class of problem (novel algorithm, debugging an obscure failure, tacit-knowledge-dependent architecture decision). Delegating would produce output I can't verify without doing the work myself. I'll do it; I can use the agent for the parts that benefit from it."

**Fear-driven avoidance (T0 reflex):** "Delegating feels unsafe. I'm not sure the agent will get it right. I'll just do it myself." The task may be entirely in the high-traction zone; the avoidance is about comfort, not strategy.

**How to distinguish:** The strategic regression is *specific* ("this particular class of problem has low agent traction because of X") and *bounded* ("I'll delegate the implementation once I have the design"). The fear-driven avoidance is *general* ("I just don't trust the agent on this") and *unconditional*.

A T4–T6 engineer who never does work themselves is not the goal. Neither is a T0 engineer who never delegates. The goal is accurate, real-time assessment of where agent traction is sufficient for the task at hand.

---

## Agent Traction and Prompt Quality

The traction/friction matrix assumes a competent brief. A poorly-scoped or vague brief can move a high-traction task into the low-traction zone:

- A well-scoped refactoring task with clear before/after examples: high traction.
- The same task with "refactor the auth module to be cleaner": low traction (agents can't define "cleaner").

Conversely, the right brief can move some moderate-traction tasks into high-traction:
- Debugging: low traction without specification. But "the test `test_rate_limit_header` fails when `X-RateLimit-Remaining` is 0; the expected behavior is Y; here is the relevant code in `middleware/auth.py:45-80`" — now it's a well-specified implementation task with moderate traction.

The brief is the leverage.

---

## See Also

- [Orthogonal Shift](agentic-orthogonal-shift.md) — the shift from "I control each step" to "I verify the outcome"; the do-vs-delegate decision is part of this shift
- [Branch Ladders](agentic-branch-ladders.md) — Branch 10B (Do-It-vs-Delegate) operationalises this assessment
- [Skew Profiles](agentic-skew-profiles.md) — how traction awareness relates to the fear-driven avoidance vs. strategic regression distinction

## Sources

- arXiv 2506.12347, Kumar et al., Microsoft (2025) — `sources/arxiv-2506.12347-notes.md` — the primary empirical source; 19 developers, 33 issues, Cursor Agent
- Addy Osmani, "Agentic Engineering" (Feb 2026) — `sources/addy-osmani-agentic-engineering-notes.md`
- Simon Willison, "Vibe Engineering" (Oct 2025) — `sources/simon-willison-vibe-engineering-notes.md` — the "manager of weird digital interns who will absolutely cheat" framing; tacit knowledge barriers
