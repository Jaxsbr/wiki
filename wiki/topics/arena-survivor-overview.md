# Arena Survivor Genre Overview

> R-006 · 2026-06-15
> Goal: deep knowledge base of how arena survivors work — art, mechanics, and skill — as a reference for building games in this genre.

The **arena survivor** (also: bullet heaven, horde survivor, auto-shooter) genre was mainstreamed by **Vampire Survivors** (2022, poncle), which sold 5 million copies in Early Access alone. The formula: survive escalating hordes of enemies for 20–30 minutes, with automatic weapons, XP drops, and level-up build choices. The genre is now one of the most-cloned and studied in indie game development.

---

## Key Games in This Wiki

| Game | Studio | Year | Engine | Style |
|---|---|---|---|---|
| [Vampire Survivors](https://store.steampowered.com/app/1794680/) | poncle | 2021 (EA) | Phaser (JS) | Minimalist pixel |
| [Brotato](https://store.steampowered.com/app/1942280/) | Blobfish | 2022 (EA) | Godot | Bold cartoon pixel |
| [20 Minutes Till Dawn](https://store.steampowered.com/app/1966900/) | flanne | 2022 (EA) | Unity | Dark minimal pixel |
| [HoloCure – Save the Fans!](https://store.steampowered.com/app/2420510/) | Kay Yu | 2022 | GameMaker | HD chibi anime |
| [Halls of Torment](https://store.steampowered.com/app/2218750/) | Chasing Carrots | 2023 (EA) | Godot | Pre-rendered 3D sprites |
| [Deep Rock Galactic: Survivor](https://store.steampowered.com/app/2321470/) | Funday Games | 2024 (EA) | Unreal | Real-time 3D low-poly |
| [Soulstone Survivors](https://store.steampowered.com/app/2066020/) | Game Smithing | 2022 (EA) | Unity | Dark fantasy 3D |
| [Nomad Survival](https://store.steampowered.com/app/1929870/) | Pelican Party | 2022 (EA) | Unity | Top-down pixel |

### Header Images

![Vampire Survivors](https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg)
![Brotato](https://cdn.akamai.steamstatic.com/steam/apps/1942280/header.jpg)
![20 Minutes Till Dawn](https://cdn.akamai.steamstatic.com/steam/apps/1966900/header.jpg)
![HoloCure](https://cdn.akamai.steamstatic.com/steam/apps/2420510/header.jpg)
![Halls of Torment](https://cdn.akamai.steamstatic.com/steam/apps/2218750/header.jpg)
![Deep Rock Galactic: Survivor](https://cdn.akamai.steamstatic.com/steam/apps/2321470/header.jpg)

---

## The Genre Formula (Synthesized)

### Core Loop

```
Move → Enemies die → XP gems drop → Collect gems → Level up →
Pick upgrade → Build grows → Enemies escalate → Repeat
```

The loop is a *spiral*, not a circle — the same three actions (move, collect, kill) feel entirely different at minute 2 vs. minute 25 as build power and enemy density both compound.

**Run structure:** ~20–30 minutes, ending with a boss death wave or hard stop. The player starts fragile and ends as a screen-clearing force — the power fantasy arc is the genre's core emotional payoff.

### What Makes It Feel Good

Three moments that define genre satisfaction, in order of intensity:

1. **XP gem vacuum** — all floor gems fly to the player simultaneously (magnet pickup). Thousands of gems streaking from off-screen + rapid level-up sounds = the genre's most studied dopamine moment.
2. **Evolution unlock** — a weapon reaches max level, a passive item aligns, a chest drops: the weapon transforms into a screen-dominating form.
3. **Late-run power fantasy** — the last 5 minutes of a Vampire Survivors run, where the entire screen fills with projectiles and enemies die before reaching the player.

---

## Three Dimensions — Deep Dives

### [Visual Design →](arena-survivor-visual-design.md)

Art styles, camera perspectives, VFX, UI/HUD, enemy legibility design.

**Key insight:** Every visual convention in the genre solves the same constraint — *hundreds of enemies on screen simultaneously must remain readable*. Dark backgrounds + bright enemies. Silhouette-first enemy design. Instant hit feedback (white flash). XP gems color-coded by value. Level-up screen pauses time.

**Art style spectrum:**

| Style | Games | Key Trait |
|---|---|---|
| Minimalist pixel art | Vampire Survivors, 20MTD, HoloCure | 32px sprites, dark BG, saturated FX |
| Bold cartoon pixel | Brotato | Black outlines, high saturation |
| Pre-rendered 3D sprites | Halls of Torment | Blender renders → sprites, Diablo II pipeline |
| Real-time 3D | Deep Rock Galactic: Survivor | Only major genre entry in real-time 3D |
| HD chibi anime | HoloCure | Highest art quality in genre, fan-service identity |

**Camera:** Most games use a slight oblique tilt (~10–20°) rather than strict top-down, creating depth illusion while keeping sprites front-facing.

---

### [Core Mechanics →](arena-survivor-mechanics.md)

Core loop, weapons, evolutions, enemy scaling, meta-progression, movement, resources, run modifiers.

**Key findings by dimension:**

**Attack mode** — Fully auto is the genre default (VS, Brotato, HoloCure, DRGS). 20 Minutes Till Dawn is the main outlier with manual aiming + reload management — this single choice raises the skill floor significantly.

**Weapon evolutions (Vampire Survivors template):** weapon reaches level 8 + correct passive item in inventory + chest drops → weapon transforms. HoloCure copies this as "Collab." Brotato uses tier-merging instead (combine two identical weapons). DRGS uses Overclocks (within-run specialization trees at weapon levels 6/12/18).

**Enemy scaling (Vampire Survivors):** Curated timed waves in normal mode. Endless mode: +100% HP / +50% spawn rate / +25% damage per cycle. Halls of Torment's Agony Mode dynamically adjusts difficulty based on real-time kill rate.

**Meta-progression spectrum:**

| Game | Meta-progression |
|---|---|
| Vampire Survivors | 28 gold-funded permanent stat upgrades + content unlocks |
| Brotato | **None** — unlock-only by design, no permanent stats |
| Deep Rock Galactic: Survivor | 18 semi-permanent upgrades + Forge overclock crafting |
| Halls of Torment | Character quest chains gate content |
| HoloCure | Character-specific upgrades + stamps system |

**Movement:** Baseline genre has no dash or i-frames. 20MTD's Hina character has an explicit i-frame dash. DRGS is the only game with fully destructible terrain as a survival mechanic.

---

### [Skill Design →](arena-survivor-skill-design.md)

How games teach and reward skill — onboarding, skill expression, build theory, difficulty, run-to-run learning, risk/reward, feel, accessibility.

**Key insight:** The genre's skill expression is *not* mechanical (no aim, no reaction timing in most games). Instead it lives in:

1. **Economic decision-making** — item prioritization, rerolls, build pivots (most visible in Brotato's shop)
2. **Positional herd management** — corralling enemies into kill zones rather than fleeing (VS, HoT)
3. **Build synergy recognition** — knowing which items compound multiplicatively, which are wasted in a given build
4. **Item pool knowledge** — knowing what's possible in advance (gatekept knowledge, partially solved by community wikis)

**Skill spectrum across games:**

| | Accessibility | Depth | Primary skill type |
|---|---|---|---|
| Vampire Survivors | ★★★★★ | ★★★ | Herd management + item knowledge |
| Brotato | ★★★ | ★★★★★ | Economic optimization (no meta-crutch) |
| 20 Minutes Till Dawn | ★★★ | ★★★★ | Aim + build synergy |
| HoloCure | ★★★★ | ★★★★ | Collab knowledge + character mastery |
| DRG: Survivor | ★★★ | ★★★★★ | Terrain engineering + overclock theory |
| Halls of Torment | ★★★ | ★★★★ | Ability sequencing + positioning |

**Difficulty escalation (Vampire Survivors):** Four stacking optional modifiers per stage: Hyper (+50% speed), Hurry (+50% fire rate), Inverse (mirrored map), Endless (no death wave). Combined: HHIE is considered end-game challenge.

**Run-to-run learning arc (Vampire Survivors):**
- Runs 1–5: Discover core loop, die a lot, first character unlock
- Runs 5–15: Discover weapon evolutions (the "aha moment")
- Runs 15–30: Start optimizing builds, explore stage variety
- Runs 30+: Unlock Hyper mode, attempt challenge characters, min-max Arcanas

---

## The Reddit Analysis (Source)

The original research request cited this article:
`https://www.reddit.com/r/gamedev/comments/sitab0/ive_created_an_analysis_of_the_game_design_of/`

Reddit was inaccessible via the research tools (proxy blocks). The three sub-pages were researched from primary sources (Steam store pages, game wikis, developer notes, community guides, and design analyses). The findings align with and expand on the framework in that article — covering the same ground (visual language, mechanics, skill) from a broader multi-game perspective.

---

## Design Principles Synthesis

If building an arena survivor from scratch, the consensus from this research:

### Non-negotiables
1. **Auto-attack** — manual aiming adds a skill floor that cuts your accessible audience significantly. Use auto unless manual aiming *is* the design statement.
2. **Dark background + bright enemies** — every game does this. It's not aesthetic preference; it's a legibility requirement at 300+ sprites.
3. **White flash on hit** — the minimum viable hit feedback signal.
4. **Level-up pause** — pause time completely. Show 3–4 cards. Dark overlay. No exceptions.
5. **XP gem vacuum** — the genre's dopamine centrepiece. Do not remove or reduce.

### Strong recommendations
6. **Run length 20–30 min** — shorter feels incomplete, longer loses players.
7. **Power fantasy arc** — the player should start fragile and end overpowered. If the player never feels dominant, the genre's core emotional contract is broken.
8. **6–8 build slots** — enough to create synergies, constrained enough to force choices.
9. **Evolutions / fusions** — the dramatic mid-run revelation that a combination exists raises engagement sharply.
10. **Silhouette-first enemy design** — identify enemy type from shape alone at 200px distance in a mob.

### Pitfalls
- **Visual noise at high density** — at 500 simultaneous kills, damage numbers become a wall. Cap display count or use rapid-fade.
- **Solved metas** — if the optimal build is publicly known and never changes, casual players won't notice, but veteran retention drops.
- **Unlocking too slow** — meta-progression must unlock content fast enough to retain new players through the first 5 runs.

---

## See Also

- [arena-survivor-visual-design](arena-survivor-visual-design.md) — full art/VFX/UI/enemy design deep dive
- [arena-survivor-mechanics](arena-survivor-mechanics.md) — full mechanics reference with per-game attribution
- [arena-survivor-skill-design](arena-survivor-skill-design.md) — full skill design analysis
- [pixel-art-topdown-scene-layout](pixel-art-topdown-scene-layout.md) — related: how to lay out top-down scenes
- [indie-winning-recipes](indie-winning-recipes.md) — related: what makes indie games win awards
- [first-game-scope](../concepts/first-game-scope.md) — related: scoping a first game project

## Sources

Web research: Steam store pages, Halls of Torment Polycount dev thread, VS Wiki, Brotato Wiki, HoloCure Wiki, DRG:Survivor Wiki, 20MTD Wiki, community guides, design analyses (Lost Attic Games, snav.substack, The Conversation, TechRadar).
