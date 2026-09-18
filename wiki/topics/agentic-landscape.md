# Agentic Engineering — Field Landscape

> Part of R-009. The current territory as of mid-2026: what "agentic engineering" means in practice, the key tool families, the competing role terms, the brownfield reality, and where the field is heading. The far edge is genuinely open.

---

## What "Agentic Engineering" Means in 2026

The term has stabilised around a specific practice: using AI agents (autonomous, multi-step, tool-using) to implement software, while the engineer retains full accountability for architecture, quality, and correctness. Osmani's Feb 2026 framing ("Agentic Engineering") largely displaced Willison's Oct 2025 "vibe engineering" and the earlier "AI-assisted coding" as the field's preferred label for disciplined, accountable, test-driven AI development.

The key indicator that the field has matured past "AI-assisted coding": the agent is no longer a smarter autocomplete. It runs bash commands, edits files across a project, runs tests, iterates on failures, and can work for minutes or hours on a bounded task. The human's role has structurally changed.

**What has NOT changed:** accountability. The code ships under the engineer's name. The architecture is the engineer's. The quality bar is the engineer's. "The agent did it" is not an acceptable explanation for a bug in production.

---

## Tool Families

### Coding Agents (in-editor / CLI)

The primary delivery vehicle for agentic engineering. These run autonomously on a task: edit files, run commands, test, iterate.

| Tool | Type | Key characteristics |
|---|---|---|
| **Claude Code** (Anthropic) | CLI + IDE extension | Sub-agent orchestration, MCP, skills/CLAUDE.md, background runs, worktrees |
| **Cursor Agent** | IDE (VSCode fork) | Native IDE integration; used in arXiv 2506.12347 study; ~50% success on real issues |
| **GitHub Copilot Agent** | IDE + GitHub | Deep GitHub integration; PR-level workflows |
| **Devin** (Cognition) | Cloud + web UI | The first widely-publicised "AI software engineer"; background async tasks |
| **Cline / Roo Cline** | VSCode extension | Open-source, model-agnostic; MCP support; strong community adoption |
| **Aider** | CLI | Open-source; strong at multi-file edits; git-native workflow |

**Capability floor has risen sharply.** In 2023, coding agents were unreliable for anything beyond simple, single-file changes. In 2026, production-grade agents routinely handle multi-file refactors, test-writing, and architecture changes within a bounded scope. The limitation has shifted from capability to *verification* — generation is no longer the bottleneck.

### Orchestration Frameworks

Enable multi-agent workflows, coordination, parallelism. The engineer builds structure; agents fill the structure.

| Framework | Key pattern |
|---|---|
| **Claude Code Workflows** | Script-based orchestration; typed parallel/pipeline; schema-output agents |
| **OpenAI Agents SDK** | Manager pattern, handoff pattern; structured multi-agent coordination |
| **LangGraph** | Graph-based agent workflows; state machines; human-in-the-loop nodes |
| **AutoGen (Microsoft)** | Multi-agent conversation patterns; group chat; nested conversations |

**Three patterns in ascending complexity** (Osmani, "The Code Agent Orchestra," Mar 2026):
1. **Subagents** — manual dependency graph, parallel, no peer comms. Simple, scalable, no coordination overhead.
2. **Agent Teams** — shared task list, peer-to-peer messaging, auto-dependency resolution, file locking. More capable; adds coordination complexity.
3. **Orchestration at Scale** — three-tier tool landscape: in-process / local orchestrators / cloud async. Full fleet management with async results and external memory.

### MCP (Model Context Protocol)

Anthropic's open standard for connecting agents to external tools and services. An MCP server exposes tools (database queries, GitHub operations, file system access, web search, etc.) that any compatible agent can call. The ecosystem has grown rapidly: hundreds of community and commercial MCP servers as of mid-2026.

**Why it matters for the landscape:** MCP shifts tool integration from bespoke agent-specific plugins to a standardised interface. An engineer who builds a custom MCP server for their internal tools gets that capability for any MCP-compatible agent.

### Spec-Driven Development Tools

Tools that front-load specification before generation.

| Tool | Approach |
|---|---|
| **GitHub Kiro** | Spec files that feed agent implementation runs |
| **Spec Kit (Martin Fowler)** | Spec-as-source; specification drives agent-generated implementation |
| **BMAD-METHOD** | Community method for structured AI development briefs |

The pattern these tools share: the spec is the leverage. Vague specs multiply errors across the fleet; strong specs multiply into precise implementations. This is the tooling embodiment of Intent & Spec Writing (Branch 2) and Bounds-Setting (Branch 3).

### Eval / QA Infrastructure

The verification layer that the later tiers depend on.

| Tool/Approach | Key characteristic |
|---|---|
| **DeepEval** | Eval harness framework for LLM output quality |
| **Agent-driven test generation** | The agent writes tests; engineer reviews tests harder than code |
| **LLM-as-judge** | Use a model to evaluate agent output; requires human review of low-confidence slices |
| **CI/types gates** | Standard CI plus type-checking as the merge gate for agent PRs |

**The QA transformation** is the sleeper indicator of Tier-4 crossing: from hand-testing every path → directing an agent to write tests, then reviewing the tests more carefully than the implementation.

---

## The Brownfield Reality

Most of the discourse about agentic engineering assumes a solo engineer on a greenfield project (the "solo-greenfield dyad"). Most production engineering is brownfield:

- Existing codebase with years of history and tech debt
- Conventions that are implicit, undocumented, or inconsistent
- Other engineers with expectations about code quality and style
- Production systems with real blast radius for mistakes
- CI/CD pipelines with real gates
- Code review from people who didn't write the brief

**What changes in brownfield:**

- **Context engineering becomes harder.** The agent needs to understand implicit conventions that no CLAUDE.md captures. Tacit knowledge (arXiv 2506.12347: "hard to even articulate in prompts") is a real barrier.
- **Blast radius is larger.** A wrong change in a brownfield codebase has more surface area for failures. Bounds-setting (Branch 3) and risk management (Branch 9) are correspondingly more critical.
- **Verification infrastructure may not exist.** Many brownfield codebases have weak test suites. The engineer may need to build verification infrastructure before safe delegation is possible.
- **The agent can't debug its way through ambiguity.** arXiv 2506.12347: agents struggle most with localization (finding where in the codebase an issue lives) and tacit knowledge. These are harder in brownfield.
- **Tech debt from agent-generated code.** Code that "works" but is poorly structured, inconsistently styled, or incomprehensible accumulates if verification is weak. In brownfield, this compounds with existing debt.

**Strategies for brownfield agentic engineering:**
1. Build the test suite first, before delegating.
2. Write a high-quality CLAUDE.md (or AGENTS.md) that encodes the implicit conventions.
3. Set tighter bounds than you would on greenfield — constrain not just what to build but exactly which files the agent may touch.
4. Use incremental delegation: start with well-scoped, low-blast-radius tasks. Expand scope as trust calibrates.
5. Review agent PRs with teammates, at least for the first runs in a new area.

---

## Teams and Multi-Engineer Coordination

The solo-agent dyad scales to a team differently than expected:

**The integration problem.** When multiple engineers are each running agents, the merge conflicts and integration issues multiply. An agent can write code that's consistent with the brief but inconsistent with what a teammate's agent wrote yesterday.

**Shared harness as the solution.** High-performing teams build shared AGENTS.md, shared skills, shared MCP servers, and shared eval infrastructure. The harness compounds across the team, not just for one engineer.

**The new coordination layer.** Thoughtworks ("Supervisory Engineering"): the middle loop (between inner/coding and outer/DevOps loops) is where human judgment meets agent execution. At team scale, this layer requires deliberate design: who reviews what, which blast-radius threshold triggers a second reviewer, how agent output integrates with the rest of the pipeline.

**Branch 9 (Risk, Security & Human↔Agent Coordination)** becomes load-bearing at team scale — it's pre-emergent below T4 but critical at T5–T6.

---

## Where the Field Is Heading

**The bottleneck has shifted.** Osmani (Mar 2026): "Generation is no longer the bottleneck — verification is." As agents get more capable, the limit on how fast an engineer can ship is not how fast the agent generates code; it's how fast the engineer can verify that the output is correct.

**Eval-driven development** is emerging as the disciplined response: defining what "correct" means before the agent runs, then measuring against it. This mirrors test-driven development but operates at the agent-harness level.

**The T-shaped builder** (Tier 6) as the product of the progression. Not just someone who uses agents well, but someone who leads with product judgment and can take an intent to a shipped product across eng + QA + product. This profile is genuinely rare in 2026 — the frontier is still being defined.

**Spec-driven development** as the long-term structural shift. If the spec is the leverage, and agents can implement correct specs reliably, then the upstream bottleneck moves to *specification quality*. Engineers who can write excellent specs — clear intent, tight constraints, falsifiable done-criteria — become disproportionately valuable.

**The junior-developer question** is open and serious. arXiv 2506.12347: "The junior developer workforce may be more impacted by the introduction of AI into software development teams." Agents currently behave like junior engineers: good at code generation, weak at localization, debugging, and tacit knowledge. If agents improve in those areas, the case for hiring juniors to do that work weakens. Osmani's counterclaim: "The fundamentals matter more, not less" — juniors who build genuine craft become the senior engineers who can verify and direct agents effectively; juniors who skip craft become unable to do either.

**The far edge is open.** T6 (Product Builder) is a genuinely unsettled frontier. The practices, patterns, and failure modes of a single person taking a complex product from intent to ship via agents across eng+QA+product+design have not been fully catalogued. This is where the next generation of practices is being invented.

---

## Competing Position-Names in the Field

The discourse uses several overlapping terms for adjacent roles and practices. Quick disambiguation:

| Term | Who uses it | What it means |
|---|---|---|
| **AI Engineer** | swyx / Latent Space (2023) | Builds products *with* LLMs/agents/RAG; software engineering base, no ML training required |
| **Agentic Engineer** | Osmani, Willison (2026) | Uses agents to build software; full accountability for outcome |
| **Agent Engineer** | Community | Builds and operates agent infrastructure (MCP, harness, frameworks) |
| **ML Engineer** | Industry standard | Trains and improves models; PyTorch, datasets, training infrastructure |
| **Conductor** | Osmani (Jan 2026) | Single-agent, synchronous, tight feedback loop; ~100% human engagement while AI works |
| **Orchestrator** | Osmani (Jan 2026) | Fleet of agents, async, front-loaded spec + back-loaded review |
| **Supervisory Engineer** | Thoughtworks | Operates the middle loop; directs, evaluates, corrects at the architecture/harness level |
| **Vibe Coder** | Karpathy (Jan 2025) | Builds without reviewing code; not a professional practice |

---

## See Also

- [Terminology](agentic-terminology.md) — precise definitions and disambiguation
- [Overview](agentic-engineering-overview.md) — hub and navigation
- [Tier Spine](agentic-tier-spine.md) — where landscape patterns map to maturity tiers
- [Agent Traction](agentic-traction.md) — what work delegates well vs. poorly

## Sources

- Addy Osmani, "Agentic Engineering" (Feb 2026) — `sources/addy-osmani-agentic-engineering-notes.md`
- Addy Osmani, "Conductors to Orchestrators" (Jan 2026) — `sources/addy-osmani-conductors-orchestrators-notes.md`
- Addy Osmani, "The Code Agent Orchestra" (Mar 2026) — `sources/addy-osmani-orchestra-notes.md`
- arXiv 2506.12347, Kumar et al., Microsoft (2025) — `sources/arxiv-2506.12347-notes.md`
- swyx, "The Rise of the AI Engineer" (Latent Space, 2023) — `sources/swyx-ai-engineer-notes.md`
- Thoughtworks, "Supervisory Engineering" — `sources/thoughtworks-supervisory-engineering-notes.md`
- Philipp Schmid, "Inner Loop vs Outer Loop" — `sources/philipp-schmid-loops-notes.md`
