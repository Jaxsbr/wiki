# Indie Game Engines & Frameworks (2020–2026)

Engine choices made by award-winning indie games, and the market trends reshaping the landscape.

→ Back to: [Indie Game Winning Recipes](indie-winning-recipes.md)

---

## Engine Usage in Major Winners

| Engine | Notable Award Winners | Notes | Links |
|---|---|---|---|
| **Unity** | Sea of Stars, Spiritfarer, Carrion, Toem, Nine Sols, Venba, Chicory, Unpacking, Inscryption | ~55–65% of major indie award winners. Strong 2D tooling, cross-platform. | [unity.com](https://unity.com) |
| **GameMaker / GMS2** | Loop Hero, Katana ZERO, Undertale (GMS1) | Fast iteration for 2D action and roguelikes. | [gamemaker.io](https://gamemaker.io) |
| **LÖVE (Lua)** | **Balatro** (2024 TGA winner, 5M+ copies) | Lightweight, fast prototyping. LocalThunk's choice for the year's biggest indie hit. | [love2d.org](https://love2d.org) |
| **Unreal Engine 4/5** | Stray, Kena: Bridge of Spirits, Clair Obscur: Expedition 33 | Larger indie teams; cinematic visual goals. | [unrealengine.com](https://www.unrealengine.com) |
| **Godot** | Rising fast (see below) | 2024–2026: major adoption jump after Unity pricing controversy. | [godotengine.org](https://godotengine.org) |
| **MonoGame / XNA** | Celeste, Stardew Valley (custom XNA) | Legacy but still capable; ConcernedApe built entirely in XNA. | [monogame.net](https://www.monogame.net) |
| **Custom engines** | Hades (custom C++/Forge + Lua), Terraria (custom C#) | Supergiant chose custom for full control over performance and rendering. | — |

![Hades](https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg) ![Sea of Stars](https://cdn.akamai.steamstatic.com/steam/apps/1244090/header.jpg) ![Stray](https://cdn.akamai.steamstatic.com/steam/apps/1533420/header.jpg)

---

## Godot's Rapid Rise (2023–2026)

The most significant engine trend in this period — driven primarily by Unity's September 2023 runtime fee announcement.

| Metric | 2023 | 2024 | 2025–26 |
|---|---|---|---|
| GMTK Jam submissions | ~19% | **37%** | ~40%+ |
| Steam titles shipped | 618 | 1,500 | **2,864** |
| Studio experimentation | ~7% | ~15% | Growing |

**Why Godot is winning jams faster than shipping hits**: there is a ~14-month toolchain lag between "developers choose Godot" and "finished Godot games ship on Steam". The jam data is a leading indicator of commercial games arriving in 2025–27.

**Godot 4.4 (early 2026)** addressed the primary criticisms:
- Vulkan renderer (significant performance uplift)
- Rewritten physics engine
- C# support stabilised
- Better 3D workflow

**The Unity pricing shock effect**: Unity's runtime fee announcement caused a measurable one-month spike in Godot interest that became a sustained trend. The indie community's default "just use Unity" answer is no longer automatic.

---

## Engine Decision Framework for Indie Developers

Based on what winners have used:

| Goal | Recommended engine |
|---|---|
| 2D game, fast iteration, pixel art / action | GameMaker Studio 2 or Godot 4 |
| 2D or 3D, cross-platform, large ecosystem | Unity (still dominant in shipped winners) |
| Cinematic 3D, Unreal-native features | Unreal Engine 5 |
| Tiny scope, jam prototype, solo dev | LÖVE (Lua) or Godot |
| Full control, performance-critical, experienced team | Custom (risky; Supergiant has 20+ years experience) |
| 3D open world / metroidvania | Godot 4.4+ is now viable; Unity remains easier |

---

## Key Observations

1. **Engine choice doesn't win awards** — Balatro (LÖVE) and Hades (custom C++) won in the same era as Unity-built games. What matters is the game, not the engine.

2. **Godot is the anti-Unity hedge** — for solo and small teams who want MIT-licensed, no-runtime-fee tools, Godot 4 is now the default recommendation. The award winners haven't yet caught up (most current winners started before 2023), but jam data predicts this will change by 2026–27.

3. **Unreal = cinematic ambition** — Stray, Kena, and Clair Obscur all used Unreal to achieve visual quality that wouldn't be feasible in Unity without significant custom shader work.

4. **Custom engines = creative control + enormous investment** — Supergiant has built a custom pipeline over 15 years. Not a rational first-project choice. Hades and Pyre look different because the renderer is different, not because Unity can't do it.

5. **GameMaker revival**: despite not being the trendy choice, GameMaker remains a serious option for 2D games. Undertale's cultural footprint still draws developers to it. Loop Hero's success demonstrated it can still produce award-winning work.

---

## See Also
- [Indie Winning Recipes](indie-winning-recipes.md)
- [Indie Game Contests](indie-game-contests.md)
- [Indie Contest Winners by Year](indie-contest-winners.md)
