# ver-kyker Research Wiki — Index

> Catalog of every page in this wiki, one line each. Updated on every ingest.
> Browse at https://jaxsbr.github.io/wiki/

## Meta

- [requests](requests.md) — registry of all research requests; check here before starting new research
- [log](log.md) — append-only activity log (ingests, queries, lint passes)

## AI Agent Permission Models (R-012)

- [ai-agent-permissions](topics/ai-agent-permissions.md) — hub: permissions vs sandbox two-layer model, quick comparison table across Claude Code and Codex, decision guide
- [claude-code-permissions](topics/claude-code-permissions.md) — all 6 modes (default/plan/acceptEdits/auto/dontAsk/bypassPermissions), settings.json layers, allow/deny pattern syntax, hooks, sandbox config
- [codex-permissions](topics/codex-permissions.md) — approval modes × sandbox levels, two-phase runtime (setup→agent), requirements.toml admin enforcement, permission profiles (beta), network HTTP method filtering
- [concepts/agent-sandbox](concepts/agent-sandbox.md) — what the sandbox actually is: Seatbelt (macOS), bubblewrap+seccomp (Linux), Job Objects+WFP (Windows), network proxy architecture, Docker relationship, setup steps, known limitations

## LLM Wiki Pattern & Open Knowledge Format (R-011)

- [llm-wiki-pattern](topics/llm-wiki-pattern.md) — Karpathy's foundational 3-layer pattern (sources → wiki → schema); 3 operations (ingest/query/lint); why LLMs outperform humans at wiki maintenance; Memex lineage
- [open-knowledge-format](topics/open-knowledge-format.md) — OKF v0.1 spec: formalizes LLM Wiki into a portable interoperable format; design principles (minimally opinionated, producer/consumer independence, format not platform); YAML frontmatter fields; reference implementations
- [multi-product-wiki-architecture](topics/multi-product-wiki-architecture.md) — how to build an agent-maintained wiki spanning many products with entry points for content producers; per-product bundles, root synthesis layer, 3 entry-point patterns, what only the orchestrating agent can provide
- [concepts/okf-bundle](concepts/okf-bundle.md) — OKF bundle anatomy: concept files, YAML frontmatter, reserved filenames (index.md/log.md), cross-linking rules, producer/consumer contract

## Context and Memory Engineering (R-010)

- [context-memory-engineering-overview](topics/context-memory-engineering-overview.md) — hub: the two disciplines, where they meet (retrieval boundary), the long-context misconception, the 4 context failure modes, navigation
- [context-engineering](topics/context-engineering.md) — selective inclusion, structural placement (lost-in-the-middle evidence), compression tools (LLMLingua/ACON/AttentionRAG), production examples (Claude Code, Cursor, Copilot, Sourcegraph, LangChain), retrieval-aware assembly pattern
- [context-engineering-critiques](topics/context-engineering-critiques.md) — is it just rebranded prompt engineering? long context vs. RAG debate, compression backfire cases, real cost numbers, when simpler wins
- [agent-memory-engineering](topics/agent-memory-engineering.md) — the 4 memory types (working/episodic/semantic/procedural) with concrete production examples, storage backends, and write triggers across Letta, Mem0, Zep, LangChain, Redis, OpenAI, Claude
- [agent-memory-platforms](topics/agent-memory-platforms.md) — deep comparison of Mem0, Zep, Letta, LangChain, OpenAI Dreaming V3, Redis Agent Memory; pricing, latency benchmarks, vector store p50/p95 data
- [agent-memory-critiques](topics/agent-memory-critiques.md) — complexity cost, memory poisoning (84% attack success rate, CVE-2025-32711), staleness failures, retrieval-without-budget problems, HNSW degradation at scale, stateless argument; notable papers table

## Agentic Verification and Runtime Environments (R-015)

- [agentic-verification-runtime](topics/agentic-verification-runtime.md) — self-verification as critical infrastructure; 3 failing environment strategies; 5 requirements; virtualized full-stack (shared stable stack + per-change isolated delta, 1-2 services not sixty); CLI+feature map interface; human review math; industry context

## Jev-as-a-Judge / Agent Evals (R-014)

- [jev-as-a-judge-evals](topics/jev-as-a-judge-evals.md) — JaaJ pattern, LangChain Sep 2026 experiment (100% accuracy, 92–913× lower variance, $0.00035/call vs $28.17 for Claude), design guidance, scale implications

## TypeSafe AI and System One (R-013)

- [typesafe-ai-system-one](topics/typesafe-ai-system-one.md) — how TypeSafe’s typed decision model works, what it solves, LLM comparison, limitations, and the likelihood/difficulty of local reproduction

## Agentic Engineering (R-009)

- [agentic-engineering-overview](topics/agentic-engineering-overview.md) — hub: two transitions, tier spine summary, 10 branches, navigation table, key sources, guardrails
- [agentic-terminology](topics/agentic-terminology.md) — vibe coding vs. agentic engineering vs. AI Engineer; 12 Willison enabling practices; competing L0–L5 autonomy scales; context engineering vs. prompt engineering; controlled vocabulary
- [agentic-tier-spine](topics/agentic-tier-spine.md) — 7 trunk tiers T0–T6: indicators, outgrown signals, bottlenecks, drills, failure modes; the Orthogonal Shift callout between T3 and T4
- [agentic-orthogonal-shift](topics/agentic-orthogonal-shift.md) — the T3→T4 centerpiece: what rotates, why hard for engineers specifically, Two-Engineer Comparison, Four Mindset Inversions, Six Transition-2 Competencies, QA transformation (sleeper indicator), both failure poles, crossing drills, tells
- [agentic-branch-ladders](topics/agentic-branch-ladders.md) — 10 orthogonal skill branches with 4-rung low→high ladders; 3 gating branches marked; jaggedness grid; both-poles discipline per branch
- [agentic-fluency-instrument](topics/agentic-fluency-instrument.md) — 6 axes (L0/L1/L2), deterministic gating rule, 24-item retrospective questionnaire (evidence-gated), 3 worked examples (Priya / Uniform-Advanced / Boundary), reproducibility check
- [agentic-skew-profiles](topics/agentic-skew-profiles.md) — Prescriptive-Prose Veteran, Vibe Coder, Cautious Adopter: vector signatures, why each persists, single unlock per profile; delegate-vs-do meta-diagnostic
- [agentic-landscape](topics/agentic-landscape.md) — tool families (coding agents, orchestration, MCP, spec-driven, eval), brownfield reality, team/multi-engineer coordination, field direction (verification bottleneck, eval-driven development)
- [agentic-traction](topics/agentic-traction.md) — where agents get vs. lack traction (empirical matrix from arXiv 2506.12347); traction assessment; strategic tier regression vs. fear-driven avoidance; the moving line

## Topics

- [vector-search-hybrid-retrieval](topics/vector-search-hybrid-retrieval.md) — why cosine-only search fails; the layered BM25 + vector + RRF + cross-encoder production stack
- [ai-slop-web-design](topics/ai-slop-web-design.md) — overview of AI-generated website generic patterns and prevention; links to all four concept pages

## Concepts

- [bm25](concepts/bm25.md) — probabilistic keyword ranking: IDF, TF saturation, length normalisation
- [reciprocal-rank-fusion](concepts/reciprocal-rank-fusion.md) — rank-based fusion of multiple retriever lists; no score normalisation needed
- [cross-encoder-reranking](concepts/cross-encoder-reranking.md) — joint query-document scoring for final relevance on small candidate sets
- [ai-slop-visual-patterns](concepts/ai-slop-visual-patterns.md) — detectable typography, colour, layout, animation, and copy tells in AI-generated sites
- [anti-slop-design-system](concepts/anti-slop-design-system.md) — design system specification as the primary technique for distinctive AI-assisted design
- [anti-slop-prompting](concepts/anti-slop-prompting.md) — prompt engineering techniques: core anti-slop prompt, negative constraints, component templates
- [first-game-scope](concepts/first-game-scope.md) — scope rules, one-mechanic principle, genre × skill matrix, engine choice, marketing minimum for first game

- [solo-dev-on-steam](topics/solo-dev-on-steam.md) — how average-skilled solo devs succeed on Steam; honest constraint analysis for "few hours/day" + engine/genre/marketing guide
- [solo-dev-success-stories](topics/solo-dev-success-stories.md) — 20 documented solo/micro-team Steam successes with dev backgrounds, revenue, and what worked
- [indie-game-contests](topics/indie-game-contests.md) — landscape of 10 major contests (IGF, TGA, BAFTA, IndieCade, BitSummit, jams); overview and contest-level winner tables
- [indie-contest-winners](topics/indie-contest-winners.md) — full year-by-year winner records 2020–2025 across all major contests
- [indie-winning-recipes](topics/indie-winning-recipes.md) — pattern analysis: winning genres, art styles, mechanics, themes, team sizes, and the "one mechanic explored deeply" formula
- [indie-engines-frameworks](topics/indie-engines-frameworks.md) — Unity vs Godot vs GameMaker vs custom; Godot's rapid rise post-Unity pricing shock
- [pixel-art-topdown-scene-layout](topics/pixel-art-topdown-scene-layout.md) — how designers lay out top-down 2D scenes: perspective rules, trees/paths/buildings/rivers/caves/mountains, composition principles, AI training quick-reference

- [arena-survivor-overview](topics/arena-survivor-overview.md) — genre synthesis hub: formula, key games, design principles, non-negotiables; links to all three deep-dive pages
- [arena-survivor-visual-design](topics/arena-survivor-visual-design.md) — art styles, camera perspectives, VFX, UI/HUD, and enemy design principles across VS, Brotato, HoloCure, 20MTD, HoT, DRGS
- [arena-survivor-mechanics](topics/arena-survivor-mechanics.md) — core loop, weapons, evolutions, enemy scaling, meta-progression, movement, resources, run modifiers — per-game attribution across 8 games
- [arena-survivor-skill-design](topics/arena-survivor-skill-design.md) — how the genre teaches and rewards skill; 8-dimension analysis across VS, Brotato, 20MTD, HoloCure, DRG:Survivor, HoT

## Demos

- [ai-slop.html](https://jaxsbr.github.io/wiki/demos/ai-slop.html) — annotated "canonical AI slop" landing page with 13 labelled tells
- [good-design.html](https://jaxsbr.github.io/wiki/demos/good-design.html) — same content redesigned with distinctive typography and deliberate choices
- [art-styles.html](https://jaxsbr.github.io/wiki/demos/art-styles.html) — visual showcase of 17 award-winning indie games grouped by art style; screenshots + trailer link cards

## Incremental / Idle Games (R-008)

- [incremental-games-overview](topics/incremental-games-overview.md) — hub: genre definition, spectrum, history 2002–2021, canonical loop; links to all sub-pages
- [incremental-games-core-loop](topics/incremental-games-core-loop.md) — produce→accumulate→spend cycle; "numbers going up" as mechanic; time as cost; active/passive income; offline progress
- [incremental-games-resources](topics/incremental-games-resources.md) — primary/secondary/prestige currency tiers; generators; Kittens Game conversion chain; soft caps; diminishing returns
- [incremental-games-upgrades](topics/incremental-games-upgrades.md) — linear/multiplicative/exponential tiers; milestones; tree vs. list; psychology of "one more upgrade"
- [incremental-games-prestige](topics/incremental-games-prestige.md) — prestige as genre innovation; first-prestige design; currency formulas (5 games); multi-layer systems (AD/CH/RG); anti-frustration design
- [incremental-games-scaling](topics/incremental-games-scaling.md) — big number notation (K/M/B/T, AA/AB, scientific, log); cost curve formulas; walls as design tool; float precision limits
- [incremental-games-automation](topics/incremental-games-automation.md) — automation arc (manual→auto→meta-auto); 4 unlock pattern types; milestone rewards; auto-buyer design
- [incremental-games-recipes](topics/incremental-games-recipes.md) — 7 structural templates: Cookie Clicker, Antimatter Dimensions, Kittens Game, Universal Paperclips, AdVenture Capitalist, Incremental RPG (Melvor/NGU/CH), A Dark Room
- [incremental-games-pacing](topics/incremental-games-pacing.md) — unlock cadence; mid-game doldrums (causes + solutions); offline catch-up; daily login design; end-game problem
- [incremental-games-monetization](topics/incremental-games-monetization.md) — ethical patterns; predatory patterns; designer ethics test; clean implementations
- [incremental-game-psychology](topics/incremental-game-psychology.md) — 10-section psychology (VRR, number salience, autonomy paradox, Zeigarnik, prestige, pacing/flow, discovery, identity, social, dark patterns) + 15 design principles
- [incremental-games-catalogue](topics/incremental-games-catalogue.md) — 30-game deep-dive: Pioneering/Classic, Browser/PC, Steam, Mobile, Hybrid; Steam IDs, header images, quick-reference table
- [incremental-games-mechanics](topics/incremental-games-mechanics.md) — 7 core mechanics, prestige formula ranges, idle vs. active design, genre taxonomy, quality rubric
- [incremental-progression-examples](topics/incremental-progression-examples.md) — 10 concrete progression sequences with real numbers (Cookie Clicker, AD, Egg Inc, Clicker Heroes, Kittens Game, AdCap, NGU Idle, Trimps, Universal Paperclips, Vampire Survivors)
- [prestige-loop](concepts/prestige-loop.md) — prestige deep-dive: emotional arc, loss aversion reframing, formulas (Cookie Clicker/AdCap/RG/Egg Inc), layered systems (AD/RG/CH), 6 design rules
- [incremental-genre-fusion](concepts/incremental-genre-fusion.md) — incremental × RPG (Melvor/NGU/Idle Champions), × strategy (Kittens/Factorio), × narrative (A Dark Room/Universal Paperclips), × action (VS) — arcs, failure modes, fusion design test

## Atomic Physics for Game Design (R-007)

- [atomic-physics-for-game-design](topics/atomic-physics-for-game-design.md) — hub: jargon quick-reference, four-force table, 19-mechanic design theme index; links to all six deep-dives
- [atomic-structure](topics/atomic-structure.md) — subatomic particles (quarks → muons), electron shells (K/L/M/N), orbitals (s/p/d/f), quantum numbers, nuclear structure
- [atomic-behaviors](topics/atomic-behaviors.md) — four fundamental forces, electron excitation/ionization/spectra, radioactive decay (α/β/γ/chains), fission/fusion/reactor components, chemical bonding
- [atomic-quantum](topics/atomic-quantum.md) — wave-particle duality, Heisenberg uncertainty, superposition, entanglement, tunneling, Pauli exclusion, decoherence; game-mechanic translation table
- [atomic-energy-radiation](topics/atomic-energy-radiation.md) — EM spectrum, radiation types and dose units (Bq/Gy/Sv), E=mc², binding energy curve, periodic table, 9 key elements for game design
- [atomic-visual-design](topics/atomic-visual-design.md) — game artist reference: Bohr model, orbitals, emission spectra, bubble chambers, Feynman diagrams; film refs (Oppenheimer, Kurzgesagt, 3Blue1Brown); CPK color table; Cherenkov blue; 4 visual directions (Scientific Realism / Retro Atomic / Quantum Abstract / Nuclear Industrial) with palettes and comparable games
- [atomic-game-design-catalogue](topics/atomic-game-design-catalogue.md) — 15 atom/physics games catalogued (SpaceChem, Opus Magnum, Nuclear Throne, Quantum Chess, etc.); 10 atomic concepts → concrete mechanics; 7 genre fit ratings; realism spectrum; arena survivor concept "VALENCE"

## Entities

_(no entity pages yet)_
