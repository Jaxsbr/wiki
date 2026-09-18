# The Prestige Loop

> The prestige mechanic: resetting progress voluntarily in exchange for permanent power. One of game design's most counter-intuitive satisfaction systems.
> See also: [incremental-game-psychology](../topics/incremental-game-psychology.md), [incremental-games-mechanics](../topics/incremental-games-mechanics.md)

---

## Definition

A **prestige loop** (also called ascension, reset, transcendence, reincarnation, or abdication depending on the game) is the mechanic where a player voluntarily resets most of their accumulated progress in exchange for:

1. A permanent multiplier that persists across all future runs
2. Access to new mechanics, currencies, or upgrade trees unavailable before prestige
3. The ability to re-clear early-game content dramatically faster

First widely implemented in browser incrementals circa 2014; **Clicker Heroes** popularized it on Steam/mobile.

---

## The Emotional Arc of a Single Prestige Cycle

**Phase 1 — Rapid growth**: Post-prestige, early game is blazingly fast. The multiplier from the previous run makes early buildings affordable in minutes. This creates the "fresh start" dopamine hit — a new beginning with accumulated power.

**Phase 2 — The trough**: Mid-game slows. The exponential cost curve catches up with the linear income. New mechanics appear less frequently. Players recognize this as approaching the prestige wall.

**Phase 3 — The wall**: Progress slows to near-zero. The next major upgrade may require hours of accumulated resources. This is strategically uncomfortable — the game's way of signaling "prestige is available."

**Phase 4 — Prestige decision**: Player calculates the trade-off. Enough progress to make the multiplier worth it? Is a new mechanic tier now available? The decision involves genuine strategic judgment.

**Phase 5 — The reset**: Player prestiges. The visual feedback (counter resets, fresh start screen, new currency displayed) provides a ritual satisfaction. The cycle restarts.

---

## Why This Feels Good (Not Bad)

### Loss Aversion Reframed

Loss aversion (Kahneman) means losses feel ~2× worse than equivalent gains feel good. The prestige mechanic must overcome this to function. It does so by:

- **Framing gain, not loss**: "You earned 47 Heavenly Chips!" — not "you lost 2M buildings"
- **Making the pre-reset state feel like a dead end**: the wall is designed to be frustrating; reset is relief, not loss
- **Permanent bonuses**: the player keeps power across all future runs, so the "loss" is immediately offset by a provable advantage

### The Fresh Start Effect

Dai, Milkman & Riis (2014) documented the "fresh start effect" — humans respond to temporal landmarks with renewed motivation. Mondays, new years, birthdays trigger increased goal pursuit. Prestige creates an *artificial* temporal landmark: a structural new beginning that activates the same motivation spike.

### Meta-Progress: Knowledge Doesn't Reset

On run 1, a player spends time discovering optimal purchase sequences. On run 5, they execute those sequences almost automatically. The *knowledge* is the durable progress — the numbers are just the score.

Players in Kittens Game studies described satisfaction in terms of "knowing what I'm doing this time" rather than raw numerical progress. The feeling of mastery compounds across runs.

### Narrative Access

Some games structure meaningful narrative events to require prestige:

| Game | What Prestige Unlocks |
|------|----------------------|
| Cookie Clicker | Heavenly upgrades; full Grandmapocalypse lore unlocks over multiple runs |
| Antimatter Dimensions | Each prestige layer (Infinity → Eternity → Reality) is effectively a new game |
| Realm Grinder | Faction prestige unlocks unique upgrade trees per faction alignment |
| Clicker Heroes | Ancient upgrades (Ascension) → Outsider upgrades (Transcendence) |

---

## Prestige Formulas (How Multiplier Is Calculated)

| Game | Formula | Implication |
|------|---------|-------------|
| Cookie Clicker | `cbrt(lifetime_cookies / 10^12)` | Need 8× prior max to double chips; discourages grinding |
| AdVenture Capitalist | `150 × √(coins / 10^15)` | Need 4× progress to double; moderate |
| Realm Grinder | `√(max_earned)` | Need 4× to double; same as AdCap |
| Egg, Inc. | `earnings^(1/7)` | Need 128× to double; strongly discourages repeated grinding |
| Clicker Heroes | Based on upgrade count, not earnings | Different strategic calculus |

The formula's exponent determines the "grinding cliff" — how much additional play time is wasted grinding vs. just prestaging. Games with high exponents (Egg, Inc.) actively discourage staying too long.

---

## Layered Prestige Systems

The most sophisticated incrementals stack multiple prestige layers, each revealing a new game:

### Antimatter Dimensions (3 Layers)

```
Run start
  ↓ accumulate Antimatter
  ↓ [Big Crunch] → earn Infinity Points, unlock Infinity layer
  ↓ accumulate IP, complete Infinity Challenges
  ↓ [Eternity] → earn Eternity Points, unlock Time Dimensions + Time Studies
  ↓ accumulate EP, complete Eternity Challenges
  ↓ [Reality] → earn Reality Machines, unlock Glyphs + Celestial content
```

Each layer adds ~20–30 hours of new content and requires understanding the layer below.

### Realm Grinder (3 Layers)

```
Abdicate (soft reset): keep faction prestige, gain coins
  ↓ Reincarnate: deeper reset, unlocks Gems + spell research
    ↓ Ascend: deepest reset, unlocks cosmetic/permanent research bonuses
```

### Clicker Heroes (2 Layers)

```
Ascension: reset run for Hero Souls → spend on Ancients (permanent stat trees)
  ↓ Transcendence: deeper reset for Ancient Souls → spend on Outsiders (even rarer)
```

---

## Design Rules for Prestige

1. **Never force it**: prestige should always feel like a player choice. Mandatory resets are a different mechanic.
2. **Make the multiplier visible before the reset**: "You'll earn 47 chips" shows the gain before committing.
3. **Show the speedup**: "Your next run will be ~10× faster" contextualizes what the multiplier means in experience.
4. **The wall should precede the offer**: players must feel the slowdown before they'll voluntarily prestige. Don't offer prestige at peak speed.
5. **Each layer needs new mechanics**: a prestige that only adds a multiplier (no new content) is less compelling than one that unlocks an entirely new upgrade tree.
6. **Early prestige tiers should unlock in hours, not days**: Clicker Heroes' first ascension is reachable in a single session. Longer initial gates increase attrition.

---

## Sources

- [incremental-games-research.md](/sources/incremental-games-research.md)
- CMU: *The Pleasure of Playing Less* (2018) — Kittens Game metaphases and prestige structure
- Tutsplus: *Numbers Getting Bigger* — prestige math and formulas
- Wikipedia: Incremental game — prestige taxonomy
- Kahneman & Tversky — loss aversion
- Dai, Milkman & Riis (2014) — fresh start effect
