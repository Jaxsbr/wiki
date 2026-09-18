# Incremental Games: Upgrade Systems

Part of the [Incremental Games](incremental-games-overview.md) research set.

---

## Upgrade Tiers and Scaling

### Linear Upgrades
Add a flat amount to production. Cheap, feel impactful early, become irrelevant quickly.
- Example: "+5 cookies per click" (when base is 1, this feels massive; at 1M CpS, it's meaningless)
- Use: very early game only; or as "catch-up" upgrades for lagging mechanics

### Multiplicative Upgrades
Multiply existing production by a factor. Remain relevant as numbers scale because they compound with other multipliers.
- Example: "×2 all Grandma production" — this doubles an entire building type no matter how developed it is
- Use: mid-game primary upgrade type
- Stacking: multiplicative upgrades compound each other. Two ×2 multipliers = ×4, not ×2. This is why they're used instead of additives.

### Exponential/Conditional Scaling
Upgrades whose effect grows as other conditions are met.
- Example: Cookie Clicker "Cursed finger" — clicking produces 1 second of passive income (scales with CpS)
- Example: Clicker Heroes Ancients — some increase power as a function of other stats, not fixed
- Use: late game; provides reason to diversify investment

### New Mechanic Unlocks
The most impactful upgrade type: opening an entirely new system.
- Cookie Clicker: "One Mind" Elder Pledge → unlocks Grandmapocalypse + Wrinkler system
- Antimatter Dimensions: reaching Infinity for the first time → unlocks IP currency + entire Infinity layer
- A Dark Room: "Build a trap" unlock → transforms game from fire-stoking to resource-gathering RPG

These are qualitative jumps, not quantitative. They feel like a new game starting.

---

## Upgrade Tree vs. Linear List

### Linear Upgrade Lists
All upgrades visible in a single list, unlocking sequentially (often requiring a milestone to reveal).
- Pro: simple to understand; no navigation
- Con: no strategic choice; no build diversity
- Example: Cookie Clicker's upgrade panel — appears as a flat list, unlocks based on owning buildings

### Upgrade Trees (Branching)
Upgrades unlock other upgrades; players choose paths.
- Pro: meaningful choice; replayability (different builds); supports prestige differentiation
- Con: complexity; can be overwhelming; risks dead ends
- Example: Antimatter Dimensions' Time Study tree — passive skill tree bought with Eternity Points; different paths favor different playstyles (active vs. idle, speed vs. power)
- Example: Realm Grinder's faction system — choosing a faction at prestige gates your upgrade path entirely

### Hybrid: Linear With Branching Sub-Trees
Most sophisticated incrementals land here: a linear main path (to ensure all players see core content) with branching sub-systems (for optimization depth).
- Clicker Heroes: linear hero list + branching Ancient skill tree (spent from prestige currency)

---

## Milestones and Unlocks

**Milestone**: a threshold (own N of building X, reach N currency, complete N resets) that grants a reward.

Milestones are distinct from purchased upgrades — they're free rewards for reaching goals. This matters psychologically: they feel like *discoveries*, not purchases.

### Milestone patterns:

| Pattern | Example | Effect |
|---------|---------|--------|
| **Building count milestone** | Own 25 Grandmas → unlock "Bingo Center" | New building or upgrade tier |
| **Currency threshold** | Reach 1M cookies all-time → unlock new building type | Content gate |
| **Prestige count** | Complete 12 Eternities → unlock auto-eternity | Automation reward |
| **Speed run** | Reach infinity in < 20 min → Eternity Challenge reward | Skill gate |
| **Achievement-based** | Unlock 100 achievements → global CpS bonus | Completionist reward |

Cookie Clicker's building unlock chain is a masterclass in milestone-as-pacing: each new building type unlocks at a specific cookie count threshold, creating reliable "aha!" moments at roughly scheduled intervals.

---

## Psychology: "One More Upgrade"

The defining psychological pattern of the genre. Why does it work?

### 1. The Next Reward Is Always Visible
Good incrementals show you exactly what you're working toward. The next upgrade is always visible in the UI — usually with a progress bar or "X% of needed resources." This creates **goal gradient effect**: the closer to a goal, the faster behavior accelerates.

### 2. Achievability Horizon
The next upgrade is always just achievable in a short wait. Never so far away that it feels hopeless; never so close that it feels trivial. Good pacing keeps the "time to next upgrade" between 30 seconds and 5 minutes for most of the game, spiking only at deliberate walls.

### 3. Immediate Feedback
Every upgrade produces an instant visible effect: the CpS counter ticks upward. The connection between action and reward is zero-latency. Variable ratio reinforcement: sometimes an upgrade unlocks a surprise bonus or new mechanic — these unpredictable large rewards maintain engagement across long sessions.

### 4. Escalating Numbers Feel Like Mastery
When your cookies-per-second goes from 1 to 10 to 10,000,000, the scale change *feels like* getting better at something, even when no skill was involved. This mimics mastery progression in skill-based games.

### 5. "Just One More" Is Always True
The upgrade list always has something next. Even if the immediate next item is very expensive, the one after is visible. Incrementals are carefully designed so the player never reaches a hard stop — there's always "one more."

---

## Unlocking New Mechanics vs. Powering Up Existing Ones

This is a fundamental design tension:

**Power-up upgrades** (quantitative): Make existing things better. Cheaper to design; extend content naturally. Risk: become repetitive ("×2... again").

**New mechanic unlocks** (qualitative): Open new systems. High production cost; must be designed and balanced. Reward: feel like a new game beginning. Best retention driver.

Best practice (from Cookie Clicker, Antimatter Dimensions, A Dark Room):
- **Early game**: mostly new mechanics, rapidly unlocked — establish that "anything can happen next"
- **Mid game**: mix of power-ups and occasional new mechanic unlocks — sustain without overwhelming
- **Prestige transition**: unlock is a new mechanic (prestige system itself), then power-ups for that layer
- **Layer boundary**: crossing into a new prestige layer = guaranteed new mechanics

The genre's greatest sin is letting the mid-game become entirely power-up upgrades with no new mechanics for hours. This causes the "mid-game doldrums" — see [Pacing](incremental-games-pacing.md).

---

## See Also

- [Resource Systems](incremental-games-resources.md)
- [Prestige Mechanics](incremental-games-prestige.md)
- [Pacing & Engagement](incremental-games-pacing.md)

## Sources
- [incremental-games-research.md](/sources/incremental-games-research.md)
