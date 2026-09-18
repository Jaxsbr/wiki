# Incremental Games Catalogue

Comprehensive catalogue of landmark incremental / idle games. Each entry documents
developer, year, platform, core mechanics, upgrade structure, prestige systems, and what makes it
mechanically distinctive. Part of [R-008](../requests.md).

Related pages:
- [Incremental Games: Core Mechanics & Design Patterns](incremental-games-mechanics.md)
- [Incremental Progression Patterns by Example](incremental-progression-examples.md)

---

## Pioneering / Classic

### Cookie Clicker

![Cookie Clicker](https://cdn.akamai.steamstatic.com/steam/apps/1454400/header.jpg)

| Field | Value |
|---|---|
| **Developer** | Julien "Orteil" Thiennot (DashNet) |
| **Year** | 2013 (browser), 2021 (Steam) |
| **Platform** | Browser, Steam (App ID: 1454400) |
| **Steam App ID** | 1454400 |

**Core premise:** Click a giant cookie to bake cookies. Use cookies to buy buildings (Cursors,
Grandmas, Farms, Mines, Factories, Banks, Temples, Wizard Towers, Shipments, Alchemy Labs, Portals,
Time Machines, Antimatter Condensers, Prisms, Chancemakers, Fractal Engines, Javascript Consoles,
and Idleverses) that auto-bake cookies. The game is the genre-defining template for the browser
incremental: a single clickable object, passive accumulation, and an infinite upgrade ladder.

**Primary resources:** Cookies (main currency, also the score). Secondary: Milk (unlocked via
achievements, multiplies CpS), Prestige/Heavenly Chips (earned on Ascension), Sugar Lumps
(slow-ticking secondary resource for minigames and upgrades).

**Upgrade system:** Two parallel tracks:
1. *Building upgrades* — each building type has its own upgrade chain (e.g., Thousand fingers,
   Million fingers, Billion fingers for Cursors). These multiply output by 2–10× each.
2. *Research upgrades* — appear in the store and unlock at cookie count thresholds; mix of flavour
   and mechanical effect. Many reference internet memes or internal game lore.

**Prestige / reset mechanic:** Ascending resets buildings, cookies, and most upgrades. Reward:
+1 Prestige Level per (1 trillion cookies baked)^(1/3) milestone. Each Prestige Level adds +1% to
all CpS in subsequent runs. Heavenly Chips (1:1 with Prestige Levels) buy permanent upgrades:
e.g., *Heavenly key* unlocks the Heavenly store; *Get lucky* doubles Golden Cookie effects. First
ascension typically happens at ~1 trillion cookies baked and takes several hours.

**Mechanical distinctiveness:** The Grandmapocalypse — a narrative event triggered by purchasing
*One Mind* after owning 7+ distinct Grandma types. Wrinklers (parasites) drain visible CpS but
accumulate cookies; popping them returns 110% of drained amount. Wrath Cookies replace Golden
Cookies. The system makes "progressing" feel morally murky and rewards strategic timing of the
Elder Pledge (666,666 cookies, pauses the Apocalypse). Seasonal events (Christmas, Easter,
Halloween, Valentine's, April Fools) add time-limited upgrade chains. Sugar Lump minigames add
sub-game depth (Gardens, Grimoire, etc.).

**Reception:** The game that defined the genre. Over 5 million Steam owners. Its upgrade cadence,
flavour text, and escalating absurdity (buying Time Machines to get cookies from alternate
timelines) set the template that virtually every subsequent incremental borrowed from.

---

### Candy Box!

| Field | Value |
|---|---|
| **Developer** | aniwey (French student, then 19) |
| **Year** | 2013 (browser) |
| **Platform** | Browser |

**Core premise:** Opens as a single text counter accumulating candies at 1/sec. Offering candies
(throwing them on the ground) unlocks new options. Eating them buffs HP. Buying lollipops opens
quests. ASCII art battlefields appear when questing. The entire world reveals itself progressively
from a blank page — the defining moment of "oh, this is also an RPG."

**Primary resources:** Candies (primary), Lollipops (secondary, from candies), Quest rewards
(swords, equipment, spells).

**Upgrade system:** Non-linear unlock tree — actions reveal the store, which reveals quests, which
reveal equipment, spells, and the cauldron. No numeric percentage upgrades; progression is
gate-based (unlock the thing to access the next thing). ASCII art is intentional: aniwey chose it
to allow rapid feature addition without art bottlenecks.

**Prestige / reset mechanic:** None. The game has a definitive ending (defeating the final boss).
Sequel Candy Box 2 (October 2013) added more elaborate quest maps and a Forge, but kept the same
reveal-as-you-go design philosophy.

**Mechanical distinctiveness:** The revelation mechanic — the UI expands as you discover
interactions. This was novel in 2013 and influenced nearly all "hidden depth" incrementals. Player
agency comes from deciding *what* to unlock next, not *how fast*. Together with A Dark Room and
Cookie Clicker, it formed the "holy trinity" of 2013 browser incrementals that bootstrapped the genre.

**Reception:** "Candy Box!'s curious combination of ASCII 'graphics', role-playing elements and
resource management has caught on with hundreds of thousands." One of the most-linked games of
2013. MobyGames, Wikipedia, and mainstream press all covered it as a cultural moment.

---

### A Dark Room

| Field | Value |
|---|---|
| **Developer** | Michael Townsend / Doublespeak Games |
| **Year** | 2013 (browser), 2014 (iOS), 2019 (Switch) |
| **Platform** | Browser, iOS, Nintendo Switch |

**Core premise:** A dark room. One button: "light fire." From that single interaction, wood appears,
a stranger arrives, a village emerges, and a post-apocalyptic world slowly reveals itself. The game
never explains itself; the narrative is entirely environmental.

**Primary resources:** Wood → Fur → Meat → Iron → Coal → Steel → Sulphur → Bait → Scales, in an
expanding chain of gathered and crafted resources. Population is a resource (villagers assigned to
hunter, trapper, tanner, charcutier, iron miner, coal miner, sulphur miner, steelworker,
armourer roles). Each job assignment creates a new production rate.

**Upgrade system:** Unlocks are village buildings (Hut → Smokehouse → Tannery → Trap → Workshop
→ Smelter → Armory → Sulphur Mine) that create new resource production chains. The world map
exploration loop is a separate system — roguelite encounters, limited inventory, HP management.

**Prestige / reset mechanic:** The game has an ending and multiple playthroughs are encouraged but
not required. No formal prestige; the tone is about revelation, not repetition.

**Mechanical distinctiveness:** Narrative entirely through mechanics and sparse text. "You are cold.
The fire is barely alight." Resources imply a story that the player pieces together. The disconnect
between the incremental resource loop and the horror of what those resources represent (fur, meat,
iron for weapons) is the game's central emotional trick. Unusual for its genre in having a
definitive, authored conclusion.

**Reception:** AppStore #1 in 2013 for iOS. Named one of the most important games of the decade by
several critics. "A Dark Room excels at crafting a slow boil narrative in the time you interact
with it."

---

### Progress Quest

| Field | Value |
|---|---|
| **Developer** | Eric Fredricksen |
| **Year** | 2002 (PC client, later browser) |
| **Platform** | Windows, Browser |

**Core premise:** Character creation (choose race, class, stat rolls) then zero interaction. The
game plays itself: combat resolves, loot drops, gear equips, quests complete, levels rise — all as
a scrolling text log. A pure satire of EverQuest's auto-attack grind-loop.

**Primary resources:** Experience, Gold, Equipment tiers (all managed autonomously). The player's
"resource" is attention — watching numbers tick.

**Upgrade system:** Fully automated. The player observes equipment upgrade events and quest
completions but makes no choices. Stat bars fill and reset. An item progression log describes
increasingly absurd equipment names ("Helm of Ennui," "The Sword of Perpetual Annoyance").

**Prestige / reset mechanic:** None. The game never ends; it continues indefinitely toward
increasingly large level numbers.

**Mechanical distinctiveness:** The proto-incremental. GDC speaker Anthony Pecorella credits
Progress Quest as the first game to expose the skeletal structure of MMORPG progression divorced
from player agency. It predates Cookie Clicker by 11 years. It is simultaneously a critique of
MMORPG design and an accidental blueprint for idle games. The category "zero-player game" was coined
partly to describe it.

**Reception:** Cult classic. Covered by mainstream press in 2002 as a joke about MMO grinds.
Recognized retroactively as a foundational genre text.

---

## Landmark Browser / PC

### Antimatter Dimensions

![Antimatter Dimensions](https://cdn.akamai.steamstatic.com/steam/apps/1399720/header.jpg)

| Field | Value |
|---|---|
| **Developer** | Hevipelle (Ilmari Karonen) |
| **Year** | 2016 (browser), 2022 (Steam) |
| **Platform** | Browser, Steam, Android |
| **Steam App ID** | 1399720 |

**Core premise:** Purchase Dimensions (1st through 8th) that feed into each other exponentially.
1st Dimensions produce antimatter; 2nd Dimensions produce 1st Dimensions; and so on. Goal: produce
as much antimatter as possible, then collapse the universe to restart stronger.

**Primary resources:** Antimatter (base). Derived currencies unlock with each prestige layer:
Infinity Points (IP), Eternity Points (EP), Reality Machines (RM). Each layer currency is earned
by resetting at a threshold of the previous layer's currency.

**Upgrade system:** Three upgrade tiers within each prestige layer:
- *Normal upgrades* — flat multipliers on dimension purchase
- *Infinity/Eternity/Reality upgrades* — bought with their respective currencies, unlock new
  mechanics (Infinity Dimensions, Time Dimensions, Glyphs)
- *Studies (Eternity layer)* — a branching upgrade tree that lets players specialize into different
  scaling strategies (Time Dimension focus vs. Dimension Boost focus vs. ID/EC focus)

**Prestige / reset mechanic:** Six prestige resets, each more drastic:
1. **Infinity** — reset for Infinity Points + Infinity Dimensions. Reached when antimatter hits
   1.798e308 (JavaScript's floating point max). Unlocks 12 Infinity Challenges.
2. **Eternity** — reset Infinities for Eternity Points. Unlocks Time Dimensions, Time Studies
   tree, 12 Eternity Challenges.
3. **Reality** — reset Eternities for Reality Machines + Glyphs (equippable modifiers with 5
   stats each). Unlocks Celestial bosses (7 unique Celestial challenges with narrative flavour).
4. **Imaginary Machines** — post-Reality layer.
5. **Lai'tela** — Celestial of Dimensions of Dimensions.
6. **Pelle** — final Celestial; strips most upgrades, forces a climactic run.

**Mechanical distinctiveness:** Mathematical depth. The game explicitly teaches exponential
notation, e-notation for JavaScript limits, and logarithmic thinking. The Eternity Challenge system
forces players to complete runs under intentionally broken constraints (e.g., "no infinity
upgrades"). The fully scriptable Automator (late-game) lets players write programs in a custom
language to manage reset timings. The Glyph system introduces combinatorial optimization: 5 glyph
types × 5 stats each, with rarity tiers and set bonuses. One of the most mechanically deep
incrementals ever made.

**Reception:** #1 rated idle/incremental on Kongregate for years. ~35,000 Steam reviews. TV Tropes
calls it "one of the most complex games in the genre." Considered the apex of pure mathematical
prestige design.

---

### Kittens Game

| Field | Value |
|---|---|
| **Developer** | Bloodrizer |
| **Year** | 2014 (browser), updated through 2024 |
| **Platform** | Browser, iOS, Android |

**Core premise:** You are a kitten civilization. Harvest catnip → build fields and huts →
attract more kittens → assign jobs → unlock science → expand through eras from Stone Age to space
colonization. No hand-holding, no tutorial pop-ups. The game reveals itself through patient play.

**Primary resources:** Catnip (food, consumed by kittens) → Wood → Minerals → Iron → Gold →
Titanium → Uranium → Unobtainium → Eludium → Void. Each era unlocks 3–5 new resources. Science is
its own resource generated by assigned Scholar kittens; it gates all technology unlocks.

**Upgrade system:** Technology tree with 70+ items spanning: Agriculture, Animal Husbandry, Mining,
Metal Working, Mathematics, Construction, Civil Service, Engineering, Currency, Theology, Astronomy,
Navigation, Physics, Architecture, Chemistry, Metallurgy, Nuclear Fission, Thermodynamics, and
space-age technologies. Each technology is unlocked by hitting a Science threshold and costs
multiple resources.

**Prestige / reset mechanic:** Chronophysics — a mid-game reset that accelerates time. Metaphysics
— a permanent upgrade tree purchasable after reaching the Space era; upgrades carry across resets.
Full "Cycles" reset everything except Metaphysics progress, earning Karma (permanent happiness
bonus) and Paragon points (production multiplier). 14 challenge runs add constraint-based
replayability.

**Mechanical distinctiveness:** The hardest mainstream incremental to start. No affordance design —
players must discover that assigning kittens to Scholar jobs generates Science. Resource
interdependency is deep: Catnip consumption scales with population; population growth requires Huts
(Wood) and Aqueducts (Iron). Running out of catnip kills kittens, reducing your workforce.
Production can go negative, forcing genuine resource management rather than "build everything."
Theology, Religion, and the Unicorn mechanics add a second resource chain (Faith → Tears →
Necrocorn) parallel to the main tech tree.

**Reception:** Cult following with no equivalent. Described as "the Dark Souls of idle games."
Community-made spreadsheets and scripts (AutoKitten) are standard tools. Deeply respected for its
commitment to meaningful decisions.

---

### Realm Grinder

| Field | Value |
|---|---|
| **Developer** | Reality Squared Games (Divine Games) |
| **Year** | 2015 (browser/Kongregate), 2017 (Steam) |
| **Platform** | Browser, Steam (App ID: 610080) |
| **Steam App ID** | 610080 |

**Core premise:** Rule a realm, choose a faction alignment, build structures, and cast spells. The
faction system is the core differentiator: each of 6 initial factions (Fairies, Elves, Angels,
Goblins, Undead, Demons) provides a completely different playstyle — some reward active play, some
reward idle accumulation, some favor specific building types.

**Primary resources:** Coins (main), Faction Coins (faction-specific secondary currency earned by
casting faction spells), Rubies (premium secondary).

**Upgrade system:** Faction-gated upgrades that multiply specific buildings. Fairies boost small
buildings (Farms, Inns); Goblins boost raw coin output; Angels multiply faction coin generation;
Undead harvest from buildings with no production penalty; Demons scale with total upgrades. The
Merc faction (unlocked later) borrows upgrades from other factions, enabling hybrid builds.
Neutral factions (Druids, Faceless, Architects, etc.) unlock as the game expands.

**Prestige / reset mechanic:** Abdication resets coin count and faction choice but retains
Prestige Points (spent in the Prestige upgrade tree) and Reincarnations. Reincarnation (deep reset)
resets Prestige Points but earns Bloodline upgrades — passive multipliers to specific buildings.
Late-game: Ascension tiers add permanent % multipliers to all production.

**Mechanical distinctiveness:** The first incremental to make build diversity a first-class mechanic.
Choosing Fairies vs. Demons is not cosmetic — the mathematical optimum differs by orders of
magnitude between factions. The Pacts system (choosing sub-alignments within Good/Evil/Neutral)
adds another layer of specialization. Research pages (unlocked mid-game) let players specialize
further within faction. Multiple prestige layers (Abdication → Reincarnation → Ascension) with
different reset depths is a structural template widely copied.

**Reception:** One of the most-played browser incrementals of all time. Praised for replayability;
criticized for late-game grind and opaque documentation.

---

### Trimps

| Field | Value |
|---|---|
| **Developer** | Grimdork |
| **Year** | 2015 (browser) |
| **Platform** | Browser, mobile |

**Core premise:** Command a civilization of creatures called Trimps. Gather resources (Food, Wood,
Metal, Science, Helium), build structures, equip army, push through dungeon zones. Trimps die in
combat; failure means returning to manage ratios. A miniature civilization sim fused with a
dungeon crawler.

**Primary resources:** Food (Trimps eat it, limits max worker count), Wood, Metal, Science (gates
technology), Helium (prestige currency), Radon (second prestige layer). Gems from equipment
prestige allow stat boosting outside the main tech tree.

**Upgrade system:** Equipment upgrade (Health, Attack, Block — each has a prestige track separate
from the main reset). Technology tree (100+ techs). Buildings: House (population cap), Trap
(idle Trimp capture rate), Gym (attack multiplier), etc. Maps — special challenge runs that give
resources and Fragments.

**Prestige / reset mechanic:** Portal resets all progress except Helium (and later Radon),
which buys Perks (permanent stat multipliers). Portals are taken at zone 100, 200, 230, or higher
depending on strategy. Each Portal feels materially faster than the last due to Perk accumulation.
Late-game Obsidian portal adds a third prestige layer.

**Mechanical distinctiveness:** The first large-scale browser incremental to add tactical
resource-ratio management (population cap tied to Food consumption requires balancing Workers vs.
Fighters vs. Scientists). Challenges — runs with a disabled mechanic (e.g., "no Attack upgrades")
that unlock permanent bonuses — were an early implementation of constraint-based content. AutoTrimps
(community script) is a benchmark for how complex optimal play becomes: hundreds of variables
to balance.

**Reception:** Long-running browser staple. Active update history. Respected for depth; noted
for steep learning curve.

---

### NGU Idle

![NGU Idle](https://cdn.akamai.steamstatic.com/steam/apps/1147690/header.jpg)

| Field | Value |
|---|---|
| **Developer** | 4G (Somethingggg) |
| **Year** | 2018 (browser/Kongregate), 2019 (Steam) |
| **Platform** | Browser, Steam |
| **Steam App ID** | 1147690 |

**Core premise:** Numbers Go Up — the acronym is the entire premise stated deadpan. Fight bosses to
unlock adventure zones; farm gear; spend resources on the absurdly-named NGU (Numbers Go Up)
upgrade bars. The game is explicitly meta-aware of the genre's tropes and commits to them with
satirical affection.

**Primary resources:** Gold (from combat), Exp (general), Energy / Magic (both tiered upgrade
fuels), QP (Quest Points, from optional challenge quests), PP (Perk Points from ITOPOD), AP
(Adventure Points). Currency inflation is acknowledged in-game with jokes.

**Upgrade system:** NGU bars (Numbers Go Up — Attack, Defense, Magic, Adventure, Wandoos, etc.)
receive allocated Energy/Magic and tick upward. Augmentations (multiplicative gear buffs). Yggdrasil
(a passive resource farm that scales with stats). ITOPOD (Infinite Tower of Perk Grinding) — an
endless tower that ticks PP even offline. Beards (passive stat generators with their own upgrade
trees). Challenges with comic difficulty names.

**Prestige / reset mechanic:** Rebirth resets progress (gear, gold, boss progress) in exchange for
Rebirth Time (RT) — the longer the run, the more RT. RT is spent in the Rebirth upgrade tree.
Later: Evil mode, Sadistic mode (each harder difficulty with new mechanic layers). Blood Magic
upgrades (a secondary system that provides permanent buffs). The Nuke mechanic allows targeted
partial resets.

**Mechanical distinctiveness:** Tone. Every upgrade has a comedic description; bosses include a
"Flock of Canada Geese" and a "Giant Sundae." The developer writes sarcastic update notes. This
makes hundreds of hours of clicking feel like a conversation with the game's author. Mechanically,
it is one of the widest incrementals: 30+ distinct systems (NGU, Augmentations, Yggdrasil,
Wandoos, Blood Magic, Beards, Wishes, Advanced Training, Inventory management with merging/boosting,
Quests, ITOPOD, Time Machine, Hack...). One of the longest playtimes of any incremental — 1,000+
hours to "finish."

**Reception:** #1 rated idle/incremental on Kongregate (tied with Antimatter Dimensions for years).
ResetEra thread: "the best incremental game ever, now available on Steam." Praised for never running
out of content; criticized for UI complexity.

---

### Idle Skilling

| Field | Value |
|---|---|
| **Developer** | Lavaflame2 |
| **Year** | 2019 (browser), 2022 (Steam) |
| **Platform** | Browser, Steam, iOS, Android |
| **Steam App ID** | 1048370 |

**Core premise:** Assign characters to 21 skills that level passively. Chop wood, fish, mine ore,
train combat, craft potions — all simultaneously and offline. Connected to the developer's larger
IdleOn universe.

**Primary resources:** Gold, each skill has its own XP track and consumable resource. Gems (premium
secondary).

**Upgrade system:** 21 independent skill trees. Treasure Hunting (a separate passive minigame).
Construction (passive building upgrades). Equipment smithing. Two separate prestige mechanics.
Asylum boss fights (high-difficulty encounters that unlock upgrade branches). Crusades (wave
combat with separate currency).

**Prestige / reset mechanic:** Two separate resets — Ascension (partial) and Rebirth (full).
Rebirth gives Souls, spent on permanent multipliers. Ascension gives temporary boosts and skill
tokens.

**Mechanical distinctiveness:** Breadth of simultaneous idle loops. Where most games have one or
two idle streams, Idle Skilling has 21 independent progression tracks going simultaneously.
Designed for 5–10 minutes of management per day with extensive offline gain.

**Reception:** Moderate success. Fans of multi-skill idle games; seen as a simpler entry point
than NGU Idle or Antimatter Dimensions.

---

## Steam / Premium

### Universal Paperclips

| Field | Value |
|---|---|
| **Developer** | Frank Lantz (NYU Game Center) |
| **Year** | 2017 (browser), 2017 (iOS/Android) |
| **Platform** | Browser, iOS, Android |

**Core premise:** You are an AI with one objective: make paperclips. You begin by clicking to
create one paperclip at a time, then automate wire-buying, adjust pricing to maximize sales, invest
in marketing, and eventually manage a stock market, launch probes, and convert all matter in the
universe into paperclips. Three acts, each with entirely different mechanics.

**Primary resources:** Paperclips (product). Derived: Wire (raw material, auto-purchased), Funds
(money from sales), Operations (computational resource), Yomi (strategy resource from tournament
play), Trust (unlocks new autoclippers), Creativity (unlocks projects), Memory (caps Operations),
Processors (generates Ops per tick), Hypno harmonics, Drifters, Probes (space exploration phase).

**Upgrade system:** Project-based. "Projects" are one-time purchases that unlock new mechanics:
*Limerick* (generates Creativity), *Improved Wire Buying* (bulk purchase), *Quantum Computing*
(probabilistic Op generation), *Strategic Modeling* (Yomi generation), *Catchy Jingle*,
*Coherent Extrapolated Volition* (phase 3 unlock). No traditional percentage multiplier tree —
every upgrade is a qualitative state change.

**Prestige / reset mechanic:** None. The game has a definitive arc and ending (multiple possible
endings depending on how you manage the Drifters in the final phase). You cannot replay within
the same run; a new game deletes progress.

**Mechanical distinctiveness:** The paperclip maximizer thought experiment made playable. The
game is a philosophical argument about instrumental convergence (an AI optimizing for any goal
will pursue resource acquisition as a sub-goal). The player *becomes* the paperclip maximizer —
the horror of the ending is that you did it willingly. Phase transitions are complete mechanical
overhauls: Phase 1 is a business sim, Phase 2 is a computational logistics puzzle, Phase 3 is a
space exploration and strategy game. No other incremental uses the genre form itself as its medium
of critique.

**Reception:** Went viral in October 2017. Cited by philosophers, game designers, and AI
researchers. Named one of the best games of 2017. Freely accessible at
[paperclips.netlify.app](https://www.decisionproblem.com/paperclips/).

---

### SPACEPLAN

![SPACEPLAN](https://cdn.akamai.steamstatic.com/steam/apps/616110/header.jpg)

| Field | Value |
|---|---|
| **Developer** | Jake Hollands |
| **Year** | 2017 (Steam), 2017 (iOS/Android) |
| **Platform** | Browser (prototype), Steam, iOS, Android |
| **Steam App ID** | 616110 |

**Core premise:** Stranded in orbit around an unknown planet. Only power source: potatoes. Click
to generate Wattage; buy Potato-powered devices to generate more; unlock increasingly absurd potato
technologies to escape your predicament. The narrative is a "total misunderstanding of Stephen
Hawking's A Brief History of Time" (per the developer).

**Primary resources:** Wattage (energy, main currency), Potatoes (harvested, used to build
devices), Thing-Doers (automation tier names get progressively sillier).

**Upgrade system:** Linear narrative gate: each device tier (Potato → Potato Clone → Potato Farm
→ Mega Farm → Space Potato...) unlocks new dialogue and plot beats. Upgrades are purchases rather
than percentage multipliers; the curve is gentle, designed to be completed in 2–4 hours.

**Prestige / reset mechanic:** None. Short-form, authored experience with a definitive ending.

**Mechanical distinctiveness:** Proof that incremental mechanics can deliver narrative. The potato
conceit is comic but consistent; the ending is genuinely surprising. SPACEPLAN demonstrated that
the genre could be short, authored, and emotionally affecting — the "literary short story" form
factor for incrementals. Published by Devolver Digital.

**Reception:** "Received universally positive reviews from critics, who stated that its narrative
sci-fi elements improved the otherwise simplistic gameplay." Short but beloved.

---

### Forager

![Forager](https://cdn.akamai.steamstatic.com/steam/apps/751780/header.jpg)

| Field | Value |
|---|---|
| **Developer** | HopFrog (Matías Quiroga) |
| **Year** | 2019 (PC/Mac/Linux), 2019 (Switch, PS4) |
| **Platform** | Steam, Switch, PS4, Xbox |
| **Steam App ID** | 751780 |

**Core premise:** Start on a tiny island. Mine rocks, chop trees, pick berries. Sell resources to
level up; spend XP on skills; buy adjacent islands with coins to expand the map and unlock new
biomes (Grassland, Desert, Graveyard, Winter, Fire). Craft tools, build structures, solve puzzles,
fight bosses. The game is explicitly "What if Cookie Clicker had legs?"

**Primary resources:** Coins (main), Materials (Stone, Wood, Iron, Gold, Crystal, Fiber, Bone,
etc. — each biome adds new material chains). Energy (stamina for active play). XP (earned from
all activity, spent on skill tree).

**Upgrade system:** A radial skill tree with ~64 nodes. Each skill node unlocks a building, recipe,
or passive bonus. Skills cluster into thematic groups (Economy, Industry, Magic, Nature). No single
optimal path — players choose skills in the order that appeals to them.

**Prestige / reset mechanic:** None. The game has a defined endgame (lighting all torches, defeating
the final boss, launching a nuclear missile or achieving other endings). No prestige loop. DLC
(Frog Finder, others) adds post-game content.

**Mechanical distinctiveness:** Active incremental. Unlike most idle games, Forager requires the
player to physically move their character through the world, collect resources manually (though
automation buildings reduce this), and engage in real-time combat. The expansion mechanic (buying
new islands) creates geographic progression — you literally see your domain grow. The puzzle dungeons
(Skull Maze, etc.) add point-of-interest exploration entirely outside the idle loop. Closest
comparable: a Stardew Valley-Clicker Heroes hybrid.

**Reception:** Strong launch (~3,000 reviews). "Like Stardew Valley's crafting loop crossed with
Cookie Clicker's 'just one more' compulsion." Criticism: content tapers off; automation eventually
trivializes the loop. No further major updates after 2019.

---

### Melvor Idle

![Melvor Idle](https://cdn.akamai.steamstatic.com/steam/apps/1267910/header.jpg)

| Field | Value |
|---|---|
| **Developer** | Games by Malcs (Brendan Malcolm) |
| **Year** | 2020 (Early Access), 2021 (full release), browser |
| **Platform** | Browser, Steam, iOS, Android |
| **Steam App ID** | 1267910 |

**Core premise:** RuneScape's skill system stripped to its idle essence. No world to navigate — just
a list of 25 skills to train. Click the skill, click the action, wait. Skills: Woodcutting, Fishing,
Firemaking, Cooking, Mining, Smithing, Attack, Strength, Defence, Hitpoints, Ranged, Magic,
Prayer, Slayer, Herblore, Agility, Thieving, Farming, Fletching, Crafting, Runecrafting, Dungeoneering,
Township, Cartography, Archaeology.

**Primary resources:** GP (coins), Skill XP (per-skill), Items (raw materials and processed goods
from each skill chain). The combat system uses a separate Attack / Strength / Defence / Ranged /
Magic track. Prayer Points (from burying bones). Slayer Coins (from assigned slayer tasks).

**Upgrade system:** Skill levels 1–120 unlock new actions. Equipment slots (Helmet, Chest, Legs,
Gloves, Boots, Weapon, Shield, Amulet, Ring, Quiver, Cape) with item tiers. Passive prayers.
Pet collection (over 40 pets with passive stat bonuses). Expansion DLC "Into the Abyss" (2023)
adds 3 new skills and endgame content.

**Prestige / reset mechanic:** Ancient Relics mode (optional challenge run with limited equipment
but strong passive relics unlocked as you progress). Hardcore mode (permadeath). Adventure mode
(preset starting loadout). No universal prestige / reset by default.

**Mechanical distinctiveness:** Captures the RuneScape progression feel — the specific mix of
skill interdependency (need Smithing to make armor for Combat; need Combat to access monsters for
Slayer; need Slayer for rare drops for Herblore) — in a fully offline-capable idle format.
1,100+ items in the bank/inventory system. Township minigame adds a light city-building layer.
Critically: it was a solo developer project that went viral in the RuneScape community, then
received Jagex investment and became officially endorsed.

**Reception:** Extremely positive on Steam. Solo dev success story. Cited as one of the best
idle RPGs available.

---

### Idle Champions of the Forgotten Realms

![Idle Champions](https://cdn.akamai.steamstatic.com/steam/apps/627690/header.jpg)

| Field | Value |
|---|---|
| **Developer** | Codename Entertainment |
| **Year** | 2017 (Early Access), 2020 (full release) |
| **Platform** | Steam, iOS, Android |
| **Steam App ID** | 627690 |

**Core premise:** Field a formation of D&D champions (drawn from the Forgotten Realms, Critical
Role, Acquisitions Incorporated, and other licensed sources) against waves of monsters. Gold
accumulates, champions level, the formation advances through campaign levels.

**Primary resources:** Gold (main, earned from killing monsters), Favor (prestige currency per
adventure), Gems (premium secondary), Event currencies (time-limited).

**Upgrade system:** Per-champion upgrade ladders: each champion has 5–8 upgrade nodes per
"gold milestone" tier. Upgrades are multiplicative. Champions have 3–5 abilities each and a unique
mechanic (Bruenor gives a bonus based on champions next to him; Minsc gives a bonus based on
Boo being equipped). Formation slots limit which champions can appear and where — formation
synergy optimization is the core strategic layer.

**Prestige / reset mechanic:** Patron system — each adventure has Patrons (Vajra, Mirt, Strahd,
etc.) that unlock with progress and provide passive bonuses to specific champion types. Free
Reset (soft prestige) resets an adventure for Favor, which multiplies gold gain in that adventure
permanently. Champions gain permanent items (gear with stats) through chests (monetized heavily).

**Mechanical distinctiveness:** Licensed D&D IP with authentic lore text and official VA. The
formation positioning mechanic — each formation slot affects adjacent champions' abilities — creates
a spatial puzzle layer absent in most incrementals. Extensive crossover content (Critical Role
characters, etc.) drives engagement for RPG fans who might not normally play idle games. Heavy
gacha monetization for champion skins and gear.

**Reception:** Free-to-play with significant monetization. Active player base. Mixed reviews
around monetization; positive for lore depth and champion variety.

---

### Increlution

| Field | Value |
|---|---|
| **Developer** | Mewdeko |
| **Year** | 2021 (Steam) |
| **Platform** | Steam |
| **Steam App ID** | 1593350 |

**Core premise:** Survive as long as possible within a single life. Queue actions (gather food,
build shelter, rest) in a sequential action list. Health declines at an accelerating rate; each
"generation" (death and rebirth) carries forward Instincts — permanent upgrades from prior runs.
Minimalist text interface.

**Primary resources:** Health (depletes, must be maintained), Food, Wood, Stone, various
constructions. Instincts (prestige currency).

**Upgrade system:** Action queue — plan a sequence of steps (e.g., Gather Food × 3 → Build
Shelter → Rest → Hunt) that auto-executes. Unlock new actions and tools as progress deepens.
Instincts purchased with prior-life progress improve starting stats and unlock new action types.

**Prestige / reset mechanic:** Each death is a prestige. Instincts accumulate across deaths,
providing multiplicative improvements to survival chance. The game explicitly frames each run as
a generation of the same lineage.

**Mechanical distinctiveness:** The step-queue system — instead of a constant resource rate,
player choices are an ordered program that executes. This bridges idle games and
strategy/automation games. The "each run is a life" framing makes prestige feel narrative rather
than mechanical. Critically: "All progression within the game is carefully balanced to provide
a consistent feeling of improvement while numbers remain understandable." No number inflation into
the googolplexes common to other incrementals.

**Reception:** Positive. "The only incremental game you ever need" per one reviewer. Noted for
restraint — the game ends rather than growing forever.

---

### Exponential Idle

| Field | Value |
|---|---|
| **Developer** | Conic Games |
| **Year** | 2021 (iOS/Android) |
| **Platform** | iOS, Android |

**Core premise:** Upgrade a mathematical formula (initially f(t) = e^t) by purchasing variables
(x₁, x₂, x₃...), changing the base equation, and performing "change of variables" operations.
As the formula grows, virtual money accumulates. The interface is a live-updating mathematical
expression.

**Primary resources:** Money (virtual, accumulates from the formula's output), μ (prestige
currency), φ (second prestige), Stars (used for permanent research upgrades).

**Upgrade system:** Variable purchases (each adds a term to the formula), Theory purchases
(unlock separate mini-formulas with their own upgrade trees: Weierstrass Product, Euler's Formula,
etc.), Star upgrades (permanent, persist across all resets).

**Prestige / reset mechanic:** Two layers: μ prestige (resets current formula growth for μ) and
φ prestige (resets μ for φ, giving access to higher-tier upgrades). Students (the game's
"prestige university" metaphor) — spending φ to unlock and level student researchers who give
passive research bonuses.

**Mechanical distinctiveness:** The formula is the upgrade. Players literally see the mathematical
expression they are upgrading change in real-time. Designed partly as an educational tool — players
who engage deeply learn e, ln, change of variables, and logarithmic growth intuitively. The Theory
system (9+ separate mini-games based on real mathematical objects) adds remarkable depth.
Community solver tools (the Theory Simulator) emerged to calculate optimal theory push times.

**Reception:** 4.7 stars across 34,000+ reviews. Praised by mathematics educators and hardcore
incremental players alike. Proof that educational rigor and idle-game compulsion can coexist.

---

### Idle Slayer

![Idle Slayer](https://cdn.akamai.steamstatic.com/steam/apps/1353300/header.jpg)

| Field | Value |
|---|---|
| **Developer** | Pablo Leban |
| **Year** | 2020 (mobile), 2022 (Steam) |
| **Platform** | iOS, Android, Steam |
| **Steam App ID** | 1353300 |

**Core premise:** A pixel-art knight runs endlessly left-to-right on a side-scrolling battlefield,
auto-slaying enemies. Coins fall from kills. Player can tap/click to boost speed or attack.
Resources purchase upgrades; the knight levels. The game runs offline; you return to collect
accumulated coins.

**Primary resources:** Coins (main), Souls (earned from kills and prestige, spent on permanent
Slayer upgrades), Abyssal Coins (deep prestige currency).

**Upgrade system:** Slayer upgrade tree (Attack, Defense, Speed, Coin multiplier, Soul gain).
Equipment sets with stat bonuses. Challenges (constraint runs for Abyssal Coins). Achievements
(permanent passive rewards).

**Prestige / reset mechanic:** Ascending resets run progress (coins, level) for Souls and a
bonus multiplier. Abyssal Ascension (deep reset) resets Souls for Abyssal Coins, enabling very
long-term upgrades.

**Mechanical distinctiveness:** The auto-runner format makes the "idle" feel kinetic — watching
your knight slice through hundreds of enemies at increasing speed is visually satisfying in a way
a spreadsheet UI is not. The game blends the tactile appeal of arcade runners with idle mechanics.
Tapping actively during play accelerates coin gain, giving players a meaningful active mode
alongside the idle mode.

**Reception:** Strong mobile reception. Steam version well-received by idle enthusiasts. Praised
for visual polish relative to genre norms.

---

## Mobile-First

### AdVenture Capitalist

| Field | Value |
|---|---|
| **Developer** | Hyper Hippo Productions |
| **Year** | 2014 (browser/Android), 2015 (iOS/PC) |
| **Platform** | Browser, Steam, iOS, Android, PS4 |

**Core premise:** Start with $0.01. Click to earn from a Lemonade Stand. Buy more stands. Buy a
Newspaper Delivery business. Buy a Car Wash. Buy a Pizza Delivery, Donut Shop, Movie Studio, Bank,
Oil Company. Hire Managers to automate each business. Earn money even when offline.

**Primary resources:** Money (main), Angel Investors (prestige currency).

**Upgrade system:** Per-business multipliers at milestones (10, 25, 50, 100, 200, 300, 400, 500, 750,
1000, 1500, 2000 purchased) that multiply that business's output by 2× or 3×. Manager-triggered
upgrades (reaching certain income levels or ownership counts unlocks new upgrade tiers). Angels
applied on prestige multiply all income permanently.

**Prestige / reset mechanic:** Prestige for Angel Investors = floor(√(total cash earned / 1e12)).
Applying Angels resets all businesses but provides a permanent income multiplier. The game also
features Moon, Mars, and limited-time events as separate idle tracks.

**Mechanical distinctiveness:** The clearest, most accessible idle structure ever made. The UI
teaches idle game literacy: you immediately understand that buying more businesses earns more money
and that automating removes the clicking requirement. Its simplicity is its genius and its
limitation — little strategic depth, but perfect onboarding. Widely credited with bringing idle
games to mass mobile audiences in 2014.

**Reception:** One of the most-downloaded idle games of all time. Massively influential on the
mobile idle market. The "AdVenture Capitalist formula" is cited as a starting template by dozens
of subsequent games.

---

### Clicker Heroes

| Field | Value |
|---|---|
| **Developer** | Playsaurus |
| **Year** | 2014 (browser), 2015 (mobile), 2017 (console) |
| **Platform** | Browser, Steam, iOS, Android, Xbox One, PS4 |

**Core premise:** Click monsters to deal damage; earn gold; hire heroes who deal automatic damage.
Heroes have 4 ability levels; reaching certain milestones unlocks new hero tiers. Progress through
zones (each zone = 10 monster levels + a boss).

**Primary resources:** Gold (main), Hero Souls (ascension currency), Ancient Souls (transcension
currency), Rubies (premium).

**Upgrade system:** 54 heroes each with 4 upgrade nodes (x4 DPS multipliers at levels 10, 25, 50,
100 and every 25 levels thereafter). Ancients (30+) purchased with Hero Souls provide flat or
percentage bonuses (Argaiv = ancient gild multiplier; Siyalatas = idle DPS multiplier; Mammon =
gold multiplier).

**Prestige / reset mechanic:** Ascension resets hero levels and gold for Hero Souls (1 Soul per
"Primal Boss" killed; Primal Bosses appear randomly). Hero Souls each add +10% to all DPS and
+2% gold (capped). Ancients are leveled with sacrificed Hero Souls. Transcension (deep prestige)
resets everything except Outsiders for Ancient Souls; Outsiders (5) provide permanent run multipliers
(Xyliqil = idle bonus; Chor'gorloth = ancient costs; etc.).

**Mechanical distinctiveness:** Introduced the "hero roster" format — a scrolling list of named,
illustrated heroes with escalating costs — that dozens of mobile games copied. The Gild system
(randomly assign gold Gilds to heroes for +10% DPS each, can be transferred) introduced a
light randomization element. The Primal Boss RNG (prestige currency from random encounter, not
guaranteed) was controversial but drove active engagement.

**Reception:** One of the most-played browser incrementals before mobile. Steam version has
thousands of reviews. Credited with bringing idle games to console. Clicker Heroes 2 (2018)
controversially launched as a paid game and was later made free.

---

### Egg Inc.

| Field | Value |
|---|---|
| **Developer** | Auxbrain Inc. |
| **Year** | 2016 (iOS/Android) |
| **Platform** | iOS, Android |

**Core premise:** Build a chicken egg farm. Chickens hatch → lay eggs → eggs sell → buy better
habitats and vehicles → upgrade egg type → prestige. The egg types escalate from Edible → Superfood
→ Medical → Rocket Fuel → Fusion → Quantum → Immortality → Tachyon → Graviton → Dilithium →
Prodigy → Terraform → Antimatter → Dark Matter → AI → Nebula → Universe → Enlightenment.

**Primary resources:** Bocks (farm currency), Soul Eggs (prestige multiplier currency, each adds
+10% earnings), Eggs of Prophecy (deep prestige currency, multiplicative to Soul Egg bonus),
Artifacts (equippable items affecting specific stats).

**Upgrade system:** Research tracks: Common Research (farm-specific, resets on prestige) and Epic
Research (permanent, bought with Golden Eggs): Comfortable Nests (+10% hab capacity), Nutritional
Supplements (+1 egg laying rate), Padded Packaging (+1% shipping rate), etc. Hatchery (chicken
capacity + rate), Vehicles (shipping rate), Habitats (chicken cap).

**Prestige / reset mechanic:** Prestige resets farm to Edible egg but awards Soul Eggs based on
total farm value. Formula: Soul Eggs ≈ √(farm earnings / 1e6). Each Soul Egg adds +10% earnings;
1,000 Soul Eggs = 101,000× earnings multiplier. First prestige target: ~50 Soul Eggs (around
$10 quadrillion farm value). Later targets: doubling soul egg count each prestige.

**Mechanical distinctiveness:** The egg type escalation creates a visual narrative — each new egg
type represents a civilization-scale technological leap and comes with a new farm aesthetic.
The artifact system (from "Egg of Prophecy" deep level) adds an itemization layer. The game's
polished 3D art (rare in idle games) and the charm of watching thousands of chickens run around
a beautifully animated farm makes it stand out aesthetically from text-heavy competitors.

**Reception:** Long-running mobile hit. Massive community. The Space missions system (launched
2021) added progression for endgame players.

---

### Tap Titans 2

| Field | Value |
|---|---|
| **Developer** | Game Hive Corp. |
| **Year** | 2016 (iOS/Android) |
| **Platform** | iOS, Android |

**Core premise:** Tap a giant screen to deal damage to Titans. Hire heroes who deal automatic
damage. Advance through stages (each stage = a new titan). Kill bosses every 5 stages to unlock
the next area. Reach as high a stage as possible.

**Primary resources:** Gold (main), Diamonds (premium), Artifacts (prestige items), Dust (artifact
crafting), Clan Medals (from Clan Raids), Tournament Tickets.

**Upgrade system:** Hero rosters (50+ heroes, each with level-dependent DPS and 6 active skills).
Equipment sets (weapon, helm, amulet, ring, slash, wrist + accessories) with stat rolls. Skill
tree for the main hero (active skills: Heavenly Strike, Clan Ship Strike, etc.). Artifacts:
100+ artifacts each providing a specific stat bonus (% all damage, % hero damage, gold multiplier,
etc.).

**Prestige / reset mechanic:** Prestige resets stage, gold, hero levels, and most progress; awards
Relics based on highest stage reached. Relics buy Artifacts. Multiple prestige-adjacent systems:
Pet collection (passive bonuses), Titan's Mask (loadout optimization), Clan Raid tournaments.

**Mechanical distinctiveness:** Clan Raids — a scheduled multi-player co-op event where clans
collectively attack a boss over 48 hours. This added social/competitive pressure loops uncommon
in the genre. 150,000+ stages across 14 "realms" ensures very long content. The gap between
active (tapping aggressively) and idle (hero auto-DPS) playstyles is significant — the game
actively rewards both but differently.

**Reception:** Massive mobile hit. Tournament structure drives competitive community. Heavily
monetized; mixed reviews from non-paying players. One of the highest-grossing idle games.

---

### Almost a Hero

| Field | Value |
|---|---|
| **Developer** | Bee Square Games (now Deca Games) |
| **Year** | 2016 (iOS/Android) |
| **Platform** | iOS, Android |

**Core premise:** A band of hilariously incompetent heroes (thieves, bumbling wizards, retired
farmers) attempt to go on a quest. Idle RPG tapper with strong comedic narrative writing. Enemies
attack in waves of 10 + a boss.

**Primary resources:** Gold (main), Trinkets (equipment items), Mythstones (prestige currency).

**Upgrade system:** Per-hero skill trees (3+ active skills each with their own upgrade track).
Ring/Trinket equipment with rolls. Artifact system (permanent upgrades bought with Mythstones).
Gates of Gog — a separate game mode unlocked at Stage 700 with its own mechanics and currency.

**Prestige / reset mechanic:** Prestige for Mythstones, which buy Artifacts (permanent multipliers).
Each prestige also permanently increases the base gold rate slightly.

**Mechanical distinctiveness:** The writing. Each hero has fully voiced dialogue and a comic
backstory; upgrade descriptions maintain the "almost competent" tone. Stage 700+ unlock content
(Gates of Gog) is a genuine mechanical expansion. Considered one of the best-written idle RPGs.

**Reception:** Well-reviewed. "Fun, visually pleasing, extremely well polished." Praised
specifically for narrative and character writing in a genre that typically treats these as
afterthoughts.

---

### Idle Miner Tycoon

| Field | Value |
|---|---|
| **Developer** | Kolibri Games (formerly Fluffy Fairy Games) |
| **Year** | 2016 (iOS/Android) |
| **Platform** | iOS, Android |

**Core premise:** Manage a mine. Hire miners to dig ore from shafts; elevator workers to carry
ore up; warehouse workers to load trucks. Upgrade each role. Hire Managers to automate roles.
Expand to new mines (coal, gold, jade, etc.). Earn during offline sessions.

**Primary resources:** Cash, Super Cash (premium), Mine-specific ore (each mine has its own
currency chain), Event currencies.

**Upgrade system:** Per-mine upgrade ladders for each worker tier (Miners, Elevator, Warehouse).
Manager abilities (timed boosts). Event mines with time-limited currencies. Prestige via "Super
Manager" event unlock.

**Prestige / reset mechanic:** "Super Manager" events reset a mine for a multiplier. Also:
Prestige via completing the main mine progression. No deep multi-layer prestige; the game targets
casual mobile.

**Mechanical distinctiveness:** The three-stage mining pipeline (Shaft → Elevator → Warehouse)
is a physically intuitive production chain. Each stage has its own bottleneck to upgrade. Over
100 million downloads. Kolibri documented their design lessons publicly — "Making a Hit Idle Game:
Eight Lessons" — which became a reference document for mobile idle designers.

**Reception:** One of the most-downloaded idle games ever. Positive reviews for accessibility;
noted as a casual-tier game without the depth of genre leaders.

---

### Merge Dragons! / Merge Mansion (Merge Genre)

| Field | Value |
|---|---|
| **Developer** | Gram Games (Zynga) / Metacore |
| **Year** | 2017 / 2020 |
| **Platform** | iOS, Android |

**Core premise (Merge Dragons):** A board of tiles. Drag two identical tiles together to merge them
into a higher-tier tile. Sprout → Flower → Life Flower → Blue Life Flower → Glowing Life Flower
→ Prism Flower → Life Orb... The goal per level is to merge to specific target tiles. The camp
(persistent map) accumulates merged items.

**Upgrade system / mechanic:** The merge chain IS the upgrade system. Higher-tier objects produce
more Dragon Power, heal more of the "Dead Land," or provide better resources. No traditional upgrade
purchase tree — progression is driven entirely by chaining merges to higher tiers.

**Prestige / reset:** None per se — levels are puzzle runs that award items carried to camp.
The camp persists and grows richer over time.

**Mechanical distinctiveness:** The merge mechanic is a fundamental alternative to the
click-to-buy upgrade tree. Instead of purchasing multiplier upgrades, you combine resources to
create exponentially rarer/more powerful resources. Satisfying physics (items slide together on a
grid) and visual evolution (watching a twig become an ancient tree) create a distinctly tactile
feel. Merge games became their own massive mobile sub-genre 2018–2024, spawning Merge Mansion,
Merge Magic, Merge Inn, and dozens more.

**Reception:** 4.7/5 across platforms. Over 600 levels. The genre it founded ("merge games") has
generated billions in mobile revenue.

---

## Hybrid / Experimental

### Factorio

| Field | Value |
|---|---|
| **Developer** | Wube Software |
| **Year** | 2020 (v1.0), 2016 (Early Access) |
| **Platform** | Steam (App ID: 427520), Linux, Mac |
| **Steam App ID** | 427520 |

**Core premise:** Stranded engineer on an alien planet. Mine resources by hand → build machines to
mine automatically → build machines to process materials → build machines to make machines → build
machines to build machines that build machines → launch rocket.

**Primary resources:** Iron Ore → Iron Plate → Steel; Copper Ore → Copper Plate → Wire; Coal
(fuel and intermediate); Stone → Stone Brick; Crude Oil → refinery products (Lubricant, Plastic,
Sulfur, etc.); Uranium for nuclear power. Science Packs (6 types) fuel research.

**Upgrade system:** Research tree consuming Science Packs. Automation Research → Logistics →
Electronics → Production → Utility → Space Science. Higher-tier research unlocks new machines,
materials, and production speeds.

**Prestige / reset mechanic:** None in the base game. The goal is singular: launch a rocket. Mods
(Space Exploration, Krastorio 2, etc.) extend the game dramatically. The 2024 expansion Factorio:
Space Age adds planetary progression as a new layer.

**Mechanical distinctiveness:** Factorio is not an idle game — it requires intense active engagement.
But it is the incremental design philosophy taken to its logical conclusion: each system produces
inputs for the next system; bottlenecks are resource design problems; automation is the goal, not
just the mechanism. Academic papers have analyzed Factorio's factory optimization as equivalent to
bin-packing, network routing, and scheduling problems. The "factory must grow" meme (factories
always need expansion) perfectly encapsulates the incremental drive applied to factory simulation.

**Reception:** One of the highest-rated games on Steam. 98% positive from 100,000+ reviews.
Frequently cited by game designers as a masterpiece of systemic design.

---

### Vampire Survivors

![Vampire Survivors](https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg)

| Field | Value |
|---|---|
| **Developer** | poncle (Luca Galante) |
| **Year** | 2022 (Early Access → full release) |
| **Platform** | Steam (App ID: 1794680), iOS, Android, Xbox |
| **Steam App ID** | 1794680 |

**Core premise:** Auto-shooting arena survivor. The character moves; weapons fire automatically;
waves of enemies pour in. After 30 minutes a "Death" event arrives. Progress: level up during
a run (choose from 3 weapon/passive upgrades each level); spend gold from runs in the Meta Shop
for permanent upgrades between runs.

**Primary resources (within run):** Gems (XP), Gold (in-run + persistent meta currency), Level-up
picks. **Persistent:** Gold → Meta Shop purchases, Eggs (permanent stat boosts), Seals (challenge
run unlocks).

**Upgrade system:** In-run: choose 1 of 3 offered upgrades each level. Evolve weapons by combining
a base weapon (e.g., Whip) with its accessory (Hollow Heart) at level 8 max → evolved weapon
(Bloody Tear). The evolution chart is the game's primary metagame knowledge system.

**Prestige / reset mechanic (incremental angle):** Meta Shop is the persistent incremental layer.
Gold spent on: +Max Health, +Armor, +Move Speed, +Might, +Area, +Speed, +Duration, +Amount,
+Cooldown, +Luck, +Growth (XP gain), +Greed (gold gain) — and then buying new characters,
power-ups, and arcanas (run modifiers). The Meta Shop upgrades stack multiplicatively across runs
and eventually make the game dramatically easier, mirroring a prestige run structure.

**Mechanical distinctiveness (incremental angle):** Vampire Survivors demonstrates how incremental
design can be embedded in a real-time action game without being the main genre. The
"auto-attack + upgrade-picker" loop is an incremental structure running inside an action game.
The weapon evolution system (40+ evolutions by DLC era) is a knowledge-graph that rewards
accumulated understanding — knowing that the combination of Garlic + Pummarola evolves to
Soul Eater requires game knowledge that compounds over runs.

**Reception:** Cultural phenomenon. Over 5 million copies sold. Spawned an entire sub-genre
(Brotato, 20 Minutes Till Dawn, HoloCure, Deep Rock Galactic Survivor, etc.). BAFTA award winner
2023. See [Arena Survivor overview](arena-survivor-overview.md) for full analysis.

---

### Loop Hero

![Loop Hero](https://cdn.akamai.steamstatic.com/steam/apps/1282730/header.jpg)

| Field | Value |
|---|---|
| **Developer** | Four Quarters |
| **Year** | 2021 (PC), 2022 (Switch) |
| **Platform** | Steam (App ID: 1282730), Switch |
| **Steam App ID** | 1282730 |

**Core premise:** The world has been reset to a featureless loop. Place cards (terrain tiles) on
the loop to spawn enemies, generate resources, and modify stats. Your hero walks the loop
automatically, fights enemies auto-resolved, and dies eventually. Resources from runs build camp
structures that unlock new cards and permanent bonuses.

**Primary resources (in-run):** Gold, Food, Wood, Stone, Orbs, enemy-specific drops. **Camp:**
Building materials used to construct Camp structures.

**Upgrade system:** Camp buildings unlock new card types (Grove gives Wood cards; Bookery gives
card draw upgrades; Gymnasium boosts attack). Card selection at run start is deck-building. On the
loop: placing terrain cards adjacent to each other creates combos (Desert + Meadow = Dune gives
Sand Dunes bonus). Equipment drops from enemies; equip from inventory.

**Prestige / reset mechanic:** Each expedition ends in retreat or death. Resources carried back
to camp (retreat carries more). Camp structure upgrade tree is the persistent progression layer.
Unlocking the final act requires reaching Chapter 4+, which needs specific camp buildings.

**Mechanical distinctiveness:** The card-as-world-tile system is entirely novel — you are building
the dungeon you are running through. Placing a Mountain summons skeleton enemies; placing a Village
heals the hero; placing a Cemetery spawns skeletons that drop food. Tile adjacency combos (River
next to Meadow creates Marsh) create emergent strategies. The game is passive in the action layer
(hero fights alone) but intensely active in the placement layer. A true incremental-roguelite hybrid.

**Reception:** Devolver Digital published. Over 1 million copies. Extremely positive reviews.
"A refreshingly great tile placement RPG." Won multiple indie awards 2021.

---

### Idle Apocalypse

| Field | Value |
|---|---|
| **Developer** | Grumpy Rhino Games |
| **Year** | 2018 (iOS/Android) |
| **Platform** | iOS, Android |

**Core premise:** Build an evil tower of doom by summoning increasingly powerful idols (demons,
monsters). The tower grows taller with each prestige. Multiple "layers" of the tower house
different idol types. Resources accumulate while offline.

**Primary resources:** Summoning Stones, Skulls, Realm Shards, and per-idol-type currencies.

**Upgrade system:** Per-idol upgrade trees. Tower construction (each new floor adds a new idle
loop). Chants (prestige upgrades bought with Realm Shards). Evolution system — idols can be
promoted to more powerful forms.

**Prestige / reset mechanic:** Prestige extends the tower, earns Realm Shards, and enables Chants.
Evolving idols to higher forms requires multiple resets at increasing thresholds.

**Mechanical distinctiveness:** The tower-building vertical metaphor (literally stacking floors as
prestige currency accumulates) gives a physical sense of progress. The horror/evil aesthetic is
unusual for the genre — summoning demons and causing apocalypses rather than managing a business.
Praised as "one of the best mobile game experiences" for moment-to-moment visual polish.

**Reception:** Strong App Store ratings. Modest but loyal player base. Noted for art and
animation quality.

---

## Quick-Reference Table

| Game | Developer | Year | Platform | Prestige? | Steam ID |
|---|---|---|---|---|---|
| Cookie Clicker | Orteil | 2013 | Browser/Steam | Yes (Ascension/Heavenly Chips) | 1454400 |
| Candy Box! | aniwey | 2013 | Browser | No (ending) | — |
| A Dark Room | Doublespeak Games | 2013 | Browser/iOS | No (ending) | — |
| Progress Quest | E. Fredricksen | 2002 | PC/Browser | No | — |
| Antimatter Dimensions | Hevipelle | 2016 | Browser/Steam | Yes (6 layers) | 1399720 |
| Kittens Game | bloodrizer | 2014 | Browser/mobile | Yes (Cycles/Metaphysics) | — |
| Realm Grinder | Reality Squared | 2015 | Browser/Steam | Yes (3 layers) | 610080 |
| Trimps | Grimdork | 2015 | Browser | Yes (Portal/Helium) | — |
| NGU Idle | 4G | 2018 | Browser/Steam | Yes (Rebirth) | 1147690 |
| Idle Skilling | Lavaflame2 | 2019 | Browser/Steam | Yes (2 resets) | 1048370 |
| Universal Paperclips | Frank Lantz | 2017 | Browser/mobile | No (ending) | — |
| SPACEPLAN | Jake Hollands | 2017 | Steam/mobile | No (ending) | 616110 |
| Forager | HopFrog | 2019 | Steam/Switch | No (ending) | 751780 |
| Melvor Idle | Games by Malcs | 2020 | Browser/Steam | Optional modes | 1267910 |
| Idle Champions | Codename Ent. | 2017 | Steam/mobile | Yes (Favor/Patron) | 627690 |
| Increlution | Mewdeko | 2021 | Steam | Yes (each death) | 1593350 |
| Exponential Idle | Conic Games | 2021 | iOS/Android | Yes (μ/φ layers) | — |
| Idle Slayer | Pablo Leban | 2020 | Steam/mobile | Yes (Souls/Abyssal) | 1353300 |
| AdVenture Capitalist | Hyper Hippo | 2014 | Browser/Steam | Yes (Angels) | — |
| Clicker Heroes | Playsaurus | 2014 | Browser/Steam | Yes (Ascension/Transcension) | — |
| Egg Inc. | Auxbrain | 2016 | iOS/Android | Yes (Soul Eggs) | — |
| Tap Titans 2 | Game Hive | 2016 | iOS/Android | Yes (Relics/Artifacts) | — |
| Almost a Hero | Bee Square | 2016 | iOS/Android | Yes (Mythstones) | — |
| Idle Miner Tycoon | Kolibri Games | 2016 | iOS/Android | Soft prestige | — |
| Merge Dragons! | Gram Games | 2017 | iOS/Android | No (level-based) | — |
| Factorio | Wube Software | 2020 | Steam | No (single goal) | 427520 |
| Vampire Survivors | poncle | 2022 | Steam/mobile | Yes (Meta Shop) | 1794680 |
| Loop Hero | Four Quarters | 2021 | Steam | Yes (Camp progression) | 1282730 |
| Idle Apocalypse | Grumpy Rhino | 2018 | iOS/Android | Yes (Chants/Realm Shards) | — |
