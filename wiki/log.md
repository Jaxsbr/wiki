# Activity Log

Append-only chronological record. Entry format (parseable with `grep "^## \[" log.md`):

```
## [YYYY-MM-DD] <ingest|query|lint|request> | <title>
```

## [2026-07-09] request | R-011 — Open Knowledge Format and multi-product wiki architecture
## [2026-07-09] ingest | R-011 — Karpathy LLM Wiki gist + Google Cloud OKF blog (Jun 2026)
## [2026-07-30] request | R-012 — Claude Code and Codex CLI permission models + sandbox mechanics
## [2026-07-30] ingest | R-012 — Web research across smartscope.blog, claudefa.st, anomity.ai, codex.danielvaughan.com, claudedirectory.org; 4 wiki pages created
Sources: karpathy-llm-wiki-gist.md, okf-google-cloud-blog.html
Pages written: topics/llm-wiki-pattern, topics/open-knowledge-format, topics/multi-product-wiki-architecture, concepts/okf-bundle (4 pages total)

## [2026-07-04] deploy | R-010 — retry GitHub Pages deployment (transient GH Pages failure)
## [2026-07-03] request | R-010 — Context and memory engineering in agentic AI systems
## [2026-07-03] ingest | R-010 — MachineLearningMastery + extended research (Karpathy, Chroma, LangChain, LLMLingua, ACON, LaRA, Mem0, Zep, Letta)

Source: context-memory-engineering-agentic-ai.txt (+ 3 parallel research agents)
Pages written: topics/context-memory-engineering-overview, topics/context-engineering, topics/context-engineering-critiques, topics/agent-memory-engineering, topics/agent-memory-platforms, topics/agent-memory-critiques (6 pages total)

## [2026-06-10] init | Wiki created
## [2026-06-17] request | R-008 — Incremental games: mechanics, recipes, enjoyment, replayability, examples
## [2026-06-17] ingest | R-008 — Incremental Games Catalogue: 30 games, mechanics taxonomy, 10 progression examples

Wiki scaffolded by host setup. Now hosted at https://jaxsbr.github.io/wiki/.

## [2026-06-10] request | R-001 — Hybrid retrieval techniques for improving vector search

## [2026-06-10] ingest | InfoQ — Why Vector Search Alone Isn't Enough: Hybrid Retrieval for RAG

Source: infoq-vector-search-hybrid-retrieval-rag.txt
Pages written: topics/vector-search-hybrid-retrieval, concepts/bm25, concepts/reciprocal-rank-fusion, concepts/cross-encoder-reranking

## [2026-06-12] request | R-002 — AI-slop web design: detectable patterns and anti-slop techniques

## [2026-06-12] ingest | AI Slop Web Design — multi-source research (925 Studios, Impeccable, Developers Digest, Claude Cookbook, Managed Code, Medium)

Source: ai-slop-research-notes.md
Pages written: topics/ai-slop-web-design, concepts/ai-slop-visual-patterns, concepts/anti-slop-design-system, concepts/anti-slop-prompting

## [2026-06-13] request | R-003 — Indie game contest winners 2020–2026: winning recipes

## [2026-06-13] ingest | Indie game contests research — IGF, TGA, BAFTA, IndieCade, BitSummit, jams

Source: indie-game-contests-research.md
Pages written: topics/indie-game-contests, topics/indie-contest-winners, topics/indie-winning-recipes, topics/indie-engines-frameworks

## [2026-06-12] ingest | AI-Slop — added live annotated demo pages

Pages written: demos/ai-slop.html (13 annotated tells), demos/good-design.html (contrast example with design notes)
Updated: topics/ai-slop-web-design, concepts/ai-slop-visual-patterns (demo links added)

## [2026-06-14] request | R-004 — Solo dev success on Steam: average-joe path

## [2026-06-14] ingest | Solo dev Steam research + Levasho Reddit hackathon article

Sources: levasho-reddit-hackathon.md, solo-dev-steam-research.md
Pages written: topics/solo-dev-on-steam, topics/solo-dev-success-stories (20 games, images), concepts/first-game-scope
Downloaded: 14 additional Steam header images (stardew-valley, vampire-survivors, hollow-knight, terraria, papers-please, undertale, manor-lords, brotato, lethal-company, luck-be-a-landlord, dwarf-fortress, buckshot-roulette, thronefall + more)

## [2026-06-14] ingest | Indie game art styles — media enrichment pass

Downloaded 18 Steam header images to wiki/images/ for key award-winning games (2020–2025).
Pages written: demos/art-styles.html (5 art-style categories, 17 games, screenshots + trailer link cards)
Updated: topics/indie-winning-recipes (image embeds, Steam links, art-styles demo link), topics/indie-contest-winners (TGA table + Steam links + image embeds), topics/indie-engines-frameworks (engine site links + image embeds), wiki/index.md (demos section added)

## [2026-06-15] request | R-005 — Pixel art top-down scene layout

## [2026-06-15] request | R-006 (visual design) — Arena survivor games: visual design research

## [2026-06-15] ingest | Arena survivor visual design — multi-source web research

Sources: web research (Steam store pages, Halls of Torment Polycount thread, Vampire Survivors wiki, Level Design Book, game reviews)
Pages written: topics/arena-survivor-visual-design
Coverage: all 5 dimensions — art styles (pixel, chibi anime, pre-rendered 3D sprites, real-time 3D low-poly), camera perspectives (top-down vs isometric tradeoffs), visual effects (projectiles, hit feedback, XP gems, level-up screen, AOE), HUD/UI design, enemy design (silhouette, color coding, size hierarchy, density management)
Games covered: Vampire Survivors (1794680), Brotato (1942280), HoloCure (2420510), 20 Minutes Till Dawn (1966900), Halls of Torment (2218750), Deep Rock Galactic: Survivor (2321470)

## [2026-06-15] request | R-007 — Arena survivor genre: core mechanics deep reference

## [2026-06-15] ingest | Arena survivor mechanics — web research across VS, Brotato, 20MTD, HoloCure, DRGS, HoT, SS, NS

Sources: web research (VS Wiki, DRGS Wiki, Brotato Wiki, 20MTD Wiki, game reviews, design analyses — full source list in topic page)
Pages written: topics/arena-survivor-mechanics
Coverage: all 8 design dimensions — core loop, weapon/build systems, wave/enemy scaling, leveling/stats, meta-progression, movement/survival, resource management, run modifiers

## [2026-06-15] request | R-008 — Arena survivor skill design: teaching and rewarding player skill

## [2026-06-15] ingest | Arena survivor skill design — web research across VS, Brotato, 20MTD, HoloCure, DRG:Survivor, HoT

Sources: web research (VS wiki, community guides, The Conversation gambling psychology analysis, snav.substack design analysis, TechRadar DRG:Survivor, rogueliker.com, oreateai.com Brotato strategy, commonsensegamer.com Danger 5, holocure guides, Halls of Torment ability guides)
Pages written: topics/arena-survivor-skill-design
Coverage: all 8 skill dimensions — onboarding/tutorial design, skill expression (per-game), build theory/optimization, difficulty scaling & challenge modes, run-to-run learning, risk/reward decision points, feel & feedback loops, accessibility vs. depth — plus cross-genre pattern synthesis and a skill spectrum comparison table

## [2026-06-15] ingest | Arena survivor overview — synthesis page + R-006 consolidation

Pages written: topics/arena-survivor-overview (genre hub: formula, key games, design principles, synthesis across all three sub-pages)
Updated: requests.md (consolidated R-006/R-007/R-008 sub-requests into single R-006 entry), index.md (overview page added)

## [2026-06-17] request | R-009 — Atomic game design catalogue: games, mechanic translation, genre fit, concept

## [2026-06-17] ingest | Atomic game design catalogue — multi-source web research (SpaceChem, Opus Magnum, Infinifactory, Atomfall, Atom RPG, Nuclear Throne, Particle Mace, Nimbatus, Chernobylite, STALKER, Quantum Chess, Atomicrops, Fallout radiation, KSP science balance)

Sources: web research (Steam store pages, Metacritic, Wikipedia, Gamedeveloper.com SpaceChem postmortem, Science Game Center, PC Gamer Nuclear Throne review, GameRant Atomfall review, STALKER Fandom wiki, arXiv Quantum Chess paper 1906.05836, Fallout Wiki, GameRant Fallout radiation analysis, Universe Today KSP analysis)
Pages written: topics/atomic-game-design-catalogue
Coverage: Part 1 — 10 catalogued games + 5 additional with full entries (core mechanic, science use, art style, platform, reception); Part 2 — 10 atomic concepts × 2–3 concrete mechanics each (electron shells, octet rule, decay, fission, fusion, superposition, entanglement, excitation, isotopes, periodic table); Part 3 — 7 genre fit ratings; Part 4 — 3-position realism spectrum (SpaceChem science-first, Fallout science-as-flavor, Quantum Chess science-as-inspiration); Part 5 — arena survivor concept "VALENCE" with 5 atomic mechanic pillars, art direction, VS compatibility check

## [2026-06-17] request | R-008 — Atomic visual design reference for game artists

## [2026-06-17] query | R-008 — Atomic visual design research (web-sourced)

Sources: web research (Wikipedia, Wikimedia Commons, CERN, INL/NRC Flickr, PBS Space Time, YouTube, UNLV Physics, Ohio State Astronomy, Chemistry LibreTexts, Territory Studio, Filmmakers Academy, Aesthetics Wiki, Kittl, Screen Rant, postPerspective)
Pages written: topics/atomic-visual-design
Coverage: 7 scientific visualizations (Bohr model, orbitals, emission spectra, Rutherford, fission/fusion, Feynman diagrams, bubble chambers), 6 film/media references (Oppenheimer, Ant-Man Quantum Realm, Fantastic Voyage, Kurzgesagt, 3Blue1Brown, PBS Space Time, Powers of Ten), full CPK color table, nuclear glow palette (Cherenkov blue + uranium glass green), emission spectrum data for 8 elements, specific image + video URL table, 4 visual direction proposals (Scientific Realism / Retro Atomic / Quantum Abstract / Nuclear Industrial) each with palette + art refs + 3 comparable games + game genre fit

## [2026-06-17] request | R-007 — Atomic science for game design: jargon, mechanics, visual direction

## [2026-06-17] ingest | Atomic physics — multi-source web research (Wikipedia, Britannica, DOE, CERN, LibreTexts, MIT, NASA, World Nuclear Association, EPA)

Sources: web research (12+ authoritative sources across particle physics, nuclear physics, quantum mechanics, periodic table, radiation)
Pages written: topics/atomic-physics-for-game-design (hub), topics/atomic-structure, topics/atomic-behaviors, topics/atomic-quantum, topics/atomic-energy-radiation
Coverage: all particles (quarks through muons), electron shells/orbitals/quantum numbers, nuclear structure, four fundamental forces, electron behavior (excitation/ionization/spectra), radioactive decay (α/β/γ/electron capture/decay chains), fission/fusion/reactor components, chemical bonding, all quantum concepts, EM spectrum, radiation types and dose units, full periodic table coverage, 9 key elements for game design, all measurement units — plus game-relevance notes throughout

## [2026-06-17] ingest | Atomic visual design + game design catalogue (R-007 completion)

Pages written: topics/atomic-visual-design (7 scientific viz types, 6 film/media refs, CPK color table, Cherenkov + uranium glass palettes, specific image/video URLs, 4 visual direction proposals); topics/atomic-game-design-catalogue (15 physics games, 10 concept→mechanic translations, 7 genre ratings, realism spectrum, arena survivor concept "VALENCE")
Updated: atomic-physics-for-game-design hub (links to all 6 deep-dives), index.md (consolidated to single R-007 section), requests.md (consolidated R-007/R-008/R-009 sub-entries into single R-007)

## [2026-06-17] request | R-008 — Incremental games: psychology, design patterns, genre fusions (deep expansion)

## [2026-06-17] ingest | Incremental game psychology — multi-source web research (CHI 2024, CMU Kittens study, Universal Paperclips ontology, Tutsplus math, Gamedeveloper postmortems, Psychology of Games, arxiv dark patterns 2024, Gridinc best practices, TheGamer, Ryan/Deci SDT)

Sources: web research (10+ academic and design sources), existing source: incremental-games-research.md
Pages written: topics/incremental-game-psychology (main hub — 9 sections: psychological hooks, prestige loop, pacing, discovery, identity/mastery, social, replayability, dark patterns, 15 design principles); concepts/prestige-loop (prestige mechanics deep-dive: emotional arc, formulas, layered systems, design rules); concepts/incremental-genre-fusion (all genre fusions: RPG, strategy, narrative, action + which genres don't work + fusion design test)
Updated: requests.md (R-008 status → answered with 3 new pages), index.md (3 new entries)

## [2026-06-17] ingest | Incremental games — full structural design reference (R-008 deep pass)

Sources: web research (Tutsplus Math of Incrementals, Wikipedia/Incremental_game, GameDeveloper.com Math of Idle Games III + Large Number Names, MissionZanx guides, Medium Idle vs Incremental, RamblingAboutGames analysis, SkillNation Universal Paperclips, PlayMushies psychology, Cookie Clicker wiki, Antimatter Dimensions fandom wiki, Clicker Heroes blog, JayIsGames Kittens Game review)
Source file: sources/incremental-games-research.md
Pages written:
  - topics/incremental-games-overview (hub: definition, spectrum, genre history timeline, canonical loop diagram)
  - topics/incremental-games-core-loop (produce→accumulate→spend cycle; "numbers going up" as mechanic; time as cost; active/passive income; offline progress)
  - topics/incremental-games-resources (currency tiers; buildings/generators; conversion chains; soft caps)
  - topics/incremental-games-upgrades (linear/multiplicative/exponential tiers; milestones; tree vs list; "one more upgrade" psychology)
  - topics/incremental-games-prestige (prestige innovation; first prestige design; currency formulas; multi-layer systems; anti-frustration design)
  - topics/incremental-games-scaling (exponential growth; big number notation K/M/B/T/AA/scientific/log; cost scaling formulas; walls; bumpy progression; float limits)
  - topics/incremental-games-automation (automation arc; unlock patterns; milestone rewards; achievement systems; auto-buyer design)
  - topics/incremental-games-recipes (5 structural templates: Cookie Clicker, Antimatter Dimensions, Kittens Game, Universal Paperclips, AdVenture Capitalist, Incremental RPG, A Dark Room)
  - topics/incremental-games-pacing (unlock cadence; mid-game doldrums; offline catch-up; daily login; end-game problem; session model)
  - topics/incremental-games-monetization (ethical vs predatory patterns; designer ethics test; notable clean implementations)
Updated: index.md (new R-008 section, 10 new pages), requests.md (R-008 status → answered)

## [2026-06-23] request | R-009 — Agentic engineering skill framework

## [2026-06-23] ingest | R-009 — Agentic Engineering (9 pages)

Sources: arXiv 2506.12347 (Kumar/Microsoft), arXiv 2506.12469 (Feng/McDonald/Zhang, UW), Addy Osmani (Feb+Mar+Jan 2026), Simon Willison (Mar+Oct 2025), Karpathy Software 3.0, swyx Rise of the AI Engineer, Eleanor Berger async agents, Philipp Schmid inner/outer loop, Thoughtworks supervisory engineering — all sources downloaded to sources/
Pages written:
  - topics/agentic-engineering-overview (hub: two transitions, tier map, key sources, guardrails)
  - topics/agentic-terminology (vibe coding vs. agentic engineering; AI Engineer vs. ML Engineer; Feng et al. L1–L5 autonomy scale; context engineering vs. prompt engineering; loop terms; controlled vocabulary)
  - topics/agentic-tier-spine (T0–T6 all 7 tiers: indicators, outgrown signals, bottlenecks, drills, failure modes)
  - topics/agentic-orthogonal-shift (T3→T4 centerpiece: 12 sections — what rotates, why hard for ICs, Two-Engineer Comparison, Four Mindset Inversions, Six Transition-2 Competencies, QA transformation, both failure poles, crossing drills, tells)
  - topics/agentic-branch-ladders (10 branches with 4-rung ladders; 3 gating branches; jaggedness grid)
  - topics/agentic-fluency-instrument (6 axes L0/L1/L2; deterministic gating rule; 24-item evidence-gated questionnaire; 3 worked examples; reproducibility check)
  - topics/agentic-skew-profiles (Prescriptive-Prose Veteran, Vibe Coder, Cautious Adopter; delegate-vs-do meta-diagnostic)
  - topics/agentic-landscape (tool families: coding agents, orchestration, MCP, spec-driven, eval; brownfield reality; team coordination; field direction)
  - topics/agentic-traction (traction matrix by task type; traction assessment; strategic regression vs. fear-driven avoidance; the moving line)
Updated: index.md (Agentic Engineering section), requests.md (R-009 answered)

## [2026-07-03] request | R-010 — Agent memory engineering: production examples, platforms, critiques

## [2026-07-03] ingest | R-010 — Agent memory engineering deep research pass

Sources: web research (20+ sources: MemGPT arXiv:2310.08560, Mem0 arXiv:2504.19413, Zep arXiv:2501.13956, MemTier arXiv:2605.03675, SAGE arXiv:2605.30711, Misattribution Gap arXiv:2605.22842, Governance Decay arXiv:2606.22528, Letta blog, OpenAI Dreaming V3, Datastores.ai benchmarks, Redis Agent Memory, RAG latency analysis)
Pages written:
  - topics/agent-memory-engineering — 4 memory types with concrete production examples; storage backends; write triggers; MemGPT/Letta/Mem0/Zep/LangChain/OpenAI/Redis per type
  - topics/agent-memory-platforms — platform deep-dives with pricing tables, latency benchmarks, benchmark scores; vector store p50/p95/QPS/Recall@10 data
  - topics/agent-memory-critiques — complexity cost, 5 stateful failure modes, memory poisoning (84% attack success, misattribution gap, CVE-2025-32711), staleness/TTL, retrieval-without-budget problem, HNSW degradation at scale, SAGE write-time gating, notable papers table
Updated: index.md (R-010 section), requests.md (R-010 status → answered)

## [2026-06-15] ingest | Slynyrd Pixelblog top-down tile/object guides + web research

Sources: slynyrd-top-down-tiles-1.html, slynyrd-top-down-tiles-2.html, slynyrd-top-down-objects.html
Pages written: topics/pixel-art-topdown-scene-layout
Coverage: perspective foundation, ground plane rules, element-by-element placement (trees/paths/buildings/fences/mountains/caves/rivers/bridges/ocean), composition principles, readability rules, quick-reference rule sheet for AI training
## [2026-07-04] deploy | R-010 — retry GitHub Pages deployment (transient failure)
## [2026-09-19] request | R-013 — TypeSafe AI and System One decision models
## [2026-09-19] ingest | R-013 — TypeSafe AI primary documentation, launch material, public SDK/adapter repositories, calibration literature, and local-reproduction analysis
