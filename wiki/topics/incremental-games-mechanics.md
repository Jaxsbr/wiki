# Incremental Games: Core Mechanics & Design Patterns

Systematic analysis of what makes incremental/idle games work. Part of [R-008](../requests.md).

Related: [Incremental Games Catalogue](incremental-games-catalogue.md) |
[Incremental Progression Patterns by Example](incremental-progression-examples.md)

---

## What Is an Incremental Game?

An incremental game is one in which the player's primary activity is accumulating a resource,
spending it to increase the rate of accumulation, and repeating. The loop is:

```
earn resource → buy upgrade → earn faster → buy more upgrades → earn much faster → hit wall →
prestige (optional reset for permanent bonus) → repeat from stronger baseline
```

The game's emotional core is the *number going up* and the *felt acceleration* of that number.
The dopamine loop is specifically: watching a number grow, experiencing a wall, resolving the wall
through a purchase or prestige, and watching growth accelerate again.

---

## The 7 Core Mechanics

### 1. Passive Accumulation (Idle)
Resources accumulate over time without player input. Offline progress (delta-time calculation:
`elapsed_seconds × rate_per_second = reward`) is the mechanism. This makes the game feel like it
"works for you" and creates the pleasant surprise of returning to a large resource pile.

**Games using it:** All idle games. Purity example: Progress Quest (100% passive).

### 2. Active Input (Clicking)
The player manually triggers resource generation (clicking a cookie, tapping a monster). Active
play typically yields 2–10× the passive rate but requires constant engagement.

**Games using it:** Cookie Clicker (clicking vs. buildings), Clicker Heroes (tapping vs. hero DPS),
Tap Titans 2 (tapping vs. hero auto-DPS).

### 3. Upgrade Ladders
Resources buy upgrades that multiply production. Costs scale faster than production gains,
creating a constant "not quite enough" tension. Standard cost function: `cost(n) = base × rate^n`
where rate is typically 1.07–1.15 per tier.

**Key variants:**
- *Flat multipliers* — "×2 CpS" (simple, transparent)
- *Percentage stacking* — "+5% CpS" (multiplicative if stacked with other multipliers)
- *Synergy upgrades* — "each Farm doubles Grandma output" (cross-building bonuses that reward
  building balance)

### 4. Prestige / Reset
The player voluntarily destroys current progress in exchange for a permanent bonus that makes
all future runs faster. The formula structure is always sublinear (square root, cube root,
logarithm) to ensure diminishing returns and continued motivation.

**Emotional design:** The player must *choose* to sacrifice progress. This moment of sacrifice
followed by accelerated progression is the emotional peak of the prestige loop. Games that make
prestige mandatory too early (before players feel the loss) or too late (after progress has
stalled completely) miss the sweet spot.

**Currency examples:** Heavenly Chips, Soul Eggs, Angels, Hero Souls, Helium, Infinity Points.

### 5. Prestige Layer Stacking
Multiple sequential prestige layers, each with its own currency and upgrade tree. Each layer
resets the previous layer(s). The player experiences the same arc (struggle → mastery → reward)
at escalating scope.

**Examples:**
- Antimatter Dimensions: Antimatter → Infinity → Eternity → Reality (4 layers)
- Clicker Heroes: Gilds → Hero Souls (Ascension) → Ancient Souls (Transcension) (3 layers)
- Realm Grinder: Abdication → Reincarnation → Ascension (3 layers)

### 6. Challenge Runs (Constraint Content)
Runs in which one or more mechanics are disabled or altered, requiring novel strategies.
Completion grants permanent bonuses. Challenges serve two functions: they extend content without
new resources, and they teach players how the game works by removing familiar crutches.

**Examples:** Antimatter Dimensions Infinity Challenges (12 per prestige layer), Trimps challenges
(Bone Run, Grid, etc.), NGU Idle challenges (Basic, Evil, Sadistic).

### 7. Automation / Scripting
Late-game tools that remove the manual management burden. Managers (AdVenture Capitalist),
Automators (Antimatter Dimensions' fully programmable language), AutoTrimps (community script),
Angels of the Void (Realm Grinder auto-cast). Automation is the reward for game mastery — the
player has learned the optimal play pattern and can now let the game execute it.

---

## The Prestige Formula

The canonical prestige currency formula:

```
prestige_currency = floor((total_resource_generated / scaling_constant)^exponent)
```

Where `exponent` is typically 0.33–0.5 (cube root to square root). This means:
- Generating 10× more resource gives only 2.15× (square root) to 2.15× (cube root) more currency
- The "best" prestige timing is when currency gain has peaked relative to time spent
- The game maintains tension because you always feel you *could* earn more if you wait longer

Community optimization tools (spreadsheets, simulators) calculate the exact optimal prestige
timing for serious players, creating a metagame layer above the game itself.

---

## The Idle vs. Active Tradeoff

Most well-designed idle games offer two distinct play modes:

| Mode | Mechanism | Reward |
|---|---|---|
| Idle | Leave game running, return later | Offline accumulation bonuses |
| Active | Frequent clicking/management | Faster short-term progress |

The best games respect both modes (Clicker Heroes' Siyalatas = explicit idle multiplier;
Tap Titans 2's active skills = tapping bonus). Games that punish idle play lose mobile audiences;
games that punish active play lose engagement.

---

## Number Inflation and Notation

Incremental games necessarily produce astronomical numbers. Solutions:

- **Scientific notation** — "1.23e15" (universal fallback)
- **Named suffixes** — K (thousand), M (million), B (billion), T (trillion), Qa (quadrillion),
  Qi (quintillion), Sx (sextillion)... (up to hundreds of custom names)
- **Letters** — a, b, c... aa, ab... (Cookie Clicker, NGU Idle)
- **Logarithm display** — "10^15.09" (Antimatter Dimensions)
- **Big number libraries** — break.infinity.js, bignum — games like Antimatter Dimensions
  use these to handle numbers beyond JavaScript's floating-point limit

The psychological effect of crossing named thresholds (reaching "1 trillion" vs. "1.00e12") is
meaningful: named milestones create micro-celebrations even if the underlying math is identical.

---

## Engagement Patterns by Session Length

| Session length | Primary mechanic | Example |
|---|---|---|
| 30 sec (check-in) | Offline collection, queue action | Egg Inc., Increlution |
| 5–10 min (daily) | Manual management, buy upgrades | Idle Skilling, Melvor Idle |
| 30–60 min (sitting) | Active run, prestige timing | Cookie Clicker, Clicker Heroes |
| 2–4 hours (session) | Exploration, challenge, discovery | Kittens Game, NGU Idle |
| Indefinite (open) | Pure number watching | Progress Quest |

---

## Genre Taxonomy

| Sub-genre | Defining mechanic | Examples |
|---|---|---|
| Pure idle | Passive accumulation, minimal interaction | Progress Quest, AdVenture Capitalist |
| Clicker | Active clicking as primary input | Cookie Clicker, Clicker Heroes |
| Resource management | Multiple interdependent resources | Kittens Game, Trimps |
| Mathematical | Formula/equation as upgrade target | Exponential Idle, Antimatter Dimensions |
| Narrative incremental | Story told through resource unlock | A Dark Room, Universal Paperclips, Spaceplan |
| Idle RPG | Hero combat + idle resource generation | Melvor Idle, Almost a Hero, Idle Champions |
| Active incremental | Real-time gameplay + idle upgrade layer | Forager, Vampire Survivors, Idle Slayer |
| Factory | Automation-as-goal, resource chains | Factorio |
| Merge | Combination of identical items creates higher tier | Merge Dragons, Merge Mansion |
| Deck-building hybrid | Cards used to modify the world/run | Loop Hero |

---

## What Makes an Incremental Game "Good"

Based on design analysis across the catalogue:

1. **Meaningful choices** — upgrades that require real trade-offs (Realm Grinder's faction choice,
   Kittens Game's job assignment, Antimatter Dimensions' Time Studies path). Pure auto-optimal
   play feels hollow.

2. **Discovery** — mechanics that reveal themselves rather than front-loading a tutorial
   (Candy Box!, A Dark Room, Kittens Game). The "wait, this does *that*?" moment is intrinsic
   pleasure.

3. **Felt acceleration** — the prestige curve must make each cycle *noticeably* faster than the
   last. If run 5 takes the same time as run 4, motivation collapses.

4. **Number legibility** — players must feel they understand what their numbers mean, even when
   those numbers are 10^308. Notation, visual dashboards, and named milestones all serve this.

5. **Tone** — Cookie Clicker's absurdist lore, NGU Idle's meta-humor, Universal Paperclips'
   philosophical horror all demonstrate that tone is a primary retention mechanic. Players endure
   boring clicking when they're invested in the game's *personality*.

6. **Ending or infinite?** — finite games (Universal Paperclips, A Dark Room, Spaceplan) offer
   resolution. Infinite games (Cookie Clicker, NGU Idle, Antimatter Dimensions) offer open-ended
   mastery. Both are valid designs for different audiences.

---

## The Karpathy Observation on Idle Game Psychology

The idle game loop exploits two cognitive biases simultaneously:

- **Loss aversion in reverse**: You *don't* lose what you've built (it accumulates while you're
  away). The asymmetry of "always gaining" removes the anxiety of traditional games.
- **Variable reward schedule**: The upgrade availability curve (sometimes you can afford 5
  upgrades in a row; sometimes you wait 10 minutes for one) mirrors slot machine psychology —
  the *unpredictable* reward timing is more engaging than predictable spacing.

The most successful idle games layer a third mechanism: **social proof** through visible
milestone names, achievement notifications, and community discussion of "how far" players have
gotten. The number going up has value partly because others know it went up.
