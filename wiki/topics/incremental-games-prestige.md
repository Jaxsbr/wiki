# Incremental Games: Prestige Mechanics

Part of the [Incremental Games](incremental-games-overview.md) research set.

---

## What Is Prestige?

**Prestige** is a voluntary run reset in exchange for permanent multipliers that carry into future runs. The player gives up current progress — buildings, resources, upgrades — but receives a currency or bonus that makes the *next* run permanently faster.

The word comes from mobile games ("prestige" system), but the design concept predates the term. Prestige is the genre's most important structural innovation because it solves two fundamental problems:

1. **Infinite scaling**: exponential growth eventually produces meaningless numbers. Prestige resets them while compounding the underlying power.
2. **Content exhaustion**: players run out of upgrades. Prestige restarts the loop with new meta-goals.

---

## Why Prestige Is the Genre's Defining Innovation

Before prestige, incremental games had a hard endpoint: you buy everything, numbers plateau, you stop playing. Progress Quest (2002) and early Cookie Clicker had this problem.

Prestige transforms a linear progression into a **cyclical spiral**: each cycle starts at the beginning but rises faster, reaching new heights, then resetting again. The player's power compounds over many cycles. This is mathematically elegant:

- Run 1: reach soft cap at milestone X
- Run 2: start with prestige bonus → reach milestone X in half the time → push to milestone X+1
- Run 3: reach X+1 in half the time → push to X+2
- ... (logarithmic growth of "what you can achieve per run")

The strategic decision — *when* to prestige — is itself a deep mechanic. Too early: small prestige bonus, insufficient acceleration. Too late: time wasted past the efficient cutoff. This "optimal prestige timing" problem generates enormous community discussion and has spawned entire subreddits.

---

## First Prestige Design

The first prestige is the hardest to design correctly. Players who don't understand why resetting is good will resist it; if it's mandatory (the wall is too hard), it feels punishing rather than rewarding.

### Design principles for first prestige:

**1. Communicate clearly before the wall hits**
Most games hint at prestige existence before the player needs it: Cookie Clicker mentions "Heavenly Chips" in a tooltip before the ascend button is unlocked. Antimatter Dimensions shows "Infinity" as a labeled button with a progress bar.

**2. Make the first prestige feel optional but clearly beneficial**
Clicker Heroes achieves this perfectly: the game slows noticeably after zone ~100, Hero Souls start appearing, a progress bar for "souls earned on reset" is always visible. The player chooses to reset when ready — no forced moment.

**3. Make the first post-prestige run dramatically faster**
The reward must justify the reset. The standard is "reach the prior wall in 1/10th the time." If it's only 10% faster, players won't feel it. Cookie Clicker's first ascension typically provides enough heavenly chips for a 50–100% permanent production bonus — immediately perceptible.

**4. Reward a new unlock, not just a multiplier**
The best first prestiges unlock a new system alongside the multiplier. Cookie Clicker ascension unlocks the Heavenly Upgrades purchase tree — a meta-layer that was completely inaccessible before.

---

## Prestige Currency Formulas

The formula determining how much prestige currency a run earns is a critical balance lever:

| Game | Formula | Effect |
|------|---------|--------|
| **Realm Grinder** | `sqrt(max_earned)` | Square root; doubling currency requires 4× prior max earnings |
| **AdVenture Capitalist** | `150 × sqrt(lifetime_earned / 10^15)` | Similar; requires ~3-4× progress per run to double currency |
| **Cookie Clicker** | `cbrt(lifetime_cookies)` | Cube root; doubling chips requires ~8× more cookies (steepest wall) |
| **Egg, Inc.** | `earned^(1/7)` | Requires 128× earnings to double; heavily discourages repeated same-point resets |
| **Clicker Heroes** | Based on upgrade count | Decoupled from earnings; different strategic implications — optimizing upgrade speed |

The **steeper** the exponent (closer to 1/1), the more quickly prestige currency scales with progress — but also the more valuable grinding past the optimal reset point becomes. The **shallower** the exponent, the more the formula discourages staying past the efficient reset window.

---

## Multi-Layer Prestige

The most ambitious incrementals stack multiple prestige layers, each introducing new mechanics and a deeper reset.

### Antimatter Dimensions — three layers

**Layer 1: Infinity**
- Threshold: produce 1.8×10^308 antimatter (the float64 maximum — an elegant boundary)
- Reward: Infinity Points (IP) — spent on Infinity upgrades
- Reset scope: antimatter, dimensions, dimension boosts
- New mechanic: Infinity Challenges (rules-changing difficulty runs)

**Layer 2: Eternity**
- Threshold: accumulate enough IP + complete Infinity Challenges
- Reward: Eternity Points (EP) — spent on Time Studies (passive skill tree)
- Reset scope: everything except achievements, challenge records, and Infinity upgrade counts
- New mechanic: Time Dimensions (side resource tree), Time Studies (strategy tree)

**Layer 3: Reality**
- Threshold: accumulate enough EP + complete Eternity Challenges + meet Reality unlock conditions
- Reward: Reality Shards + Glyphs (unique modifiers per glyph slot)
- Reset scope: everything except post-Reality achievements
- New mechanic: Glyph system (mix-and-match modifiers), Celestials (named boss-style challenges)

**Design principle behind the structure**: each layer doesn't just "do prestige harder" — it introduces a *qualitatively different mechanic*. Infinity = new currency. Eternity = passive skill tree strategy. Reality = equipment slot system. The player is essentially learning a new game three times.

### Clicker Heroes — two layers

**Layer 1: Ascension**
- Reward: Hero Souls (earn 1 per 2000 combined hero levels owned at reset)
- Spent on: Ancients (permanent passive buffs)
- Hero Souls also provide flat +10% DPS per soul not spent on Ancients
- Strategic tension: hoard souls for % bonus, or spend on Ancients for specific bonuses?

**Layer 2: Transcendence**
- Deeper reset; loses Ancients and most Ancient-level progress
- Reward: Ancient Souls (rare; more powerful than Hero Souls)
- Spent on: Outsiders (even more powerful long-term multipliers)
- Unlock: Transcendent Power (bonus to Ancient effectiveness)

### Realm Grinder — three named layers

**Layer 1: Abdicate** (soft reset)
- Keep: faction prestige bonuses, gems
- Lose: buildings, mana, upgrades
- Reward: choose a new faction (fundamentally changes upgrade availability)

**Layer 2: Reincarnate**
- Keep: abdication history, some perks
- Lose: most progression
- Reward: Gems (permanent production multiplier)

**Layer 3: Ascend** (transcendence)
- Keep: only the deepest permanent bonuses
- Reward: Research points (unlock fundamental game-mechanic modifiers)

---

## Anti-Frustration Design: What Players Keep vs. Lose

A bad prestige reset feels like punishment. A good one feels like graduation.

### What players should ALWAYS keep:
- **Achievements** — completing challenges shouldn't be undone
- **Challenge/speed-run records** — proof of accomplishment
- **Tutorial progress** — never re-show tutorials post-prestige
- **Option to see what was lost** — some games show "you previously had X" as context

### What players commonly lose (and should accept):
- Primary resources, buildings, regular upgrades
- Active run progress

### What varies by design intent:
- Automation unlocks: losing automations on reset is punishing; many games let automation persist
- Cosmetics: usually kept (but some games tie cosmetics to run-specific achievements)
- Challenge time records: typically kept as personal bests

### Cookie Clicker on ascension keeps:
- All achievements earned (which provide milk bonus to CpS)
- Heavenly Chips earned in prior runs
- Heavenly Upgrades already purchased

### Cookie Clicker loses on ascension:
- All buildings, upgrades, cookies (in bank and lifetime for prestige calculation)
- Any run-specific seasonal bonuses not locked in via heavenly upgrades

---

## The Prestige Timing Problem as a Game

In many incrementals, determining the optimal prestige timing is itself a min-game that players deeply engage with:

- Community builds spreadsheets to calculate optimal reset zones (Clicker Heroes)
- Players debate "push further for a bigger bonus vs. reset sooner for more runs" (frequency vs. depth)
- Some games show "recommended reset zone" UI (reducing friction for casual players)
- Antimatter Dimensions built entire guides around IP/EP gain curves

This meta-game extends the genre's engagement far beyond the in-game UI — it colonizes spreadsheets, Reddit threads, and YouTube guides. This is a *feature*.

---

## See Also

- [Core Loop](incremental-games-core-loop.md)
- [Resource Systems](incremental-games-resources.md) — prestige currencies
- [Design Recipes](incremental-games-recipes.md) — specific game implementations
- [Scaling & Numbers](incremental-games-scaling.md) — managing numbers across prestige layers

## Sources
- [incremental-games-research.md](/sources/incremental-games-research.md)
