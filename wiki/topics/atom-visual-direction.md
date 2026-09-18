# Atom Game — Visual Direction Reference

> Research base for game artists choosing a visual direction for an atom-themed game.
> Covers scientific visualizations, film & media references, game precedents,
> color palettes, and specific image/video references. Links to [atom-jargon](atom-jargon.md) for physics concepts.

---

## 1. Scientific Visualizations

### 1.1 Bohr Model

The Bohr model (1913) depicts electrons orbiting the nucleus on discrete, concentric circular
rings — the closest physics has to a "solar system" diagram. It remains the default science-
communication shorthand for "atom" worldwide.

**Visual elements:**
- Central nucleus: a dense cluster of red/orange spheres (protons) + grey/white spheres (neutrons)
- Electron shells: thin concentric rings, typically white or light grey on dark backgrounds, or
  coloured blue/cyan for energy level n=1, green/teal for n=2, yellow/orange for n=3, etc.
- Electrons: small glowing dots sitting on rings, often coloured blue or white
- Labels: element symbol in nucleus, shell numbers (K, L, M or 1, 2, 3) on rings

**Conventional palette (most educational diagrams):**
- Background: black or dark navy
- Nucleus: red/orange/magenta cluster or single solid dot
- Rings: white, cyan, or gradient colours per shell
- Electrons: white dots or cyan glow

**Why game artists love it:** instantly legible as "atom" with zero text, scales from icon to
hero image, animates beautifully as spinning orbits.

**Reference:** Holographic Bohr model render — Adobe Stock #961420897
([stock.adobe.com](https://stock.adobe.com/ph/images/holographic-visualization-of-the-bohr-model-of-an-atom-showcasing-the-defined-electron-orbits-and-the-intricate-subatomic-structure-of-matter/961420897))

---

### 1.2 Electron Orbitals (Quantum Mechanical Model)

The true quantum model replaces clean rings with probability density clouds — regions where an
electron is *likely* (but not certain) to be found.

**Orbital shapes by type:**

| Orbital | Shape | Visual |
|---------|-------|--------|
| s | Sphere | A solid glowing ball centred on nucleus |
| p | Dumbbell / figure-8 | Two lobes, one above, one below (or left/right) |
| d | Double dumbbell / cloverleaf | Four lobes, or a doughnut ring around two lobes |
| f | Complex multi-lobe | 7–8 lobes in intricate 3D arrangement |

**Color conventions in educational materials:**
- Positive lobe phase: blue or red
- Negative lobe phase: yellow or green (opposite of positive lobe)
- Probability density gradient: dark centre → bright edge or vice versa, rendered as glowing cloud
- The hyperphysics.phy-astr.gsu.edu interactive orbital gallery is the go-to reference:
  [http://hyperphysics.phy-astr.gsu.edu/hbase/Chemical/eleorb.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Chemical/eleorb.html)
- Wolfram Demonstrations interactive 3D orbitals:
  [https://demonstrations.wolfram.com/VisualizingAtomicOrbitals/](https://demonstrations.wolfram.com/VisualizingAtomicOrbitals/)
- Davidson College interactive orbital shapes:
  [https://www.chm.davidson.edu/vce/AtomicOrbitals/AtomicOrbitals-Visualization.html](https://www.chm.davidson.edu/vce/AtomicOrbitals/AtomicOrbitals-Visualization.html)

**For a game:** orbital shapes are natural inspiration for projectile VFX, zone-of-effect shapes,
enemy movement patterns, and particle trail geometry.

---

### 1.3 Atomic Emission Spectra

When elements are excited (heated, electrified), their electrons jump between energy levels and
emit light at specific wavelengths — producing a fingerprint pattern of coloured lines.

**Hydrogen (Balmer series — the visible lines):**

| Line | Wavelength | Colour |
|------|------------|--------|
| H-alpha | 656.3 nm | Deep red |
| H-beta  | 486.1 nm | Blue-green / cyan |
| H-gamma | 434.0 nm | Violet |
| H-delta | 410.2 nm | Violet |

**Neon:** Dense cluster of orange/red lines between 580–700 nm, a few yellow lines, with
scattered lines in orange-red region — hence neon signs' iconic warm orange-red glow.

**Sodium:** Two intense yellow lines at 589 nm — the "sodium doublet." Sodium street lights.

**Mercury:** Blue-white with violet, blue, green, and yellow lines. Used in fluorescent lighting.

**Design application:** Emission spectra make excellent background textures, HUD colour keys,
or "elemental identity" colour-coding for different gameplay elements. The concept: each element
has a unique visual fingerprint — a rich world-building device.

**Reference images:**
- NASA spectroscopy explainer (with diagrams):
  [https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-how-absorption-and-emission-spectra-work/](https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-how-absorption-and-emission-spectra-work/)
- Interactive Bohr model / emission spectra (CK-12):
  [https://interactives.ck12.org/simulations/chemistry/bohr-model-of-electron/app/index.html](https://interactives.ck12.org/simulations/chemistry/bohr-model-of-electron/app/index.html)

---

### 1.4 Rutherford Gold-Foil Experiment

**The diagram:** A source fires a beam of alpha particles (α) through a gold foil. Most pass
straight through (atom is mostly empty space). A few scatter at wide angles. One in ten thousand
bounces almost straight back — revealing a tiny, dense, positive nucleus.

**Visual:** Fan-shaped scattering diagram. Alpha source on left, gold foil in centre, curved
arrows spraying out at various angles, with the majority going straight and a few curving sharply.
Often rendered in textbook style with clean vector lines.

**Game relevance:** Scattering diagrams are natural inspiration for projectile physics, ricochet
mechanics, or area-denial gameplay. The visual language of "most pass through, a few bounce back"
could map to a gameplay mechanic.

---

### 1.5 Feynman Diagrams

Feynman diagrams encode particle interactions as a visual grammar invented by Richard Feynman
(1940s–50s). They look like circuit diagrams for physics.

**Line types and meanings:**

| Line type | Represents | Example |
|-----------|-----------|---------|
| Solid line + arrow | Fermion (electron, quark) | Electron moving through space |
| Wavy line | Boson / photon | Electromagnetic force carrier |
| Curly / helical line | Gluon | Strong force carrier |
| Dashed line | Scalar particle (Higgs) | Mass mechanism |
| Vertex (dot where lines meet) | Interaction event | Electron emits photon |

**Conventions:** Time runs left to right (or bottom to top). Arrows on fermion lines indicate
particle vs. antiparticle direction. The diagram is NOT a picture of what happens physically —
it's a compact notation for calculating probabilities.

**Design application:** Feynman diagram aesthetics (fine-line diagrams, vertices, crossing lines)
are a great inspiration for UI chrome, loading screens, or a "physics notation" visual language.

**Reference:**
[https://quantumzeitgeist.com/feynman-diagrams-how-simple-drawings-revolutionized-physics/](https://quantumzeitgeist.com/feynman-diagrams-how-simple-drawings-revolutionized-physics/)

---

### 1.6 Nuclear Fission / Chain Reaction Diagrams

**The visual:** A heavy nucleus (uranium-235) absorbs a neutron. It wobbles, then splits into
two smaller nuclei (barium + krypton) + 2–3 free neutrons + gamma rays. Those neutrons strike
other uranium nuclei. Each split releases more neutrons → branching exponential cascade.

**On paper it looks like:** A tree-branching diagram, each node a nucleus splitting, lines
diverging. The branching pattern is visually identical to an explosion unfolding in slow motion.

**Colour conventions:** Nuclei as coloured circles (red for protons, blue for neutrons), neutrons
as small grey dots, gamma rays as jagged yellow arrows, fission fragments as smaller red/orange circles.

**Animated reference:**
- Atomic Archive chain reaction animation:
  [https://www.atomicarchive.com/media/animations/chain-reaction.html](https://www.atomicarchive.com/media/animations/chain-reaction.html)
- PhET nuclear fission interactive:
  [https://phet.colorado.edu/en/simulations/nuclear-fission](https://phet.colorado.edu/en/simulations/nuclear-fission)

---

## 2. Scientific Image References

### 2.1 Cherenkov Radiation (Blue Glow in Reactors)

When charged particles travel faster than light through water, they emit a cone of light —
always electric blue, always eerie, always beautiful.

**Visual:** Reactor fuel assemblies submerged in water. Around each fuel rod, an intense
blue-violet shimmer, fading to darker blue farther out. Perfectly still water. Otherworldly.

**Wikipedia image URLs (Wikimedia Commons, free to use):**

![Advanced Test Reactor — Cherenkov glow](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Advanced_Test_Reactor.jpg/400px-Advanced_Test_Reactor.jpg)
*Advanced Test Reactor, Idaho National Laboratory — quintessential Cherenkov blue*

![Cherenkov radiation during maintenance](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cherenkov_Radiation_During_Maintainence.jpg/400px-Cherenkov_Radiation_During_Maintainence.jpg)
*TRIGA reactor pool during maintenance*

**Colour reading:**
- Core glow: `#00B4FF` — `#1A8FFF` (intense electric blue)
- Fade: `#0035A0` → `#001040` (deep navy)
- Highlights: near-white `#E0F4FF` at hottest points
- Water: transparent teal-blue atmosphere

**Reference pages:**
- IAEA explainer (with photographs): [https://www.iaea.org/newscenter/news/what-is-cherenkov-radiation](https://www.iaea.org/newscenter/news/what-is-cherenkov-radiation)
- US DOE explainer: [https://www.energy.gov/ne/articles/cherenkov-radiation-explained](https://www.energy.gov/ne/articles/cherenkov-radiation-explained)

---

### 2.2 Bubble Chamber Particle Tracks

A hydrogen bubble chamber records particle collisions as visible spirals and arcs of tiny bubbles
in superheated liquid hydrogen — photographs of particle paths that look like abstract art.

**Visual:** White or silver spiral tracks on a dark background. Tight spirals = electrons or
positrons (low mass, high curvature). Long sweeping arcs = heavier particles. The tracks
curve because of an applied magnetic field. The image is usually high contrast: dark navy/black
background, bright white or silver lines.

**Famous photograph:** CERN Omega production and decay (1973):
[https://www.zerobaseline.com/1973-cern-bubble-chamber-omega-production-decay](https://www.zerobaseline.com/1973-cern-bubble-chamber-omega-production-decay)

**CERN bubble chamber gallery:**
[https://cds.cern.ch/record/2809280](https://cds.cern.ch/record/2809280)
[https://scoollab.web.cern.ch/bubble-chamber-pictures-classroom](https://scoollab.web.cern.ch/bubble-chamber-pictures-classroom)

**Design application:** Bubble chamber aesthetics — white tracks on black — map directly onto
game particle VFX, trail effects, projectile paths, or a UI theme ("particle detector as HUD").

---

### 2.3 Scanning Tunneling Microscopy (STM) — Actual Atoms

The STM lets scientists image and move individual atoms. The most famous image: IBM spelled in
35 xenon atoms on a nickel surface, 1989 (Eigler & Schweizer, IBM Almaden). Each xenon atom
~0.25 nm wide.

**Visual:** Grayscale false-colour images. Individual atoms appear as smooth, rounded bumps
on a crystalline lattice, like eggs in a carton. The image is often coloured in orange/yellow
false-colour to emphasise topography. Atomic-scale ripples in the surface are visible.

**Wikipedia STM image URLs:**

![Gold surface atomic resolution](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Atomic_resolution_Au100.JPG/400px-Atomic_resolution_Au100.JPG)
*Gold (100) surface reconstruction — individual gold atoms resolved*

![Silicon carbide atoms](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Silicium-atomes.png/400px-Silicium-atomes.png)
*Silicon carbide atoms — hexagonal lattice pattern*

**The IBM xenon atom logo (1989):**
[https://www.research.ibm.com/topics/moving-atoms](https://www.research.ibm.com/topics/moving-atoms)

---

## 3. Film & Media References

### 3.1 Oppenheimer (2023, Christopher Nolan)

Nolan's film visualizes nuclear physics through practical in-camera effects — almost no CGI.

**Trinity test sequence aesthetic:**
- Shot in IMAX 65mm film, no computer graphics for the explosion itself
- The fireball was created with burning magnesium, gasoline, and miniatures
- The shockwave ring was filmed with high-speed cameras and practical optical effects
- Black-and-white sequences (using specially manufactured Kodak 65mm B&W stock) represent
  Strauss's third-party POV — the "objective world"
- Colour sequences represent Oppenheimer's subjective inner experience
- The quantum world visualised as swirling, plasma-like tendrils of light and fire

**Visual design notes:**
- No clean, animated atomic diagrams — physics shown as pure force and light
- Shockwave ring: translucent glowing sphere expanding outward, atmospheric distortion
- Subatomic moments: close-ups of fire and plasma, almost microscopic in texture
- Atmosphere: dark, grimy, physical — oil, metal, fire, not blue-glow cleanliness

**Video reference:** Official Variety breakdown of Trinity test production:
[https://variety.com/2023/artisans/news/how-oppenheimer-pulled-off-trinity-test-sequence-1235676487/](https://variety.com/2023/artisans/news/how-oppenheimer-pulled-off-trinity-test-sequence-1235676487/)

---

### 3.2 Ant-Man and the Quantum Realm (MCU, 2015/2018/2023)

The Quantum Realm is Marvel's visual answer to "what does subatomic space look like?"

**First Ant-Man (2015) — entry aesthetic:**
- Psychedelic shrinking sequence: colours shift, matter distorts at each scale boundary
- Quantum Realm glimpse: dark, stormy, crystalline structures, amber/golden hues

**Quantumania (2023) — full Quantum Realm world:**
- Research keywords used by concept artists: "microscopic, subatomic, neural network"
- Kang's control room: gold and blue colour palette, 2.5D holographic forms
- Guerrilla Village: bioluminescent organic structures, alien flora inspired by cell structures
- The overall look: a civilization that evolved at the cellular scale — organic curves, glowing
  membranes, no straight lines

**Concept art reference:**
[https://www.behance.net/gallery/172058427/Ant-Man-The-Wasp-Quantumania-Concept-R-D](https://www.behance.net/gallery/172058427/Ant-Man-The-Wasp-Quantumania-Concept-R-D)

---

### 3.3 Fantastic Voyage (1966)

A submarine and crew shrink to microscopic size and travel through a human body.

**Visual design:** Bubbly, almost psychedelic practical sets. Organic shapes everywhere — veins
look like translucent tunnels filled with red rivers, the lung interior is a cave of pink tissue,
the brain pulses with electrical light. Antibodies are crystalline spike-balls.

**Aesthetic:** 1960s Technicolor saturated palettes. Interior body spaces lit with backlit
translucent panels. Everything feels wet, alive, pulsing. The submarine is white and clean against
the organic red-and-amber environment.

**Design legacy:** The convention "organic = round, wet, red/pink = biological threat" vs.
"clean = white, metallic = technology" traces to this film.

---

### 3.4 Tron (1982) and Tron Legacy (2010)

The Grid aesthetic — a digital world made of light lines on black. Not strictly about atoms, but
the visual grammar is often borrowed for "physics visualizer" aesthetics in games.

**1982 original:** Raw, angular, polygon playpen. Bright vector lines on black. Primary colours
for player/program identity: blue = good, red = evil. Everything is flat planes and sharp edges.

**2010 Legacy:** Evolved to high-contrast black with cool-white and electric-blue neon lines.
Curved surfaces, more architectural. The Grid is a dark city of light. Soundtrack by Daft Punk
matched the cold, luminous aesthetic.

**Design relevance:** The Tron grammar (black field + glowing lines + node points) is a direct
visual antecedent to "quantum/physics visualizer" HUD designs used across sci-fi games today.

---

### 3.5 Educational Animation References

**Kurzgesagt — "How Small Is An Atom? Spoiler: Very Small." (2015)**
YouTube: [https://www.youtube.com/watch?v=_lNF3_30lUE](https://www.youtube.com/watch?v=_lNF3_30lUE)

Kurzgesagt's house style: flat vector illustration, warm palettes (amber, teal, coral), chunky
bold shapes. Atoms depicted as coloured spheres. Electrons as smaller glowing circles. The
visual grammar is accessible, friendly, round-edged — optimistic science communication.

**Kurzgesagt — Quantum Mechanics / Nuclear:**
- "Surviving A Nuke With Quantum Mechanics" (2025):
  [https://www.youtube.com/watch?v=anyDHd7SYTQ](https://www.youtube.com/watch?v=anyDHd7SYTQ)
- Main channel: [https://www.youtube.com/channel/UCsXVk37bltHxD1rDPwtNM8Q](https://www.youtube.com/channel/UCsXVk37bltHxD1rDPwtNM8Q)

**3Blue1Brown — Quantum Mechanics Series**
YouTube playlist: [https://www.youtube.com/playlist?list=PLwrKKKpUt5VJ2QmCYKjq0xkRJkjFauuCq](https://www.youtube.com/playlist?list=PLwrKKKpUt5VJ2QmCYKjq0xkRJkjFauuCq)

3Blue1Brown (Grant Sanderson) uses Manim — a Python animation library — to produce clean
mathematical visualizations. Signature aesthetic: dark background, glowing vector lines, smooth
morphing transformations. Colours are semantic: teal/cyan = one concept, yellow = another,
pink/magenta = a third. Wave functions are rendered as oscillating sinusoidal lines with smooth
gradients. Perfect "quantum abstract" aesthetic reference.

**PBS SpaceTime:**
- Double-slit experiment episode: [https://www.youtube.com/watch?v=p-MNSLsjjdo](https://www.youtube.com/watch?v=p-MNSLsjjdo)
- Quantum prediction episode: [https://www.youtube.com/watch?v=7UwigY4SjKY](https://www.youtube.com/watch?v=7UwigY4SjKY)

PBS SpaceTime uses a mix of live-action lecture + animated inserts. Animation style leans
toward clean 3D renders: dark backgrounds, glowing white/blue geometric diagrams.

---

## 4. Game References

### 4.1 Opus Magnum (Zachtronics, 2017)

Steam: [https://store.steampowered.com/app/558990/Opus_Magnum/](https://store.steampowered.com/app/558990/Opus_Magnum/)

![Opus Magnum header](https://cdn.akamai.steamstatic.com/steam/apps/558990/header.jpg)

**Visual style:** Alchemical steampunk meets molecular chemistry. The puzzle area is a hex grid
(matching hexagonal close-packing of atoms). Mechanical arms ("manipulators") grab and rotate
elemental tokens on the grid. Each element is a coloured circle with an embossed alchemical
symbol. Animations: arm rotation, atom bonding, transmutation flashes.

**Palette:** Warm amber/golden backgrounds (dark oak desk texture), coloured gem-like element
tokens (fire = red/orange, salt = pale white, water = blue, quicksilver = silver). Alchemical
notebook aesthetic — parchment, ink, brass gears.

**Key insight:** The hex grid is both scientifically accurate (hexagonal closest-packing is how
atoms actually pack) and visually distinctive. Game artists should consider hex grids as a
natural atomic game layout.

---

### 4.2 SpaceChem (Zachtronics, 2011)

An earlier Zachtronics title where players route atoms and molecules through reaction chambers
using visual programming.

**Visual style:** Cold, industrial, quasi-scientific. White diagrams on dark grey backgrounds.
Atom tokens are coloured circles with element symbols. Bond lines are straight white/coloured
lines between circles. The aesthetic is "chemistry textbook on screen."

**Color conventions:** CPK-inspired — oxygen is red, hydrogen is white/small, carbon is black.

---

### 4.3 Fallout series / Atompunk aesthetic

**Visual definition:** "Atompunk" — the nuclear/atomic aesthetic filtered through 1950s American
optimism. Everything that didn't happen. Flying cars with fins, fusion-powered everything, gleaming
cities that became irradiated wastelands.

**Key visual elements:**
- Clean, bright pre-war signage (Art Deco lettering, bold sans-serif)
- Post-war: all of the above, rusted, irradiated, overgrown
- Pip-Boy aesthetic: orange phosphor CRT displays
- Radiation symbols (trefoil hazard icon) as decorative motifs
- Colour palette: warm amber/orange (decay and rust) + sickly green (radiation)

**Fallout atompunk reference:**
[https://expertbeacon.com/what-is-the-fallout-style-called/](https://expertbeacon.com/what-is-the-fallout-style-called/)

---

### 4.4 Atomfall (Rebellion, 2025)

Set in a post-nuclear 1960s Britain — Windscale nuclear disaster as alternate history. Decaying
British countryside, rusted nuclear infrastructure, overgrown forests.

**Visual style:** More grounded and naturalistic than Fallout — British pastoral meets cold war
anxiety. Countryside greens + industrial grey + warm amber interiors.

Steam: [https://store.steampowered.com/app/2467780/Atomfall/](https://store.steampowered.com/app/2467780/Atomfall/)

---

### 4.5 Atom RPG (AtomTeam, 2018)

Post-Soviet post-apocalyptic RPG. Soviet aesthetic + atompunk = unique visual flavour.

**Visual style:** Isometric, top-down 2D. Drab Soviet browns and greys + radiation green glows.
Propaganda posters, crumbling concrete, rotary phones, hammer-and-sickle iconography next to
radiation trefoils.

Steam: [https://store.steampowered.com/app/552620/ATOM_RPG_Postapocalyptic_indie_game/](https://store.steampowered.com/app/552620/ATOM_RPG_Postapocalyptic_indie_game/)

---

### 4.6 Infinifactory / Shenzhen I/O (Zachtronics)

Both use clean, industrial "engineer's desk" aesthetics. Infinifactory is 3D factory automation
in space — clean white modules, dark space background. Shenzhen I/O is a circuit board interface
on a fictional computer monitor.

**Relevance:** The "programming puzzle on a dark screen" aesthetic — white/green on black, precise
geometry — is a recurring Zachtronics motif that translates naturally to particle physics simulation
aesthetics.

---

## 5. Color Palettes and Aesthetics

### 5.1 CPK Coloring Convention (Chemistry Standard)

The Corey–Pauling–Koltun (CPK) convention is the universal color standard for molecular models.
All chemistry education software, 3D molecular viewers, and physical model kits use it.

| Element | Color |
|---------|-------|
| Hydrogen (H) | White |
| Carbon (C) | Black / dark grey |
| Nitrogen (N) | Blue |
| Oxygen (O) | Red |
| Fluorine (F) | Light green |
| Chlorine (Cl) | Green |
| Bromine (Br) | Dark red / brown-red |
| Iodine (I) | Dark violet / purple |
| Phosphorus (P) | Orange |
| Sulfur (S) | Yellow |
| Noble Gases (He, Ne, Ar…) | Cyan / light blue |
| Alkali Metals (Li, Na, K…) | Violet / purple |
| Iron (Fe) | Dark orange |
| Boron (B) | Beige / cream |

**Game application:** If your game uses real elements, CPK colours give instant chemical legibility.
If it uses fictional elements, CPK can be a reference point to establish "elemental colour code."

**Wikipedia reference:**
[https://en.wikipedia.org/wiki/CPK_coloring](https://en.wikipedia.org/wiki/CPK_coloring)
[https://sciencenotes.org/molecule-atom-colors-cpk-colors/](https://sciencenotes.org/molecule-atom-colors-cpk-colors/)

---

### 5.2 Nuclear Glow Aesthetic

**Cherenkov blue:** The single most visually powerful nuclear colour. Electric cobalt-to-azure blue,
always glowing outward from a dark source. Associated with: nuclear reactors, particle detectors,
submarine reactors, science fiction energy weapons.

**Uranium glass (vaseline glass):** Under UV light, glass containing uranium dioxide fluoresces
brilliant yellow-green. The colour is #39FF14 to #7FFF00 range — neon chartreuse. This is the
"radioactive green" of pop culture — Simpsons plutonium rods, Fallout radiation effects.

**Key distinction:**
- Cherenkov = real nuclear blue (actual physics)
- Uranium glass green = cultural shorthand for "radioactive" (visual convention, not physics)
- Both are valid game choices; use which serves your tone

**Uranium glass reference:**
[https://explorenuclear.com/uranium-glass-the-glow-in-the-dark-phenomenon/](https://explorenuclear.com/uranium-glass-the-glow-in-the-dark-phenomenon/)

---

### 5.3 Atomic Age (1950s) Aesthetic

The postwar "Atomic Age" design movement (1945–1965) gave the world the starburst, biomorphic
organic shapes, and the Bohr model as decorative motif.

**Key visual elements:**
- **Starburst / atomic starburst:** Lines radiating from central point, tips capped with spheres —
  electrons on ring orbits reinterpreted as decorative radiating spoke-and-ball pattern
- **Biomorphic shapes:** Kidney curves, amoeba shapes, cell-like organic blobs
- **Sputnik chandeliers:** Multi-armed light fixture with globe tips = Bohr model as furniture
- **George Nelson Ball Clock (1947):** Brass rods from central clock, each tipped with a coloured
  wooden ball — literally an atomic model as a clock

**Colour palette:**
- Whites and creams (optimism, cleanliness)
- Mustard yellow, burnt orange, turquoise, sage green (mid-century modern palette)
- Accent colours: hot pink, lime green
- Pattern colours: the Franciscan China Starburst used turquoise, yellow, and green on cream

**Reference articles:**
- Nuclear Museum Atomic Age Design: [https://ahf.nuclearmuseum.org/ahf/history/atomic-age-design/](https://ahf.nuclearmuseum.org/ahf/history/atomic-age-design/)
- Kittl guide to the style: [https://www.kittl.com/blogs/atomic-age-design-guide-asp/](https://www.kittl.com/blogs/atomic-age-design-guide-asp/)
- Erik Nitsche General Dynamics posters (peak Atomic Age graphic design):
  [https://postergroup.com/blogs/the-ross-art-group-blog/from-atomic-bomb-to-atomic-age-how-erik-nitsche-s-campaign-for-general-dynamics-shaped-the-1950s](https://postergroup.com/blogs/the-ross-art-group-blog/from-atomic-bomb-to-atomic-age-how-erik-nitsche-s-campaign-for-general-dynamics-shaped-the-1950s)

---

### 5.4 Quantum Abstract Aesthetic

Emerging visual language for "the quantum world" as distinct from simple Bohr-model atoms.

**Visual elements:**
- **Wave functions:** Oscillating sinusoidal curves, often coloured with gradient from one hue to
  another, representing probability amplitude
- **Interference patterns:** The double-slit diffraction pattern — alternating bright/dark bands,
  creating stripe patterns. Very useful as a background texture or shader effect.
- **Probability gradients:** Gaussian bell curves rendered as glowing hotspots — brightest where
  most probable, fading to zero at edges
- **Superposition:** Two overlapping translucent states, one fading as the other solidifies
  (excellent animation concept for quantum game mechanics)
- **Entanglement:** Two particles linked by a thin glowing line or spiral cord, regardless of distance

**3Blue1Brown colour grammar** (widely adopted in science communication):
- Dark background (near-black, `#1C1C1C` to `#0D1117`)
- Teal/cyan for one quantum state (`#00B4B4`)
- Yellow/gold for another (`#FFAA00`)
- Pink/magenta for phase or conjugate (`#FF70CC`)
- White for highlighted key elements
- Smooth gradients between all of the above

**Double-slit interference pattern reference:**
[https://plus.maths.org/physics-minute-double-slit-experiment](https://plus.maths.org/physics-minute-double-slit-experiment)

---

### 5.5 Communicating Scale: Atomic vs. Cosmic

Artists face a fundamental challenge: how do you make "very small" feel different from "very large"?

**Conventions:**
- **No surface texture at atomic scale** — atoms are smooth, perfect spheres; no grit or grain.
  Grit reads as "big". Smooth reads as "small and pure."
- **High saturation** — atomic-scale visualizations tend to use saturated, jewel-like colours
  because there's no atmospheric haze (no atmosphere)
- **Grid / lattice structure** — crystalline patterns imply atomic-scale arrangement
- **No horizon** — cosmic scale has a horizon; atomic scale is omnidirectional and enclosed
- **Glow without source** — at the quantum level, particles emit light directly; there's no sun
- **Particle trails** — at atomic scale, particles leave probability trails, not solid paths

---

## 6. Visual Direction Proposals

### Direction A: Scientific Realism

**Concept:** Ground the game's aesthetic in real scientific visualizations — orbital diagrams,
emission spectra, STM images, bubble chamber tracks. The game looks like it was designed by
a physicist who learned to make games.

**Palette:**
- Background: near-black `#0A0A14` to `#0D0A1A` (deep space / vacuum)
- Primary structure: cool white `#E8EEF5` — `#B0C4DE` for atomic shells / orbital outlines
- Quantum states: teal `#00B4B4`, amber `#FFAA00`, magenta `#FF70CC` (3Blue1Brown grammar)
- Energy: Cherenkov blue `#0066FF` — `#00B4FF` for energy discharge, particles, lasers
- Nucleus: dense orange-red cluster `#FF4500` — `#FF6600`
- Background accents: very dim crystalline lattice patterns in dark navy

**Key visual elements:**
- Electron probability clouds as glowing, volumetric forms (s = sphere, p = dumbbell lobes)
- Bubble chamber particle trails as projectile VFX
- Emission spectrum colours as element identity coding
- Feynman diagram lines as UI chrome and HUD elements

**Reference works:**
1. 3Blue1Brown quantum mechanics series — [https://www.youtube.com/playlist?list=PLwrKKKpUt5VJ2QmCYKjq0xkRJkjFauuCq](https://www.youtube.com/playlist?list=PLwrKKKpUt5VJ2QmCYKjq0xkRJkjFauuCq)
2. STM images of actual atoms (false-colour orange gold lattice)
3. Opus Magnum's hex grid layout (CPK colour-coded element tokens)

---

### Direction B: Retro Atomic (1950s–60s Atompunk)

**Concept:** The atom as 1950s America imagined it — clean, optimistic, powerful, dangerous-
but-exciting. Bohr model starbursts on every surface. Pastel Technicolor meets nuclear kitsch.

**Palette:**
- Background: cream white `#F5F0E0` (paper, light) or charcoal `#2A2A2A` (night sky)
- Primary motifs: atomic starburst in mustard yellow `#E8A820`, turquoise `#2AB4AA`,
  burnt orange `#E05020`, sage green `#6A8C5A`
- Accent glow: warm amber `#FFB830` for "energy" and "power"
- CRT displays: phosphor green `#39FF14` or orange `#FF8C00` on black
- "Radioactive" accent: uranium glass yellow-green `#BAFF38` used sparingly for hazard elements

**Key visual elements:**
- Bohr model as decorative motif — electrons as spheres on concentric ring orbits
- Starburst / radiating spoke-and-ball patterns for level transitions, explosions, menu backgrounds
- Retro-futurist fonts: mid-century modern sans-serif (inspired by Fallout's Futura/Helvetica mix)
- Dial gauges, vacuum tube glows, control panel aesthetics (Pip-Boy style)
- Trefoil radiation symbols used decoratively

**Reference works:**
1. Fallout series atompunk aesthetic — [https://expertbeacon.com/what-is-the-fallout-style-called/](https://expertbeacon.com/what-is-the-fallout-style-called/)
2. Erik Nitsche General Dynamics posters (1955–1960 atomic age graphic design):
   [https://postergroup.com/blogs/the-ross-art-group-blog/](https://postergroup.com/blogs/the-ross-art-group-blog/)
3. George Nelson Ball Clock and mid-century Atomic Age design:
   [https://ahf.nuclearmuseum.org/ahf/history/atomic-age-design/](https://ahf.nuclearmuseum.org/ahf/history/atomic-age-design/)

---

### Direction C: Quantum Abstract

**Concept:** Forget the atom as a "tiny solar system" — show it as it actually is: probability
waves, superposition, interference patterns, entanglement. The game world is made of uncertain
glowing fields, not solid spheres.

**Palette:**
- Background: absolute black `#000000` — `#0A0A0A`
- Primary quantum states: electric cyan `#00FFFF` and hot magenta `#FF00FF`
- Secondary: deep violet `#6600CC`, electric blue `#0044FF`
- Probability gradients: luminous white cores `#FFFFFF` fading to deep blue `#000066`
- Interference pattern highlights: sharp white lines `#FFFFFF` on near-black background

**Key visual elements:**
- Wave functions rendered as 3D oscillating surfaces (sine waves with colour gradients)
- Double-slit interference patterns as recurring background textures and shader effects
- Particle superposition: translucent overlapping states that "collapse" on interaction
- Entanglement lines: thin glowing filaments connecting paired entities across space
- No solid outlines — everything is fields, gradients, and probability halos
- The Ant-Man Quantum Realm's bioluminescent organic structures as environment inspiration

**Art style closest to:** Tron Legacy's light-on-black grammar + 3Blue1Brown's wave function
animations + Ant-Man Quantumania's Quantum Realm concept art

**Reference works:**
1. Ant-Man Quantum Realm concept art:
   [https://www.behance.net/gallery/172058427/Ant-Man-The-Wasp-Quantumania-Concept-R-D](https://www.behance.net/gallery/172058427/Ant-Man-The-Wasp-Quantumania-Concept-R-D)
2. Tron Legacy visual deconstruction:
   [https://www.vice.com/en/article/aejy3g/the-visuals-of-itron-legacyi-deconstructed](https://www.vice.com/en/article/aejy3g/the-visuals-of-itron-legacyi-deconstructed)
3. 3Blue1Brown quantum series (wave function animation reference):
   [https://www.youtube.com/playlist?list=PLwrKKKpUt5VJ2QmCYKjq0xkRJkjFauuCq](https://www.youtube.com/playlist?list=PLwrKKKpUt5VJ2QmCYKjq0xkRJkjFauuCq)

---

## 7. Quick Decision Matrix

| Factor | Direction A: Scientific Realism | Direction B: Retro Atomic | Direction C: Quantum Abstract |
|--------|--------------------------------|--------------------------|-------------------------------|
| Art complexity | High — requires accurate orbital geometry | Low-Medium — bold, simple shapes | High — requires good shader work |
| Recognisability | High to educated audience | Universal — everyone knows starburst atoms | Low — feels abstract to non-scientists |
| Tone | Cerebral, methodical, discovery | Nostalgic, optimistic, slightly kitsch | Mysterious, experimental, strange |
| Palette difficulty | Medium — cool blues and teals are safe | Low — warm mid-century palette is clear | High — black backgrounds with glow need polish |
| Player target | Science enthusiasts, puzzle fans | Casual to mid-core, nostalgia market | Art game fans, experimental audiences |
| Comparable games | Opus Magnum, SpaceChem | Fallout, Atomfall, Atom RPG | No close comparables — market gap |

---

## Sources

- Wikipedia: Cherenkov radiation, CPK coloring, Scanning tunneling microscope, Feynman diagram,
  Hydrogen spectral series, Bubble chamber, Atomic Age (design)
- [https://www.iaea.org/newscenter/news/what-is-cherenkov-radiation](https://www.iaea.org/newscenter/news/what-is-cherenkov-radiation)
- [https://en.wikipedia.org/wiki/CPK_coloring](https://en.wikipedia.org/wiki/CPK_coloring)
- [https://ahf.nuclearmuseum.org/ahf/history/atomic-age-design/](https://ahf.nuclearmuseum.org/ahf/history/atomic-age-design/)
- [https://expertbeacon.com/what-is-the-fallout-style-called/](https://expertbeacon.com/what-is-the-fallout-style-called/)
- [https://postergroup.com/blogs/the-ross-art-group-blog/](https://postergroup.com/blogs/the-ross-art-group-blog/)
- [https://variety.com/2023/artisans/news/how-oppenheimer-pulled-off-trinity-test-sequence-1235676487/](https://variety.com/2023/artisans/news/how-oppenheimer-pulled-off-trinity-test-sequence-1235676487/)
- [https://store.steampowered.com/app/558990/Opus_Magnum/](https://store.steampowered.com/app/558990/Opus_Magnum/)
- [https://scoollab.web.cern.ch/bubble-chamber-pictures-classroom](https://scoollab.web.cern.ch/bubble-chamber-pictures-classroom)
- [https://demonstrations.wolfram.com/VisualizingAtomicOrbitals/](https://demonstrations.wolfram.com/VisualizingAtomicOrbitals/)
- [https://www.behance.net/gallery/172058427/Ant-Man-The-Wasp-Quantumania-Concept-R-D](https://www.behance.net/gallery/172058427/Ant-Man-The-Wasp-Quantumania-Concept-R-D)
- [https://phet.colorado.edu/en/simulations/nuclear-fission](https://phet.colorado.edu/en/simulations/nuclear-fission)
- [https://quantumzeitgeist.com/feynman-diagrams-how-simple-drawings-revolutionized-physics/](https://quantumzeitgeist.com/feynman-diagrams-how-simple-drawings-revolutionized-physics/)
