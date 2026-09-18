# Atomic Visual Design — Reference Guide for Game Artists

> **R-008.** Everything a game artist needs to choose a visual direction for an atom-themed game: scientific visualization conventions, film/media references, color standards, specific image and video links, and four fully specified visual direction proposals.

---

## Related Pages

- [Atomic Physics for Game Design (hub)](atomic-physics-for-game-design.md)
- [Atomic Structure](atomic-structure.md)
- [Quantum Concepts](atomic-quantum.md)
- [Atomic Energy & Radiation](atomic-energy-radiation.md)

---

## Part 1: Scientific Visualizations

### Bohr Model

The Bohr model (1913) depicts electrons as classical particles orbiting a dense nucleus in fixed circular shells — like tiny planets. It is scientifically superseded but remains the universal pop-culture shorthand for "atom."

**What it looks like:**
- Central nucleus: a cluster of red and blue spheres (protons = red, neutrons = blue), or a single solid sphere
- Concentric rings (2D) or concentric spherical shells (3D)
- Electrons shown as dots, small spheres, or arrows at evenly spaced points on each ring
- For hydrogen: one ring, one electron; for carbon: two rings (2 + 4)

**Conventional colors:**
- Protons = red
- Neutrons = blue (or grey)
- Electrons = yellow, white, or bright green
- Orbit rings = light grey, white, or the element's CPK color
- Background = black (space) or white (textbook)

**Visual register:** Clean, diagrammatic, educational. The model's simplicity makes it highly readable at small sizes — good for HUD icons and UI elements.

**Reference:** Chemistry LibreTexts — [Bohr Diagrams](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Electronic_Structure_of_Atoms_and_Molecules/Bohr_Diagrams_of_Atoms_and_Ions)

---

### Electron Probability Clouds / Atomic Orbitals

Modern quantum mechanics replaces circular orbits with probability density functions — regions of space where an electron is *likely* to be found. These shapes are strange and beautiful.

**Orbital shapes by type:**

| Orbital | Shape | Description |
|---------|-------|-------------|
| s | Sphere | Perfectly round; 1s is the smallest, 2s larger with a node |
| p | Dumbbell | Two lobes on opposite sides of nucleus; pₓ, pᵧ, p_z along each axis |
| d | Double-dumbbell / cloverleaf | Four-lobe cloverleaf, OR two lobes with a torus (doughnut ring) around the waist |
| f | Complex multi-lobe | 7 variants; intricate, flower-like or cubic shapes |

**How they are visualized:**
- As 3D isosurface meshes (shaded solid lobes in two contrasting colors, e.g. blue/orange or blue/red for phase)
- As 2D cross-section heatmaps: highest density = brightest, falling off to zero = black
- Color convention: positive phase lobe = blue, negative phase lobe = orange/red (or green/purple)
- Transparency + inner glow works well for game environments

**Key images to study:**
- Wikipedia "Atomic orbital" article — [https://en.wikipedia.org/wiki/Atomic_orbital](https://en.wikipedia.org/wiki/Atomic_orbital) — contains a large gallery of 3D orbital renders
- Chemistry LibreTexts orbital shapes — [https://chem.libretexts.org/Courses/Brevard_College/CHE_103_Principles_of_Chemistry_I/03:_Electronic_Structure_and_the_Periodic_Law/3.05:_Orbital_shapes](https://chem.libretexts.org/Courses/Brevard_College/CHE_103_Principles_of_Chemistry_I/03:_Electronic_Structure_and_the_Periodic_Law/3.05:_Orbital_shapes)

**Game potential:** Orbital shapes (especially d and f orbitals) make extraordinary environment shapes — caves, corridors, arena boundaries. The dumbbell p-orbital is a natural two-room level layout.

---

### Atomic Emission Spectra

Each element emits light only at specific, fixed wavelengths — a unique "barcode" of colored lines against a dark background. This is one of the richest visual assets in atomic science.

**Visual description:** A completely black background with distinct thin vertical lines of pure color. No gradients between lines — just sharp, isolated spikes of color.

**Key element spectra (visible range):**

| Element | Prominent lines | Dominant visual impression |
|---------|----------------|---------------------------|
| Hydrogen | 656 nm (red), 486 nm (cyan-blue), 434 nm (violet), 410 nm (deep violet) | Four sharp lines; iconic red + cyan-blue pair |
| Helium | 668 nm (red), 588 nm (yellow), 502 nm (green), 471 nm (blue), 447 nm (blue-violet) | Richer spectrum; green-heavy |
| Neon | 540–642 nm range: orange, red, red-orange | Dense cluster in orange-red; the classic "neon sign" |
| Sodium | 589 nm (sodium D doublet — yellow) | One overwhelmingly dominant yellow pair; street-lamp yellow |
| Mercury | 405 nm (violet), 436 nm (blue-violet), 546 nm (green), 577–579 nm (yellow doublet) | Blue-green dominated; HID lighting aesthetic |
| Argon | Many lines from 696–912 nm; also blue-violet cluster | Deep purple-blue cluster with red fringe |
| Krypton | Similar to argon; extra lines in blue region | Blue-white plus orange-red |
| Neon + argon (mixed) | Combined = brilliant mixed rainbow | Purple to red |

**Image references:**
- UNLV Physics spectral lines page: [https://www.physics.unlv.edu/~jeffery/astro/spectra/line_spectrum_hydrogen_balmer.html](https://www.physics.unlv.edu/~jeffery/astro/spectra/line_spectrum_hydrogen_balmer.html)
- PhysicsOpenLab spectroscopy photos: [https://physicsopenlab.org/2015/11/30/atomic-spectroscopy/](https://physicsopenlab.org/2015/11/30/atomic-spectroscopy/)
- Ohio State astronomy spectra reference: [https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/atoms.html](https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/atoms.html)
- Standard wavelength reference: [https://www.rp-photonics.com/standard_spectral_lines.html](https://www.rp-photonics.com/standard_spectral_lines.html)

**Game potential:** Emission spectra as element identity system — each element/enemy/faction has its signature spectral barcode. Use as UI loadout indicators, door lock codes, faction colors, or literally draw the spectra across game environments.

---

### Rutherford Gold-Foil Experiment Diagrams

The classic visualization: a radioactive alpha source on the left fires a beam of alpha particles (small dots or arrows) at a thin gold foil in the center. A circular zinc-sulfide detection screen wraps around the foil. Detected impacts are shown as flash marks.

**Key visual elements:**
- The beam: ~95% straight through, ~5% slight deflection, ~1 in 8000 bouncing straight back
- The unexpected back-scattering → proof of a tiny, dense nucleus
- Illustration style: schematic/diagrammatic, usually two-tone

**References:**
- ResearchGate diagram: [https://www.researchgate.net/figure/Top-Rutherfords-scattering-experiment-with-a-particles-scattering-on-a-gold-foil_fig1_45868627](https://www.researchgate.net/figure/Top-Rutherfords-scattering-experiment-with-a-particles-scattering-on-a-gold-foil_fig1_45868627)
- PhysicsOpenLab reconstruction: [https://physicsopenlab.org/2017/04/11/the-rutherford-geiger-marsden-experiment/](https://physicsopenlab.org/2017/04/11/the-rutherford-geiger-marsden-experiment/)

**Game potential:** The scattering diagram is a perfect "shooting gallery" mechanic visualization — most shots pass through, a rare few get deflected, an ultra-rare shot bounces back.

---

### Nuclear Fission / Fusion Diagrams

**Fission visualization:**
- A large nucleus (U-235 usually shown as a large sphere) struck by one neutron (small circle labeled "n")
- Nucleus deforms, elongates, splits into two medium fragments
- Two or three neutrons fly outward from the split
- Each neutron can hit another U-235, creating the branching chain reaction
- Chain reaction diagrams branch exponentially: 1 → 2-3 → 4-9 → geometric expansion
- Energy shown as wavy lines or gamma-ray symbols

**Fusion visualization:**
- Two small nuclei (deuterium + tritium, shown as labeled spheres) collide
- One large helium nucleus + one neutron emerge
- Annotated with energy release (17.6 MeV)
- Background: star-interior temperature = plasma colors (blue-white-yellow)

**Reference:**
- PhET simulation (interactive): [https://phet.colorado.edu/en/simulations/nuclear-fission](https://phet.colorado.edu/en/simulations/nuclear-fission)
- ResearchGate fission chain reaction diagram: [https://www.researchgate.net/figure/llustration-of-a-nuclear-fission-chain-reaction_fig17_340378277](https://www.researchgate.net/figure/llustration-of-a-nuclear-fission-chain-reaction_fig17_340378277)
- AtomicArchive animation: [https://www.atomicarchive.com/media/animations/nuclear-fission.html](https://www.atomicarchive.com/media/animations/nuclear-fission.html)

**Game potential:** Chain-reaction branching = the core visual metaphor for area-of-effect cascade damage. One hit that detonates two that detonate four is literally what fission diagrams depict.

---

### Feynman Diagrams

Richard Feynman's notation for particle interactions: compact, minimal, surprisingly beautiful.

**Visual grammar:**
- **Horizontal axis:** space; **vertical axis:** time (particles move upward in time)
- **Solid straight lines with arrows:** fermions (electrons, quarks) — arrow direction shows particle vs antiparticle
- **Wavy lines:** photons (electromagnetic force carrier)
- **Curly/helical lines:** gluons (strong force carriers)
- **Dashed lines:** scalar particles (Higgs boson)
- **W/Z boson lines:** wavy but thicker or labeled
- **Vertex:** a point where 3+ lines meet — the interaction event

**Example (electron scattering):** Two electron lines (solid, arrows pointing up-right), one photon exchanged between them (wavy line connecting the two electron lines horizontally). Reads: "electron repels electron by exchanging a photon."

**Visual register:** Schematic, black-and-white, almost mathematical. Beautiful as a game UI motif — sparse, communicates interaction clearly.

**References:**
- BBC Science Focus: [https://www.sciencefocus.com/science/feynman-diagrams](https://www.sciencefocus.com/science/feynman-diagrams)
- Quantum Zeitgeist visual guide: [https://quantumzeitgeist.com/feynman-diagrams-how-simple-drawings-revolutionized-physics/](https://quantumzeitgeist.com/feynman-diagrams-how-simple-drawings-revolutionized-physics/)

**Game potential:** Feynman diagram grammar as combat UI — show attack "interactions" as vertex diagrams. Or as tech tree node connections (particles flow between upgrade nodes along typed lines).

---

### Bubble Chamber Particle Tracks

One of the most visually stunning physics artifacts. A superheated liquid (hydrogen or freon) — when a charged particle passes through, it leaves a trail of tiny bubbles. Photographed from above, the tracks look like handwriting in vapor.

**What they look like:**
- Long curving arcs (high-energy particles barely deflected by magnetic field)
- Tight spirals (low-energy particles losing energy rapidly)
- Forking tracks where particles decay or collide and produce new particles
- Background: uniformly dark (the liquid), tracks = white/bright
- Often false-colored in published images: yellow, cyan, red on black

**CERN references:**
- CERN Document Server archive: [https://cds.cern.ch/record/2809280](https://cds.cern.ch/record/2809280)
- CERN 70th anniversary particle tracks: [https://cern70.cern/tracing-particles/](https://cern70.cern/tracing-particles/)
- CERN S'Cool LAB classroom images: [https://scoollab.web.cern.ch/bubble-chamber-pictures-classroom](https://scoollab.web.cern.ch/bubble-chamber-pictures-classroom)
- Science Photo Library: [https://www.sciencephoto.com/media/1278/view](https://www.sciencephoto.com/media/1278/view)

**Game potential:** Bubble chamber tracks are instant visual shorthand for "particle just passed through here." Use as trail effects, projectile paths, or environmental floor patterns in a physics lab level.

---

## Part 2: Film & Media References

### "Oppenheimer" (2023, Christopher Nolan)

**Trinity test visualization approach:**
- Shot on actual IMAX 70mm film — real photographic quality, not CGI-smooth
- Physical practical effects: petroleum-based explosion miniatures, magnesium solutions, paint layered into 400 separate composite elements
- Cinematographer Hoyte van Hoytema's stated goal: "loose artistic interpretation of the ideas rather than accurate representation of the physics"
- No CGI fireball — the explosion is real burning materials photographed in-camera
- Color language: color film for "present" scenes; black-and-white IMAX for post-war hearing scenes (stark, bureaucratic dread)

**Key visual motifs:**
- Oppenheimer's visions of the atomic world shown as swirling particles, interference patterns, fire and void
- The Trinity test detonation: a slow, overwhelmingly large hemispherical shock wave followed by the signature mushroom cloud
- Scale of destruction shown through dust-wall sweeping across the desert

**References:**
- VFX supervisor breakdown: [https://postperspective.com/oppenheimer-vfx-supervisors-talk-explosive-effects/](https://postperspective.com/oppenheimer-vfx-supervisors-talk-explosive-effects/)
- Screen Rant no-CGI explanation: [https://screenrant.com/oppenheimer-movie-atomic-bomb-no-cgi-explained-vfx-supervisor/](https://screenrant.com/oppenheimer-movie-atomic-bomb-no-cgi-explained-vfx-supervisor/)
- Bulletin of Atomic Scientists visual analysis: [https://thebulletin.org/2023/08/nolans-oppenheimer-an-artistic-visual-tapestry-of-the-bombs-science-and-power-intricacies/](https://thebulletin.org/2023/08/nolans-oppenheimer-an-artistic-visual-tapestry-of-the-bombs-science-and-power-intricacies/)

**Art takeaway for games:** Practical-effects explosions feel different from CGI — heavier, more chemically real. The film proves atomic visualization can be *emotional* rather than coldly technical.

---

### Ant-Man and the Quantum Realm (Marvel Films, 2015–2023)

**Visual design philosophy:**
- Real-world inspiration: macro photography, electron microscope images, microscopic chemical reactions (contributed by artist Chris Parks)
- Heavy Metal Magazine aesthetic and abstract photography by Gerard van Smirren (not the usual sci-fi McQuarrie school)
- Psychedelic + scientific: vivid saturated colors (deep teals, magentas, golds) combined with mathematically-derived fractal-like structures
- Glitching effects and macro lensing used to prevent the environment feeling "normal"
- "A very vivid world that has its own internal history and internal logic"

**Color palette:** Deep teal/cyan dominant, magenta-purple accents, gold/amber energy sources, glowing crystalline structures, massive scale variation (particles the size of mountains)

**Interface design:** Territory Studio's UI work for the films ([https://territorystudio.com/project/ant-man-and-the-wasp-quantumania/](https://territorystudio.com/project/ant-man-and-the-wasp-quantumania/)) — holographic, particle-stream data readouts, quantum field visualizers

**Art takeaway for games:** Macro photography of mundane chemistry (soap films, ice crystals, cellular biology) looks alien at the atomic scale. This is a cheat code — photograph real things at extreme magnification.

---

### "Fantastic Voyage" (1966, dir. Richard Fleischer)

**Premise:** Scientists miniaturized and injected into a human bloodstream. The film won two Academy Awards for Art Direction and Special Effects.

**Visual aesthetic:**
- Organic and visceral — the inside of the body treated like an alien ocean
- Blood cells as floating red discs, white blood cells as gelatinous aggressors
- Arteries as enormous tunnels with textured reddish-pink walls
- Lymphatic system as crystalline cave networks
- Brain interior as swirling, luminous landscape
- Everything lit from within — bioluminescent quality

**Color palette:** Deep reds and pinks (blood/tissue), translucent blues and whites (fluids), electric yellows (energy), viscous organic browns (cellular material)

**Art takeaway for games:** The human body as alien world — tight organic tunnels, massive scale, things that are familiar (cells) made monstrous by size. A strong template for a "microscale biology" level aesthetic.

---

### Kurzgesagt — Educational Animation Style

**"How Small Is An Atom? Spoiler: Very Small" (2015)**
- YouTube: [https://www.youtube.com/watch?v=_lNF3_30lUE](https://www.youtube.com/watch?v=_lNF3_30lUE)

**Visual style:**
- Flat design: bold outlines, no gradients, limited palette per scene
- Rounded shapes, expressive cartoon faces on particles and atoms
- Particles bounce and interact like billiard balls with personality
- Color-coded by type: electrons = blue, protons = red, neutrons = grey
- Scale comparisons handled with zoom-out sequences
- Deep dark backgrounds (space/void) with bright glowing foreground elements

**Other key Kurzgesagt quantum/atomic videos:**
- Quantum Superposition Explained (2024): [https://www.youtube.com/watch?v=Za-XYJWdKGI](https://www.youtube.com/watch?v=Za-XYJWdKGI)

**Art takeaway for games:** Kurzgesagt proves that cartoon-ized physics can feel both accurate and delightful. The aesthetic is warm, approachable, immediately readable — good for puzzle/casual atomic games.

---

### 3Blue1Brown — Mathematical Visualization Style

**Channel:** [https://www.youtube.com/@3blue1brown](https://www.youtube.com/@3blue1brown)

**Quantum mechanics video:** "Some Light Quantum Mechanics" (with MinutePhysics): [https://www.3blue1brown.com/lessons/light-quantum-mechanics/](https://www.3blue1brown.com/lessons/light-quantum-mechanics/)

**Visual style:**
- Pure mathematics made visual: equations transform into shapes, functions plotted as flowing surfaces
- Dark blue/black background, bright white/yellow primary elements
- Wave functions shown as oscillating lines with color encoding phase
- Transformations are the star — things morph, rotate, project
- Tool: Manim (open-source animation library) — all custom procedural geometry
- Restrained, precise, no decorative elements — pure information

**Art takeaway for games:** Wave function visualization as shader design — sinusoidal oscillating surfaces with phase-gradient coloring is a beautiful and scientifically accurate UI/environment effect.

---

### PBS Space Time — Astrophysics Visualization

**Channel:** [https://www.youtube.com/c/pbsspacetime](https://www.youtube.com/c/pbsspacetime)

**Key quantum episode:** "The Quantum Experiment that Broke Reality" (double-slit): [https://www.youtube.com/watch?v=p-MNSLsjjdo](https://www.youtube.com/watch?v=p-MNSLsjjdo)

**Visual style:** More cinematic than 3Blue1Brown — uses rendered 3D graphics alongside equations. Good for high-budget reference on how to make quantum concepts look dramatic.

---

### "Powers of Ten" (1977, Charles and Ray Eames)

**YouTube:** [https://www.youtube.com/watch?v=0fKBhvDjuy0](https://www.youtube.com/watch?v=0fKBhvDjuy0)

**Description:** 9-minute film traveling from 10²⁵ meters (galaxies) down to 10⁻¹⁶ meters (inside a proton). Each 10 seconds = one order of magnitude zoom. The definitive "scale of the universe" reference.

**Visual aesthetic:** Clean documentary style, hand-drawn annotations and labels, the vacuum of space transitioning through galactic filaments → solar system → Earth → skin → cell → nucleus → quarks. The atomic scale sequences show the nucleus as a cluster of glowing spheres in void.

**Art takeaway for games:** Powers of Ten's zoom mechanic is directly gameable — a level design where zooming in/out changes the gameplay context and scale entirely.

---

## Part 3: Color Conventions

### CPK Coloring — Chemistry Standard

Named after Corey, Pauling, and Koltun (1950s molecular modeling). The standard color language for atom types in molecular visualization software (PyMOL, Jmol, Avogadro, VESTA, etc.).

**Full CPK color table:**

| Element(s) | Color | Notes |
|------------|-------|-------|
| Hydrogen (H) | White | Colorless gas; white by convention |
| Carbon (C) | Black / dark grey | Charcoal/graphite reference |
| Nitrogen (N) | Blue | Medium blue |
| Oxygen (O) | Red | Vivid red |
| Fluorine (F), Chlorine (Cl) | Green | Cl is green gas; F pale yellow-green |
| Bromine (Br) | Dark red / brown-red | Liquid bromine is dark red |
| Iodine (I) | Dark violet / purple | |
| Phosphorus (P) | Orange | |
| Sulfur (S) | Yellow | Pure sulfur is yellow |
| Noble gases (He, Ne, Ar, Kr, Xe, Rn) | Cyan / light blue | Inert, cool colors |
| Alkali metals (Li, Na, K, Rb, Cs, Fr) | Violet / purple | |
| Alkaline earth metals (Be, Mg, Ca, Sr, Ba, Ra) | Dark green | |
| Titanium (Ti) | Grey | |
| Iron (Fe) | Dark orange | Rust-color reference |
| Boron (B) & transition metals | Beige / salmon | |
| Other elements | Pink | Default fallback |

**CPK Wikipedia reference:** [https://en.wikipedia.org/wiki/CPK_coloring](https://en.wikipedia.org/wiki/CPK_coloring)

**Game application:** CPK coloring is a free, well-established color language — any player familiar with chemistry will immediately read it. Using it for resource/faction coloring in an atom-themed game gives instant legibility.

---

### Nuclear Glow Aesthetic

**Cherenkov Radiation — The Blue:**
- Electrically charged particles (electrons, protons) traveling faster than light *in a medium* (e.g., water) emit a characteristic blue-white cone of light
- The blue is a deep, luminous azure — not electric blue, more like a glowing blue-violet (#4499FF to #88CCFF range)
- The famous photo: Idaho National Laboratory's Advanced Test Reactor
  - **Direct image URL:** `https://upload.wikimedia.org/wikipedia/commons/f/f2/Advanced_Test_Reactor.jpg`
  - Also on Flickr: `https://live.staticflickr.com/3842/14676550274_7d59160b2e.jpg`
  - The reactor core glows an intense cobalt-azure through the water pool above it

**Uranium Glass — The Green:**
- Glass containing trace uranium oxide; appears yellow-green under daylight
- Under UV/blacklight: vivid neon green fluorescence (~520 nm)
- The color: a saturated acid yellow-green (#AAFF00 to #88FF44)
- This is *fluorescence*, not radioactivity — the uranium absorbs UV and re-emits as visible green
- Historical use: Victorian and Edwardian decorative glass (c. 1840–1940)
- Reference: [https://explorenuclear.com/uranium-glass-the-glow-in-the-dark-phenomenon/](https://explorenuclear.com/uranium-glass-the-glow-in-the-dark-phenomenon/)

**Radioluminescence — The Original Green:**
- Early watch dials used radium paint with zinc sulfide — the zinc sulfide scintillates under radiation
- Glow color: greenish-yellow to yellow-white
- Now replaced with tritium (blue-green tint) or safer phosphors

**Plasma / Fusion colors:**
- Tokamak plasma: intense blue-white (hydrogen plasma at millions of degrees)
- The sun's chromosphere: deep red (hydrogen-alpha emission at 656 nm)
- Corona: white to pale gold

---

### Quantum Aesthetic Conventions

**Interference patterns (double-slit experiment):**
- Alternating bright and dark parallel bands (fringes)
- Colors: monochromatic (the wavelength of the light used), or rainbow-gradient if polychromatic
- Bright fringes = constructive interference; dark = destructive
- Spatial frequency increases as slit separation increases
- Reference: [https://plus.maths.org/physics-minute-double-slit-experiment](https://plus.maths.org/physics-minute-double-slit-experiment)

**Wave functions (Schrödinger):**
- Complex-valued oscillating curves; phase shown by color mapping (hue = phase angle)
- Probability density = |ψ|² — shown as brightness/opacity of the wave envelope
- Standard convention: phase wheel (0° = red, 90° = yellow, 180° = cyan, 270° = blue) applied as color to the wave surface
- 3D wave function volumes: glowing translucent blobs, color = phase, brightness = amplitude

**Probability gradients:**
- From center to edge: high probability (bright, saturated) → low probability (dim, transparent)
- Works well as a radial gradient: bright core fading to near-invisible edge
- No hard boundary — this is the key visual signature of quantum objects vs classical objects

---

## Part 4: Specific Image and Video References

### Images

| Subject | URL | Notes |
|---------|-----|-------|
| Cherenkov radiation — Advanced Test Reactor (INL) | `https://upload.wikimedia.org/wikipedia/commons/f/f2/Advanced_Test_Reactor.jpg` | Wikimedia Featured Picture, CC BY-SA 2.0. Best single image of nuclear blue glow. |
| Cherenkov radiation — Flickr (NRC) | `https://live.staticflickr.com/3842/14676550274_7d59160b2e.jpg` | Same reactor, alternative crop |
| Cherenkov — Wikimedia category (58 files) | `https://commons.wikimedia.org/wiki/Category:Cherenkov_radiation` | Browse all |
| Bubble chamber tracks — CERN archive | `https://cds.cern.ch/record/2809280` | Official CERN document server |
| Bubble chamber classroom (CERN S'Cool LAB) | `https://scoollab.web.cern.ch/bubble-chamber-pictures-classroom` | 1972 CERN 2-metre chamber photos |
| Atomic orbital shapes | `https://en.wikipedia.org/wiki/Atomic_orbital` | Gallery of s/p/d/f orbital renders |
| Hydrogen emission spectrum (ResearchGate) | `https://www.researchgate.net/figure/Hydrogen-absorption-lines-H-a-656nm-H-b-486nm-H-g-434nm-H-d-410nm_fig4_314285153` | Scientific diagram |
| Element emission spectra collection | `https://www.astronomy.ohio-state.edu/pogge.1/TeachRes/HandSpec/atoms.html` | Multiple elements side by side |
| UNLV Balmer series hydrogen lines | `https://www.physics.unlv.edu/~jeffery/astro/spectra/line_spectrum_hydrogen_balmer.html` | Clean spectrum graphic |

### Videos

| Title | YouTube URL | Why It Matters |
|-------|-------------|----------------|
| IBM "A Boy and His Atom" (2013) | `https://www.youtube.com/watch?v=oSCX78-8-q0` | Actual atoms moved by STM to make animation; world's smallest movie |
| Powers of Ten (Eames, 1977) | `https://www.youtube.com/watch?v=0fKBhvDjuy0` | The definitive scale-of-universe film; every order of magnitude from galaxy to quark |
| Kurzgesagt — "How Small Is An Atom?" (2015) | `https://www.youtube.com/watch?v=_lNF3_30lUE` | Best animated introduction; warm flat-design style reference |
| Kurzgesagt — "Quantum Superposition Explained" (2024) | `https://www.youtube.com/watch?v=Za-XYJWdKGI` | Modern Kurzgesagt quantum mechanics style |
| PBS Space Time — Double-Slit Experiment | `https://www.youtube.com/watch?v=p-MNSLsjjdo` | Dramatic 3D rendering of quantum reality |
| 3Blue1Brown — Light Quantum Mechanics (with MinutePhysics) | `https://www.youtube.com/watch?v=MzRCDLre1b4` | Mathematical wave visualization; restrained, precise style |

---

## Part 5: Visual Direction Proposals

### Direction 1 — Scientific Realism

**Core concept:** The game world is built from actual scientific visualizations — what quantum physicists and chemists see when they look at matter. Accurate, cold, alien.

**Palette:**
- Primary: Black void (#0A0A0F), deep space blue (#0D1B2A)
- Electron orbitals: blue lobes (#4488FF), orange/red anti-phase lobes (#FF6622)
- Nucleus glow: warm yellow-white (#FFEEAA) with red proton tint
- Energy/photon emission: spectral colors matching real wavelengths (CPK for elements)
- UI elements: cold white (#F8F8FF) on dark background

**Key visual elements:**
- Electron probability clouds rendered as translucent glowing volumes (no hard edge!)
- Nucleus as a dense cluster of red/blue spheres, with a vibrating energy at the surface
- Particle interactions drawn with Feynman diagram grammar (typed lines, vertices)
- Emission spectrum "barcodes" as element identity — each element has its real spectral barcode as a HUD/badge
- Scale shifts via zoom mechanics; environments feel different at nucleus vs atom vs molecule scale
- Double-slit interference pattern used as a HUD/radar interference effect
- Bubble chamber track aesthetic for projectile trails

**Reference works to study:**
- IBM "A Boy and His Atom" ([YouTube](https://www.youtube.com/watch?v=oSCX78-8-q0)) — actual atomic manipulation
- Wikipedia atomic orbital gallery — real quantum chemistry renders
- CERN bubble chamber photos — particle track aesthetics
- Advanced Test Reactor Cherenkov photo ([Wikimedia](https://upload.wikimedia.org/wikipedia/commons/f/f2/Advanced_Test_Reactor.jpg))
- 3Blue1Brown wave function visualizations

**In-game look:**
- Dark environments with isolated glowing elements (the void between atoms is vast)
- Everything slightly transparent and probability-shaded — nothing has hard edges
- Quantum interference patterns on floors and walls as ambient FX
- Feynman diagram overlays when interactions happen
- The environment shifts color temperature as elements change: carbon zones are dark-grey, oxygen zones glow soft red, nitrogen zones pulse blue

**Best game genre fit:** Puzzle/strategy — requires players to understand and predict particle behavior. Also works for atmospheric exploration.

**Existing games with similar aesthetics:**
1. **Antichamber** (2013) — minimalist physics puzzles with impossible non-euclidean geometry; precise, cold, abstract
2. **Manifold Garden** (2019) — infinite impossible architecture in stark geometric precision; physics as puzzle; dark backgrounds with isolated color
3. **Thumper** (2016) — hyper-precise, cold, wave-patterned environments; scientific brutalism aesthetic

---

### Direction 2 — Retro Atomic / Atomic Age

**Core concept:** The 1950s–60s atomic optimism aesthetic — Bohr diagrams, starburst motifs, the era when "atomic" meant progress, not danger. Googie architecture meets mid-century graphic design.

**Palette:**
- Primary: Turquoise (#00B4C6), chrome white (#E8E8E8), atomic orange (#FF6B00)
- Accents: Sunburst yellow (#FFD700), grass green (#66CC00), candy pink (#FF69B4)
- Backgrounds: Cream (#FFFFF0) or midnight teal (#003344)
- "Atomic starburst" highlight: bright yellow-white center, radiating chrome spikes

**Key visual elements:**
- The atomic starburst — lines radiating from a center sphere with ball-tipped ends
- Bohr model diagrams as decorative motifs (concentric ring orbits, dot electrons)
- Sans-serif typography (Futura, mid-century bold)
- Bulbous, streamlined shapes — no sharp corners
- Chrome and polished metal surfaces
- The trifoil radioactive symbol (☢) used decoratively
- Space-age optimism: clean, orderly, upbeat

**Historical reference works:**
- Googie architecture (coffee shops, gas stations, bowling alleys of the 1950s–60s)
- Atomic Age Wikipedia article: [https://en.wikipedia.org/wiki/Atomic_Age_(design)](https://en.wikipedia.org/wiki/Atomic_Age_(design))
- Kittl atomic age design guide: [https://www.kittl.com/blogs/atomic-age-design-guide-asp/](https://www.kittl.com/blogs/atomic-age-design-guide-asp/)
- World's Fair 1962 (Seattle) Monorail era aesthetics
- Mid-century nuclear propaganda posters (US Atomic Energy Commission)
- "Atoms for Peace" program graphic materials

**In-game look:**
- Bright, flat, highly readable — menus and UI use bold geometric layouts
- Atoms as cartoon Bohr models: colored sphere nucleus, neat concentric rings, happy dot electrons
- Environments look like a retro-futuristic nuclear research campus — chrome consoles, rounded doorways, domed buildings
- Particle effects as stylized starburst bursts of yellow-orange
- Color palette shifts per element type (teal for noble gases, orange for reactive metals)
- Typography heavy — big bold element symbols on everything

**Best game genre fit:** Puzzle (light), city-builder, strategy — approachable and readable for mass audiences. Could also work as a retro-style action game.

**Existing games with similar aesthetics:**
1. **Fallout series** (1997–) — Atomic Age aesthetic throughout; the specific pre-war 1950s retro-futurist American visual language
2. **Atomic Heart** (2023) — Soviet 1950s nuclear-age aesthetic; chrome robots, atomic propaganda posters, modernist architecture
3. **We Happy Few** (2018) — retro-optimist surface with dark undertones; shows how bright colors can carry sinister meaning

---

### Direction 3 — Quantum Abstract

**Core concept:** Pure quantum weirdness made visual — probability clouds, interference patterns, wave-particle duality, entanglement. The world has no fixed shapes, only likelihood distributions. Glowing, liminal, digital/holographic.

**Palette:**
- Primary: Deep void black (#050510), electric indigo (#4400FF), cyan (#00EEFF)
- Energy states: magenta (#FF00CC), phosphor green (#00FF88)
- High probability: maximum brightness; low probability: near-invisible
- Phase colors: full HSV wheel mapped to quantum phase angle
- Entanglement pairs: matching complementary colors (cyan ↔ orange, blue ↔ yellow)

**Key visual elements:**
- No hard boundaries — everything is probability gradient, fading to transparency
- Wave function visualizations: oscillating sinusoidal surfaces, phase-colored
- Interference fringes as persistent floor/wall patterns (bright bands = constructive, dark = destructive)
- Particles "smeared" into clouds, collapsing to a point on observation/measurement
- Entangled particles: visually linked by thin glowing threads; color-matching
- Quantum tunneling: particles phases through walls (brief bright flash where tunneling happens)
- Schrodinger's Cat metaphor: things simultaneously in multiple visual states until "observed"
- Holographic HUD elements: translucent, glowing, floating

**Reference works to study:**
- 3Blue1Brown wave function animations (Manim-style procedural wave surfaces)
- Marvel's Quantum Realm visual design (macro photography + psychedelic overlay)
- Territory Studio's Ant-Man UI design: [https://territorystudio.com/project/ant-man-and-the-wasp-quantumania/](https://territorystudio.com/project/ant-man-and-the-wasp-quantumania/)
- PBS Space Time double-slit episode renders ([YouTube](https://www.youtube.com/watch?v=p-MNSLsjjdo))
- Kurzgesagt quantum superposition video ([YouTube](https://www.youtube.com/watch?v=Za-XYJWdKGI))

**Shader techniques to implement:**
- Wave displacement on all surfaces (sin(position + time) offset)
- Probability opacity: `alpha = sin(dist_from_center * frequency + time)²`
- Phase coloring: `hue = fract(atan2(vy, vx) / (2*PI))`
- Interference pattern: `brightness = cos(dist_to_slit1) + cos(dist_to_slit2)`

**In-game look:**
- Environments are mostly dark void with glowing probability zones
- Moving through space "collapses" the environment around you — undefined regions become defined
- Other players/enemies exist as spread-out clouds, collapsing to exact positions when you "observe" them (target them)
- Quantum tunneling as a movement ability: brief probability-ghost passes through thin walls
- Entanglement: two elements linked by a visible glowing thread share state changes

**Best game genre fit:** Immersive sim / stealth — the observation-collapse mechanic is mechanically rich. Also puzzle games, atmospheric horror, or a "quantum RPG" where measurement is a core mechanic.

**Existing games with similar aesthetics:**
1. **Outer Wilds** (2019) — physics simulation at cosmic scale with discovery-first exploration; shares the "universe has rules, find them" design philosophy
2. **Everything** (2017) — David OReilly's scale-shifting existence simulator; quantum-vibe through emergent transformation
3. **SOMA** (2015) — existential sci-fi with fluid identity and consciousness mechanics; the visual approach of "what IS real here" fits the quantum aesthetic

---

### Direction 4 — Nuclear Industrial

**Core concept:** Post-Chernobyl exclusion zone meets active reactor complex. Rust, concrete, radiation warning signs, dead vegetation, Geiger counter clicks. The aesthetic of real nuclear risk.

**Palette:**
- Primary: Concrete grey (#8A8A80), rust orange-brown (#8B4513), dead olive (#6B7C4A)
- Hazard accents: warning yellow (#FFD700), danger red (#CC0000), radiation trefoil magenta-on-yellow
- Contamination green: a sickly chartreuse (#AACC00) for irradiated zones
- Cherenkov blue: used sparingly as a "safe zone" glow in deep water or reactor cores
- Degraded textures: dark stains, oxidation, peel, crack everywhere

**Key visual elements:**
- Soviet-era brutalist architecture: raw concrete panels, repeating modular forms
- Vegetation reclaiming infrastructure — vines through cracked concrete, saplings in broken tarmac
- Radiation warning signs in various states of decay
- The Geiger counter aesthetic: visible radiation measurement units, dose rate HUDs
- Abandoned personal objects: children's toys, dosimeters, gas masks
- Reactor core internals: graphite moderator blocks, control rod channels (RBMK style)
- Stalker-zone anomalies: visible atmospheric distortions, floating debris fields (from the original Roadside Picnic source)
- Contamination gradient: health zones, yellow zones, red zones, black zones

**Reference works to study:**
- HBO Chernobyl (2019): [https://www.filmmakersacademy.com/look-of-chernobyl/](https://www.filmmakersacademy.com/look-of-chernobyl/) — production design research process; Alexander Gronsky and Gerd Ludwig photography
- S.T.A.L.K.E.R.: Shadow of Chernobyl (2007) — the game that defined nuclear industrial aesthetics for games; Zone anomalies, artifact hunting, equipment degradation
- Aesthetics Wiki — Chernobyl Stalkers: [https://aesthetics.fandom.com/wiki/Chernobyl_Stalkers](https://aesthetics.fandom.com/wiki/Chernobyl_Stalkers)

**In-game look:**
- Muted, desaturated world punctuated by isolated danger-color accents
- The most valuable objects glow with hazardous beauty — radioactive materials look beautiful but kill
- Depth-of-field fog and atmospheric haze (Zone weather)
- Structural decay everywhere — nothing is clean or maintained
- Radiation zones visualized as shimmering heat-distortion overlays
- Reactor core sequences use Cherenkov blue as the only pure beautiful color in an otherwise grim world
- Geiger counter UI element — an always-present click-rate indicator

**Best game genre fit:** First-person action/survival/horror — the environmental storytelling and resource scarcity mechanics fit the aesthetic perfectly. Also works for stealth (avoid contamination, don't trigger alarms).

**Existing games with similar aesthetics:**
1. **S.T.A.L.K.E.R. series** (2007–2023, GSC Game World) — the nuclear industrial aesthetic game; Ukrainian developers who literally visited Chernobyl for reference
2. **Metro series** (2033/Last Light/Exodus, 4A Games) — underground post-nuclear Moscow; industrial brutalism with bioluminescent anomalies
3. **Subnautica** (2018) — contamination zones, radiation suits, reactor management; hostile environment that is also beautiful (overlaps with Direction 1 underwater aesthetic)

---

## Part 6: Cross-Direction Comparison Table

| Criteria | Scientific Realism | Retro Atomic | Quantum Abstract | Nuclear Industrial |
|----------|--------------------|--------------|------------------|-------------------|
| **Mood** | Cold, alien, precise | Optimistic, retro, playful | Liminal, surreal, unstable | Grim, beautiful, dangerous |
| **Dominant color** | Black + spectral glow | Turquoise + chrome orange | Void black + cyan/magenta | Concrete grey + rust |
| **Hard edges?** | No — probability gradients | Yes — bold clean shapes | No — everything fades | Yes — but with decay |
| **Scale feel** | Infinite void | Human-scale optimism | Undefined / shifting | Oppressive, cramped |
| **Enemy visual** | Probability clouds, field effects | Cartoon rogue atoms | Entangled particle-forms | Mutants, anomalies, contaminated |
| **UI style** | Feynman diagram + spectral barcode | Mid-century graphic design | Holographic probability HUD | Geiger counter + dosimeter |
| **Key shader** | Orbital probability transparency | Starburst burst FX | Wave displacement + phase color | Radiation shimmer distortion |
| **Best genre** | Puzzle / atmospheric exploration | Casual puzzle / strategy | Immersive sim / stealth | Survival / FPS / horror |

---

## Sources

- Wikipedia: CPK coloring, Atomic orbital, Cherenkov radiation, Bohr model, Feynman diagram, Scanning tunneling microscope, A Boy and His Atom, Powers of Ten, Rutherford model, Bubble chamber
- Wikimedia Commons: Category:Cherenkov_radiation, File:Advanced_Test_Reactor.jpg
- CERN: CDS record 2809280, S'Cool LAB bubble chamber, CERN 70 particle tracking
- Chemistry LibreTexts: Bohr diagrams, orbital shapes, line spectra
- Idaho National Laboratory / Nuclear Regulatory Commission (Flickr): ATR Cherenkov photo
- Kurzgesagt YouTube: How Small Is An Atom (2015), Quantum Superposition (2024)
- IBM Research: A Boy and His Atom (2013)
- Eames Office: Powers of Ten (1977)
- PBS Space Time: double-slit experiment video
- Territory Studio: Ant-Man Quantumania UI design
- Filmmakers Academy: Look of HBO Chernobyl
- Aesthetics Wiki: Atompunk, Chernobyl Stalkers
- Kittl: Atomic Age Design Guide
- Screen Rant / postPerspective: Oppenheimer VFX breakdown
- rp-photonics.com: Standard spectral lines reference
- Ohio State astronomy: emission spectra reference page
- PhET Colorado: nuclear fission simulation
- UNLV Physics: Balmer series spectrum
- ExploreNuclear: uranium glass glow
