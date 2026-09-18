# First Game Scope Guide

How to scope your first commercial game so you actually finish it.

→ Context: [Solo Dev on Steam](../topics/solo-dev-on-steam.md)  
→ Examples: [Solo Dev Success Stories](../topics/solo-dev-success-stories.md)

---

## The Core Problem

Scope kills more projects than skill does.

Every unfinished game was someone's dream of a bigger game. Buckshot Roulette's Mike Klubnika shipped in 3 months. Terraria v1.0 shipped in 4 months. Both became massive. Neither was "done" — they were *shipped*.

> "Scope creep is when your game about fishing somehow grows a skill tree."

---

## The One-Mechanic Rule

The clearest pattern from successful solo games: **one thing you do that nobody else does, executed well.**

| Game | The One Thing |
|---|---|
| Buckshot Roulette | Russian roulette with a shotgun; information asymmetry is the mechanic |
| Vampire Survivors | Auto-attack survival; you move, everything else is automatic |
| Balatro | Poker hands as the roguelite build vocabulary |
| Core Defense | Tower defense + deckbuilder fused; nothing else |
| The First Tree | Walk uphill as a fox; the mountain is an emotion |
| Luck Be a Landlord | Slot machine that lets you stick it to a landlord |

**Test:** Can you describe your game in one sentence with no "and"s?

- ❌ "It's a survival RPG with crafting and base building and story and multiplayer"
- ✅ "You climb a tower faster than other players or you die trying"
- ✅ "You play poker but jokers break the rules"

---

## Scope Rules From the Data

1. **Target completable in your constraint.** At 2h/day × 3 months = 180 hours total. Budget: 120h game, 30h store/marketing, 30h polish
2. **No more than 2 core mechanics** for a solo dev's first commercial game
3. **Short is fine.** The First Tree ($7.99, 2 hours) earned $150K+. Buckshot Roulette ($2.99, 1 hour) earned $18M+. Length ≠ value
4. **Cut features before cutting quality.** A small, polished game beats a large, unpolished one on Steam
5. **No feature should require more than a week to implement.** If it does, simplify or cut
6. **The Early Access trap:** Don't go to Steam Early Access too early. Run a demo or itch.io beta for 3–6 months first. Community goodwill burned on a half-baked EA is hard to recover

---

## The 180-Hour First Game

What can you realistically build in 180 hours (2h/day × 3 months)?

**Yes:**
- A micro horror game (30 min–1 hour; one mechanic; atmosphere)
- A casual puzzle with one novel verb (sliding, stacking, rotating — one thing)
- A walking simulator with a personal story (purchased assets + Playmaker)
- A simple roguelite wave-survival prototype (Vampire Survivors-clone with twist)
- A web game / game jam entry (itch.io, Reddit Devvit)

**No:**
- An open-world RPG
- A game with branching story that matters
- Anything multiplayer
- Anything requiring custom character animations
- A Metroidvania (too much world design)

**The honest benchmark:** Your 180-hour game should probably not be on Steam yet. Treat it as a prototype / jam entry. Put it on itch.io. Get real feedback. Your 360-hour game (2h/day × 6 months) is your Steam candidate.

---

## Genre × Skill Matrix

Fit by skills, not by ambition:

| Genre | Art bar | Code bar | Time to MVP | Steam ceiling |
|---|---|---|---|---|
| Micro horror | Low (lo-fi 3D or 2D) | Low | 1–3 months | High ($2M+ possible) |
| Casual puzzle | Very low | Low | 1–2 months | Medium |
| Wave survival / roguelite | Low (pixel art or minimal) | Medium | 2–4 months | Very high |
| Walking sim / narrative | Low with asset packs | Very low (Playmaker) | 2–4 months | Medium |
| Visual novel | Very low | Very low (Ren'Py) | 2–3 months | Medium–High |
| Idle / clicker | Very low | Low | 1–2 months | Low–Medium |
| Deckbuilder | Low (card UI) | Medium | 3–6 months | High |
| Platformer | Medium (character animation) | Medium | 3–6 months | Low (saturated) |
| 2D RPG | High | High | 12+ months | High (if exceptional) |

---

## Art Without Being an Artist

Ranked by accessibility:

**Minimalism** (Core Defense, Luck Be a Landlord)
- Geometric shapes, flat colors, no characters needed
- Works when the UI IS the game

**Pixel art** (Brotato, Vampire Survivors, Balatro)
- Aseprite ($20) — learnable in weeks for basic sprites
- Free packs: Kenney.nl, OpenGameArt.org, itch.io game assets
- Vampire Survivors used free Castlevania-themed sprite packs

**Lo-fi 3D** (Buckshot Roulette, Lethal Company)
- Blender (free); basic modeling learnable in a month
- PS1-aesthetic textures make low-poly look intentional
- Horror tone makes jank atmospheric

**Purchased asset packs** (The First Tree)
- Unity Asset Store, itch.io — environment packs, characters, templates
- Rule: curate into one visual language; don't dump random assets
- The First Tree's David Wehle wrote **no original 3D art** and earned $150K+

**UI-only** (Papers, Please; Luck Be a Landlord; The Operator)
- Art = functional interface design
- Zero 3D or character art needed

---

## Engine in 2026

**For a first game:**

| Goal | Engine | Why |
|---|---|---|
| 2D anything | **Godot 4** | Free, MIT, no fees, GDScript is Python-like, huge tutorials, Brotato/Buckshot Roulette/Luck Be a Landlord |
| Zero coding | **RPG Maker MZ** or **GameMaker drag-and-drop** | Built-in systems; drag-and-drop; sub-week learning curve |
| Web/HTML5 | **Phaser** | Free, runs in browser, Levasho learned it in 27 days |
| Visual novel | **Ren'Py** | Free, Python-like, massive community |
| Unity but no coding | **Unity + Playmaker** | Visual scripting; The First Tree used zero code |

**Avoid for a first game:** Custom engine, Unreal (steeper learning curve), Unity without prior C# experience (unless using Playmaker)

→ Full detail: [Indie Engines & Frameworks](../topics/indie-engines-frameworks.md)

---

## The Marketing Minimum

You need to do three things and nothing else:

1. **Make a Steam demo** — put it in Steam Next Fest. This is the single highest-ROI marketing action. A good demo → 10K+ wishlists with zero ad spend
2. **Make one 15–30 second clip of the most satisfying moment in your game** — post on TikTok and Reddit r/indiegaming. One clip went to 9.7M views for Tiny Glade
3. **Email 20–30 genre streamers** 3 weeks before launch — attach a free key, keep it short, genre-match matters more than audience size

Everything else (press releases, paid ads, Discord, Twitter) is optional and lower-ROI for a first game.

---

## Honest Expectations

From the data:

| Your situation | Most likely outcome |
|---|---|
| First game, few hours/day, 3 months | $0–$500 on itch.io; invaluable learning |
| First game, few hours/day, 6–12 months | $500–$5K on Steam |
| Second game with lessons from first | 40% better than first |
| Exceptional concept + tight scope + any time | No ceiling (see Buckshot Roulette) |

The goal of the first game is not revenue — it's **finishing**, **shipping**, and **learning what you didn't know you didn't know.** Every successful solo dev has a trail of unfinished or underperforming games before their breakout.

---

## The Levasho Model (Web Alternative)

If Steam distribution feels too hard for a first project, consider Levasho's approach:

- Build for a **platform with built-in distribution** (Reddit Devvit, itch.io game jam, Newgrounds)
- **Phaser** (HTML5) means zero install friction for players
- **Game jams** give you a deadline, community, and built-in audience — best forcing function for finishing
- **itch.io** has zero barrier to entry and a discovery algorithm that rewards experimental work

Build your first game for a jam or platform with distribution built in. Use that experience to scope your Steam game.

→ [Levasho article capture](/sources/levasho-reddit-hackathon.md)

---

## See Also
- [Solo Dev on Steam](../topics/solo-dev-on-steam.md)
- [Solo Dev Success Stories](../topics/solo-dev-success-stories.md)
- [Indie Winning Recipes](../topics/indie-winning-recipes.md)
- [Indie Engines & Frameworks](../topics/indie-engines-frameworks.md)
