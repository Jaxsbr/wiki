# Incremental Games: Monetization Patterns

Part of the [Incremental Games](incremental-games-overview.md) research set. This page covers patterns for awareness and design literacy — not as recommendations.

---

## Why Monetization Is a Genre-Specific Design Problem

Incremental games are uniquely exposed to predatory monetization because their core mechanic — time as a cost — creates a natural purchase opportunity: "buy time you would otherwise wait." This creates the "monetization trap": the better designed the wait-time friction, the more lucrative a time-skip purchase becomes — and therefore the stronger the economic incentive to *over-design* that friction.

Every designer of a free-to-play incremental must consciously choose which side of this tension to live on.

---

## Ethical Monetization Patterns

### 1. Cosmetic-Only Purchases
Skins, themes, visual variants, name customization. No gameplay advantage.
- Players who want to express themselves pay; all players have equal progression access
- Requires strong core aesthetic for cosmetics to be desirable
- Cookie Clicker Steam: background packs, cookie skin packs

### 2. One-Time Full Purchase
Pay once to unlock the complete game. No ongoing extraction.
- A Dark Room (iOS): paid upfront; complete experience included
- Eliminates friction between design intent and monetization incentive
- Typically $3–$10 on mobile; $10–$20 on Steam

### 3. Ad-Watched Time Skips (Fair Implementation)
Player watches a 15–30 second ad in exchange for a time-skip reward (1–2 hours forward).
- Fair when: the skip is a bonus on top of normal progression, not required to progress at all
- Unfair when: normal offline progress is so throttled that the ad-skip is effectively mandatory to keep up

### 4. Expansion / DLC Content
New prestige layers, new mechanic branches, new building types added as paid DLC.
- Acceptable when: base game is complete and fully satisfying without the DLC
- Unacceptable when: DLC gates the natural progression endpoint of the base game

### 5. Optional Subscriptions for Convenience
Auto-buyers, offline progress caps lifted, UI enhancements. No production multipliers.
- The line: convenience (acceptable) vs. production power (problematic)
- Egg, Inc. subscriptions: extended offline cap, faster offline rate — these cross into production advantage for some designers' taste

---

## Predatory Monetization Patterns

### 1. Artificial Wait Throttling
The game is deliberately slowed in mid-game. Wait times that would be 5 minutes without monetization are 2 hours by design. The game then sells time-skips.

**How to detect it**: compare the game's offline production rate and wait times to non-monetized competitors. Artificially throttled games have distinctly worse time-to-milestone ratios.

### 2. Premium Currency With Obscured Exchange Rates
Currency sold in packages at irrational denominations (1000, 2500, 6000 gems) chosen specifically to prevent mental math. Purchases spend different amounts (costs 350, 2200, 5000 gems), making the actual cost in dollars hard to calculate.

**Effect**: players lose track of how much they've spent. This is documented as predatory.

### 3. Gacha-Locked Automation Managers
The most efficient automation ("best" managers, "legendary" upgrades) is locked behind randomized loot boxes.
- AdVenture Capitalist's "Angel Investor" events occasionally used gacha-adjacent mechanics
- Idle Heroes (a mobile idle RPG) locks powerful heroes behind gacha entirely
- Creates a pay-to-win tier that cannot be reached through gameplay

### 4. Energy Systems Capping Free Play
Players have a stamina/energy bar that limits how much they can play per day without paying.
- Common in mobile RPG-incrementals
- Directly caps the free player's progression rate
- Creates hard pay-to-play ceiling

### 5. Soft Paywalls Masquerading as Game Design
Mid-game progression slows to hours-per-upgrade for free players, while paying players skip forward. Presented as "normal" pacing, but the free/paid progression curves diverge sharply.

**The design tell**: look at the free-to-play reviews vs. paying reviews on app stores. A sharp difference in enjoyment correlates with a soft paywall.

### 6. Predatory Limited-Time Offers
"Special deal expires in 24 hours!" — artificial scarcity to pressure purchases. Often triggered by reaching a wall (bad timing: when players are most frustrated, maximizing emotional vulnerability to offers).

---

## The Design Ethics Framework

From academic research on ethical game design (ACM, 2024):

Games that support players' **psychological needs** generate better long-term retention without manipulation:
- **Autonomy**: the player chooses when to pay, what to pay for, and is never coerced
- **Competence**: progression feels earned; paying doesn't trivialize achievement
- **Relatedness**: multiplayer features (if present) are not pay-to-win

Games meeting these criteria show **higher player satisfaction AND sustainable long-term revenue** — the predatory model is also a worse business model over multi-year timescales, despite higher short-term extraction rates.

### The designer's test:
> "If all players played for free, would my game still be satisfying and complete?"

If yes: your monetization is ethical. If no: it's predatory by design.

---

## Notable Clean Implementations

| Game | Model | Why it works |
|------|-------|-------------|
| Cookie Clicker (Steam) | One-time purchase | Complete game, no ongoing extraction |
| Universal Paperclips | Free, no monetization | Artistic statement; finite experience |
| Kittens Game | Donationware | Optional support; game fully free |
| Melvor Idle | Base free + paid DLC | DLC adds genuinely new content; base game complete |
| A Dark Room (iOS) | Paid upfront ($0.99) | Clean experience; no upsells |

---

## See Also

- [Pacing & Engagement](incremental-games-pacing.md) — artificial walls vs. natural pacing
- [Design Recipes](incremental-games-recipes.md) — how specific games handle this

## Sources
- [incremental-games-research.md](/sources/incremental-games-research.md)
