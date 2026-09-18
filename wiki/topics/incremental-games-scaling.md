# Incremental Games: Scaling & Numbers

Part of the [Incremental Games](incremental-games-overview.md) research set.

---

## The Exponential Growth Problem

Incremental games are built on exponential growth: each upgrade multiplies production, multiplied upgrades compound with each other, and the total output grows as a power function of time. This produces numbers that quickly exceed human comprehension and even standard floating-point limits.

**Why exponential and not linear?**
Linear growth (flat +N per upgrade) leads to numbers that feel slow and eventually plateau in meaningfulness. Exponential growth means the game always has "headroom" — the next milestone feels unreachable until suddenly it's trivial. This oscillation between "impossibly far" and "trivially passed" is the genre's emotional engine.

---

## Big Number Display Systems

As numbers exceed millions, games must choose a notation system. The choice affects player psychology as much as readability.

### 1. Short Suffix (K / M / B / T...)

The most readable system. Familiar from finance and social media.

| Suffix | Value | Name |
|--------|-------|------|
| K | 10³ | thousand |
| M | 10⁶ | million |
| B | 10⁹ | billion |
| T | 10¹² | trillion |
| Qa | 10¹⁵ | quadrillion |
| Qi | 10¹⁸ | quintillion |
| Sx | 10²¹ | sextillion |
| Sp | 10²⁴ | septillion |
| Oc | 10²⁷ | octillion |
| No | 10³⁰ | nonillion |
| Dc | 10³³ | decillion |

Beyond decillion, games either switch systems or use extended Latin prefixes (unDecillion, duoDecillion, etc.) or the AA/AB/AC... pattern.

**AA/AB/AC system**: After conventional names exhaust, some games use double-letter suffixes starting at AA (continuing from where the letter-name list ended). Widely used in idle mobile games.

**Pro**: immediately human-readable; "1.2 Qi cookies" has emotional weight.
**Con**: limited range; most games use it only to ~10^33 before switching.

### 2. Scientific Notation

`1.23e15` or `1.23 × 10¹⁵`

**Pro**: infinite range (limited only by float precision); precise; familiar to technical players.
**Con**: loses emotional weight — "1e15 cookies" feels more abstract than "1 quadrillion cookies."

Most deep incrementals (Antimatter Dimensions, NGU Idle) use scientific notation in late game because numbers reach 10^1000 or higher.

### 3. Engineering Notation

Scientific notation where the exponent is always a multiple of 3 (aligning with SI prefixes).
- `531 × 10³` instead of `5.31 × 10⁵`
- Makes the mantissa more human-readable at common thresholds

Less common in games than pure scientific notation; used in some factory/engineering-themed incrementals.

### 4. Logarithm Display

When numbers exceed floating-point limits (~10^308 for standard double precision), some games switch to displaying only the base-10 logarithm:
- "e500" or "10^500" instead of trying to display the actual digit count
- Antimatter Dimensions uses this format for numbers beyond float64 range (using a custom arbitrary-precision library)

### 5. Custom Game-Specific Names

Some games invent flavor-rich names for large numbers aligned with their theme:
- A game themed on atoms might use "quark-masses," "nucleon-masses," etc.
- Provides immersion but risks confusing players unfamiliar with the underlying scale

---

## Exponential Growth Curves and Management

### The Standard Cost Curve

`Price = BaseCost × Multiplier^owned`

Where Multiplier is typically 1.07–1.15 per purchase.

**Effect of multiplier choice:**
- 1.07 (Clicker Heroes, AdVenture Capitalist): gentle curve; affordable for a long time; slower to become prohibitive
- 1.15 (Cookie Clicker): steeper; each purchase tier tightens more quickly; more dramatic pacing
- 2.5 (some Steam games): very steep; each purchase dramatically more expensive; creates strong "save up" pressure

**Income curve**: typically linear per unit (flat CpS per building). This creates a **widening gap** between income and cost over time — the gap IS the soft cap.

### Bulk Buying

Most incrementals let players buy 10, 25, 100, or "max affordable" units at once. This is not just QoL — it also affects cost:

**Geometric series formula for bulk buying:**
`Cost for N units = BaseCost × Multiplier^owned × (Multiplier^N - 1) / (Multiplier - 1)`

Good incrementals display this clearly. Buying 100 at once often costs about 7–14× the price of the next single unit, depending on the multiplier — surprisingly affordable relative to the benefit.

---

## The Wall: Deliberate Slowdowns

**The wall** is a deliberate design tool: a period where the time-to-next-upgrade slows dramatically. It is not a bug or poor balance — it is a signal.

### What the wall communicates:
- "You have reached the boundary of this layer"
- "Prestige is now available and worth doing"
- "You've seen everything in the current loop"

### How walls are created:
1. **Cost scaling outpacing income scaling** (universal: the math naturally creates this)
2. **Diminishing multipliers** on repeat purchases
3. **Galaxy/acceleration costs** (Antimatter Dimensions: each galaxy costs exponentially more but provides constant acceleration)
4. **Deliberate design gates**: some games add explicit cost cliffs (a building suddenly costs 100× more than the previous tier)

### Anti-wall design (when to avoid them):
Pre-prestige walls are intentional. Mid-game walls (between prestige layers) are usually a design failure — if there's a wall with nothing meaningful at the end of it, players churn. Good incrementals ensure every wall either signals "prestige now" or "here's a new mechanic to unlock."

### The "bumpy" progression design:
Rather than a smooth exponential curve, the best incrementals create a series of small acceleration events:
- Milestone at 25 buildings: ×2 bonus
- Milestone at 50: ×5 bonus
- Milestone at 100: ×10 bonus
This creates a progression that alternates between "slow stretch" and "satisfying burst" — preventing the flatness of pure exponential.

---

## Balancing Active vs. Passive Income Ratios

A common design target: **active clicking should contribute 1–5% of total passive income** in late game.

Why this specific ratio?
- Too high (>20%): forces active play; punishes idle players; fatiguing
- Too low (<0.1%): clicking feels pointless; removes the "early active" satisfaction from the memory
- 1–5%: clicking is a meaningful bonus for engaged sessions; idle players feel minimally disadvantaged; neither audience is punished

Cookie Clicker achieves this via the "Cursed Finger" upgrade: clicking produces 1 second of current passive income. Since total CpS is high, a click is powerful in absolute terms but tiny relative to what buildings generate per second.

---

## Float Precision and Number Libraries

Standard double-precision (float64): ~10^308 max before overflow.

Games that exceed this:
- **Antimatter Dimensions**: uses a custom logarithm-based "Decimal" library; stores numbers as `{mantissa, exponent}` with operations defined to maintain precision at any scale
- **Idle Loops**: similar custom solution
- **NGU Idle**: reportedly uses 128-bit floats or custom big-decimal

For solo devs, the practical advice: design your game to not need numbers above 10^100 if possible. Numbers larger than 10^18 become unimaginable to players anyway; what matters is the *display*, not the precision.

---

## See Also

- [Resource Systems](incremental-games-resources.md)
- [Prestige Mechanics](incremental-games-prestige.md) — how prestige resets keep numbers manageable
- [Design Recipes](incremental-games-recipes.md)

## Sources
- [incremental-games-research.md](/sources/incremental-games-research.md)
