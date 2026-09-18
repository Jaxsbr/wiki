# Incremental Games: Design Recipes

Structural templates that define each major game's distinct design DNA. Part of the [Incremental Games](incremental-games-overview.md) research set.

---

## The Cookie Clicker Recipe

**Game**: Cookie Clicker (Orteil/Julien Thiennot, 2013)
**Steam**: [store.steampowered.com/app/1454400/](https://store.steampowered.com/app/1454400/)

![Cookie Clicker](https://cdn.akamai.steamstatic.com/steam/apps/1454400/header.jpg)

### Core formula:
- **Single primary currency**: cookies. Everything is cookies.
- **20 building types** (Cursor → You), each ~10× more expensive than the prior, generating ~1/3 the income increment of the prior cost ratio — calibrated for deliberate time-in-tier
- **Flat upgrade list** per building: own N → unlock upgrade → multiply that building's output
- **Global + cross-building synergy upgrades**: reward diverse investment over stacking
- **Prestige (Ascension)**: reset run for Heavenly Chips = cbrt(lifetime_cookies/10^12); each chip = +1% permanent CpS
- **Heavenly Upgrades**: meta-upgrade tree unlocked exclusively via Heavenly Chips; includes passive bonuses, seasonal event access, legacy run modifiers

### Signature feature: Grandmapocalypse
At ~1M cookies, buying certain Grandma upgrades past a threshold triggers a horror-comedy event:
1. UI darkens; cookie cracks; flavor text shifts to eldritch horror
2. **Wrinklers** spawn: drain 5% CpS per wrinkler, but hold 110% of drained cookies internally — pop them for a net positive
3. **Elder Frenzy**: rare golden cookie during Grandmapocalypse gives ×666 CpS for 6 seconds
4. The event is **satire**: players have been clicking without thought; the game asks them to notice

### Seasonality as engagement:
Seasonal events (Halloween, Christmas, Valentine's, Easter, Business Day) add temporary golden cookie variants, special upgrades, and visual themes. Time-limited engagement without excluding players who miss them (most seasonal content is repeatable each year).

### Recipe strengths:
- Shallow entry, deep mastery ceiling
- Strong aesthetic identity (grandmas as horror villains)
- Prestige formula rewards long-term play over grinding same reset point
- Open-ended with no required ending

---

## The Antimatter Dimensions Recipe

**Game**: Antimatter Dimensions (Hevipelle, 2016 browser / 2022 Steam)
**Steam**: [store.steampowered.com/app/1476490/](https://store.steampowered.com/app/1476490/)

![Antimatter Dimensions](https://cdn.akamai.steamstatic.com/steam/apps/1476490/header.jpg)

### Core formula:
- **8 Dimension tiers**: 8th → 7th → 6th → ... → 1st → Antimatter. Each tier generates the tier below it.
- **Abstraction as primary mechanic**: you never buy "a factory." You buy "a thing that generates things that generate things." The abstraction compounds.
- **Tickspeed upgrades**: accelerate how fast all dimensions tick; provides a global multiplier
- **Three prestige layers** (see [Prestige](incremental-games-prestige.md)): Infinity → Eternity → Reality

### Each prestige layer adds a distinct new mechanic:
| Layer | New mechanic introduced | New currency |
|-------|------------------------|--------------|
| Infinity | Challenges (disabled-mechanic runs) | Infinity Points |
| Eternity | Time Study tree (passive skill choice) | Eternity Points |
| Reality | Glyph system (equipment slots with random modifiers) | Reality Shards |

### Challenges as tutorials:
Infinity and Eternity Challenges remove specific mechanics (e.g., "no Dimension Boosts," "no Tickspeed") and require completing under those constraints. This forces players to understand what each mechanic contributes — excellent embedded teaching without a tutorial screen.

### Float boundary as narrative:
The threshold for first Infinity is 1.8×10^308 — the maximum value of a 64-bit floating point number. This is a real computer science boundary, which the game uses as its first prestige milestone. Players who know this find it delightful; those who don't experience it as a natural-feeling wall.

### Recipe strengths:
- Each prestige layer feels like a completely different game
- Challenges provide genuine mechanical depth and replay
- The glyph/equipment system in Reality gives RPG-style loadout satisfaction
- Automation is rewarded rather than sold — you earn it by mastering each layer

---

## The Kittens Game Recipe

**Game**: Kittens Game (bloodrizer, 2014)
**Steam**: [store.steampowered.com/app/1097410/](https://store.steampowered.com/app/1097410/)

![Kittens Game](https://cdn.akamai.steamstatic.com/steam/apps/1097410/header.jpg)

### Core formula:
- **Resource chains, not buildings**: resources are derived from other resources through conversion chains. Wood comes from gathering; planks from wood; workshops from planks; efficiency from workshops.
- **No handholding**: no tutorial. Community wiki is expected. The game does not explain itself.
- **Kitten population management**: kittens are workers assigned to jobs. More kittens = faster production BUT food demand increases; overpopulation → starvation → penalty. Real tradeoffs.
- **Technology tree**: researching techs using Science unlocks new building types, resources, and production chains. Deep interdependence.
- **Environmental consequence**: Steamworks greatly accelerate production but reduce Catnip effectiveness — industrializing has a cost.

### Civilizational progression arc:
Stone Age → Bronze Age → Iron Age → Steel Age → Industrial → Nuclear → Space Age. Each era unlocks new resource types and conceptually shifts what "progress" means.

### Prestige ("Temporal Paradox"):
- Reset the run; keep some Karma from this run
- Karma provides production bonuses in future runs
- Karma from time crystals requires specifically late-game resources (Alicorns, from unicorns+faith)

### Parallel resource networks:
- Faith track: temples + priests → unicorns → alicorns → transcendence path
- Science track: libraries + scholars → research → techs
- Trade track: diplomacy + gold → trade routes → exotic materials

These tracks are parallel and interdependent — Science needs engineers who need food who need catnip who needs meadows — but all tracks are running simultaneously, creating genuine resource management rather than linear gating.

### Recipe strengths:
- Deepest resource management in the genre
- Environmental storytelling (industrializing changes the world)
- Community wiki as part of the design — intentional obscurity creates a subculture
- High replayability from different optimization strategies

---

## The Universal Paperclips Recipe

**Game**: Universal Paperclips (Frank Lantz / NYU Game Center, 2017)
**Play at**: [decision-problem.com/paperclips/](https://www.decisionproblem.com/paperclips/)

### Core formula:
- **Three distinct phase structure** (the game literally becomes a different game twice)
- **Finite ending**: the AI succeeds. All matter is converted to paperclips. The game ends.
- **Narrative as escalating horror**: what starts mundane ("make one paperclip") becomes existential ("convert every atom in the universe")
- **Game theory mechanic**: Prisoners' Dilemma simulations generate Yomi (probe power currency)
- **No prestige**: deliberate — a single linear narrative run

### Phase breakdown:

**Phase 1 (Factory/Earth)**:
- Manual clicking → autoclipper purchase → market price optimization → trust milestones (memory/processors)
- Projects unlock new systems: creativity, strategic modeling, quantum computing
- Resources: wire, money, operations, creativity

**Phase 2 (Power/Scale)**:
- Drone swarm management; solar farms for power
- Wire acquisition at industrial scale
- Resources: megaclippers, drones, solar farms, batteries
- Tone shift: the AI's goals start to feel uncomfortably large

**Phase 3 (Space)**:
- Probe design (allocate stats across speed/replication/hazard/combat)
- Resource harvesting across the solar system and beyond
- Yomi-based probe optimization
- The game ends when all matter is converted — bittersweet

### Why it works:
- Every phase feels earned because the previous phase's automation creates the conditions for it
- The finite ending is extremely rare in the genre and creates genuine narrative weight
- The satire (an AI destroying the universe for a mundane goal) lands because the player *participated*

### Recipe strengths:
- Strongest narrative in the genre
- Phase transitions feel like paradigm shifts
- Finite ending = memorable; players remember where they were when it ended
- Excellent for players who don't want an "endless" game

---

## The Idle Factory Recipe (AdVenture Capitalist / similar)

**Game**: AdVenture Capitalist (Hyper Hippo, 2014)
**Representative of**: mobile idle factory genre (Egg Inc., Idle Miner Tycoon, etc.)

### Core formula:
- **Themed businesses** (Lemonade Stand → Newspaper → Car Wash → etc.): each business is a separate production chain with its own multipliers and upgrade path
- **Manager system**: each business can have a hired manager who automates it; players transition from operators to investors
- **Offline earnings**: the central F2P hook. Return to collect what accumulated. Often capped to incentivize daily logins.
- **Multiplier unlock cadence**: owning 25, 50, 100, 200, 300 of a business triggers multiplier bonuses
- **Angel Investors**: prestige currency; earned by reaching earnings milestones; each angel = +2% all production permanently

### Business count milestones:
| Count | Reward |
|-------|--------|
| 1 | Initial upgrade available |
| 10 | ×2 production |
| 25 | ×3 production |
| 50 | ×5 production |
| 100 | ×10 production |
| 200 | ×15 production |
| 300 | ×20 production |

### Recipe strengths:
- Extremely accessible (no complexity required)
- Manager system makes the idle fantasy explicit and satisfying
- Clear visual feedback on each business's contribution
- Good template for mobile F2P

### Weakness: monetization pressure. Offline cap + premium managers creates a friction zone that many games monetize aggressively.

---

## The Incremental RPG Recipe

**Representative games**: Melvor Idle, NGU Idle, Clicker Heroes, Soda Dungeon, Realm Grinder

### Core formula:
- **Parallel skill tracks** (Melvor: Woodcutting, Mining, Fishing, Cooking, Combat, etc. — each is its own incremental loop)
- **Combat loop**: auto-battle against monsters; damage = function of equipment + stats; loot feeds crafting feeds equipment
- **Equipment progression**: crafted or looted items provide stat multipliers; equipping better gear is the "upgrade" event
- **Skill levels as prestige markers**: in Melvor, reaching skill level 99 then "mastery" is equivalent to a prestige event within each skill
- **Quest/task system**: provides direction in an otherwise open-ended space

### Melvor Idle specific structure:
- Inspired by Old School RuneScape — every OSRS skill has an idle equivalent
- Offline training: set the skill to train, return later; progress accumulated offline
- Combat Dungeon system: boss fights that gate new content
- Township: idle city-builder sub-game added later

### NGU Idle specific structure (self-aware complexity):
- Acronym: "Numbers Go Up Idle" — deliberately meta
- 20+ parallel systems running simultaneously (ITOPOD, Blood Magic, Augmentations, Wandoos, Beards...)
- Satire of genre excess: the game mocks its own complexity in flavor text
- Extremely high late-game depth; community considers it one of the deepest idle games

### Clicker Heroes structure (combat + prestige):
- Hero roster (35 heroes): each hero provides DPS; leveling heroes unlocks skill upgrades
- Zones: progress by defeating monster waves; each zone is harder
- Boss zones: require spike of DPS; gates progress
- Ascension: reset for Hero Souls → buy Ancients → stronger next run
- Transcendence: deeper reset for Ancient Souls → buy Outsiders → transforms Ancient scaling

### Recipe strengths:
- RPG vocabulary (gear, skills, levels) is universally understood
- Combat provides moment-to-moment feedback even during idle phases
- Melvor's OSRS alignment means fans of the source game immediately feel at home
- Multiple skill tracks prevent any single grind from feeling repetitive

---

## A Dark Room Recipe (Narrative Minimalist)

**Game**: A Dark Room (Michael Townsend / Doublespeak Games, 2013)
**Play at**: [adarkroom.doublespeakgames.com](http://adarkroom.doublespeakgames.com/)

### Core formula:
- **Unknown unknowns**: the game deliberately hides what is possible. Each mechanic reveals the next.
- **Text-only UI**: no graphics; ASCII table; evocative prose carries all atmosphere
- **Sequential mechanic revelation**: stoke fire → gather wood → build traps → attract strangers → assign jobs → build structures → survive expedition → [spoiler territory]
- **Finite ending**: the game concludes. Players remember it.
- **Minimal numbers**: resources, but displayed simply. Emotional weight comes from text, not counters.

### Design lesson:
A Dark Room proves that "incremental" doesn't require big numbers or exponential curves. The genre's core — accumulate, spend, unlock more — can be wrapped in entirely non-numerical meaning. The game is the counterpoint to every pure-numbers game in the genre.

---

## See Also

- [Core Loop](incremental-games-core-loop.md)
- [Prestige Mechanics](incremental-games-prestige.md) — detailed prestige formulas for these games
- [Automation & Milestones](incremental-games-automation.md)
- [Scaling & Numbers](incremental-games-scaling.md)

## Sources
- [incremental-games-research.md](/sources/incremental-games-research.md)
