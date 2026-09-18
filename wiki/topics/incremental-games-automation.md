# Incremental Games: Automation & Milestones

Part of the [Incremental Games](incremental-games-overview.md) research set.

---

## The Automation Arc

Every well-designed incremental follows a progression from **manual labor → automation → meta-automation**:

1. **Manual phase**: player must actively click/tap to generate resources. This teaches the loop and makes the player feel the friction that automation will later remove.
2. **First automation**: a building or upgrade that generates resources without clicking. This is the genre's defining "aha" moment — the game literally plays itself.
3. **Automation expansion**: more buildings, generators, managers unlock. The player becomes a manager of systems rather than an operator of buttons.
4. **Meta-automation** (late game): the *process of optimization itself* gets automated. Auto-buyers, auto-prestigers, auto-upgrade-purchasers. The player sets strategies, not actions.

This arc mirrors the "automation of automation" concept: you engineer yourself out of a job, then engineer that process out of your hands too.

---

## How Automation Is Unlocked

### 1. Purchase-Based Automation (AdVenture Capitalist model)
Each business type has a Manager that can be hired. Once hired, that business runs automatically forever.
- First N units of a business require manual button presses
- Hiring the manager costs gold (or premium currency)
- F2P version: managers are purchasable with soft currency, but premium managers run at higher efficiency

This model makes automation a meaningful purchase decision early game, then baseline expected behavior late game.

### 2. Milestone-Count Automation (Cookie Clicker model)
Own N of a building → unlock automation options or major upgrades.

Cookie Clicker's building upgrade unlock thresholds:
| Buildings owned | Upgrade type unlocked |
|-----------------|----------------------|
| 1 | Basic upgrade (flat multiplier) |
| 10 | Second upgrade tier |
| 25 | Synergy or conditional upgrade |
| 50 | Major multiplier upgrade |
| 100 | "Achievement" unlock (visible completion milestone) |
| 150, 200... | Continuing upgrade ladder |

The pattern of 1 → 10 → 25 → 50 → 100 appears widely across the genre because it creates naturally spaced milestones while requiring investment.

### 3. Prestige-Layer Automation (Antimatter Dimensions model)
Automation is unlocked by reaching milestones in the **prestige layer above the automated content**. You don't automate Infinities during the Infinity layer — you automate them after reaching Eternity.

Antimatter Dimensions automation milestones:
- Reach 2 Eternities → auto-buy all Infinity upgrades
- Reach 5 Eternities → auto-Infinity triggers at set IP threshold
- Reach 7 Eternities → auto-buy all Eternity upgrades
- Reach 12 Eternities → unlock auto-Eternity
- Reality layer → unlock auto-Reality, auto-Glyph management

This design means: **the reward for mastering a layer is no longer having to manually operate it.** Profound and elegant — players are *always* operating the frontier layer by hand until they transcend it.

### 4. Achievement-Based Automation
Completing challenges or achievement milestones unlocks automation as a reward.
- "Complete 10 ascensions → unlock auto-ascend"
- Often paired with a speed threshold: "Complete infinity in under 30 seconds → unlock auto-infinity trigger"

---

## Milestone Mechanics

Milestones are **free rewards** tied to thresholds — not purchases. They feel like discoveries, not transactions.

### Types of milestone rewards:

**Production bonuses**: "+10% all CpS when you own 100 Grandmas" — scales as you invest
**New generators**: reaching a cookie count threshold unlocks a previously hidden building in the shop
**New mechanics**: the most impactful milestones that open entirely new systems
**Automation unlocks**: as above — the right to automate a layer you've mastered
**Visual unlocks**: background changes, new art, cosmetic shifts (Cookie Clicker seasonal events)

### Milestone pacing principle:
The best milestone cadences ensure a meaningful milestone fires every 10–30 minutes of active play in mid-game. If milestones are too sparse, the mid-game doldrums set in (see [Pacing](incremental-games-pacing.md)). If too dense, each one loses impact.

Cookie Clicker's "Shadow Achievements" (secret achievements hidden until earned) represent a layer of unknown unknowns: players who find them experience outsized surprise relative to their mechanical impact.

---

## Achievement Systems

### Cosmetic Achievements
Acknowledged accomplishments with no gameplay effect.
- Track playtime, milestones reached, quirky actions ("click the cookie 500 times in a row")
- Steam achievements in PC incrementals operate this way
- Purpose: provide direction, completionist motivation, social proof (achievement % on Steam profiles)

### Gameplay-Affecting Achievements (Milk system)
Cookie Clicker's most distinctive achievement design: every achievement unlocked increases "Milk" percentage, which provides a permanent CpS bonus.

Milk formula: each achievement = +4% milk (up to some cap); specific upgrades convert milk% into CpS bonus (typically 4% of CpS per 1% milk, up to Kitten upgrades which scale differently).

Effect: **achieving anything in Cookie Clicker is directly economically valuable.** There are no purely cosmetic achievements — everything feeds the production loop. This means players who explore every corner of the game are meaningfully rewarded for it.

### Challenge Achievements
Completionist achievements requiring specific runs under unusual conditions:
- Cookie Clicker "Hardcore" (no upgrades run) — an achievement that demands a fundamentally different strategy
- Antimatter Dimensions Eternity Challenges (complete with specific mechanic disabled) — teaches the player which mechanics are load-bearing
- These serve double duty as tutorials: by forcing the player to complete without a mechanic, they reveal how that mechanic works

---

## The Auto-Buyer as Late-Game Reward

The **prestige auto-buyer** is a canonical late-game reward structure: once you've manually performed a prestige reset enough times, the game grants an auto-buyer that performs it for you.

This follows the meta-automation arc perfectly:
1. Player learns what prestige is (manual, forced attention)
2. Player optimizes prestige timing (semi-manual, spreadsheet phase)
3. Player unlocks auto-prestige (set a threshold, the game handles it)
4. Player shifts attention to the *next* layer of optimization

### Auto-buyer design considerations:

**Threshold-based auto-buyers** ("auto-infinity when IP/second > current IP"): player sets a formula, auto-buyer executes. Requires the player to understand the optimal condition — a knowledge check.

**Fixed auto-buyers** ("auto-buy cheapest available upgrade every 10 seconds"): simpler; requires less knowledge but may not be optimal. Good for accessibility.

**Smart auto-buyers** ("optimal auto-buy based on efficiency formula"): calculates which upgrade gives best income-per-cost every tick. Extremely powerful. Cookie Clicker's Cookie Monster browser extension functions this way — it's not in the base game but is community-standard.

The design question: should auto-buyers be perfectly optimal? Many designers deliberately keep auto-buyers slightly suboptimal (e.g., buy cheapest, not most efficient) to reward active players who understand the efficiency formula and can outperform the auto-buyer. This maintains active play value even in deep late-game.

---

## See Also

- [Upgrade Systems](incremental-games-upgrades.md)
- [Prestige Mechanics](incremental-games-prestige.md)
- [Pacing & Engagement](incremental-games-pacing.md)

## Sources
- [incremental-games-research.md](/sources/incremental-games-research.md)
