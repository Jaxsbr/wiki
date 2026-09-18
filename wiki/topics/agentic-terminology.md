# Agentic Engineering — Terminology Disambiguation

> Part of R-009. The field blurs these terms habitually. This page picks a house style, states it, and adjudicates. Each term is traced to its coinage or narrowing.

---

## The Core Terms

### Vibe Coding

**Strict definition (Karpathy, Jan 2025; Willison Mar 2025):** Building software with an LLM *without reviewing the code it writes*. Karpathy's original framing: "forget that the code even exists." The acceptance criterion is: "it kind of works." There is no verification loop.

Willison's golden rule for *not* vibe coding: "I won't commit any code to my repository if I couldn't explain exactly what it does to somebody else." If you cannot pass this test, you are vibe coding.

**Who coined it:** Karpathy, January 2025.

**When it is and isn't accurate:** Vibe coding is a specific practice, not a derogatory label for all AI-assisted development. Experts who use AI heavily but review, test, and can explain the output are *not* vibe coding. The term has drifted colloquially to mean "any AI-assisted programming" — that usage is inaccurate and the wiki uses the strict definition.

**Context:** Appropriate for: prototypes, throwaway scripts, personal tools where correctness is non-critical. Inappropriate for: production code, anything another person depends on, anything with security/correctness requirements.

---

### Vibe Engineering

**Definition (Willison, Oct 2025):** The accountable, professional end of LLM-assisted development. Willison's term for building *with* LLMs while staying fully responsible for architecture, quality, and correctness. He later noted (Feb 2026) that the field has largely converged on "agentic engineering" instead.

**The 12 enabling practices** Willison identified that LLM tools amplify:
1. Automated testing — lets you trust what the agent produced
2. Planning and spec-writing — the spec is the leverage
3. Documentation culture — clarifies intent before generation
4. Version control discipline — makes agent mistakes reversible
5. Effective automation — existing automation skills transfer to agent orchestration
6. Code review culture — the instinct to verify before shipping
7. Management skills — delegation, feedback loops, knowing when to take over
8. Manual QA — the ability to test what the agent claims to have done
9. Research skills — knowing how to evaluate whether agent output is credible
10. Preview environments — safe places for agent output to run before prod
11. Outsourcing instinct — knowing what to hand off and to whom (or what)
12. Updated estimation sense — calibrating how long agent-assisted work actually takes

**Why this list matters:** Each practice is something senior engineers already have that becomes an amplifier with AI. Juniors who lack these amplifiers don't benefit as much — or risk the deskilling failure (generating without understanding).

---

### Agentic Engineering

**Definition (Osmani, Feb 2026; Willison Feb 2026):** The professional practice of using AI agents to implement software while staying fully accountable for architecture, quality, correctness, and product judgment. Agents implement; humans own.

Distinguishing markers from vibe coding:
- Every diff is reviewed
- A test suite is required before delegation is considered trustworthy
- The human can explain what was built and why it works
- Quality gates (CI, types, evals) are the merge criterion, not "it ran once"

Distinguishing markers from simple AI-assisted coding:
- The AI operates autonomously across multiple steps (file edits, tool use, command execution) rather than generating single chunks for human assembly
- The human has stepped out of the loop and verifies by evidence, rather than reading every line in-flow
- The unit of work is a bounded task, not a prompt-chunk

**Why "agentic":** It emphasizes the agent's autonomy (it acts, not just generates) and the engineer's role as delegator and verifier rather than author.

---

### AI-Assisted Coding

**Definition:** LLM writes code; human reviews, tests, and can explain every line. Encompasses everything from autocomplete through conversational generation. Not vibe coding because the human retains full understanding and authorship.

**Position in the spectrum:**
```
Vibe coding ← (no review) | (full review) → AI-assisted coding → Agentic engineering
```
The right end of AI-assisted coding shades into agentic engineering when the AI starts executing multi-step tasks autonomously rather than just generating chunks.

---

### Agentic Coding (as distinct from agentic engineering)

Used by some sources as a synonym for agentic engineering. Osmani uses "agentic engineering" specifically to emphasize professional accountability. Where the two appear in the same text, "agentic coding" tends to mean the *technical pattern* (agent executing code), while "agentic engineering" means the *professional practice* (discipline, accountability, quality gates).

---

## Role Terms

### AI Engineer

**Definition (swyx, "The Rise of the AI Engineer," Latent Space, 2023):** An engineer who builds products *with* LLMs, agents, and RAG via APIs — as distinct from an ML Engineer who trains and improves models.

Key distinction from swyx: "When shipping AI products, you want engineers, not researchers." AI Engineers need software engineering skills, not PyTorch or ML credentials. The base is software engineering; the differentiator is knowing how to productize foundation models.

**Market prediction:** swyx predicted ~10x more AI Engineer than ML Engineer roles within 5 years of writing (2023). The ratio has shifted significantly since.

---

### ML Engineer

**Definition:** Engineers who train, evaluate, and improve ML models. Require statistical ML knowledge, PyTorch/JAX, dataset pipelines, training infrastructure. Distinct from AI Engineers who productize existing models.

---

### Agent Engineer

**Definition (community usage):** An engineer who builds and operates agents — the tooling, harness, MCP servers, and orchestration infrastructure. Focused on the *infrastructure* of agent systems, not just using agents to build things.

---

### Agentic Engineer

**Definition:** An engineer who *uses* agents to build software — the human in the developer–agent collaboration. Distinct from "agent engineer" (builds the agents) in the same way "uses Docker" is distinct from "maintains Docker."

**Usage note:** "Agentic engineer" and "agent engineer" are frequently muddled. The wiki uses them as defined here.

---

## Autonomy Scales

The field has **multiple competing L0–L5 autonomy scales** with no canonical numbering. Present one adapted scale and note the others.

### Adapted Scale (based on Feng, McDonald, Zhang / arXiv 2506.12469, 2025)

This framework is user-centered: levels are defined by **what role the user plays** when interacting with the agent.

| Level | User Role | Description |
|---|---|---|
| L1 | Operator | User retains full ownership of planning. Agent only acts when explicitly invoked or proposes actions requiring approval before execution. |
| L2 | Collaborator | User and agent collaboratively plan and execute. Neither takes full lead. |
| L3 | Consultant | Agent takes the lead but consults user for expert knowledge at key moments. A training period may be needed. |
| L4 | Approver | User plays a passive role; only required when the agent hits a blocker. Risk of rubber-stamping. |
| L5 | Observer | Fully autonomous. No means of user input or direction. Emergency off-switch only. |

**Key insight from Feng et al.:** Autonomy is a *design decision* independent of capability. A highly capable agent can be constrained to L1; a limited agent can operate at L5 for well-scoped tasks. "More autonomy does not simply mean a better agent."

**The hard jump:** The qualitative shift is most pronounced at L3, where the agent begins to *take the lead* and the user transitions from collaborator to consultant. This requires a "training period" for the agent to learn when and how to consult.

**Attribution note:** The brief attributes arXiv 2506.12469 to "James Read" — the actual authors are Feng, McDonald, and Zhang (University of Washington). Verify before citing.

### Other Scales in Use

- **Karpathy's autonomy slider:** Cursor Tab → cmd+K → Agent. A product design pattern, not a practitioner maturity scale. Three positions: inline completion, conversational generation, full agent.
- **Osmani's spectrum:** Vibe coding → AI-assisted → agentic engineering. Framed around accountability, not autonomy level.
- **The tier spine in this wiki (T0–T6):** Practitioner maturity, not agent autonomy. Related but distinct — a T4 Operator is choosing to run agents at L3–L4 autonomy; a T2 engineer may also run agents at L3–L4 autonomy but lacks the verification and bounds-setting skills to do it safely.

**Recurring finding across scales:** The hard jump — from "review everything" to "conditional autonomy / supervise high-level intent" — maps onto Transition 2 (T3→T4 in this wiki) regardless of which scale you use. The specific label differs; the qualitative discontinuity is consistent.

---

## Prompt Engineering vs. Context Engineering

### Prompt Engineering

Optimizing a single-turn instruction to improve model output. Single-turn or few-turn. Focused on the content and structure of the instruction itself: framing, examples, output-format specification, chain-of-thought prompting.

**Where it lives:** Transition 1 (Tiers 0–3). High prompt engineering skill is Branch 1, Rung 3–4.

---

### Context Engineering

Curating the optimal token set across a multi-turn agent — which files, prior outputs, instructions, and memory should be in the context window for each agent step. A superset of prompt engineering: the single-turn instruction is one input to context engineering, but context engineering also covers what gets loaded, when, and at what scope.

**Where it lives:** Transition 2 (Tiers 4–6). Branch 8 (Context Engineering) operationalizes this.

**Why it matters more at higher tiers:** A T2 prompter's context is one conversation window. A T5 orchestrator's context is a fleet of agents with persistent memory, AGENTS.md files, project context, and scope-scoped instructions — all of which must be curated to prevent context rot.

**Key sources:** Anthropic, "Effective context engineering for AI agents"; Philipp Schmid on inner loop vs. outer loop — outer loop is largely a context engineering problem (what does the agent know cross-session?).

---

## Loop Terms

### Inner Loop (Schmid)

Everything that happens *within* one task before responding. Strong agents iterate: edit → test → fix → retest. Weak agents stop at the first edit. The loop structure is fixed by the framework; what the model does inside it is not.

### Middle Loop (Thoughtworks, "Supervisory Engineering")

The operational layer *between* the inner loop (coding) and the outer loop (DevOps/product), created by the volume of AI-generated code. Where human judgment meets machine execution. The supervisory engineer's work: directing (architecture → agent-sized chunks), evaluating (detecting confident nonsense), correcting (synthesizing parallel outputs, gatekeeping CI/CD).

### Outer Loop (Schmid)

Cross-session accumulated knowledge: AGENTS.md, SKILL.md, session handoff documents. Most agents currently lack native outer-loop memory — it must be explicitly maintained by the engineer. The outer loop is the compounding layer: what the agent learns (or is taught) this week improves all future runs.

---

## Other Controlled Vocabulary

| Term | Definition |
|---|---|
| **Software 1.0/2.0/3.0** | Karpathy: explicit code → learned weights → natural language programs ("prompts"). "Software 3.0 is eating 1.0/2.0." |
| **Autonomy slider** | Karpathy: the design pattern of letting users calibrate AI autonomy per task (Cursor Tab → cmd+K → Agent). |
| **Demo vs. product gap** | Karpathy: `works.any()` (demo — one impressive instance) vs. `works.all()` (product — must work for all inputs). An agent that demos well often fails as a product. |
| **Jagged intelligence** | Karpathy: LLMs are strong in complex reasoning, weak in adjacent simple tasks — and have insufficient cognitive self-knowledge about this unevenness. |
| **Generation-verification loop** | Karpathy: the fundamental agentic pattern. Produces output; verifies correctness; iterates. The bottleneck often moves from generation to verification as agents improve. |
| **Spec-driven development** | Building a full specification before any code is generated. The spec is the leverage: vague specs multiply errors; strong specs multiply into precise implementations. |
| **Context rot** | When an agent's context window accumulates noise, contradictions, or stale information over a long run, degrading output quality. A common cause of delegated-run failure. |
| **Blast radius** | The scope of what could go wrong if an agent task fails badly. High blast radius → tighter bounds, more verification, or manual execution. |
| **Agent harness** | The infrastructure around an agent: rules files, skills, sub-agents, MCP servers, background runners, eval suites. The harness is what compounds across tasks. |
| **Agentmaxxing** | Community term for maximizing agent parallelism (multiple agents on git worktrees, branches, or queues simultaneously). Tier-5 behavior; requires integration discipline. |
| **Skill atrophy / deskilling** | Over-delegating until the ability to verify or reason about the output atrophies. The deskilling risk: generating but not understanding; prompting but not debugging. |
| **Brownfield** | Existing codebases with history, tech debt, inconsistent conventions. Most production engineering is brownfield. The solo-greenfield-dyad (one person, new project) is not the default. |
| **Agent-generated tech debt** | Code that "works" but is poorly structured, inconsistently styled, or incomprehensible — because the agent produced it without the engineer understanding it. Accumulates when verification is weak. |

---

## See Also

- [Overview](agentic-engineering-overview.md) — hub and navigation
- [Tier Spine](agentic-tier-spine.md) — the T0–T6 progression
- [Orthogonal Shift](agentic-orthogonal-shift.md) — the Transition-2 boundary in depth
- [Landscape](agentic-landscape.md) — current tools, frameworks, the market

## Sources

- Simon Willison, "Not all AI-assisted programming is vibe coding" (Mar 2025) — `sources/simon-willison-not-vibe-coding-notes.md`
- Simon Willison, "Vibe Engineering" (Oct 2025) — `sources/simon-willison-vibe-engineering-notes.md`
- Addy Osmani, "Agentic Engineering" (Feb 2026) — `sources/addy-osmani-agentic-engineering-notes.md`
- swyx, "The Rise of the AI Engineer" (Latent Space, 2023) — `sources/swyx-ai-engineer-notes.md`
- Karpathy, "Software 3.0" (YC AI Startup School, Jun 2025) — `sources/karpathy-software3-notes.md`
- arXiv 2506.12469, Feng, McDonald, Zhang / UW (2025) — `sources/arxiv-2506.12469-notes.md`
- Philipp Schmid, "Inner Loop vs Outer Loop" — `sources/philipp-schmid-loops-notes.md`
- Thoughtworks, "Supervisory Engineering" — `sources/thoughtworks-supervisory-engineering-notes.md`
