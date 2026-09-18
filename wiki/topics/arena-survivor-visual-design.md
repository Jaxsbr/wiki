# Arena Survivor Visual Design

The "arena survivor" or "bullet heaven" genre — pioneered by **Vampire Survivors** (2022) and rapidly expanded by Brotato, 20 Minutes Till Dawn, HoloCure, Deep Rock Galactic: Survivor, Halls of Torment, and dozens of others — has developed a set of remarkably consistent visual design conventions. These are driven by a hard constraint: **hundreds of enemies on screen simultaneously**, all demanding legibility at a glance.

---

## Steam App IDs (for header images)

| Game | App ID | Steam CDN Header |
|---|---|---|
| Vampire Survivors | 1794680 | `https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg` |
| Brotato | 1942280 | `https://cdn.akamai.steamstatic.com/steam/apps/1942280/header.jpg` |
| HoloCure – Save the Fans! | 2420510 | `https://cdn.akamai.steamstatic.com/steam/apps/2420510/header.jpg` |
| 20 Minutes Till Dawn | 1966900 | `https://cdn.akamai.steamstatic.com/steam/apps/1966900/header.jpg` |
| Halls of Torment | 2218750 | `https://cdn.akamai.steamstatic.com/steam/apps/2218750/header.jpg` |
| Deep Rock Galactic: Survivor | 2321470 | `https://cdn.akamai.steamstatic.com/steam/apps/2321470/header.jpg` |

---

## 1. Art Styles

### 1a. Minimalist Pixel Art (The "Classic" Vampire Survivors Look)

**Games:** Vampire Survivors, 20 Minutes Till Dawn, HoloCure, most clones

The genre's default aesthetic. Key characteristics:

- **Sprite size:** ~32×32 pixels per character/enemy. Small sprites reduce performance cost and let hundreds of enemies fill the screen without engine strain.
- **Animation frames:** Intentionally small. Fewer frames = faster render, less VRAM.
- **Color palette:** Dark, desaturated backgrounds with bright, saturated enemy and projectile sprites. This contrast is functional: it keeps the action legible.
- **Visual cohesion over individual polish:** Vampire Survivors is the canonical example — the individual pixel art is simple and low-fidelity, but every asset (characters, enemies, FX, UI) sits at the same fidelity level. Nothing looks out of place next to anything else. A consistent middle register reads as intentional.

**Vampire Survivors** ([Steam](https://store.steampowered.com/app/1794680/Vampire_Survivors/))
- ![Vampire Survivors](https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg)
- Color palette: Dark earthy greens and browns for environments; enemy sprites range from grey skeletons to bright orange bats; XP gems in bright blue/green/red (value-coded).
- Background: Tiling grass/graveyard texture, deliberately plain so enemies read against it.
- Developer poncle famously iterated the art style to be "all at the same quality bar" — the design insight being that mid-fidelity consistency > high-fidelity inconsistency.

**20 Minutes Till Dawn** ([Steam](https://store.steampowered.com/app/1966900/20_Minutes_Till_Dawn/))
- ![20 Minutes Till Dawn](https://cdn.akamai.steamstatic.com/steam/apps/1966900/header.jpg)
- Color palette: Primarily greyscale with red accent highlights on the player character and some enemy sprites. One of the most restrained palettes in the genre.
- Dark Lovecraftian aesthetic — muted dark green environments, hostile and oppressive feel.
- The limited palette serves readability: enemies are dark grey masses, player bullets are bright white/yellow.

**HoloCure – Save the Fans!** ([Steam](https://store.steampowered.com/app/2420510/HoloCure__Save_the_Fans/))
- ![HoloCure](https://cdn.akamai.steamstatic.com/steam/apps/2420510/header.jpg)
- Created by Kay Yu (lead animator of River City Girls). This background shows — the pixel art is significantly more polished and expressive than Vampire Survivors.
- **Anime/chibi pixel art** — characters are recognizable chibi-form representations of Hololive VTubers. Bright pastel colors, large expressive eyes, pop-idol color coding.
- Backgrounds are more detailed — stage environments have parallax layers and thematic dressing.
- This is the **highest production-value pixel art** in the major genre titles, driven by the VTuber fan-art aesthetic.

### 1b. Vibrant Cartoon / Comic Pixel Art

**Games:** Brotato, The Binding of Isaac (spiritual ancestor)

**Brotato** ([Steam](https://store.steampowered.com/app/1942280/Brotato/))
- ![Brotato](https://cdn.akamai.steamstatic.com/steam/apps/1942280/header.jpg)
- Art style described as "a blend of whimsical and retro aesthetics." Comically exaggerated character designs — the protagonist is literally a potato with arms and legs.
- Draws from *The Binding of Isaac* and *Castle Crashers* — bold outlines, highly saturated colors, cartoonish deformation.
- Vibrant color palette: the potato hero is bright yellow; enemies range from vivid green slimes to red robots; loot drops are colorful. Lots of high-saturation hues.
- The arena floor is a simple single-color or minimal-pattern surface that keeps the visual focus on the action.
- Items and upgrades use large icon-based inventory tiles with bright iconography.

### 1c. Pre-Rendered 3D Sprites — "90s Diablo" Style

**Games:** Halls of Torment

**Halls of Torment** ([Steam](https://store.steampowered.com/app/2218750/Halls_of_Torment/))
- ![Halls of Torment](https://cdn.akamai.steamstatic.com/steam/apps/2218750/header.jpg)
- **The most technically distinctive art pipeline in the genre.** The game is 100% 2D (all sprites, zero real-time 3D), but assets are created by modeling in **3DS Max / Blender**, lighting and rendering in Blender, post-processing in Photoshop, then importing as sprite sheets into **Godot Engine**.
- This is exactly how Blizzard created Diablo (1996) and Diablo II (2000) — hence the visual similarity.
- Visual inspirations cited by the developers: *Diablo*, *Arcanum*, *Nox*, *Fallout*, *Planescape: Torment*.
- Art direction consciously emulates "old-school 90s cinematic aesthetics" including **dithering**, **oversaturated colors**, and period-accurate lens flares.
- Color palette: Dark stone and earth tones for underground halls; enemies include skeleton warriors, grotesque demons — detailed, slightly desaturated sprites with a grimy quality.
- Character designs are grotesque and nightmarish — appropriate to dark fantasy.
- Despite rendering via 3D tools, the final sprites run in 2D at **isometric perspective** — delivering smooth animations (far smoother than hand-drawn pixel art of the same complexity) because the 3D rig can generate full rotation spritesets.

### 1d. Real-Time 3D — Low-Poly Top-Down

**Games:** Deep Rock Galactic: Survivor

**Deep Rock Galactic: Survivor** ([Steam](https://store.steampowered.com/app/2321470/Deep_Rock_Galactic_Survivor/))
- ![DRG Survivor](https://cdn.akamai.steamstatic.com/steam/apps/2321470/header.jpg)
- The only major genre entry using **real-time 3D rendering** with a true orthographic/near-orthographic top-down camera.
- Art style: Low-poly 3D models. Sharp edges, simplified geometry — matches the gritty dwarf-miner aesthetic of the parent game *Deep Rock Galactic*.
- Atmosphere: Cave environments with **dynamic lighting and shadows** to create atmospheric depth despite simple geometry. Rock stalactites, glowing mineral veins, particle effects for mining debris.
- Color palette: Deep cave browns and blacks, illuminated by yellow/orange helmet lamp light and glowing blue mineral deposits. High contrast between dark caves and bright minerals.
- The low-poly choice was made to maximize efficiency when adding content — simpler geometry = faster iteration.

---

## 2. Perspective & Camera

### The Standard: Top-Down Orthographic

The dominant perspective in the genre is **top-down orthographic** (also called "bird's-eye" or "straight down"). The camera sits directly above the player character, looking straight down.

**Characteristics:**
- Enemies approach from all edges of the screen
- Player movement in all 4+ directions with equal ease
- The "arena" is immediately comprehensible — it's a flat field you're surrounded in
- No depth cues needed; the game reads as pure 2D space

**Games:** Brotato (strict top-down), 20 Minutes Till Dawn (strict top-down)

Brotato uses the most extreme top-down — the camera is nearly perfectly vertical. This gives the arena a pure 2D feel, almost like a board game view.

### The Near-Standard: Top-Down with Slight Oblique Tilt

Most games in the genre use a **slightly tilted** top-down perspective — not isometric (45°), but perhaps 10–20° off vertical. This creates the illusion of ground plane depth while keeping the overhead readability.

**Games:** Vampire Survivors, HoloCure

This subtle tilt lets sprites appear to have some height without requiring true isometric art. The player character and enemies are drawn facing front-facing (not isometric angle), making them feel like 2D sprites overlaid on a tilted world plane.

### Isometric / 3/4 Oblique

A true **isometric or oblique projection** where the world is viewed at approximately 45° off vertical, revealing walls, terrain elevation, and environmental depth.

**Games:** Halls of Torment (isometric pre-rendered), Deep Rock Galactic: Survivor (near-isometric 3D)

**Tradeoffs of isometric vs top-down:**

| Aspect | Top-Down Orthographic | Isometric / 3D |
|---|---|---|
| Enemy readability | High — all enemies same scale, spread in 2D field | Medium — distant enemies smaller, depth layering |
| Art production cost | Lower — sprites face few directions | Higher — sprites need multiple isometric angles |
| Environmental storytelling | Limited — floors only | Rich — walls, ceilings, elevation all visible |
| Screen real estate efficiency | High — entire screen is usable arena | Lower — UI must account for 3D depth |
| Performance with 500+ sprites | Excellent | Moderate (especially real-time 3D) |

**Halls of Torment's perspective insight:** The isometric perspective was chosen specifically to evoke 90s RPGs (Diablo) and create a dark dungeon atmosphere with stone walls and halls visible. The pre-rendered sprite approach sidesteps the typical performance cost of isometric art.

**Deep Rock Galactic: Survivor insight:** Uses a true 3D camera that zooms out as the map generates, giving a sense of procedural cave scale. The 3D camera allows subtle tilt/pan for cinematic moments — something sprite-based games can't do.

---

## 3. Visual Effects

### Projectile Design

Projectiles in arena survivors must satisfy two competing demands: **visible enough to track** and **not so large they block enemy readability**.

**Common solutions:**
- **Particle trails:** Projectiles leave a light trail showing trajectory. Helps at high speed.
- **Color differentiation:** Player projectiles are almost always **bright warm colors** (white, yellow, orange) against dark backgrounds. Enemy projectiles, if visible, are typically **red or purple** — danger colors. This is the most fundamental VFX readability rule in the genre.
- **Size scaling:** Larger weapons (area-of-effect whips, auras) are visually distinct from narrow projectiles. Vampire Survivors uses massive glowing auras for evolved weapons that are impossible to miss.
- **Glow/bloom effects:** Projectiles frequently have a bright core with a soft glow halo, helping them read against complex backgrounds.

**Vampire Survivors** — projectiles range from simple pixel garlic auras to spinning crosses to orbiting crystal balls. Evolved weapons are often screen-filling. The weapon design is intentionally escalating — early game has small, readable projectiles; late game is intentional visual chaos (the "power fantasy" sensation).

**20 Minutes Till Dawn** — manual-aim shooting (unlike most auto-shooters). Bullets are bright white/yellow against the dark greyscale environment. Extremely high contrast, easy to track.

**Brotato** — up to 6 different weapon types firing simultaneously. Projectiles use distinct colors per weapon type. The design challenge of 6 weapon tracks was managed by keeping projectile art simple and relying on color coding.

### Hit Feedback

The gold standard for hit feedback in the genre:
1. **White flash (hit blink):** The struck enemy sprite briefly flashes pure white. Universal in the genre. Communicates "damage landed" instantly.
2. **Knockback micro-animation:** A tiny backwards movement on hit.
3. **Damage numbers:** Floating numerals showing exact damage dealt. Usually yellow or white with black outline for readability. Stack vertically when many hits land.
4. **Screen shake:** Triggered on: player taking damage, boss death, large explosions. Amplitude tuned to impact weight. Light shake for small hits, heavy shake for boss deaths.
5. **Enemy death animation:** Brief particle burst (small explosion of color matching enemy type), then sprite disappears. Keeping death animations short is critical — 500 enemies dying simultaneously cannot each play a 2-second animation.

**Brotato** excels at hit feedback — with 6 weapons firing, the constant white-flash chain on enemies creates a strobing visual rhythm that makes the potato feel unstoppably powerful.

### XP Gem Pickups

XP gems are one of the most studied visual feedback systems in the genre.

**Vampire Survivors XP Gem System:**
- Small diamond/gem sprites, color-coded by value:
  - Blue gems: low value (up to 2 XP)
  - Green gems: medium value (up to 9 XP)
  - Red gems: high value
  - Special colors (orange, yellow, magenta) from specific items
- Gems dropped by enemies pile up on the floor while fighting — creates visible density showing "how much loot is out there"
- When the player enters magnet range (or uses the Vacuum/Magnet item), **all gems fly toward the player simultaneously** — this is a deliberate dopamine trigger. Thousands of gems streaking from off-screen, triggering rapid-fire level-up sounds and screens, is arguably the genre's most satisfying moment.
- Cap at 400 gems on screen at once; beyond that, XP accumulates into a single red gem to prevent excessive ground clutter.

**Brotato XP System:**
- Green gem drops from enemies, dual purpose: XP when collected during wave, or currency when cashed in at the end-of-wave shop.
- All uncollected gems are automatically gathered at wave end, so players never feel they "missed" XP — no frustration mechanics.

### Level-Up Screen

The level-up screen is the game's primary strategic moment — the "deckbuilding" phase of the genre.

**Universal conventions:**
- Game **pauses completely** during selection (no time pressure)
- **3–4 cards** presented horizontally with weapon/upgrade icon, name, description
- Dark overlay dims the action, making the card UI the visual focus
- **Card art** is a key differentiator between games:
  - Vampire Survivors: simple pixel icon on a parchment/card background
  - Brotato: large colorful item icons matching the game's comic style
  - HoloCure: anime-styled card art with chibi character portraits for character-specific abilities
  - Halls of Torment: dark parchment-style cards with detailed pre-rendered item art

**Level-up screen design goal:** The pause + 3-card select is the moment players think about their build. The UI must communicate upgrade synergies quickly. Iconography, rarity color coding (common/rare/epic), and short descriptions are all load-bearing.

### Area-of-Effect Indicators

AOE indicators in arena survivors face a unique challenge: the game is already visually busy.

**Common solutions observed:**
- **Semi-transparent ground circles** — used for incoming enemy AOE attacks. Usually red/orange with pulsing edge to show "active danger zone"
- **Player AOE usually shown as persistent radius ring** — shows attack range without additional animation
- **Radial scaling** — some games make AOE indicators physically scale before detonating, giving players a "timer" reading
- Some games intentionally skip AOE indicators for balance reasons — forcing pattern recognition rather than telegraphed dodging

**Important design asymmetry noted in research:** Player AOE is often slightly smaller than the hitbox (satisfying edge-catching), while enemy AOE indicators are slightly larger than the hitbox (making near-misses feel like skill). This invisible balance is a key "juice" mechanic.

---

## 4. UI / HUD Design

### Common HUD Layout

The genre has converged on a fairly standard HUD footprint:

```
[TOP-LEFT]    Wave number / Timer          [TOP-RIGHT]  (minimal)
[TOP-CENTER]  XP progress bar (thin strip)

[GAME AREA]   The arena — as clear as possible

[BOTTOM-LEFT]  Health bar + player stats
[BOTTOM-CENTER] Weapon/upgrade slots (icons, 6–8 slots)
[BOTTOM-RIGHT] (minimal)
```

**Key principle: the HUD is a frame, not an overlay.** All critical information is pushed to the edges/corners, keeping the center of the screen reserved for gameplay.

### Health / Damage Display

- **Health bar:** Simple colored bar (usually red), positioned bottom-left or top. Some games show numeric HP alongside.
- **Taking damage feedback:** Screen briefly flashes red (vignette on screen edges), character sprite flashes, health bar animates.
- **Enemy health:** Most arena survivors show **no per-enemy health bar** — the genre's enemy density makes this impractical. Boss enemies are an exception, typically showing a large health bar anchored to top or bottom of screen.

### Weapon / Build Slots

- Weapon slots: typically 6–8 icon slots showing current loadout
- Passive item slots: shown separately (usually smaller icons)
- Evolved/upgraded weapons: icons often gain a glow or badge to indicate evolution

**Brotato** is notable for its **shop screen between waves** — a dense grid-based inventory screen showing all items, prices, and stats. More RPG-like than most competitors. Brotato invests heavily in the meta-build layer.

**HoloCure** adds character-specific abilities that have visible cooldown rings on their icons (clock-wipe animation, standard game UI convention).

### Timer

Vampire Survivors (and most games following it) use a countdown timer at the top of the screen — usually 15–30 minutes per run. The timer creates urgency. Halls of Torment uses a similar timer per area/hall.

### Damage Numbers

- Floating yellow/white numbers with dark outline
- Rise and fade over ~0.5–1 second
- Multiple numbers stack to prevent overlap
- Critical hits often shown in **larger red text** or with a distinct "CRIT!" label
- **Enemy density challenge:** When 500 enemies are in the kill zone, damage numbers become a solid wall of text. Solutions: cap displayed numbers, fade faster, or only show round numbers / totals

---

## 5. Enemy Design Principles

### The Core Challenge: Readability at High Density

At peak gameplay in Vampire Survivors, **300–600 enemy sprites** are on screen simultaneously. The player must parse threat level and navigate the horde in real-time. This makes enemy legibility a first-order design constraint, not an aesthetic choice.

### Silhouette Language

**The rule:** A player should be able to identify enemy type from silhouette alone at "mid-range" (~10+ game-units distance), before they can read textures or colors.

**Practical implementations in the genre:**

| Enemy Type | Silhouette Principle | Example |
|---|---|---|
| Basic fodder | Simple blob/circle — no distinctive features | Bats (Vampire Survivors): simple winged shapes |
| Melee rushers | Upright humanoid — narrow, tall | Skeleton warriors (Halls of Torment) |
| Ranged enemies | Weapon visible in silhouette — held object | Archers, mages with staffs |
| Tanky / elite | Notably larger — size = threat level | Armored enemies, mini-bosses |
| Boss | Screen-dominating size + unique silhouette | Vampire Survivors death bosses |

**Brotato** — aliens range from small round blobs to large spindly-legged creatures. The silhouette variety is high because the game has many waves with introduced enemy types.

**Halls of Torment** — dark fantasy bestiary uses extreme silhouette differentiation: skeletons are spindly, demons are hunched and wide, spectral enemies are amorphous. The pre-rendered sprite technique delivers smooth rotations showing all silhouette angles.

### Color Coding

A consistent color language for enemy threat level:

| Color | Typical meaning |
|---|---|
| Grey / brown | Common fodder — low threat |
| Green | Often "poison" or mid-tier enemies |
| Red / dark red | Elite, dangerous, or boss-tier |
| Purple / violet | Magical, spectral, or end-game threats |
| Gold / glowing | Special, rare, often drops good loot |
| Black | Rare / shadow enemies — highest tier |

This palette is not fixed across games but within any one game it must be internally consistent. Players pattern-match within the first few minutes and rely on these cues subconsciously.

### Size Hierarchy

The clearest single readability signal is **physical size**.

**The hierarchy:**
1. **Fodder:** Same scale as player character or smaller. Overwhelming numbers, low individual threat.
2. **Elites:** 1.5–2× player size. Fewer spawned. Player must route around them.
3. **Mini-bosses:** 3–5× player size. Treat them as moving obstacles.
4. **True bosses:** Often the entire width of the visible arena. Turn the screen into a tight navigation puzzle.

**Deep Rock Galactic: Survivor** — the 3D format makes size hierarchy extremely clear, with giant Bulk Detonator enemies clearly towering over drone swarms. The camera angle makes vertical size directly readable as threat level.

**20 Minutes Till Dawn** — uses size hierarchy aggressively. The tiny player character contrasted with mid-large Lovecraftian enemies (tentacled horrors that are 3–4× character size) creates a constant sense of being overwhelmed — thematically appropriate for the Lovecraftian horror aesthetic.

### Managing Visual Noise at Density

When the screen has 400+ enemies, even good silhouette design breaks down. Solutions used in the genre:

1. **Enemy sprites reduce animation detail at distance** — far enemies are simplified versions of the sprite.
2. **Color density management** — enemies in dense clumps can "merge" visually. Some games avoid this by ensuring each enemy type has a slightly different hue.
3. **Enemy z-ordering** — enemies closer to the player (lower on screen in oblique view) are drawn on top, creating natural visual hierarchy.
4. **Intentional visual chaos as design goal** — Vampire Survivors explicitly embraces late-game screen chaos as a feature. The player becomes so powerful they're blanketing the screen in weapons; readability is deliberately sacrificed for power fantasy sensation in the final minutes.
5. **Fixed enemy palette per wave** — some games introduce only 1–3 enemy types per wave, reducing visual noise even as numbers increase.

### Enemy Animation Budget

With hundreds of enemies on screen, animation performance is critical:

- Most enemies have **2–4 frame walk cycles** at most
- Simple idle animations (slight bob) communicate "alive" state without complex animation
- Death animations are typically **1–2 frames** (flash, then remove) rather than full death sequences
- **Halls of Torment** is an exception — the pre-rendered sprite approach yields smoother animations because the 3D rig can generate many frames cheaply

---

## Summary Table: Genre Visual Identity

| Game | Art Style | Camera | Color Palette | Enemy Max | Key Visual Signature |
|---|---|---|---|---|---|
| Vampire Survivors | Minimalist pixel (32px sprites) | Top-down slight tilt | Dark green/brown BG, bright enemies | 600+ | XP gem magnet cascade; weapon evolution auras |
| Brotato | Cartoon pixel, bold outlines | Strict top-down | Vibrant multi-color, bright arena floor | 200–300 | 6-weapon DPS visual chaos; wave shop screen |
| HoloCure | High-quality chibi anime pixel | Top-down slight tilt | Bright pastel, pop-idol colors | 400+ | Character-specific VTuber abilities; anime cutscene portraits |
| 20 Minutes Till Dawn | Greyscale pixel with red accents | Strict top-down | Greyscale + red/white | 300+ | Maximum contrast clarity; player-aimed shots |
| Halls of Torment | Pre-rendered 3D sprites (Blender→Godot) | Isometric | Dark stone, 90s Diablo palette | 500+ | Smooth 3D-quality animations in 2D; dungeon hall depth |
| Deep Rock Galactic: Survivor | Real-time 3D low-poly | Near-iso 3D top-down | Dark cave + mineral glow highlights | 300+ | Dynamic lighting; 3D depth in survivor genre |

---

## Key Design Insights

1. **Contrast is the primary readability tool.** Dark backgrounds with bright, saturated enemies is not just aesthetic — it's the functional foundation of the genre. Games that violate this (light backgrounds, grey-on-grey) pay in comprehension.

2. **Consistent fidelity > high fidelity.** Vampire Survivors' design lesson: a medium-quality art style that is internally consistent reads as polished. Assets at mismatched quality levels create a "unfinished" impression even if the hero assets are excellent.

3. **The XP gem magnet moment is a genre-defining dopamine mechanic.** The visual design of XP gems (color-coded, physical objects, magnetized attraction) is purpose-built for this moment. It's not incidental.

4. **Level-up pause is sacred UI space.** The 3–4 card selection screen is where build strategy lives. Every major title protects this by fully pausing and dimming the action.

5. **Enemy silhouette > texture detail at scale.** When 400 enemies are on screen, no player reads texture. Silhouette and color are the only signals that survive at density. Design for silhouette first.

6. **Size = threat.** The most universal and cross-cultural signal for enemy danger. Players do not need to learn this — it is instinctive. Exploit it aggressively.

7. **Pre-rendered 3D sprites (Halls of Torment technique)** is an underused art pipeline for indie studios — allows smooth 3D-quality animation and rotations at 2D sprite runtime cost. Uses: Blender → rendered sprite sheets → 2D engine (Godot in HoT's case).

8. **White flash on hit is non-negotiable.** Every successful game in the genre uses it. It is the minimum viable hit feedback signal.

---

## Sources

- Vampire Survivors Wiki (vampire-survivors.fandom.com, vampire.survivors.wiki)
- Halls of Torment Steam discussions on graphics pipeline (steamcommunity.com/app/2218750)
- Polycount thread: "Halls of Torment 3D/2D environment art" (polycount.com/discussion/236079)
- 80.lv article: "Halls of Torment: A Survival Roguelite With 90s Visual Style"
- Wikipedia: Vampire Survivors-like genre
- Wikipedia: 20 Minutes Till Dawn
- Wikipedia: Brotato
- Level Design Book: Enemy design chapter (book.leveldesignbook.com)
- NovaMind Games: Deep Rock Galactic Survivor review
- Royal Society Open Science: "Influences of visual effects on sense of agency in video games"
- Niche Gamer: "Niche Games Spotlight — The Vampire Survivors Genre"
- Steam store pages for all games listed
