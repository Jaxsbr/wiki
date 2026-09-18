# Atomic Structure — Particles, Shells, Orbitals, Nuclei

> Deep dive 1 of 4 for [R-007](../topics/atomic-physics-for-game-design.md). All jargon defined and grounded in game-design notes.

---

## 1. Subatomic Particles

### The Big Three (Everyday Atoms)

**Proton**
A positively charged particle found in the atomic nucleus. Mass ≈ 1 atomic mass unit (amu). The number of protons in a nucleus defines which element an atom is — this count is the atomic number (Z). A hydrogen nucleus is a single proton. Protons repel each other electromagnetically but are held together by the strong nuclear force.
> **Game relevance:** Proton count = element identity. Changing Z transforms the atom into a different element entirely. This is transmutation — the alchemical dream. Mechanic: spend enormous energy to add/remove protons and change an atom's identity (element conversion).

**Neutron**
An electrically neutral particle found in the atomic nucleus. Mass ≈ 1 amu (slightly heavier than proton). Adds mass without adding charge. Free neutrons (outside a nucleus) are unstable and decay in about 10 minutes. Neutrons enable isotopes: add a neutron to carbon-12 and you get carbon-13 (same element, heavier, different stability).
> **Game relevance:** Neutrons = mass/weight stat without charge cost. Free neutrons as projectiles/bullets — they penetrate shielding that stops charged particles. Isotope variation: same unit type with different weight and stability ratings.

**Electron**
A negatively charged particle orbiting the nucleus in a cloud-like probability distribution. Mass ≈ 0.00055 amu (about 1/1836 of a proton). Electrons are responsible for all of chemistry — how atoms bond and interact is entirely determined by electron behavior. They occupy discrete energy levels (shells) and move between them by absorbing or emitting photons.
> **Game relevance:** Electrons = currency/resource. Gaining electrons = negative charge (power up or debuff depending on context). Losing electrons = positive ion (reactive, seeks electrons). Electron exchange IS chemistry — trading electrons between units creates bonds.

---

### Quarks — Inside Protons and Neutrons

**Quark (general)**
Fundamental particles that make up protons and neutrons (called hadrons). Quarks cannot exist alone outside a nucleus — they are always "confined" inside composite particles (this property is called color confinement). There are six "flavors" of quark.

| Quark | Charge | Found In |
|---|---|---|
| Up (u) | +2/3 | Protons (uud), neutrons (udd) |
| Down (d) | −1/3 | Protons (uud), neutrons (udd) |
| Strange (s) | −1/3 | Short-lived hadrons (kaons, etc.) |
| Charm (c) | +2/3 | Short-lived hadrons (D mesons) |
| Bottom (b) | −1/3 | Short-lived hadrons (B mesons) |
| Top (t) | +2/3 | Extremely short-lived; too heavy to form stable hadrons |

Proton = **u + u + d** (2/3 + 2/3 − 1/3 = +1 charge)
Neutron = **u + d + d** (2/3 − 1/3 − 1/3 = 0 charge)

Strange, charm, bottom, and top quarks exist only in high-energy environments (particle accelerators, early universe, cosmic rays). They are not found in ordinary stable matter.
> **Game relevance:** Quark flavors = sub-components of units with different charge contributions. At high energy levels, exotic quark combinations (strange, charm) could appear as rare temporary states. Top quarks = ultra-rare, unstable, only at maximum energy.

**Gluon**
The force-carrier particle of the strong nuclear force. Gluons bind quarks together inside protons and neutrons, and also bind protons and neutrons together inside the nucleus (residual strong force). Unlike photons (which carry EM force), gluons carry "color charge" — the quantum charge of the strong force, analogous to but entirely different from electric charge.
> **Game relevance:** Gluon-like "binding agents" — invisible connectors that hold composite units together. Breaking these requires massive energy input.

---

### Other Notable Particles

**Photon**
The force-carrier of the electromagnetic force. Also the particle of light. Massless, travels at c (speed of light). Photons carry specific amounts of energy (quantized). When an electron drops to a lower energy shell, it emits a photon of exactly the right energy to carry away the difference. Photons can be absorbed by electrons, exciting them to higher shells.
> **Game relevance:** Photons = energy packets that transfer between electron states. Light as discrete ammunition: each photon has a specific energy value. Absorption = charge-up; emission = discharge/attack.

**Neutrino**
An almost-massless, chargeless particle produced in beta decay and nuclear reactions. Neutrinos interact only via the weak nuclear force (and gravity, negligibly). They pass through ordinary matter almost undetected — trillions pass through your body every second. Extremely difficult to detect; requires massive underground tanks of water or ice.
> **Game relevance:** Neutrinos = stealth resource. Pass through obstacles, walls, shields. Invisible unless you have neutrino-detecting equipment. Ultra-rare item/currency that cannot be blocked or stolen except with specialized detectors.

**Positron**
The antimatter counterpart of the electron. Identical mass to electron but positive charge (+1). When a positron meets an electron, both annihilate completely, converting their combined mass entirely into energy (two gamma-ray photons at 511 keV each). Produced in beta-plus decay and in pair production (when a high-energy photon splits into an electron-positron pair).
> **Game relevance:** Positrons = anti-resources. Contact with regular electrons = mutual annihilation + energy release. Pair production: high-energy photon converts to electron + positron pair (energy-to-matter conversion). Perfect for weapons/traps: unleash antimatter, trigger annihilation.

**Muon**
A heavier cousin of the electron — same charge (−1), but ~207x heavier. Extremely unstable (half-life ~2.2 microseconds). Created in cosmic ray showers when high-energy particles hit the atmosphere. Penetrate matter much more deeply than electrons.
> **Game relevance:** Muon = heavy unstable electron variant. Rare, temporary, powerful — appears only in high-energy events. Penetrates shielding that stops electrons.

---

## 2. Atomic Structure — Nucleus + Electron Cloud

### The Nucleus

The nucleus sits at the center of an atom. It contains all protons and neutrons (collectively: **nucleons**). The nucleus is:
- **Tiny:** ~1–10 femtometers (fm) across; the atom is ~10,000× larger
- **Dense:** nearly all the mass of the atom is here
- **Positive:** net positive charge from protons

If the atom were the size of a football stadium, the nucleus would be a marble on the 50-yard line.

### Electron Shells (Energy Levels)

Electrons occupy shells (also called **energy levels**) at increasing distances from the nucleus. Shells are labeled by the **principal quantum number n** (or by letters K, L, M, N, O, P, Q for n = 1, 2, 3, 4, 5, 6, 7).

| Shell | n | Max Electrons | Energy |
|---|---|---|---|
| K | 1 | 2 | Lowest |
| L | 2 | 8 | |
| M | 3 | 18 | |
| N | 4 | 32 | |
| O | 5 | 50 (theoretical) | Highest (known) |

Maximum electrons per shell = **2n²**

Electrons fill lower shells first (Aufbau principle). The outermost occupied shell is the **valence shell**; its electrons are **valence electrons** and determine chemical behavior.
> **Game relevance:** Shells = upgrade tiers. K-shell = tier 1 (max 2 slots), L-shell = tier 2 (max 8 slots), M-shell = tier 3 (max 18 slots). Filling a shell unlocks the next tier. "Full shell" = stability bonus (noble gas analog = invincibility/immunity state).

**Core electrons:** Electrons in inner shells (not the outermost shell). They shield outer electrons from the full nuclear charge (called **electron shielding** or **screening**). Core electrons participate rarely in bonding.
> **Game relevance:** Core electrons = armored/passive layers that reduce damage from nuclear charge. More core electrons = better shielding of valence (active) layers.

### Orbitals (Subshells)

Within each shell, electrons occupy **orbitals** — mathematical probability regions where an electron is likely (90% probability) to be found. Orbitals come in four types (subshells):

| Subshell | Shape | Orbitals in it | Max electrons |
|---|---|---|---|
| s | Sphere | 1 | 2 |
| p | Dumbbell (3 orientations) | 3 | 6 |
| d | Complex (5 orientations) | 5 | 10 |
| f | Very complex (7 orientations) | 7 | 14 |

Each orbital holds at most **2 electrons** (one spin-up, one spin-down — Pauli exclusion principle).

The four **quantum numbers** that fully describe an electron's state:
1. **n** (principal) — shell number (energy level)
2. **l** (angular/azimuthal) — orbital shape (0=s, 1=p, 2=d, 3=f)
3. **ml** (magnetic) — orbital orientation in space (values from −l to +l)
4. **ms** (spin) — electron spin (+1/2 = "up" or −1/2 = "down")

No two electrons in the same atom can share all four quantum numbers (Pauli exclusion principle).
> **Game relevance:** Orbitals = specific named slots within upgrade tiers, each with orientation/direction properties (the p orbitals point along x, y, z axes = directional bonuses). The spin quantum number = binary toggle state that must be opposite for two electrons sharing a slot.

**Valence electron:** An electron in the outermost shell. Directly involved in chemical bonding. The number of valence electrons determines bonding behavior. Carbon has 4 valence electrons → 4 bonds possible (hence the richness of organic chemistry).
> **Game relevance:** Valence electrons = active bond slots. A unit with 4 valence electrons can form 4 simultaneous connections. Filling all valence slots = complete/stable state.

**Probability cloud / electron cloud:** The spatial distribution of where an electron is likely to be found. Not a fixed orbit (Bohr model is wrong for anything but hydrogen). Electrons exist as wave-like probability densities until measured.
> **Game relevance:** Units don't have fixed positions — they have probability zones. "Measuring" (targeting) an electron collapses it to a specific location. This is the game mechanic equivalent of wave function collapse.

---

## 3. Nuclear Structure

### Key Terms

**Nucleon:** Any particle in the nucleus — proton or neutron. Mass number A = total nucleons.

**Nuclide:** A specific nucleus defined by its proton count (Z) and neutron count (N). Written as ᴬₓE where A = mass number, X = element symbol. E.g., ²³⁵U = uranium-235 (92 protons, 143 neutrons).

**Isotopes:** Atoms of the same element (same Z) with different neutron counts (different A). Examples:
- Carbon-12 (⁶p, ⁶n) — stable, standard carbon
- Carbon-13 (⁶p, ⁷n) — stable, ~1% of natural carbon
- Carbon-14 (⁶p, ⁸n) — radioactive, half-life 5,730 years (used in radiocarbon dating)
> **Game relevance:** Isotopes = same unit class, different stability/weight stats. Radioactive isotopes = self-destructing variant. Stable isotopes = standard form. Isotope swapping = stat reroll.

**Isobar:** Nuclides with the same mass number A but different atomic numbers Z. Example: Argon-40 and Calcium-40 (A=40, but Z=18 vs Z=20). Same weight, different element.
> **Game relevance:** Isobars = units with identical mass class but different faction/element allegiance.

**Isotone:** Nuclides with the same neutron count N but different Z. Less commonly invoked but relevant for nuclear structure patterns.

**Atomic number (Z):** Number of protons. Defines the element. Period table is ordered by Z.

**Mass number (A):** Total protons + neutrons. Approximate atomic mass in amu.

**Nuclear binding energy:** The energy required to completely disassemble a nucleus into individual protons and neutrons. Equivalently, the energy released when the nucleus forms from free nucleons. Binding energy per nucleon peaks at iron-56 (~8.8 MeV/nucleon) — iron is the most stable nucleus. Elements lighter than iron release energy by fusion; elements heavier than iron release energy by fission.

The **binding energy curve** is one of the most important graphs in nuclear physics:
- Light elements (H, He): low binding energy per nucleon → fuse to gain energy
- Iron (Fe-56): maximum → neither fusion nor fission releases energy
- Heavy elements (U, Pu): lower binding energy than Fe → fission releases energy
> **Game relevance:** The binding energy curve defines the energy economy of the game. Units near "iron" are maximally stable — hardest to split or fuse. Units far from iron (very light or very heavy) are energetically favorable to transform. Iron = the stability anchor of the universe.

---

## Cross-References

- [Behaviors & Forces](atomic-behaviors.md) — what these particles *do*
- [Quantum Concepts](atomic-quantum.md) — why electrons don't have fixed positions
- [Energy, Radiation & Periodic Table](atomic-energy-radiation.md) — how structure maps to the periodic table

## Sources

- Wikipedia: Subatomic particle, Quark, Electron, Neutron, Atomic orbital, Nuclide, Nuclear binding energy
- Britannica: Subatomic particle — Quarks, Hadrons, Gluons
- DOE Explains: Quarks and Gluons, Protons
- Chemistry LibreTexts: Atomic Orbitals and Quantum Numbers
- Purdue Chemistry: Quantum Numbers and Electron Configurations
