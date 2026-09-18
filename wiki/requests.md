# Research Requests

Registry of every research request Jaco makes. **Before starting any new
research, scan this list.** If a request looks the same as or similar to an
earlier one, confirm with Jaco first: does he mean the same thing as before
(just link the existing pages), an amendment to it, or genuinely new work?

Entry format:

```
## R-NNN — <short title>
- **Date:** YYYY-MM-DD
- **Request:** what Jaco asked, verbatim or close paraphrase
- **Status:** open | answered | superseded by R-NNN
- **Pages:** [page](topics/page.md), ...
```

## R-013 — TypeSafe AI and System One decision models
- **Date:** 2026-09-19
- **Request:** Research the TypeSafe AI system from its documentation: how it works, what problems it can solve, how it differs from LLMs, and whether the approach is likely to become locally hostable or reproducible like open-weight LLMs. Use parallel research and synthesize the result into the wiki.
- **Status:** answered
- **Pages:**
  - [typesafe-ai-system-one](topics/typesafe-ai-system-one.md) — mechanics, use cases, LLM comparison, limits, local-hosting forecast, and reproduction plan

## R-012 — AI agent permission models: Claude Code and Codex CLI
- **Date:** 2026-07-30
- **Request:** Synthesize a research topic covering Claude Code and Codex CLI permission models — all permutations, what each gives the user, and tradeoffs. Complementary piece on what "sandbox" actually means mechanically (Docker? OS-level? network rules?). Seed: smartscope.blog Codex approval modes article.
- **Status:** answered
- **Pages:**
  - [ai-agent-permissions](topics/ai-agent-permissions.md) — hub: quick comparison table, the two-layer model (permissions vs sandbox), decision guide, links
  - [claude-code-permissions](topics/claude-code-permissions.md) — all 6 modes, configuration syntax (settings.json layers, patterns, hooks), tradeoffs table
  - [codex-permissions](topics/codex-permissions.md) — approval modes × sandbox levels, two-phase runtime, requirements.toml, permission profiles (beta), network control
  - [concepts/agent-sandbox](concepts/agent-sandbox.md) — what the sandbox actually is: Seatbelt, bubblewrap, seccomp, network proxy, Docker relationship, setup steps, known limitations

## R-011 — Open Knowledge Format (OKF) and multi-product wiki architecture
- **Date:** 2026-07-09
- **Request:** Deep research on (1) Google Cloud OKF blog post and (2) Karpathy's LLM Wiki gist. The OKF standard formalizes the approach ver-kyker uses. Goal: design a system for an agent to build an internal wiki spanning many products, and expose entry points so content producers (e.g., software teams) can update their own product wiki pages.
- **Status:** answered
- **Pages:**
  - [llm-wiki-pattern](topics/llm-wiki-pattern.md) — Karpathy's foundational pattern: 3 layers, 3 operations, why LLMs outperform humans at wiki maintenance
  - [open-knowledge-format](topics/open-knowledge-format.md) — OKF v0.1 spec, design principles, bundle format, YAML frontmatter, reference implementations
  - [multi-product-wiki-architecture](topics/multi-product-wiki-architecture.md) — how to build the system Jaco described: federated bundles, entry points for content producers, agent consumption patterns
  - [concepts/okf-bundle](concepts/okf-bundle.md) — OKF bundle anatomy: concept files, frontmatter schema, index.md, log.md, cross-linking rules

## R-010 — Context and memory engineering in agentic AI systems
- **Date:** 2026-07-03
- **Request:** Deep research on context vs. memory engineering in agentic AI. Base source: machinelearningmastery.com/context-vs-memory-engineering-in-agentic-ai-systems/. Extend with: concrete examples of where/how to apply each, critiques (over-engineered? costly? slow?), and trade-offs between approaches.
- **Status:** answered
- **Pages:**
  - [context-memory-engineering-overview](topics/context-memory-engineering-overview.md) — hub: two disciplines, retrieval boundary, context rot, failure taxonomy
  - [context-engineering](topics/context-engineering.md) — techniques, production examples, compression tools, cost data
  - [context-engineering-critiques](topics/context-engineering-critiques.md) — rebrand debate, long context vs RAG, compression backfire, when simpler wins
  - [agent-memory-engineering](topics/agent-memory-engineering.md) — 4 memory types with production examples per system
  - [agent-memory-platforms](topics/agent-memory-platforms.md) — platform comparison, pricing, latency benchmarks
  - [agent-memory-critiques](topics/agent-memory-critiques.md) — security, complexity, staleness, stateless argument

## R-009 — Agentic engineering skill framework: tier spine, branch ladders, self-assessment instrument
- **Date:** 2026-06-23
- **Request:** Build a deep knowledge base on the developer→agentic-engineer progression: 7 trunk tiers (T0–T6), 10 orthogonal branch ladders, 6 fluency axes with a deterministic gating rule, a self-administered 24-item instrument, named skew profiles, the two-transition model (T1: prompting fluency → T2: orthogonal delegation shift), terminology disambiguation (vibe coding/agentic engineering/AI Engineer etc.), and the field landscape. Extensive spec provided with seed sources (Karpathy, swyx, Addy Osmani, Simon Willison, Anthropic, arXiv 2506.12469, arXiv 2506.12347, Eleanor Berger, Philipp Schmid, Thoughtworks, and others).
- **Status:** answered
- **Pages:**
  - [agentic-engineering-overview](topics/agentic-engineering-overview.md) — hub: two transitions, tier map, navigation, guardrails
  - [agentic-terminology](topics/agentic-terminology.md) — vibe coding/agentic engineering/AI Engineer; autonomy scales; loop terms; controlled vocabulary
  - [agentic-tier-spine](topics/agentic-tier-spine.md) — T0–T6 with indicators, bottlenecks, drills, failure modes
  - [agentic-orthogonal-shift](topics/agentic-orthogonal-shift.md) — T3→T4 centerpiece; Six Transition-2 Competencies; both failure poles; crossing drills
  - [agentic-branch-ladders](topics/agentic-branch-ladders.md) — 10 branches × 4 rungs; 3 gating branches; jaggedness grid
  - [agentic-fluency-instrument](topics/agentic-fluency-instrument.md) — 6 axes; gating rule; 24-item questionnaire; 3 worked examples
  - [agentic-skew-profiles](topics/agentic-skew-profiles.md) — Prescriptive-Prose Veteran, Vibe Coder, Cautious Adopter
  - [agentic-landscape](topics/agentic-landscape.md) — tool families, brownfield, teams, field direction
  - [agentic-traction](topics/agentic-traction.md) — traction matrix; traction assessment; do-vs-delegate discipline

## R-008 — Incremental games: mechanics, recipes, enjoyment, replayability, examples + deep psychology
- **Date:** 2026-06-17
- **Request:** Research incremental games — how they work, what makes them enjoyable and replayable (mechanics, recipes, game examples). Expanded 2026-06-17: full structural design reference covering all 10 topic areas per the comprehensive brief.
- **Status:** answered
- **Pages (structural design pass — 2026-06-17):**
  - [incremental-games-overview](topics/incremental-games-overview.md) — hub: definition, genre spectrum, history timeline 2002–2021, canonical loop diagram; links to all sub-pages
  - [incremental-games-core-loop](topics/incremental-games-core-loop.md) — produce→accumulate→spend; "numbers going up" as mechanic; time as cost; active/passive income; offline progress
  - [incremental-games-resources](topics/incremental-games-resources.md) — currency tiers; generators; conversion chains (Kittens Game); soft caps; diminishing returns
  - [incremental-games-upgrades](topics/incremental-games-upgrades.md) — linear/multiplicative/exponential tiers; milestones; tree vs list; psychology of "one more upgrade"
  - [incremental-games-prestige](topics/incremental-games-prestige.md) — prestige innovation; first-prestige design; currency formulas (5 games); multi-layer systems (AD/CH/RG); anti-frustration design
  - [incremental-games-scaling](topics/incremental-games-scaling.md) — big number notation (K/M/B/T, AA/AB, scientific, log); cost curve formulas; walls; bumpy progression; float precision
  - [incremental-games-automation](topics/incremental-games-automation.md) — automation arc; 4 unlock pattern types; milestone rewards; achievement types; auto-buyer design
  - [incremental-games-recipes](topics/incremental-games-recipes.md) — 7 full structural templates: Cookie Clicker, Antimatter Dimensions, Kittens Game, Universal Paperclips, AdVenture Capitalist, Incremental RPG (Melvor/NGU/CH), A Dark Room
  - [incremental-games-pacing](topics/incremental-games-pacing.md) — unlock cadence; mid-game doldrums (causes + solutions); offline catch-up; daily login; end-game problem; session model
  - [incremental-games-monetization](topics/incremental-games-monetization.md) — ethical patterns; predatory patterns; designer ethics test; notable clean implementations
- **Pages (psychology pass — earlier):**
  - [incremental-game-psychology](topics/incremental-game-psychology.md) — 10-section psychology analysis with 15 design principles
  - [concepts/prestige-loop](concepts/prestige-loop.md) — prestige mechanic: emotional arc, formulas, layered systems, design rules
  - [concepts/incremental-genre-fusion](concepts/incremental-genre-fusion.md) — all genre fusions (Melvor/Kittens/A Dark Room/Universal Paperclips/VS) + failure modes + fusion design test
- **Pages (catalogue pass — 2026-06-17):**
  - [incremental-games-catalogue](topics/incremental-games-catalogue.md) — 30-game per-game deep dives: Pioneering/Classic, Browser/PC, Steam, Mobile, Hybrid; Steam IDs, header images, quick-reference table
  - [incremental-games-mechanics](topics/incremental-games-mechanics.md) — 7 core mechanics, prestige formula, idle vs. active design, number inflation, genre taxonomy, design quality rubric
  - [incremental-progression-examples](topics/incremental-progression-examples.md) — 10 concrete upgrade/prestige sequences with real numbers; prestige formula comparison table

## R-007 — Atomic science for game design: jargon, mechanics, visual direction
- **Date:** 2026-06-17
- **Request:** Research atoms and how they work; capture all field jargon. Goals: (1) build a game themed on atoms/protons/electrons with realistic grounding informing fictional parts, (2) capture terms and purpose of things in the atomic realm, (3) capture art and reference imagery/videos that can inform visual direction.
- **Status:** answered
- **Pages:**
  - [atomic-physics-for-game-design](topics/atomic-physics-for-game-design.md) — hub: jargon quick-reference, four-force table, 19-mechanic design theme index; links to all six deep-dives
  - [atomic-structure](topics/atomic-structure.md) — all particles (quarks→muons), shells (K/L/M/N), orbitals (s/p/d/f), nuclear structure
  - [atomic-behaviors](topics/atomic-behaviors.md) — four forces, electron excitation/ionization, radioactive decay (α/β/γ), fission/fusion/reactor, bonding
  - [atomic-quantum](topics/atomic-quantum.md) — all quantum concepts (superposition, entanglement, tunneling, Pauli exclusion) with mechanic translations
  - [atomic-energy-radiation](topics/atomic-energy-radiation.md) — EM spectrum, radiation, dose units, periodic table, 9 key elements for game design
  - [atomic-visual-design](topics/atomic-visual-design.md) — Bohr model/orbitals/spectra; Oppenheimer/Kurzgesagt film refs; CPK colors; Cherenkov glow; 4 art directions (Scientific Realism / Retro Atomic / Quantum Abstract / Nuclear Industrial)
  - [atomic-game-design-catalogue](topics/atomic-game-design-catalogue.md) — 15 physics games; 10 atomic concepts → concrete mechanics; 7 genre fit ratings; realism spectrum; arena survivor concept "VALENCE"

## R-006 — Arena survivor genre: deep knowledge base (art, mechanics, skill)
- **Date:** 2026-06-15
- **Request:** Research arena survivor games (Vampire Survivors genre). Determine art styles, perspectives, and visual effects; core mechanics; how player skill is learned and applied. Reference article: reddit.com/r/gamedev/comments/sitab0. Goal: deep knowledge base of how the genre works, what makes it fun and replayable, what art and mechanics work well.
- **Status:** answered
- **Pages:**
  - [topics/arena-survivor-overview](topics/arena-survivor-overview.md) — synthesis hub: genre formula, key games, design principles
  - [topics/arena-survivor-visual-design](topics/arena-survivor-visual-design.md) — art styles, perspectives, VFX, HUD, enemy design
  - [topics/arena-survivor-mechanics](topics/arena-survivor-mechanics.md) — core loop, weapons, evolutions, scaling, meta-progression, movement, resources, run modifiers
  - [topics/arena-survivor-skill-design](topics/arena-survivor-skill-design.md) — onboarding, skill expression, build theory, difficulty, run-to-run learning, risk/reward, feel

## R-005 — Pixel art top-down scene layout: how game designers place elements
- **Date:** 2026-06-15
- **Request:** Research how pixel art top-down games layout scenes — trees, paths, houses, fences, mountains, caves, ocean, rivers, bridges. Goal: train an AI coder to be better at this.
- **Status:** answered
- **Pages:** [topics/pixel-art-topdown-scene-layout](topics/pixel-art-topdown-scene-layout.md)
- **Sources:** slynyrd-top-down-tiles-1.html, slynyrd-top-down-tiles-2.html, slynyrd-top-down-objects.html

## R-004 — Solo dev success on Steam: average-joe guide and realistic path
- **Date:** 2026-06-14
- **Request:** Research indie solo dev Steam successes. How can an average person with basic code/art/story skills make a game? Constraint: few hours/day for a few months. Inspired by the Levasho Reddit hackathon story.
- **Status:** answered
- **Pages:** [topics/solo-dev-on-steam](topics/solo-dev-on-steam.md), [topics/solo-dev-success-stories](topics/solo-dev-success-stories.md), [concepts/first-game-scope](concepts/first-game-scope.md)
- **Sources:** [levasho-reddit-hackathon.md](/sources/levasho-reddit-hackathon.md), [solo-dev-steam-research.md](/sources/solo-dev-steam-research.md)

## R-003 — Indie game contest winners 2020–2026: winning recipes
- **Date:** 2026-06-13
- **Request:** Research up to 10 major indie game contests; find top 3 winners per contest for 2020–2026; extract winning patterns across mechanics, art, genre, tech/engines, and other success factors.
- **Status:** answered
- **Pages:** [topics/indie-game-contests](topics/indie-game-contests.md), [topics/indie-contest-winners](topics/indie-contest-winners.md), [topics/indie-winning-recipes](topics/indie-winning-recipes.md), [topics/indie-engines-frameworks](topics/indie-engines-frameworks.md)

## R-002 — AI-slop web design: detectable patterns and anti-slop techniques
- **Date:** 2026-06-12
- **Request:** Research AI-generated website tells that humans detect as generic/low-quality, AND approaches for training/guiding AI systems to produce unique, high-quality UX. Project context omitted.
- **Status:** answered
- **Pages:** [topics/ai-slop-web-design](topics/ai-slop-web-design.md), [concepts/ai-slop-visual-patterns](concepts/ai-slop-visual-patterns.md), [concepts/anti-slop-design-system](concepts/anti-slop-design-system.md), [concepts/anti-slop-prompting](concepts/anti-slop-prompting.md)
- **Source:** [ai-slop-research-notes.md](/sources/ai-slop-research-notes.md)

## R-001 — Hybrid retrieval techniques for improving vector search
- **Date:** 2026-06-10
- **Request:** Review InfoQ article on hybrid retrieval for RAG; capture generic techniques for improving semantic search beyond basic cosine similarity. Project context omitted.
- **Status:** answered
- **Pages:** [topics/vector-search-hybrid-retrieval](topics/vector-search-hybrid-retrieval.md), [concepts/bm25](concepts/bm25.md), [concepts/reciprocal-rank-fusion](concepts/reciprocal-rank-fusion.md), [concepts/cross-encoder-reranking](concepts/cross-encoder-reranking.md)
- **Source:** [infoq-vector-search-hybrid-retrieval-rag.txt](/sources/infoq-vector-search-hybrid-retrieval-rag.txt)
