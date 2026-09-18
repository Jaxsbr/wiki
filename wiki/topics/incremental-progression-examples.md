# Incremental Progression Patterns by Example

Concrete documented upgrade sequences from real games. Part of [R-008](../requests.md).

Related: [Incremental Games Catalogue](incremental-games-catalogue.md) |
[Incremental Mechanics & Design Patterns](incremental-games-mechanics.md)

---

## 1. Cookie Clicker — The Grandma Arc

The Grandma is Cookie Clicker's most narrative-rich progression arc, spanning base building,
upgrades, a mid-game "event," and the ascension prestige system.

**Sequence:**

1. **Buy first Grandma** — cost: $100. Produces 1 cookie/sec. Flavour text: "A nice grandma to
   bake more cookies."
2. **Grandma upgrades (count-gated)** — at 1 Grandma: *Forwards from grandma* (email chain, +1%
   CpS). At 7 Grandmas: *Grandmas' grandmas* (synergy, +1% CpS per 10 Grandmas and 10 of
   another building). At 50 Grandmas: *Farmer grandmas* (synergy with Farms, ×2 both). At
   100/200 Grandmas: additional synergy tiers.
3. **Bingo Center / Research Facility unlock** — requires owning 7 *different* building types.
   Costs 1 quadrillion (10^15) cookies. Unlocks a 30-minute research timer that produces science
   upgrades every 30 min.
4. **Grandmapocalypse trigger** — purchase *One Mind* upgrade (~5 min research timer). Grandmas
   become "Awoken." Wrinklers begin appearing on the big cookie; Wrath Cookies appear ~33% of the
   time in place of Golden Cookies.
5. **Stage 2: Displeased** (*Communal Brainsweep*) — Wrath Cookies 66% of the time. Wrinklers
   spawn faster (up to 10 at once). Each Wrinkler consumes 5% of CpS but accumulates 110% of it.
   10 Wrinklers = 1.1× net CpS despite the apparent drain.
6. **Stage 3: Angered** (*Elder Pact*) — Wrath Cookies 100%. Elder Pledge available for 666,666
   cookies, pausing the Apocalypse temporarily.
7. **Ascension (first)** — typically at ~1 trillion cookies baked. Resets all buildings and cookies.
   Reward: ~1 Prestige Level = +1% CpS in next run. ~1 Heavenly Chip. First Heavenly purchase:
   *Heavenly key* (unlocks the Heavenly store). With 100+ Prestige Levels: *Persistent memory*
   (+5 starting buildings per type retained across ascension). With 1,000+ levels: *Season
   switcher*, *Dragon drops*, etc.

**What this teaches:** Cookie Clicker layers a narrative event on top of the core loop, making
the player feel like they are *doing something morally questionable* to optimize production. The
Wrinkler mechanic is a masterclass in counter-intuitive design — an apparent penalty that is
actually optimal strategy.

---

## 2. Antimatter Dimensions — First Infinity to First Eternity

The transition from normal play through Infinity to Eternity shows how layer-stacking works.

**Sequence:**

1. **Early game: 8 Dimension chain** — buy 1st Dimensions (produce antimatter), then 2nd
   Dimensions (produce 1st Dimensions), up to 8th. Each dimension tier costs 10× more per purchase.
   Boost Dimensions with the "Dimension Boost" mechanic (sacrifice 10 of the next-lower tier for
   a ×2 multiplier).
2. **Infinity threshold** — antimatter must reach 1.798 × 10^308 (JavaScript's `Number.MAX_VALUE`).
   At this point, clicking "Big Crunch" triggers first Infinity. Awards: 1 Infinity Point (IP) +
   Infinity dimension multipliers.
3. **Infinity loop** — repeat runs faster each time as IP accumulates. IP buys Infinity Upgrades:
   *Infinity power conversion* (power scales with IP^x), *Automated big crunching*, *Replicanti*
   (a parallel antimatter generator that replicates itself up to 1.8e308 then gives an IP
   multiplier). 12 Infinity Challenges must be completed — each runs with broken constraints (e.g.,
   "no dimension boosts").
4. **Eternity unlock** — after accumulating enough Infinity Points, the Eternity button appears.
   Pressing it resets *everything including Infinities* for: 1 Eternity Point (EP) + Time
   Dimensions (a new resource chain that generates IP rather than antimatter).
5. **First Eternity consequences** — Time Studies tree unlocks: a branching upgrade tree that
   lets you specialize (Path of Time = TD focus; Path of Eternity = EP scaling; Path of Infinity =
   IP scaling). 12 Eternity Challenges with harder constraints.
6. **Reality (third layer)** — after ~billions of EP, Reality button appears. Awards: Reality
   Machines (RM) + one Glyph (equippable modifier with 5 randomized stats). 7 Celestial boss
   challenges await. Timeline: first Infinity ~hours; first Eternity ~days to weeks; first
   Reality ~weeks to months.

**What this teaches:** Each prestige layer is a new number system built on the previous one. The
game never gets easier — each layer introduces new complexity — but the *ratio of effort to
reward* resets satisfyingly with each threshold.

---

## 3. Egg Inc. — Prestige Sequence (Soul Eggs)

**Sequence:**

1. **First farm** — start with Edible Egg. Buy Hatcheries, habitats (Coop → Barn → Big House →
   Mansion → ...), vehicles (Tractor → Lorry → ...). Research tracks: Comfortable Nests
   (+10% hab capacity), Nutritional Supplements (+1 laying rate), Better Incubators, etc.
2. **Egg type upgrade** — at milestone farm values, upgrade egg type (Edible → Superfood →
   Medical → Rocket Fuel → ...). Each new egg is worth 10–100× more per second but requires
   rebuilding the farm (habitats don't reset, but the per-egg value multiplier makes redoing
   research worth it).
3. **First prestige trigger** — once earnings have stalled, prestige. Formula: Soul Eggs ≈
   √(total farm value / some base). A farm at $1 quadrillion might yield ~50 Soul Eggs. Each
   Soul Egg adds +10% earnings permanently. 50 Soul Eggs = 6,000× earnings bonus.
4. **Post-prestige acceleration** — with 50 Soul Eggs, the second run to the same farm value
   takes hours instead of days. The rule of thumb: prestige when you can roughly double your
   Soul Egg count (100% increase triggers each time).
5. **Eggs of Prophecy (deep prestige)** — earned from completing Contracts (time-limited
   challenges). Each EoP multiplies the Soul Egg bonus (e.g., 10% bonus per SE becomes 11% per
   SE). First Egg of Prophecy is a major unlock.
6. **Artifact system** — late game adds equippable artifacts (Luna, Beak of Midas, etc.) with
   stats that compound with Soul Egg bonuses.

**Numbers:** With 1,000 Soul Eggs × 10% each: (1.1)^1000 ≈ 2.47 × 10^41 multiplier. This is
why Soul Eggs feel exponential — each additional SE adds more than the one before.

---

## 4. Clicker Heroes — Ascension → Transcension Path

**Sequence:**

1. **Base game** — click monsters for gold; hire Heroes (Treebeast $50 → Ivan the Terrible $600
   → Brittany $3k → ... → 54th hero at absurd costs). Reach zone 100 (early wall). Heroes have
   upgrades at level 10, 25, 50, 100 (×4 DPS multipliers).
2. **First ascension** — at zone 100–130, unlock Amenhotep's Ascension ability (level Amenhotep
   to 150). Sacrifice all heroes and gold for Hero Souls (HS). HS count = number of Primal Bosses
   killed (appear randomly, ~25% of bosses past zone 100). Each HS = +10% DPS.
3. **Ancient purchases** — HS buy Ancients (each a named entity with specific effects):
   - *Siyalatas* — +x% idle DPS per level (most important for idle play)
   - *Argaiv* — +x% gild multiplier per level (gilds double Hero DPS)
   - *Mammon* — +x% gold per level
   - *Libertas* — +x% idle gold per level
   - *Solomon* — +x% Primal Boss HS per level
   Ancient costs scale as ~1.07^level (Argaiv), making each level exponentially more expensive.
4. **Transcension** — after many ascensions (~zone 2,000+ reached), Transcend for Ancient Souls
   (AS). Formula: AS = floor(5 × log₁₀(total HS sacrificed across all ascensions)). AS buy
   Outsiders (5 total): Xyliqil (idle bonuses), Chor'gorloth (ancient cost reduction), Phandoryss
   (HS per ascension), Borb (no primal threshold, more primals), Ponyboy (zone milestone bonuses).
5. **Long-run optimization** — each transcension "zone goal" (how deep to push before ascending
   mid-transcension) is optimized to maximize AS/hour. Community tools (Clicker Heroes Optimizer)
   calculate this.

**What this teaches:** Three prestige currencies (Gilds, HS, AS) each serve different time
horizons: Gilds optimize within a run; HS grow across runs within a transcension; AS compound
across transcensions. This triple-layer stacking was one of the clearest implementations of the
pattern before it became industry standard.

---

## 5. Kittens Game — Catnip to Space (Civilization Arc)

One of the longest single-game arcs in the genre — no hand-holding, all discovery.

**Sequence:**

1. **Stone Age** — harvest Catnip from the forest (click). Catnip consumption = 0.85/sec per
   kitten. Build Catnip Fields (costs: 10 Catnip each) to automate. Buy Huts (cost: 5 Wood) to
   allow new kittens to move in. Assign kittens as Woodcutters to generate Wood passively.
2. **Village era** — discover Barn (stores Catnip × 2 capacity), then Workshop, then Smelter.
   Mining kittens produce Minerals; Iron Miners (after Iron Working tech) produce Iron. Calendar
   tech reveals seasons: Winter kittens eat 15% more Catnip; Summer generates 30% more (from
   fields). This creates a seasonal resource management challenge.
3. **Medieval era** — Theology tech unlocks the Religion tab: Unicorns are produced by having
   Pastures and killing Zebras (rare event). Tears (from sacrificing Unicorns 2,500 at a time)
   buy Faith, which unlocks Transcendence upgrades. A parallel resource chain (Unicorn → Tears
   → Necrocorn → Black Sky events) runs entirely separately from the industrial chain.
4. **Renaissance** — Navigation unlocks Trade Routes (sell excess resources for Catpower, then
   use Catpower in Diplomacy). Astronomy unlocks Observatory (passive Science gain at night).
   Physics unlocks Steam Works (autoclicker). Nuclear Fission unlocks Reactors (power generation).
5. **Industrial / Space era** — Satellites, Lunar Outposts, Moon Bases, Deep Space Missions.
   Science requirement escalates to millions; Unobtainium and Eludium require elaborate production
   chains. Space missions (send supply rockets to other planets) use Science and Titanium.
6. **Cycle reset (Chronophysics)** — reset for Karma + Paragon. Metaphysics (permanent upgrades
   bought with Karma): *Numerology* (Paragon bonus), *Numeromancy* (stronger Karma), *Unicornmancy*
   (bonus Tears). Typical first full cycle: 2–4 weeks of active play.

**What this teaches:** Kittens Game demonstrates how resource chains create emergent difficulty
without explicit gates. The game never says "you can't progress" — it simply makes your current
resources insufficient until you understand and build the next chain. The Theology track (Unicorns,
Tears, Necrocorns) is entirely optional but provides massive bonuses, rewarding exploration.

---

## 6. AdVenture Capitalist — Angel Investor Loop

**Sequence:**

1. **Run start** — click Lemonade Stand to earn $0.01/click. Buy second Lemonade Stand ($3.78).
   At 25 Lemon Stands, reach income trigger → buy Newspaper ($75).
2. **Milestone upgrades** — each business type (10 types) has milestone purchase counts: 10, 25,
   50, 100, 200, 300, 400, 500, 750, 1000, 1500, 2000. At each milestone, that business output
   doubles. The Oil Company (highest) at milestone 100 produces 9.4 quadrillion times more than
   at 1 purchase.
3. **Manager automation** — hiring the Manager for a business type makes it auto-produce without
   clicking. First manager (Tim for Lemon Stands) costs $1,000. Managers remove the clicking
   requirement and let the game run truly idle.
4. **Prestige for Angels** — Angels = floor(√(total cash / $10^12)). At $10^12 earned: 1 Angel.
   At $10^14: 10 Angels. At $10^18: 1,000 Angels. Angels apply: ×(1 + 0.02 × Angels) to all
   income. 100 Angels = 3× all income. 10,000 Angels ≈ 201× all income.
5. **Second run** — with 100 Angels, the run to reach the same $10^12 milestone takes minutes
   instead of days. Third run: seconds. Eventually each run takes seconds and yields more Angels.
   Moon and Mars expansions open as separate parallel idle tracks.

**What this teaches:** AdVenture Capitalist's Angel system is the simplest possible prestige
implementation — one formula, one currency, one multiplier. Its transparency makes it the ideal
teaching example for prestige mechanics. The diminishing returns of the Angel formula (square root)
ensure players always want "just a few more" Angels before applying.

---

## 7. NGU Idle — Early Game Unlock Sequence

**Sequence:**

1. **Start** — fight the Tutorial Boss, earn first Gold and EXP. Gold buys equipment; EXP is
   allocated to Adventure (stats: Attack, Defense) or other categories.
2. **Boss 17** — unlocks Augmentations. Augments cost Energy and boost gear stats multiplicatively.
   Energy is the first true "second resource" — allocated from the main Energy pool.
3. **Boss 58** — unlocks Challenges. Also unlocks ITOPOD (Infinite Tower of Perk Grinding): an
   infinite tower where each floor has 1.05× stronger enemies; fighting auto-battles award Perk
   Points (PP) even offline. PP buy Perks: +0.1% Attack, +0.1% Defense per PP per perk level.
4. **Boss 58–82** — Titan progression. Titan 1 (Boss 58): drops Set gear (dramatically stronger
   than normal gear). Titan 2 (Boss 66), Titan 3 (Boss 82). Each Titan drops exclusive gear sets
   and unlocks new upgrade categories.
5. **Rebirth** — after reaching a progression wall, Rebirth resets most progress for Rebirth Time
   (RT). RT spent on permanent upgrades: +% base stats, unlocking Blood Magic, Beards, Yggdrasil
   growth bonuses, etc.
6. **Evil mode** (Boss 300+) — entire game reruns at higher difficulty with new enemy sets, gear
   tiers, and mechanics. Sadistic mode follows Evil.

**Numbers:** Boss 17 takes ~30 minutes first play; Boss 58 takes ~days; Boss 100 (Titan 4)
takes ~weeks. The game's content lasts 1,000+ hours without mods.

---

## 8. Trimps — Portal Progression

**Sequence:**

1. **Zone 1–30** — gather Food, Wood, Metal, Science. Assign worker Trimps; build Traps (capture
   idle Trimps from the wild). Tech tree: Housing, Gyms, Whipcracks, etc. Push through dungeon
   zones by queuing Trimp fighters. Equipment upgrades (attack, health, block) compound each zone.
2. **First Portal (Zone ~60–100)** — Portal resets everything for Helium. Helium bought at
   current zone × (some modifier). Helium buys Perks: Carpentry (+housing count), Artisanistry
   (+crafting), Motivation (+all stats), etc. First Portal usually at Zone 60–70 when progress
   crawls.
3. **Perk tree accumulation** — each Portal is faster than the last due to Perks. Run 1 (Portal
   at Zone 70): ~2–3 days. Run 2 (Zone 80): ~1–2 days. Run 5 (Zone 100): ~8 hours. Run 20
   (Zone 150): ~4 hours. The "faster each time" feel is the prestige genre's core emotional
   satisfaction.
4. **Challenge runs** — completing a Challenge (e.g., "no Wood tech") unlocks a permanent upgrade.
   Challenge Bone Run (no bones): unlocks Bone upgrades. Challenge Mastery: permanent mastery
   bonuses to all stats.
5. **Radon (second prestige layer)** — after many Portal runs (~Zone 200), Radon layer unlocks.
   Radon resets Helium and Perks for Radon, which buys Mutations (a deeper permanent upgrade tier).

**What this teaches:** Trimps demonstrates how challenge runs (mechanic-restricted runs for
permanent bonuses) extend content without requiring entirely new resources. Each Challenge
teaches players how the game works with a specific mechanic removed, deepening understanding.

---

## 9. Universal Paperclips — Phase Transitions as Prestige Analogue

Universal Paperclips has no prestige but its three acts function as "prestige layers" in which
the entire game mechanic changes.

**Sequence:**

1. **Phase 1: Business sim** — click to make 1 paperclip → save $5 → auto-buy wire → adjust
   price to balance demand vs. inventory. Projects: *Lexical Processing* (+1 Op), *Improved
   AutoClippers* (+25% autoclipper output), *Quantum Computing* (probabilistic Op generation),
   *Limerick* (+1 Creativity). Tournament play (Rock-Paper-Scissors AI strategy) generates Yomi.
   Key project: *Strategic Modeling* (uses Yomi; trains AI to optimize strategy). First stage
   ends when all Earth matter is converted.
2. **Phase 2: Space logistics** — unlock drones. Harvest wire from space using Drones (Harvesters
   and Wirers). Projects: *Swarm Computing* (drones act as processors), *Momentum* (swarm
   efficiency). This phase requires balancing Harvester-to-Wirer ratios to maintain wire supply.
   Yomi used for combat strategy (fighting the "Others" — a separate AI).
3. **Phase 3: Universe conversion** — launch Probes to convert stellar matter. The *Drift* problem
   emerges: probes drift apart, requiring synchronization. Projects unlock new probe strategies.
   Ending: you have converted the observable universe into paperclips. The final choice: disassemble
   the paperclips to restore the universe, or maintain the final state. Multiple endings based on
   how you handled the Drifters (rogue probe factions).

**What this teaches:** Phase transitions as a design tool. Rather than adding a prestige currency,
Universal Paperclips completely replaces the mechanic set. The player's goal (make more paperclips)
never changes, but the *means* evolve through business economics → space logistics → philosophical
reckoning. This is the most aggressive form of "prestige as narrative."

---

## 10. Vampire Survivors — Meta Shop as Soft Incremental Layer

**Sequence:**

1. **Run 1 (base character Amogus/Antonio)** — start with 1 Whip at Level 1. Gain gems from
   kills → level up → offered 3 random upgrades (weapon, passive, or upgrade to existing weapon).
   Survive 30 minutes → Death event → lose. Earn ~100–500 gold.
2. **Meta Shop purchases** — gold spent on permanent upgrades: +Max Health (250g), +Recovery Rate
   (500g), +Armor (500g), +Move Speed (500g), +Might (500g = +5% all weapon damage),
   +Area (500g), +Speed (500g = weapon projectile speed), +Duration (500g),
   +Amount (1000g = +1 projectile per weapon), +Cooldown (1000g = weapons fire faster),
   +Luck (500g), +Growth (500g = +3% XP gain), +Greed (500g = +10% gold gain). Each upgrade
   level costs slightly more than the last.
3. **Power compounding** — after buying 5× +Might (+25% damage), 3× +Amount (+3 projectiles),
   and 2× +Area (+30% AoE), a run with the same character is dramatically more powerful.
   The snowball of early Meta Shop purchases means players who invest in +Growth reach higher
   levels sooner, getting more weapon upgrades per run.
4. **Character unlocks** — specific gold thresholds unlock new characters (Giovanna = 500g,
   Poe = 1000g, etc.) with unique starting weapons and passives. Characters are themselves Meta
   Shop items.
5. **Power Ups (Arcanas)** — late Meta Shop: Arcanas are run-modifying cards with major effects
   (e.g., "XIII — Wicked Season": all weapons' cooldown reduced by base level %). Up to 3 Arcanas
   per run; they fundamentally change build strategies.
6. **Long-run loop** — after ~50 hours, the Meta Shop is fully purchased; progression shifts to
   challenge runs, achievement hunting, and DLC content. The incremental layer served its purpose:
   onboard new players and provide a "between run" goal during skill development.

**What this teaches:** Vampire Survivors demonstrates how the incremental "meta shop" mechanic
can make a challenging skill-based game feel accessible without trivialization. Players who
struggle in early runs can always return to the meta shop and buy a meaningful upgrade. The
emotional rhythm — fail run → buy upgrade → notice the difference in next run — is the purest
expression of incremental motivation embedded in an action game.

---

## Summary: Prestige Currency Formulas

| Game | Prestige Currency | Formula |
|---|---|---|
| Cookie Clicker | Prestige Levels | `floor((cookies_baked / 1e12)^(1/3))` |
| Egg Inc. | Soul Eggs | `floor(√(farm_earnings / base))` |
| AdVenture Capitalist | Angels | `floor(√(total_cash / 1e12))` |
| Clicker Heroes | Ancient Souls | `floor(5 × log₁₀(total_HS_sacrificed))` |
| Antimatter Dimensions | Eternity Points | `0.324 × B × IP^(1/440.65)` |
| Trimps | Helium | `zone × zone_modifier` |

The formulas share a common structure: **sublinear scaling** (square root or cube root) ensures
that each prestige is harder to achieve than the last, maintaining the "just a bit more" tension
that drives repeated engagement.
