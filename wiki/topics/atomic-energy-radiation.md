# Energy, Radiation, Periodic Table & Measurement

> Deep dive 4 of 4 for [R-007](../topics/atomic-physics-for-game-design.md). The electromagnetic spectrum, radiation types, dose units, measurement scales, the periodic table, and key elements.

---

## 1. The Electromagnetic Spectrum

All electromagnetic radiation is the same phenomenon — oscillating electric and magnetic fields propagating through space at the speed of light (c = 3 × 10⁸ m/s). The only difference between radio waves and gamma rays is **frequency** (and therefore wavelength and energy).

**Wavelength × frequency = c** (speed of light)  
**Energy per photon = hf** (h = Planck's constant = 6.626 × 10⁻³⁴ J·s)

### The Full Spectrum (low energy → high energy)

| Type | Wavelength Range | Frequency | Typical Source | Game Visual |
|---|---|---|---|---|
| Radio | > 1 mm (up to km) | < 300 GHz | Radio transmitters, stars | Long-range comms; soft background hum |
| Microwave | 1 mm – 1 m | 300 MHz – 300 GHz | Magnetrons, cosmic background | Heating effect; radar detection |
| Infrared (IR) | 700 nm – 1 mm | 0.3–430 THz | Heat, warm bodies, IR lasers | Thermal vision; heat damage |
| Visible Light | 380–700 nm | 430–790 THz | Stars, LEDs, fire | The visual game layer itself |
| Ultraviolet (UV) | 10–380 nm | 790 THz – 30 PHz | Sun, arc lamps | Sterilization; material degradation |
| X-ray | 0.01–10 nm | 30 PHz – 30 EHz | X-ray tubes, pulsars | Penetrating scan; low-level ionization |
| Gamma ray | < 0.01 nm | > 30 EHz | Radioactive decay, nuclear reactions, supernovae | Maximum penetration; highest damage |

**Visible light breakdown:**
- Violet: 380–450 nm
- Blue: 450–495 nm
- Green: 495–570 nm
- Yellow: 570–590 nm
- Orange: 590–620 nm
- Red: 620–750 nm

> **Game relevance:** The EM spectrum is a natural **energy/damage tier system** from weakest (radio = negligible interaction) to strongest (gamma = maximum destructive penetration). Each tier interacts differently with matter:
> - Radio: passes through nearly everything → stealth/communication frequency
> - Microwave: absorbed by water molecules → "cook from inside" damage
> - IR: absorbed as heat → thermal buildup, fire
> - Visible: reflected/absorbed by surfaces → the normal visual world
> - UV: ionizes biological molecules → corruption/degradation over time
> - X-ray: penetrates soft matter, blocked by dense materials → seeing through walls; lead as shielding resource
> - Gamma: penetrates almost everything → only thick lead/concrete blocks it; area-of-effect contamination

---

## 2. Ionizing vs. Non-Ionizing Radiation

**Non-ionizing radiation:** Photon energy insufficient to knock electrons off atoms. Includes: radio, microwave, infrared, visible light, near-ultraviolet. Can cause heating but not direct DNA damage.

**Ionizing radiation:** Photon or particle energy sufficient to remove electrons from atoms, creating ions. Includes: far-UV, X-rays, gamma rays, plus alpha, beta, and neutron particles. Creates reactive ions/radicals in tissue → damages DNA, proteins, cell membranes.

> **Game relevance:** The ionizing/non-ionizing divide = a hard threshold mechanic. Below the threshold: radiation causes heat (manageable). Above the threshold: radiation causes ionization damage (structural corruption, status effects). You can absorb enormous radio energy safely but a small dose of gamma is immediately damaging.

---

## 3. Radiation Types — Particles

### Alpha Radiation (α)

**What it is:** A helium-4 nucleus: 2 protons + 2 neutrons, charge +2, mass ~4 amu. Ejected from heavy radioactive nuclei during alpha decay.

**Properties:**
- Highly ionizing (large mass + double charge strips many electrons per path)
- Very short range in matter: stopped by a sheet of paper, 4 cm of air, or dead skin cells
- Cannot penetrate the outer layer of skin externally
- Extremely dangerous if inhaled, ingested, or enters bloodstream (all that ionizing energy deposits in internal tissue with no shielding)
- Example emitters: uranium-238, radium-226, polonium-210, radon-222

> **Game relevance:** Alpha = high-damage, short-range, low-penetration. Excellent for close-range devastating attacks that can be shielded easily with light armor. "Alpha emitter" units: devastating against unshielded targets, useless against any armor at all. Internal alpha emitters (if one "gets inside" an enemy) = devastating DOT (damage over time) with no shield protection.

---

### Beta Radiation (β)

**What it is:** High-energy electrons (β⁻) or positrons (β⁺) emitted during beta decay. Travel at up to ~99% the speed of light.

**Properties:**
- Moderately ionizing (lighter than alpha, moves faster)
- Range in air: ~0.3–3 m; penetrates ~1 cm of tissue
- Stopped by a few mm of aluminum, plastic, or wood
- Beta-minus (electrons): penetrate skin → radiation burns at high doses
- Beta-plus (positrons): annihilate on contact with electrons → two 511 keV gamma photons → secondary gamma hazard
- Example emitters: carbon-14 (β⁻), strontium-90 (β⁻), sodium-22 (β⁺)

> **Game relevance:** Beta = medium-range, moderate penetration. Beta-minus units: damage that penetrates light shields. Beta-plus units: contact detonation → secondary gamma burst (the positron's annihilation is an AOE gamma damage burst). Strontium-90 is a bone-seeking isotope (chemically mimics calcium) — a "stealth beta emitter" that targets skeletal structure specifically.

---

### Gamma Radiation (γ)

**What it is:** High-energy photons emitted from excited atomic nuclei, usually following alpha or beta decay. Pure electromagnetic radiation with wavelength < 0.01 nm.

**Properties:**
- Minimally ionizing per path length (interacts weakly with individual atoms)
- BUT penetrates everything — requires centimeters of lead or meters of concrete to attenuate significantly
- Deposits energy throughout a large volume
- Half-value layer in lead: ~1.3 cm (meaning 1.3 cm of lead reduces gamma intensity by 50%)
- Example sources: cobalt-60, cesium-137, technetium-99m (medical imaging), fission products

> **Game relevance:** Gamma = high-penetration, distributed, unstoppable without heavy shielding. Area-contamination radiation. Light armor does nothing — only heavy/dense materials help. Gamma zone = radiation field that persists in an area, invisibly damaging anything inside. Lead armor = the premium defensive material. Gamma signatures reveal presence of nuclear reactions (gamma detector as scouting tool).

---

### Neutron Radiation

**What it is:** Free neutrons ejected from nuclei during fission or fusion. Uncharged → passes through electromagnetic shielding freely (cannot be stopped by the same materials that block charged particles).

**Properties:**
- Not directly ionizing (no charge), but causes indirect ionization by nuclear collisions
- Penetrates most materials freely — lead is NOT effective shielding
- Effective shielding: hydrogen-rich materials (water, polyethylene, concrete) — these slow and absorb neutrons
- Activates stable materials into radioactive isotopes (neutron activation) → makes the surrounding structure radioactive
- Fast neutrons: high energy, penetrating, cause spallation
- Thermal neutrons: slowed down, most effective at inducing fission

> **Game relevance:** Neutron radiation = shield-bypass mechanic. Passes through all conventional armor (EM-based). Only water/hydrogen-rich shields block it. Special effect: neutron bombardment makes nearby structures radioactive (secondary contamination). Neutron bomb mechanic: kills biological units through neutron radiation while leaving structures less damaged (building material absorption varies). Fast vs. thermal neutrons = armor-piercing vs. reaction-triggering ammunition types.

---

## 4. Radiation Dose Units

### Becquerel (Bq)

**What it is:** The SI unit of radioactivity. 1 Bq = 1 radioactive disintegration per second. Measures how much material is decaying, not how much radiation reaches something.

- Natural background: ~10,000 Bq in an average human body (from potassium-40 and carbon-14)
- Bananas contain ~15 Bq (from potassium-40) — the source of the "Banana Equivalent Dose" joke
- 1 Curie (old unit) = 3.7 × 10¹⁰ Bq (activity of 1 gram of radium-226)

> **Game relevance:** Becquerel = activity/production stat. How many decay events per second a radioactive unit is generating. High Bq = high radiation output (but need to know type to determine danger).

---

### Gray (Gy)

**What it is:** The SI unit of **absorbed dose** — the energy deposited by radiation in matter. 1 Gy = 1 joule of radiation energy absorbed per kilogram of tissue.

- The gray measures physical energy deposition, regardless of radiation type
- 1 Gy of alpha is biologically far more damaging than 1 Gy of gamma (different ionization density)

> **Game relevance:** Gray = raw damage absorbed. The physical hit points of radiation impact, before biological weighting.

---

### Sievert (Sv)

**What it is:** The SI unit of **equivalent/effective dose** — absorbed dose weighted by radiation type and tissue sensitivity. Accounts for the fact that different radiation types cause different biological damage.

**Calculation:** Dose (Sv) = Dose (Gy) × Radiation Weighting Factor (Wᴿ)

| Radiation Type | Weighting Factor (Wᴿ) |
|---|---|
| X-rays, gamma, beta | 1 |
| Protons | 2 |
| Neutrons | 5–20 (energy-dependent) |
| Alpha particles | 20 |

Examples of effective doses:
- Chest X-ray: ~0.1 mSv (millisievert)
- Annual background radiation: ~2–3 mSv (varies by location)
- Transatlantic flight: ~0.08 mSv
- CT scan (abdomen): ~8 mSv
- Acute radiation sickness threshold: ~1,000 mSv (1 Sv)
- LD50 (lethal dose for 50% of humans without treatment): ~4–5 Sv whole-body
- Chernobyl first-responders: many received 1–16 Sv

> **Game relevance:** Sievert = the biological damage HP meter. The "real" damage after accounting for radiation type. Alpha (Wᴿ = 20) is 20× more damaging per gray than gamma (Wᴿ = 1) when deposited inside tissue. Radiation damage threshold mechanic: below ~100 mSv = no acute effect (damage heals); 1 Sv = radiation sickness; 4–5 Sv = 50% lethal; 10+ Sv = lethal within days.

---

## 5. Nuclear Energy Concepts

### Mass-Energy Equivalence (E = mc²)

Einstein's famous equation relates mass and energy: energy and mass are interchangeable. A tiny amount of mass corresponds to enormous energy (c² = 9 × 10¹⁶ m²/s²).

Examples:
- 1 gram of matter fully converted = 9 × 10¹³ J = ~21 kilotons of TNT (Hiroshima bomb yield: ~15 kilotons)
- A nuclear fission reaction converts ~0.1% of mass to energy
- Fusion of hydrogen converts ~0.7% of mass to energy
- Annihilation of matter + antimatter converts 100% of mass to energy

> **Game relevance:** Mass-energy equivalence = ultimate conversion rate. Antimatter is the most efficient energy source possible (100% conversion). Fusion is more efficient than fission. Fission is millions of times more efficient than chemical reactions. Game economy: energy currency, with different "fuel types" offering wildly different conversion rates.

### Binding Energy Curve

The plot of binding energy per nucleon vs. atomic mass number. Critical properties:
- **Peak at iron-56 (~8.8 MeV/nucleon):** iron is the most stable nucleus
- **Light nuclei (H, He, Li):** low binding energy → fusing them releases energy (moves up the curve toward iron)
- **Heavy nuclei (U, Pu):** binding energy lower than iron → splitting them releases energy (moves down the curve toward iron)

The iron peak means:
- Stars fuse lighter elements all the way to iron, then stop (can't get more energy from iron fusion)
- Supernovae are needed to form elements heavier than iron (energy must be supplied from the explosion)

> **Game relevance:** Iron is literally the center of the nuclear energy economy. Everything else wants to become iron, releasing energy in the process. "The iron convergence" as a game theme: all matter is trending toward iron-equivalent stability. Light units fuse toward iron; heavy units fission toward iron; iron units just sit there, unmoved.

---

## 6. The Periodic Table

### Organization

The periodic table arranges all known elements (118 confirmed as of 2024) by:
- **Period (row):** Elements in the same row have the same number of electron shells
- **Group (column):** Elements in the same column have the same number of valence electrons → similar chemical behavior
- **Block (s/p/d/f):** Based on which type of orbital the outermost electrons occupy

| Block | Groups | Orbital Type | What's Here |
|---|---|---|---|
| s-block | 1–2 | s orbital | Alkali metals, alkaline earth metals, hydrogen, helium |
| p-block | 13–18 | p orbital | Metalloids, nonmetals, halogens, noble gases |
| d-block | 3–12 | d orbital | Transition metals |
| f-block | (below main table) | f orbital | Lanthanides (4f), Actinides (5f) |

---

### Element Groups — Properties and Game Relevance

**Group 1 — Alkali Metals** (Li, Na, K, Rb, Cs, Fr)
- Configuration: [noble gas]s¹ — one valence electron, always eager to lose it
- Soft, shiny, very low melting points; react violently with water (releasing hydrogen gas + heat)
- Reactivity increases down the group: lithium reacts mildly with water; cesium explodes on contact
- All form +1 ions in compounds
> **Game relevance:** Alkali metals = "one-shot bonding" units. Always want to give away their one valence electron. Violent contact with water = environmental hazard. Cesium/francium (bottom of group) = most reactive, most explosive contact. Resource that explodes when exposed to moisture-type environments.

**Group 2 — Alkaline Earth Metals** (Be, Mg, Ca, Sr, Ba, Ra)
- Configuration: [noble gas]s² — two valence electrons
- Harder and less reactive than alkali metals, but still reactive
- Magnesium burns brilliantly (used in flares, incendiary devices)
- Calcium = backbone of bones and shells
- Strontium-90 = radioactive isotope that mimics calcium → deposits in bones
- Radium (bottom) = radioactive, once used in glow-in-dark paint (caused radiation poisoning in painters)
> **Game relevance:** Alkaline earths = structural metals with fire potential. Magnesium burning = brilliant white light burst (photoflash). Strontium-90 = "bone poison" contamination that mimics a friendly resource (calcium). Radium = the glowing danger resource — attractive but lethal over time.

**Groups 3–12 — Transition Metals** (Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, Y, Zr, Nb, Mo, Tc, Ru, Rh, Pd, Ag, Cd…)
- Fill d-orbitals; multiple oxidation states possible (Fe²⁺ and Fe³⁺ both stable)
- Dense, hard, high melting points, good conductors
- Include most industrial and precious metals: iron, copper, gold, silver, platinum
- Colored compounds (d-orbital electron transitions create color)
- Catalytic activity (multiple oxidation states allow them to act as catalysts)
- Iron = peak of binding energy curve; also the most abundant element by mass in Earth's core
> **Game relevance:** Transition metals = the "professional" units — high stats across the board, versatile, colored (visual distinction by oxidation state). Multiple oxidation states = "gear shift" mechanic where the same unit changes capability level. Iron = the workhorse material; gold = the uncorroding standard; platinum = rare catalyst that enables reactions without being consumed.

**Group 17 — Halogens** (F, Cl, Br, I, At, Ts)
- Configuration: [noble gas]p⁵ — one electron short of a full shell
- The most reactive nonmetals; violently seek one more electron
- Fluorine: most electronegative element, reacts with nearly everything including noble gases
- Chlorine: toxic gas, used in chemical warfare (WWI)
- Iodine: required for thyroid function; radioactive I-131 (from fission) = thyroid cancer risk
- Reactivity decreases down the group
> **Game relevance:** Halogens = electron-hungry predators. One slot to fill → aggressive bonding with almost any unit. Fluorine = the ultimate attacker (eats noble gases — which are supposed to be invulnerable). Chlorine gas = area-denial toxin. Iodine = dual nature: essential nutrient but radioactive isotope = targeted internal contamination (thyroid-seeking weapon).

**Group 18 — Noble Gases** (He, Ne, Ar, Kr, Xe, Rn, Og)
- Configuration: full valence shell (ns²np⁶, or for He: 1s²)
- Chemically inert under normal conditions (complete electron shell = no bonding drive)
- Monatomic gases (exist as single atoms, don't form diatomic molecules)
- Xenon and krypton form compounds only under extreme conditions
- Radon = radioactive; the heaviest naturally occurring noble gas; seeps from uranium-bearing rock
- Helium: second lightest element; only substance that remains liquid at absolute zero under normal pressure
> **Game relevance:** Noble gases = "complete" units. Full shells = invulnerability / maximum stability. Bonus for achieving a full-shell configuration (octet rule completion). Noble gas units resist all bonding attempts. Radon = the betrayal: noble gas that's radioactive → "invulnerable" unit that secretly decays. Helium = the non-freezing coolant, always available as a liquid (never freezes at atmospheric pressure).

**Lanthanides (La–Lu, atomic numbers 57–71)**
- Fill the 4f orbitals
- Similar chemical properties to each other (hard to separate)
- Strong magnets when alloyed (neodymium magnets)
- Used in lasers, phosphors, catalysts, electric motors
- "Rare earth" elements (misnomer — not actually rare, just hard to mine purely)
> **Game relevance:** Lanthanides = specialized/exotic upgrades. Subtle but powerful when applied correctly. Neodymium/dysprosium = magnet tech. Europium/terbium = luminescent (glow-in-dark) properties for visual indicators.

**Actinides (Ac–Lr, atomic numbers 89–103)**
- Fill the 5f orbitals
- ALL are radioactive
- Include thorium, uranium, plutonium, and all transuranic (synthetic) elements
- Thorium and uranium are naturally occurring; most others are synthetic
- The weapons and reactor elements
> **Game relevance:** Actinides = the radioactive powerhouse class. All members are decaying (built-in self-damage over time). But they carry enormous energy — fission fuels and bomb materials. The tradeoff: most powerful units, but self-destructing and contaminating.

---

## 7. Key Elements for Game Design

### Hydrogen (H, Z=1)

- Lightest element; most abundant in universe (~75% by mass)
- Isotopes: protium (¹H, 99.98%), deuterium (²H = D, 0.02%), tritium (³H = T, radioactive, 12.3-year half-life)
- Fusion fuel: D-T fusion is the most achievable reaction (17.6 MeV per event)
- Liquid hydrogen = cryogenic fuel (−252.9°C boiling point)
- Forms water (H₂O), the universal solvent
- Hydrogen bomb = thermonuclear weapon using D-T or D-D fusion initiated by fission primary
> **Game relevance:** Hydrogen = the fusion fuel. Deuterium and tritium as premium energy resources. Tritium decays (12.3-year half-life) — a resource with a shelf life. Liquid hydrogen as extreme coolant. The lightest, simplest "unit" — maximum fusion energy return for lightest investment.

---

### Helium (He, Z=2)

- Second lightest; second most abundant in universe
- Full K-shell = chemically inert (noble gas)
- Only substance that does not solidify under atmospheric pressure (liquid down to absolute zero)
- Alpha particles ARE helium-4 nuclei — so alpha decay produces helium
- Superfluid helium-4 below 2.17 K: zero viscosity, flows without friction, climbs up walls
> **Game relevance:** Helium = the ultimate coolant and stabilizer. Superfluid helium = zero-friction flow medium (items/resources move through it without resistance). Alpha decay produces helium as "exhaust" — nuclear reactors/bombs leave helium buildup. Inert = protected from chemical attacks. Helium-3 (rare isotope) = high-value fusion fuel for advanced reactors.

---

### Carbon (Z=6)

- Six protons, six neutrons (C-12), six electrons
- The backbone of all organic chemistry: 4 valence electrons → up to 4 bonds → chains, rings, complex 3D structures
- Exists in radically different allotropes: diamond (hardest natural material, sp³ bonds), graphite (lubricant/conductor, sp² bonds, layered), graphene (single atomic layer, hardest 2D material, excellent conductor), fullerene (C60 "buckyball"), carbon nanotube
- Carbon-14: radioactive (half-life 5,730 years) → carbon dating
- Carbon cycle: the flow of carbon through atmosphere, biosphere, ocean, crust
> **Game relevance:** Carbon = the organic construction material. Its 4-bond capacity enables unlimited structural complexity. Different carbon allotropes = same element, radically different properties (transmutation through bonding configuration, not nuclear change): diamond armor vs. graphite lubricant vs. nanotube cable. Carbon-14 = a time-marker resource (tells age of organic material).

---

### Oxygen (Z=8)

- Highly electronegative; 2 valence electrons needed → forms 2 bonds (or double bonds)
- Required for combustion (fire = rapid oxidation)
- Highly reactive — "rusting" is slow oxidation; fire is fast oxidation
- Liquid oxygen = extremely cold cryogen AND powerful oxidizer (rocket propellant)
- Ozone (O₃) = 3-atom molecule that absorbs UV; protective layer in stratosphere
> **Game relevance:** Oxygen = the oxidizer resource. Controls fire intensity (more oxygen = bigger fire). Depletion creates anaerobic zones (no fire, different chemistry). Ozone as UV shield — depleting ozone layer = UV damage zone. Liquid oxygen as rocket fuel oxidizer.

---

### Iron (Z=26, Fe)

- Most stable nucleus at the peak of the binding energy curve (Fe-56: 8.79 MeV/nucleon)
- Most abundant element by mass in Earth (core is iron-nickel alloy)
- Transition metal with multiple oxidation states (Fe², Fe³+)
- Ferromagnetic: iron, cobalt, nickel are the main ferromagnets (permanent magnetic materials)
- "Iron curtain" of stellar nucleosynthesis: stars can fuse up to iron; iron fusion absorbs energy → star collapses → supernova
> **Game relevance:** Iron = the stability anchor. Maximum binding energy = hardest to modify (neither fission nor fusion favorable). The "perfect" nucleus. Iron units resist transformation. Ferromagnetism = passive area-of-effect magnetic field (attracts/deflects metal projectiles). Supernovae are caused by iron accumulation in stellar cores → "iron overload" as a catastrophic tipping point mechanic.

---

### Uranium (Z=92, U)

- Heaviest naturally occurring element (in significant quantities)
- Naturally occurring isotope mixture: 99.28% U-238, 0.71% U-235, trace U-234
- U-235: fissile (chain reaction with thermal neutrons); half-life 703 million years
- U-238: not fissile but fissionable; can capture neutrons to become Pu-239 (fissile); half-life 4.47 billion years
- Natural uranium barely radioactive (both isotopes have very long half-lives → slow decay rate)
- Enriched uranium: artificially increased U-235 percentage (reactor-grade: 3–5%; weapons-grade: >90%)
- Uranium metal: very dense (~19.1 g/cm³), slightly radioactive, used as armor-piercing penetrator shells (depleted uranium)
> **Game relevance:** Uranium = the base nuclear material. U-235/U-238 = two variants of the same "unit" with radically different properties. Enrichment = a refining process. Depleted uranium (mostly U-238) = ultra-dense non-fissile armor material. Critical mass of U-235 = threshold above which chain reaction becomes self-sustaining. Decay chain through 14 steps to lead-206.

---

### Plutonium (Z=94, Pu)

- Synthetic (trace natural formation from U-238 neutron capture in uranium deposits)
- Pu-239: fissile, critical mass ~10 kg bare sphere (~5 kg with good reflector) — smaller than U-235
- Produced in nuclear reactors from U-238 + neutron capture
- Extremely toxic (heavy metal + alpha emitter — especially dangerous if inhaled)
- Multiple oxidation states: Pu²⁺, Pu³⁺, Pu⁴⁺, Pu⁵⁺, Pu⁶⁺, Pu⁷⁺ (six oxidation states — most of any element)
- Warm to the touch due to alpha decay heating (5 kg Pu-239 sphere radiates ~10 W)
- Pu-238: high-power alpha emitter used in RTGs (radioisotope thermoelectric generators) — powers Voyager spacecraft, Mars rovers
> **Game relevance:** Plutonium = the refined, more concentrated version of uranium. Lower critical mass = more efficient weapon. Self-heating = passive energy generation (RTG mechanic: slow steady power from decay). Multiple oxidation states = extremely versatile chemistry (6 gear modes). Pu-238 powered RTG = long-lived power source for deep-space/remote applications. Six oxidation states = the most configurable transition in the game.

---

### Gold (Z=79, Au)

- Dense (19.3 g/cm³), soft metal with brilliant yellow color
- Excellent conductor of electricity
- Chemically inert: does not tarnish, corrode, or react with most acids (attacks only by aqua regia: HNO₃ + HCl mixture)
- The only metal that is yellow (copper is reddish; all others are silver-grey)
- Au-198: radioactive isotope (β⁻ emitter, 2.7-day half-life) used in cancer treatment
- Nanoparticles of gold appear red, not gold (size-dependent color due to plasmon resonance)
> **Game relevance:** Gold = the corrosion-immune currency/material. Cannot be degraded by chemical attacks. Dense = heavy material for shielding or ballistic use. Gold nanoparticles = red → visual scale-dependent property (changes appearance at nanoscale). Au-198 = medical-use radioisotope (targeted cancer treatment) → precision biological weapon.

---

### Mercury (Z=80, Hg)

- Only metal that is liquid at room temperature (melting point: −38.8°C)
- Very dense liquid (13.6 g/cm³)
- Extremely toxic — accumulates in neural tissue (methylmercury)
- Poor electrical conductor for a metal
- Mercury amalgam: liquid mercury dissolves many metals (forms alloys)
- Mercury(II) fulminate: extremely shock-sensitive explosive (historical detonator)
- Thermoelectric applications; barometers; fluorescent lamps (mercury vapor emits UV → phosphor → visible light)
> **Game relevance:** Mercury = the liquid metal. The only metal that flows as liquid at room temperature — a mobile, dense fluid. Mercury pool as hazard: liquid metal that conducts electricity, toxic on contact, and dissolves other metals (amalgamation = dissolve/absorb mechanic). Mercury fulminate as a contact detonator (shock-sensitive). Dense liquid = pressure-transmitting medium.

---

## 8. Measurement Units

### Length Units

| Unit | Symbol | Value | Used For |
|---|---|---|---|
| Angstrom | Å | 10⁻¹⁰ m = 0.1 nm | Atomic radii, bond lengths, crystal spacings |
| Nanometer | nm | 10⁻⁹ m | Molecular sizes, nanostructures, visible light wavelength |
| Picometer | pm | 10⁻¹² m | Atomic radii (1 Å = 100 pm) |
| Femtometer / Fermi | fm | 10⁻¹⁵ m | Nuclear radii, proton/neutron size |

Typical sizes:
- Hydrogen atom radius: ~53 pm (0.53 Å) — the Bohr radius
- Carbon-carbon bond: ~154 pm (1.54 Å)
- Proton diameter: ~1.7 fm (0.0000017 Å)
- Visible light: 380–700 nm (3,800–7,000 Å)

> **Game relevance:** Scale layers for the game world: femtometer scale = nuclear interior; angstrom scale = atomic/bonding interactions; nanometer scale = molecular machinery; micrometer scale = cells/nanotech; millimeter scale = visible objects. Each scale layer is a "zoom level" with different physics rules.

---

### Mass Units

**Atomic mass unit (amu) / Dalton (Da):** Defined as 1/12 the mass of one carbon-12 atom. 1 amu = 1.66054 × 10⁻²⁷ kg. Proton: 1.00728 amu; Neutron: 1.00866 amu; Electron: 0.000549 amu.

> **Game relevance:** amu = the "weight class" of atomic units. Proton and neutron weigh 1 amu each. Electron mass is negligible. Mass number A = approximate weight in amu for any nucleus.

---

### Energy Units

**Electron volt (eV):** Energy gained by one electron accelerated through 1 volt of potential difference. 1 eV = 1.602 × 10⁻¹⁹ joules.

Common multiples:
- 1 keV (kilo-eV) = 1,000 eV
- 1 MeV (mega-eV) = 1,000,000 eV
- 1 GeV (giga-eV) = 10⁹ eV

Energy scale context:
- Visible light photon: ~1.8–3.1 eV
- Ionization energy of hydrogen: 13.6 eV
- X-ray photon: 100 eV – 100 keV
- Gamma ray photon: > 100 keV
- Fission of U-235: ~200 MeV
- Proton in LHC: up to 6,500 GeV (6.5 TeV)
- Chemical reaction: ~1–10 eV per molecule

> **Game relevance:** The eV scale reveals the enormous energy hierarchy between chemical reactions (~eV), atomic excitation (~eV), ionization (~10s of eV), X-rays (~keV), and nuclear reactions (~MeV). One nuclear fission event releases 20 million times more energy than burning one carbon atom. This ratio = the power multiplier in the game's energy economy.

---

### Radius Types

**Atomic radius:** Half the distance between two identical atoms bonded together (covalent radius) or in a crystal lattice. Ranges from ~25 pm (helium) to ~298 pm (cesium). Decreases across a period (more protons pull electrons in); increases down a group (new shell added).

**Covalent radius:** Measure of atom size when covalently bonded. Slightly different from atomic radius for most elements.

**Ionic radius:** Size of an ion (atom that has gained or lost electrons). Cations (lost e⁻) are smaller than neutral atoms (fewer electrons, same nuclear pull). Anions (gained e⁻) are larger.

> **Game relevance:** Radius = unit size stat. Larger atoms fill more space, are easier to hit but harder to compress. Ions have different sizes than neutral atoms — ionization changes physical footprint. Ionic crystals pack by fitting cation/anion sizes together optimally (ratio rules determine crystal structure).

---

## Cross-References

- [Atomic Structure](atomic-structure.md) — the particles that emit and absorb this radiation
- [Atomic Behaviors](atomic-behaviors.md) — decay processes that produce radiation
- [Quantum Concepts](atomic-quantum.md) — photon quantization, electron excitation

## Sources

- NASA Imagine the Universe: Electromagnetic Spectrum
- Wikipedia: Electromagnetic spectrum, Isotopes of uranium, Mercury (element)
- MIT News: Explained — rad, rem, sieverts, becquerels
- EPA: Radiation Terms and Units
- CCOHS: Quantities and Units of Ionizing Radiation
- CleverlySmartScience: Ionizing Radiation — Alpha, Beta, Gamma, Neutron
- World Nuclear Association: Physics of Uranium and Nuclear Energy
- Britannica: Periodic table — Elements, Groups, Blocks
- Chemistry LibreTexts: The Periodic Table
- IEER: Basics of Nuclear Physics and Fission
