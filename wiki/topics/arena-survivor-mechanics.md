# Arena Survivor Game Mechanics — Comprehensive Design Reference

> Research request R-006 · 2026-06-15
> Genre: Vampire Survivors-like / Bullet Heaven / Horde Survivor

A deep reference covering all core design dimensions of the arena survivor genre.
Games covered: Vampire Survivors (VS), Brotato, 20 Minutes Till Dawn (20MTD),
HoloCure, Deep Rock Galactic: Survivor (DRGS), Halls of Torment (HoT), Soulstone
Survivors (SS), Nomad Survival (NS).

---

## 1. Core Loop

### Genre baseline

The canonical loop: **move → enemies die → XP gems drop → collect gems → level up → choose upgrade → repeat**. The run lasts a fixed duration (typically 20–30 minutes) then ends with a boss or hard stop. The loop is explicitly a *spiral*, not a static circle — the same actions (move, collect, kill) feel entirely different at minute 2 vs. minute 25 because the density of enemies, the power of the build, and the risk profile all shift dramatically.

Source: Lost Attic Games design analysis of VS.

### Auto-attack vs. manual attack

| Game | Attack mode |
|------|------------|
| Vampire Survivors | Fully auto — weapons fire on timers regardless of input |
| Brotato | Fully auto — all equipped weapons fire automatically |
| 20 Minutes Till Dawn | **Manual** — player aims and shoots; reloading must be managed |
| HoloCure | Fully auto with **active skills** on cooldown (player-triggered) |
| Deep Rock Galactic: Survivor | Fully auto |
| Halls of Torment | Auto, but optional toggle to twin-stick manual aim |
| Soulstone Survivors | Auto with active skills on cooldown |
| Nomad Survival | Fully auto |

**20MTD's manual aiming** is the genre's primary departure: weapon reload management becomes a resource, and synergies like "Fresh Clip" (bonus damage on reload) reward tactical firing discipline rather than pure movement.

### Run duration

| Game | Typical run |
|------|------------|
| Vampire Survivors | 30 minutes (boss Death spawns at 30:00 to end the run) |
| Brotato | 20 waves × 20–90 seconds each ≈ 20–30 minutes |
| 20 Minutes Till Dawn | 20 minutes standard; 10 minutes Quickplay; Endless mode available |
| HoloCure | ~30 minutes |
| Deep Rock Galactic: Survivor | Multiple stages per dive, each ending in a boss |
| Halls of Torment | 30 minutes goal; Agony mode extends difficulty dynamically |
| Nomad Survival | 30 minutes to final boss |

### Minute-to-minute structure

**Vampire Survivors** stages the spiral into three acts:
- **Early (0–8 min):** weak character, slow gem trickle, sparse enemies, all about surviving and collecting first weapons
- **Mid (8–20 min):** enemies outpace kill rate — positional tension, evading walls of enemies, chests trigger first evolutions
- **Late (20–30 min):** build complete, player is overpowered, focus shifts to optimizing kill count and surviving Death's approach

**Brotato** inverts this rhythm: tight 20–90 second combat waves alternate with a full **shop phase** between every wave. There is no mid-wave lull — each wave is short and intense, and planning happens in the shop.

**DRGS** adds a **mining phase** within each combat wave: the player actively excavates tunnels while enemies swarm, creating a dual objective (resource acquisition vs. survival) that the other games in the genre do not share.

---

## 2. Weapon & Build Systems

### Weapon acquisition flow

**Vampire Survivors** — weapons are drawn from a shared pool and presented 3–4 at a time on level-up. The player holds up to 6 weapon slots and up to 6 passive item slots. Weapons upgrade to max level (typically level 8) through repeated selection.

**Brotato** — weapons appear in a **shop between waves**, purchasable with materials. Players hold up to 6 weapons simultaneously. Shop also sells items and direct stat upgrades. Weapons can be combined: two identical weapons of the same tier merge into one weapon of the next tier.

**HoloCure** — weapons are acquired on level-up (VS-style). Each weapon can be upgraded to level 7.

**Nomad Survival** — unlimited weapon slots; no slot cap. Every active and passive in the game is eventually acquirable in a single run. This creates a different scaling problem: builds are broad and shallow rather than focused.

### Evolution and fusion systems

**Vampire Survivors (Evolution)** — the genre-defining implementation:
1. Weapon must reach max level (level 8)
2. Corresponding passive item must be in inventory (any level)
3. Open a treasure chest (dropped by bosses after minute 10)
4. Chest triggers the evolution, replacing the base weapon with a stronger evolved form
5. The passive item is retained

*Unions* combine two max-level weapons instead of weapon + passive. *Gifts* add a bonus item without consuming either component. DLC expansions added consumed components (mini crewmates, Weapon Power-Ups).

**HoloCure (Collab)** — mirrors VS evolution but calls it a Collab:
1. Two weapons both reach level 7
2. Golden Anvil drops
3. Using the Anvil triggers the Collab, merging both weapons into a single stronger weapon
4. *Super Collab*: Collab weapon + specific item + Golden Hammer → even stronger form

HoloCure adds **Stamps** as a secondary upgrade layer: stamps attach to the character's default weapon and grant modifiers like explosion on hit, size increase, crit rate, or attack speed — a layer VS does not have.

**Brotato (Tier Merging)** — no evolution per se. Upgrading comes from:
- Buying higher-tier weapons in the shop
- Combining two identical same-tier weapons into one of the next tier

**Soulstone Survivors** — 350+ active and passive skills form the build space. Skills can interact through **status effect chains**: applying multiple status effects creates cascading reactions (e.g., frozen enemies shatter for bonus damage, burning enemies spread fire on death).

**DRGS (Overclocks)** — weapon upgrade occurs within the run via **Upgrade Cards** and **Overclocks**:
- Balanced Overclocks unlock at weapon levels 6 and 12
- Unstable Overclock unlocks at weapon level 18 (high power, potential downside)
- 160 overclocks across 4 classes (Driller, Engineer, Gunner, Scout)

This creates a within-run specialization path rather than VS-style evolution.

### Fixed builds vs. random draft

| Game | Build determinism |
|------|------------------|
| Vampire Survivors | Random draft (3–4 options per level-up); Banish/Reroll/Skip tools available as meta upgrades |
| Brotato | Random shop inventory each wave; Reroll with Luck stat; 6-item equip limit enforces focus |
| 20MTD | Random draft on level-up (fewer choices than VS) |
| HoloCure | Random draft, VS-style |
| DRGS | Random draft for upgrade cards; overclock selection is a curated branch per weapon |
| Halls of Torment | Random trait draft; Potion of Oblivion lets players banish unwanted traits |
| Soulstone Survivors | Random draft from a large pool of 350+ skills |
| Nomad Survival | Random draft; no Banish or Reroll available beyond baseline reroll |

### Item pool scaling

Vampire Survivors gates item availability by character selection — characters start with a specific weapon and can passively unlock others by completing achievements. Newly unlocked items join the pool in future runs, expanding draft options. The Banish PowerUp (unlocked via meta-progression) lets players remove up to 10 items per run, allowing experienced players to thin the pool for focused builds.

---

## 3. Wave & Enemy Scaling

### Vampire Survivors — curated wave schedule

Enemies arrive in **waves timed to the clock** — a new wave specification triggers roughly every 2 minutes (with sub-waves at each minute). Each wave specification defines:
- Minimum spawn count
- Spawn interval
- Enemy types for that wave

HP scaling: `effectiveHP = baseHP × playerLevel` — applied at spawn, not updated dynamically. A level-1 player spawns weak enemies; a level-50 player spawns dramatically stronger ones from the same wave.

**Boss scheduling**: named bosses appear at specific timestamps (e.g., minute 10 "Stalker" variants, minute 25 "Death's Ballista"). Bosses do not despawn when the player escapes; they teleport back to screen.

**Enemy cap**: hard cap of 300 on-screen enemies. When this cap is reached, periodic spawning pauses; only bosses and special events can continue adding enemies.

**Endless Mode escalation (per cycle past minute 30):**
- Enemy max HP: +100%
- Spawn frequency and quantity: +50%
- Enemy damage: +25%
- Player max damage cap: −1

**Curse stat modifier** (available to players as a voluntary handicap): `effectiveSpawnInterval = spawnInterval / totalCurse`. Higher Curse = faster spawns, more HP, more speed, but also more XP and gold drops.

**Hyper Mode**: stage modifier unlocked per-stage. Increases player and enemy movement speed 65–75%, projectile speed 15–25%, gold multiplier +50%.

### Brotato — fixed wave structure

20 waves with fixed duration scaling by difficulty. Waves are separated by shop phases. Enemy density and strength scale linearly with wave number; the Danger Level setting applies a global multiplier. No procedural enemy selection — wave composition is authored per-wave-number.

### Halls of Torment — Agony Mode

After defeating the stage lord, **Agony Mode** unlocks: difficulty automatically increases approximately one level per 5 minutes. Agony V is reachable around 6 minutes with sufficient kill counts. Death reduces Agony by one level, creating a dynamic ceiling that self-adjusts to player performance.

**Champion enemies** (yellow): mini-bosses that spawn periodically with weighted drop tables — ability scrolls (30–60% chance), chests (20–33%), buckets (2–10%). Buckets are capped at one per run, creating a scarcity economy.

**Experience values** vary by enemy tier: blue gems worth 1 XP up to golden gems worth 1000 XP. Monster difficulty, max HP, and player XP modifier all affect gem value.

### Deep Rock Galactic: Survivor — procedural + staged

Each dive consists of **multiple stages**, each culminating in a boss encounter. Procedural cave generation per mission means enemy pathing and terrain interact uniquely each run. Boss enemies are typically oversized versions of regular enemies with large HP pools. Mining terrain directly affects combat: tunnels can be shaped to funnel swarms into kill zones.

### Soulstone Survivors — boss-centric structure

Massive "Lord" bosses serve as stage completion gates. Killing a Lord opens the next area. Champions (elite enemies) spawn on timers and must be defeated for progression. The **curse system** layers on top: Curse levels I, IV, and VII add +10 Armor to bosses, and special curses (Ethereal Lords, Council of Lords) can modify boss behavior and run conditions.

---

## 4. Leveling & Stat Systems

### EXP curves

**Vampire Survivors** uses a segmented curve:
- Levels 1–20: requirement increases by +10 XP per level (level 2 requires 5 XP, level 3 requires 15, etc.)
- Levels 21–40: +13 XP per level
- Level 41+: +16 XP per level
- At levels 20 and 40, all characters gain +100% Growth as a curve-break to offset the steeper slope

Experience gems are the primary XP source. The **Growth** stat multiplies XP gained from gems. **Vacuum** pickup pulls all on-screen gems to the player. After the player maxes their weapon count (6 slots full and all at max level), subsequent level-ups grant gold or HP instead of build options.

**Brotato** uses level-ups within each wave (separate from shop phases): on wave-level-up, the player chooses 1 of 4 **temporary stat upgrades** (Primary Stats). These last only for the current run. Brotato deliberately has **no permanent stat meta-progression** — all between-run progression is unlock-based, not numeric.

**Halls of Torment**: XP gem values range from 1 to 1000, modified by monster tier, monster HP, and player XP modifiers. The Agony system dynamically adjusts difficulty, creating an implicit "effective level" tied to kill rate.

### Level-up choice mechanics

The **draft 3–4, pick 1** pattern (pioneered by VS and Magic Survival before it) is the genre standard. Specific implementations:

- **Vampire Survivors**: 3 or 4 choices (4 if the player has the reroll PowerUp unlocked). Options drawn from available weapon slots + passive item pool. Same item shown = upgrade existing copy.
- **Brotato**: 4 choices, stat-only (within waves). Shop is the item layer.
- **DRGS**: 3 upgrade card choices on level-up, drawn from the current weapon's upgrade tree.
- **Halls of Torment**: Trait draft (3 choices); Potions of Oblivion can remove unwanted traits from future draws, allowing build steering.
- **Nomad Survival**: Standard draft; no banish or reroll tools, making draft RNG harder to mitigate.

### Stat systems

**Vampire Survivors primary stats** (all purchasable as permanent PowerUps and also found on characters):
Might (damage), Amount (projectile count), Speed (projectile velocity), Duration (effect length), Area (attack radius), Cooldown (attack speed), Armor, Max Health, Recovery, Move Speed, Greed (gold gain), Magnet (pickup range), Luck, Growth (XP), Charm, Defang, Curse, Omni.

**Brotato** distinguishes primary and secondary stats:
- Primary: Max HP, Damage, Speed, Crit Chance, Engineering, Harvesting, and ~13 more
- Secondary: Knockback, % Explosion Damage, % XP Gain, % Pickup Range, projectile behavior modifiers
- Synergy bonus: equipping exclusively melee or exclusively ranged weapons triggers a category bonus that amplifies the specialized stat

**Soulstone Survivors** adds **status effect depth**: critical hits, armor, and synergy passives interact with status effects. Elemental damage types (fire, frost, lightning, etc.) each have distinct behavior — frost AoE size scales with the largest single hit; total frost damage scales with stack count.

**20MTD** uses a Rune meta-progression system as the "stat tree": Sword Runes (offensive) and Shield Runes (defensive), each with 5 ranks and 3 per tier, pick 1 per tier per run.

---

## 5. Meta-Progression

### Vampire Survivors — gold-funded PowerUp shop

28 permanent upgrades purchased in the main menu using Gold Coins earned during runs. Full unlock costs total ~27 million coins. Escalating cost structure: each new PowerUp purchase increases the price of all subsequent purchases by 10%.

Key unlock milestones beyond stats:
- **Arcana system** (Randomazzo relic): up to 3 Arcanas per run, each a powerful modifier (e.g., Sarabande of Healing, Wicked Season). First at run start, second at 11:00, third at 21:00.
- **Banish** (up to 10 items per run removed from pool)
- **Reroll** and **Skip** (extra level-up options)
- **Character unlocks**: triggered by in-run achievements (survive 30 min, find specific items, etc.). Full collection completion unlocks Queen Sigma.
- **Stage unlocks**: each stage has a Hyper, Hurry, Inverse, and Endless mode unlocked by stage-specific achievements
- **Arcana unlocks**: reaching level 50 with specific characters OR surviving past minute 31 in certain stages

### Brotato — unlock-only, no permanent stats

Brotato deliberately eschews numeric meta-progression. All between-run progress is access-based:
- **Character unlocks**: completing runs with existing characters at certain Danger levels unlocks new characters
- **Item unlocks**: new items enter the pool by completing specific in-run objectives
- Danger Level (0–5) is the difficulty selector; each level inherits all buffs from lower levels
- Accessibility sliders in options allow fine-tuning 4 difficulty parameters independently

### Deep Rock Galactic: Survivor — 18 permanent upgrades + Forge

**Meta Upgrades** (18 total, purchased in main menu using Credits + mineral resources):
Getting Fit (HP), Heavy Bullets (Damage), Reload Speed, Upgraded Armor, Trigger Training (Fire Rate), Target Practice (Crit Chance), Mind Blowing (Crit Damage), Mining 101, Pocket Magnets, Nitra Cache, Gold Cache, Artifact Rerolls, Fast Learner (XP Gain), More Juice (Potency), Catalyst Booster (Status Effect Damage), First Aid Kit (Life Regen), Better Boots (Move Speed), Me Lucky Charms (Luck).

**Forge system**: Overclock Infused Cores appear at the Forge and can be crafted into permanent Overclocks using Credits and minerals. Milestone achievements unlock additional overclock options. This creates a content-unlock loop distinct from the stat-buff loop.

### Halls of Torment — quest-based unlocks

Quest-based meta progression: completing specific objectives during runs sends items to the "overworld," where they can customize future runs. The emphasis is on unlocking new trait options, relics, and character-specific gear rather than numeric boosts.

### Soulstone Survivors — Skill Tree + Soulstones

The Soulstone Skill Tree is the core meta-progression system. Players invest Soulstones (earned in runs) into permanent upgrades across multiple branches: base stat boosts, new mechanic unlocks, enhanced gameplay performance. The Void Hunter roster (diverse character roster) is unlocked through the skill tree.

### Nomad Survival — pet companions + passive abilities

Meta currency (gemstones) upgrades pet companions and unlocks passive abilities between runs. The reviewer notes this system is grindy and restrictive at higher-tier unlocks. Heritage (character modifier) system unlocks through gameplay achievements — the heritage significantly changes the run's feel (e.g., Berserker doubles damage but disables healing; Poxbringer converts all damage to damage-over-time).

### HoloCure — character progression + unlocks

VS-style unlocks: completing runs with specific characters unlocks new characters, weapons, and items. A stamp upgrade system grows with the character roster over updates.

---

## 6. Movement & Survival Mechanics

### Core movement model

All genre games use **free 8-directional movement** as the sole player input (plus attack in games with manual aiming). Positioning is the primary skill expression in auto-attack games: players must maintain optimal spacing to:
- Stay in XP gem pickup range (affected by Magnet stat)
- Avoid damage from bullet patterns and enemy contact
- Herd enemies into kill zones (funneling is especially important in DRGS mining tunnels)

### Invincibility frames

**The genre baseline has no dodge or i-frames.** This is noted across game databases as uncommon — relatively few survivors-likes have i-frames. Notable exceptions:

- **20 Minutes Till Dawn**: The character Hina has an explicit dash with invulnerability during the dash animation. The general **Dodge** stat in 20MTD functions as a flat percentage chance to negate damage on any hit (not a directional dodge), pushing back nearby enemies on a successful dodge.
- **Halls of Torment**: Some skills or class abilities may include brief invulnerability windows; the optional twin-stick manual mode also changes survival mechanics.
- **Soulstone Survivors**: Active skill activations can include brief invulnerability frames.

Most games resolve survival through **movement speed** (outrunning enemies), **damage reduction/armor stats**, and **health recovery** rather than dodge mechanics.

### Knockback

Knockback on enemies (from high-knockback builds) is a survival tool in VS, Brotato, and SS. In Brotato, knockback is an explicit stat that pushes enemies away on hit, reducing contact damage. In VS, some weapons (e.g., Knife, Fire Wand) have inherent knockback; builds can amplify this via passive items.

### Terrain and obstacles

**Vampire Survivors**: stages include light obstacle geometry (trees, walls, torches) but no destructible terrain. Some stages have water borders. Primary arena is functionally infinite — players can run indefinitely in any direction with enemies spawning from all sides.

**Brotato**: explicitly small square arena, no terrain features. The arena constraint forces engagement — players cannot kite indefinitely.

**Deep Rock Galactic: Survivor**: **fully destructible terrain** — the genre's only example. Mining caves creates pathways, choke points, and defensible positions. Players can funnel multiple swarms into a single tunnel for concentrated AoE. This creates a temporal trade-off: time spent mining creates strategic advantage but exposes the player to enemies during the mining animation.

**Halls of Torment**: dungeon halls with walls and obstacles that affect line-of-sight and movement. Enemy movement patterns interact with geometry more than in VS.

### Movement speed and gear

In 20MTD, **Wind Magic** and **Dodge** both scale with the player's movement speed stat, creating a synergy chain where movement investment pays off in both offense (Wind Magic damage) and defense (Dodge proc rate).

---

## 7. Resource Management

### On-field resources in Vampire Survivors

| Pickup | Effect |
|--------|--------|
| Experience Gem | +50 XP (multiplied by Growth stat) |
| Gold Coin / Coin Bag / Rich Coin Bag / Gold Pile | +1 / +10 / +100 / +1,000 gold |
| Magnet | Pulls all pickups within radius |
| Rosary | Destroys all on-screen enemies (immunity bosses excluded) |
| Orologion | Freezes all enemies for 10 seconds |
| Vacuum | Pulls all XP gems to player; evolves into Lavatrix Machina |
| Floor Chicken / Wall Chicken (DLC) | Restores 30 / 60 HP + brief invulnerability |
| Little Heart | Restores 1 HP |
| Little Clover | +10% Luck for run |
| Golden Egg | Permanently increases a random stat |
| Rerollo | Extra level-up reroll |
| Nduja Fritta Tanto | Breathe fire for 10 seconds |
| Sorbetto | Breathe freezing cones for 10 seconds |
| Barrier (DLC) | Stacking shield, max 10 stacks |
| Rapid Fire (DLC) | +30% speed, −30% cooldown for 10 seconds |
| Grenade (DLC) | 1,000 damage to all visible enemies |

Gold drops from destroyed light sources (torches, candles) during the run, funding the between-run PowerUp shop. The **Greed** stat multiplies all gold pickups; **Luck** affects drop rates.

### In Brotato

Materials (the shop currency) drop from killed enemies. Harvesting stat increases material drop rate and quantity. Gold is separate and used for shop rerolls. Weapon materials stack differently from upgrade materials. The on-field resource discipline in Brotato is simpler than VS — the primary resource is materials for the shop, collected from enemy kills.

### In DRGS

**Nitra** (the mining game's special ore) is mined from terrain and from enemy drops. It funds resupply pods (ammo/health refills) during the mission. Specific mineral types (Bismor, Croppa, Enor Pearls, Jadiz, Magnite, Umanite) are collected and used for between-run meta upgrades at the Forge. This dual-currency system (in-run consumable + out-of-run progression) is unique to DRGS in this genre.

### Clock/Freeze as tactical resource

The Orologion (VS) freezes all enemies for 10 seconds — the only way in the base game to create a complete safety window. These drop from specific enemy types and are treated as emergency resources, not routine ones. High-Luck builds increase Orologion drop frequency, enabling strategies built around freeze windows.

### Pickup radius as a scaling stat

Every game in the genre has a **magnet/pickup range** stat. Maximizing pickup radius reduces the positional precision required to collect XP, letting players move more freely. In VS this is called Magnet; in DRGS it's Pocket Magnets. The stat is a quality-of-life multiplier that indirectly increases effective XP gain by reducing missed gem collection.

---

## 8. Run Modifiers

### Vampire Survivors — stage modes

Each stage can be played in four unlockable modes (stackable):

| Mode | What changes |
|------|-------------|
| Hyper | +65–75% movement speed (player + enemies), +15–25% projectile speed, +50% gold multiplier, some stages add bonus Luck and HP |
| Hurry | Clock runs at 2× speed; XP gain +25%; run takes half real-time |
| Inverse | Stage mirrored horizontally; base gold +200%; Merchant accessible mid-run; Arcana cap removed when combined with Endless |
| Endless | No 30-minute Death; escalation cycles continue with +100% HP / +50% spawns / +25% damage per cycle; player damage cap diminishes per cycle |

Multiple modes stack. Hyper + Hurry + Inverse + Endless creates an extreme difficulty configuration that also maximizes reward density.

**Curse stat** is also a voluntary run modifier: players deliberately equip Curse to accelerate enemy difficulty for faster XP and gold, enabling speedrun-style high-level play.

**Arcana system** as a run modifier: up to 3 Arcanas per run transform how specific weapons or systems behave. Examples: *Sarabande of Healing* makes leveling up restore health; *Wicked Season* doubles Curse in 10-second intervals for massive XP spikes.

### Brotato — Danger Levels

5 Danger Levels (0–5) each inheriting all difficulty increases from lower levels. Danger Level 5 is the primary end-game challenge target; clearing all characters at Danger Level 5 is the completion goal. Four accessibility sliders in options allow independent fine-tuning on top of Danger Levels.

### Halls of Torment — Agony Mode

Dynamic difficulty that self-adjusts every 5 minutes. Reaching higher Agony levels is a run goal, not just a modifier. Death reduces Agony by one, creating a risk-reward system where playing aggressively pushes Agony up for better rewards but one bad hit drops difficulty.

### Soulstone Survivors — Curse Levels

Cursed difficulty adds +10 Armor to bosses at Curse levels I, IV, VII. Additional curse types modify encounter rules (Ethereal Lords: bosses gain ethereal phases; Council of Lords: multiple lords appear simultaneously). Players select the curse level before the run, trading difficulty for better Soulstone rewards.

### Nomad Survival — Heritage system as run modifier

The Heritage chosen before a run fundamentally changes the run's parameters:
- **Nomad**: +1 reroll on level-up
- **Berserker**: ×2 damage, healing disabled
- **Poxbringer**: all damage converted to 6-second DoT; doubles effective damage

Heritage is unlocked through achievements and represents the deepest run-modification layer in Nomad Survival.

### Deep Rock Galactic: Survivor — class selection + mission types

Character class (Driller, Engineer, Gunner, Scout) determines weapon set and upgrade trees, effectively setting the run's playstyle before it starts. Mission types vary objectives and map generation. Hazard Level (difficulty tier) scales enemy density and HP.

### 20 Minutes Till Dawn — Quickplay, Standard, Endless

Three mode durations. No per-stage modifier system; run differentiation comes primarily from character + weapon synergy selection and the rune meta-progression loadout.

---

## Design Patterns Summary

### What the genre pioneered / codified

1. **Single-stick auto-attack** (Magic Survival → Vampire Survivors): movement as the only real-time input, turning survival into a positional puzzle
2. **Draft 3–pick 1 level-up** (VS): offers agency without overloading the player mid-run
3. **Evolution via weapon + passive combo** (VS): creates a secondary goal within runs (collect the right pair) without explicit quest markers
4. **30-minute hard stop** (VS Death boss): enforces run pacing and prevents stagnation
5. **XP gems as on-field drops** (VS): creates a tension between safe positioning and risky gem collection

### Key differentiations across the genre

| Mechanic | Pioneered / best example |
|----------|--------------------------|
| Manual aiming + reload management | 20 Minutes Till Dawn |
| Shop between waves | Brotato |
| Destructible terrain + mining objective | Deep Rock Galactic: Survivor |
| Two-weapon Collab evolution | HoloCure |
| Stamps (default weapon enhancement) | HoloCure |
| Twin-stick optional mode | Halls of Torment |
| Status effect chains | Soulstone Survivors |
| Unlimited weapon slots | Nomad Survival |
| Overclocks (within-run weapon branching) | Deep Rock Galactic: Survivor |
| Arcana run modifiers | Vampire Survivors |
| Heritage system | Nomad Survival |
| Deliberately no numeric meta-progression | Brotato |

---

## Sources

Web research collected 2026-06-15. Key sources:

- Lost Attic Games — "How Vampire Survivors Made Me Rethink The Concept of the Core Gameplay Loop"
- Vampire Survivors Wiki (vampire.survivors.wiki) — Enemies, Pickups, PowerUps, Evolution, Arcanas, Stages
- Deep Rock Galactic Wiki (deeprockgalactic.wiki.gg) — Survivor:Meta Upgrades, Survivor:Overclocks
- AltChar — Deep Rock Galactic: Survivor Review
- Rogue Ranker — Vampire Survivors Curse guide; Arcanas guide
- GameRant — Brotato All Stats Explained; DRGS best upgrades
- Brotato Wiki (brotato.wiki.spellsandguns.com) — Danger Levels, Upgrades, Progress
- Soulstone Survivors Wiki (Fandom) — Attributes, Runes
- Samurai Gamers — HoloCure Stamp Guide, Collab Weapon Guide
- Survivors-likes List (survivorslikes.com) — i-frames definition; genre taxonomy
- Wikipedia — Vampire Survivors–like (genre history, naming)
- Rogueliker — Bullet Heaven genre overview; Nomad Survival review (Cubic Creativity)
- The Gamer — 20 Minutes Till Dawn tips; Dodge wiki (20minutestilldawn.wiki.gg)
- Fantasy Warden — DRGS Beginner's Guide
- Celxius Gaming — Halls of Torment Traits Primer
- Steam Community — Halls of Torment game mechanics guide
