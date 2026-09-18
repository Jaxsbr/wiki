# Solo Dev on Steam — The Average-Joe Guide

Can a regular person with basic skills make a game that earns meaningful revenue on Steam? Yes — but the path matters.

→ Success stories: [Solo Dev Success Stories](solo-dev-success-stories.md)  
→ Scope & first game: [First Game Scope Guide](../concepts/first-game-scope.md)  
→ Engines in depth: [Indie Engines & Frameworks](indie-engines-frameworks.md)  
→ Context from contest winners: [Indie Winning Recipes](indie-winning-recipes.md)

---

## The Levasho Lesson

Jaco's inspiration: a guy called Levasho entered a Reddit hackathon with zero game development experience, 27 days before the deadline, learned Phaser from scratch while working 16–20 hour days, and won $15,000. His game was full of bugs. The code was a mess. He couldn't stop playing it himself — and that's what carried it.

**The key lesson isn't "work 20 hours a day."** It's three things:

1. You don't need prior experience to ship something real
2. Distribution solves the hardest problem — Levasho won because Reddit Devvit put his game in front of 500M users with zero marketing effort
3. "I couldn't stop playing it myself" is the only quality metric that matters during development

The hard limit: you can't do 20-hour days. You have a few hours per day and a few months. That constraint is real and shapes every decision below.

→ Full article captured: [sources/levasho-reddit-hackathon.md](/sources/levasho-reddit-hackathon.md)

---

## What the Data Shows About Part-Time Devs

The honest picture from 20 documented solo dev stories:

| Pattern | Examples | Revenue |
|---|---|---|
| Nights/weekends → quit day job at ~80% done | LocalThunk (Balatro), Vampire Survivors | $50M+ each |
| 2–3 hours/night for 12–18 months | iZBOT | ~$4K |
| Long part-time hobby → Patreon → full-time | Manor Lords | $50M+ |
| Part-time + tight scope | Core Defense (~8 months), The First Tree | $70K / $150K |
| Obsessive full-time from day one | Stardew Valley, Terraria | $400M+ / $400M+ |

**Honest assessment for "few hours a day, few months":**
- No documented breakout hit came from this constraint *alone*
- The part-timers who succeeded either had exceptional concepts (Balatro, Vampire Survivors) or kept scope extremely tight (Core Defense, iZBOT)
- Realistic first-game revenue at this pace: $1K–$20K; occasional outliers to $70K+
- This is still worth doing — for skills, portfolio, and the second game earns 40% more than the first

---

## What Skills You Actually Need

The skill bar is lower than you think, but it's not zero.

| Skill | Reality |
|---|---|
| **Art** | Pixel art (Aseprite, $20) is learnable in weeks. Free asset packs (Kenney.nl, itch.io) are legitimate. Minimalist = feature, not failure. |
| **Code** | Godot's GDScript is Python-like. GameMaker has drag-and-drop. Playmaker for Unity needs zero code. You don't need CS fundamentals — you need persistence and Google. |
| **Music / audio** | Free: BFXR (SFX), OpenGameArt, freesound.org. Music you probably outsource or skip until later. |
| **Story / writing** | Not required. Vampire Survivors, Brotato, Balatro have near-zero narrative. If you ARE a writer, text-forward games (VN, mystery, walking sim) sidestep the art problem entirely. |
| **Marketing** | A Steam demo is the single highest-ROI action and requires no money. One good Reddit post or streamer email campaign > any paid ad. |

---

## The Distribution Problem (and Shortcuts)

Levasho's secret weapon was Devvit — he bypassed distribution entirely. Steam doesn't give you that for free. Options:

| Platform | Distribution advantage | Best for |
|---|---|---|
| **Steam** | Largest PC gaming audience; but you earn discovery | Most commercial indie games |
| **itch.io** | Instant, zero-friction, supportive community; lower revenue ceiling | First game, demos, experimental |
| **Reddit Devvit** | 500M users; no install; native in Reddit | Web games, hackathons, competitive |
| **Game jams** | Built-in audience (itch.io jam pages); deadline = shipping | Prototypes, first game experience |

**Recommended path:** Build first on itch.io (no friction, real feedback). Then polish and launch on Steam with a demo in Next Fest.

---

## Genre Recommendations by Skill Level

For someone with basic skills and limited daily hours:

### Safest first game genres

**Micro horror** _(Buckshot Roulette model)_
- One mechanic, strong atmosphere, $2.99–$4.99
- Horror is the #1 success genre for small teams on Steam (2022–2024)
- Art style: lo-fi 3D (PS1 aesthetic) or simple 2D. The jank reads as intentional
- Scope: 30 min–2 hours of content is enough

**Single-mechanic puzzle**
- One novel mechanic explored fully (COCOON, Patrick's Parabox, Cryptmaster)
- Art: abstract, geometric, minimal — no characters needed
- The mechanic IS the art direction

**Roguelite / wave survival**
- Brotato, Vampire Survivors — small art set, procedural content generation
- A few enemy types + a few item types = hours of gameplay
- Scope is naturally bounded per-run

**Walking simulator / personal narrative**
- The First Tree model: personal story + purchased environment assets
- 1–2 hours of content at $5.99–$7.99
- Writing matters here; art can be purchased

**Idle / incremental**
- Minimal art, minimal mechanics, near-zero scope ceiling risk
- Niche but dedicated audience on Steam

### Genres to avoid for first game

- Open-world / sandbox (unbounded scope)
- Multiplayer action (networking complexity)
- JRPG with full story (voice acting, writing volume, system depth)
- Metroidvania (large world design, tight movement feel)
- Anything requiring "more than 5 minutes to explain"

---

## Engine Recommendation (For Average Skills)

If you're starting from zero today:

**2D games → Godot 4**
- Free, MIT licensed, no runtime fees, no "Unity pricing shock" risk
- GDScript is Python-like; learns in days for basic use
- Huge tutorial ecosystem; r/godot is welcoming
- Success: Brotato (10M copies), Buckshot Roulette (6M copies), Luck Be a Landlord

**Zero coding → RPG Maker MZ or GameMaker drag-and-drop**
- RPG Maker: near-zero code, but has "RPG Maker look" stigma. Break it with strong concept (Undertale did this)
- GameMaker drag-and-drop: Jacob Weersing shipped Bass Monkey on Steam with one prior programming class

**Web background → Phaser (HTML5)**
- Free, open-source, runs in browser
- Levasho learned it in 27 days with zero game experience
- Best for: itch.io games, Reddit Devvit, browser distribution

→ Full engine comparison: [Indie Engines & Frameworks](indie-engines-frameworks.md)

---

## The Marketing Stack (Zero Budget)

In order of ROI, from multiple developer postmortems:

1. **Steam demo** — most critical. A good Next Fest demo can generate 10K+ wishlists
2. **itch.io beta** — build community and test scope before Steam; Core Defense ran 6 months on itch.io before Steam EA
3. **GIF / video clip on TikTok / Reddit** — one great clip of a satisfying mechanic can go viral (Tiny Glade: 9.7M views on first TikTok; Buckshot Roulette: organic TikTok virality)
4. **Email 20–50 genre streamers** — 3 weeks before launch; attach a key; genre match matters more than size
5. **Reddit launch post in genre subreddits** — The First Tree front-paged from r/gaming; drove 200K Steam page views
6. **Devlog YouTube/TikTok** — builds audience over months; Manor Lords got 3M wishlists from 7 years of devlogs

**What doesn't work:** Press releases, paid ads, Twitter (dev echo chamber), Facebook

---

## Realistic Timeline for "Few Hours per Day"

| Hours/day | Duration | Realistic scope | Revenue range |
|---|---|---|---|
| 1–2h | 3 months | Game jam entry → itch.io only | $0–$500 |
| 1–2h | 6 months | Micro game, itch.io → Steam | $500–$5K |
| 2–3h | 6–12 months | Small commercial game on Steam | $2K–$30K |
| 2–3h | 12–18 months | Refined commercial game | $10K–$100K |
| 2–3h + summers/holidays | 2+ years | Potential breakout if concept is right | Unlimited upside |

**The key variable isn't hours — it's concept.** Core Defense (8 months, $70K) and iZBOT (18 months, $4K) both had similar time investment. The difference was concept clarity and mechanic novelty.

---

## The One Thing That Actually Matters

From Levasho, from LocalThunk, from every interview in the data:

> You need to be unable to stop playing your own game.

If you don't want to play what you're building, nobody else will. Every other optimization — engine choice, marketing tactics, scope rules — is downstream of this.

---

## See Also
- [Solo Dev Success Stories](solo-dev-success-stories.md) — 20 games, detailed facts
- [First Game Scope Guide](../concepts/first-game-scope.md) — practical rules for not overscoping
- [Indie Winning Recipes](indie-winning-recipes.md) — genre + mechanic patterns
- [Art Styles demo](https://jaxsbr.github.io/wiki/demos/art-styles.html) — visual examples by category
- [Indie Engines & Frameworks](indie-engines-frameworks.md) — engine deep-dive

## Sources
- [levasho-reddit-hackathon.md](/sources/levasho-reddit-hackathon.md)
- [solo-dev-steam-research.md](/sources/solo-dev-steam-research.md)
