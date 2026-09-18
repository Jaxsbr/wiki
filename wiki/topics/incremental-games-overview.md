# Incremental Games: Overview & Design Hub

A permanent research hub covering the mechanics, design patterns, and structural recipes of the incremental/idle genre. Cross-links to deep-dive pages below.

---

## What Is an Incremental Game?

An incremental game has three essential elements:
1. At least one **currency** that accumulates
2. Currency increases **automatically** at a set rate (with minimal or no input)
3. Currency can be **spent to increase that rate further**

The core satisfaction is "numbers going up" — and in this genre, that *is* the mechanic, not just feedback. Progress Quest (2002) satirized this; Cookie Clicker (2013) embraced it sincerely and made it a global phenomenon.

### The Genre Spectrum

| Type | Key trait | Example |
|------|-----------|---------|
| **Clicker** | Active clicking is primary income | Cookie Clicker (early) |
| **Idle** | Automation; works while offline | AdVenture Capitalist |
| **Incremental RPG** | Combat loop fused with incrementals | Melvor Idle, NGU Idle |
| **Incremental Puzzle** | Finite ending; narrative-driven | Universal Paperclips, A Dark Room |
| **Deep Sim** | Resource chains, no handholding | Kittens Game |
| **Tycoon Hybrid** | Management decisions + incremental numbers | Trimps |

### How It Differs From Neighbouring Genres

- **vs. City Builder**: City builders have layout/spatial decisions and often failure states. Incrementals have no failure state; they just slow down.
- **vs. RPG**: RPGs have narrative quests and combat skill. Idle RPGs graft XP bars and skill trees onto incremental loops but strip out real-time combat skill.
- **vs. Management Game**: Tycoons require ongoing decisions under pressure; incrementals let you leave and return with the game having progressed itself.

---

## Deep Dive Pages

| Topic | What's covered |
|-------|----------------|
| [Core Loop & Time](incremental-games-core-loop.md) | Produce→accumulate→spend cycle; time as resource; offline progress |
| [Resource Systems](incremental-games-resources.md) | Currency tiers, generators, multipliers, conversion chains, soft caps |
| [Upgrade Systems](incremental-games-upgrades.md) | Linear/multiplicative/exponential tiers; milestones; psychology of "one more" |
| [Prestige Mechanics](incremental-games-prestige.md) | Reset-for-bonus; multi-layer prestige; anti-frustration design; formulas |
| [Scaling & Numbers](incremental-games-scaling.md) | Exponential curves, big-number notation, walls, active/passive ratio |
| [Automation & Milestones](incremental-games-automation.md) | Unlock patterns, achievement systems, auto-buyer rewards |
| [Design Recipes](incremental-games-recipes.md) | Cookie Clicker, Antimatter Dimensions, Kittens Game, Universal Paperclips, Idle RPG |
| [Pacing & Engagement](incremental-games-pacing.md) | Unlock cadence, mid-game doldrums, end-game problem, daily login |
| [Monetization Patterns](incremental-games-monetization.md) | Ethical vs predatory F2P in the genre |

---

## Genre History (Timeline)

| Year | Game | Significance |
|------|------|--------------|
| 2002 | **Progress Quest** | Satirical MMORPG grind parody; no interactivity — invented the genre by accident |
| 2012 | **Candy Box!** | Revealed mechanics progressively; unknown unknowns as design tool |
| 2013 | **Cookie Clicker** (Orteil) | Mainstream breakthrough; grandmapocalypse; defined the genre |
| 2013 | **A Dark Room** | Text-based narrative incremental; minimalist UI; finite ending |
| 2014 | **AdVenture Capitalist** | First comprehensive F2P monetization + offline earnings model |
| 2014 | **Clicker Heroes** | Popularized prestige (Ascension/Hero Souls) on Steam |
| 2014 | **Kittens Game** (bloodrizer) | Deep sim; no tutorials; resource chains; prestige |
| 2016 | **Antimatter Dimensions** (Hevipelle) | Three-layer prestige; each layer adds a new abstract mechanic |
| 2017 | **Universal Paperclips** (Frank Lantz) | Narrative critique of AI goal-maximization; finite ending |
| 2018 | **Realm Grinder** | Faction system; triple prestige layers; complexity spike |
| 2020 | **Melvor Idle** | OSRS-inspired incremental RPG; skill-based progression |
| ~2021 | **NGU Idle** | Deep parallel systems; self-aware satire of genre complexity |

---

## The Canonical Loop

```
[Click / Tick] → [Resources accumulate] → [Spend on upgrades]
      ↑                                              |
      |                                              ↓
[Production rate increases] ← [New buildings/generators unlocked]
                                              |
                              (eventually)   ↓
                              [WALL: slow growth signals prestige time]
                                              |
                                              ↓
                              [PRESTIGE RESET: lose run, gain multiplier]
                                              |
                                              ↓
                              [Next run: reach wall faster; repeat deeper]
```

---

## See Also

- [Arena Survivor Overview](arena-survivor-overview.md) — a genre that shares incremental upgrade loops
- [Atomic Game Design Catalogue](atomic-game-design-catalogue.md) — genre ratings including incremental fit
- [Solo Dev on Steam](solo-dev-on-steam.md) — incremental games are strong solo dev candidates

## Sources

- [incremental-games-research.md](/sources/incremental-games-research.md)
