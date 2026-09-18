# Atomic Behaviors & Forces

> Deep dive 2 of 4 for [R-007](../topics/atomic-physics-for-game-design.md). How atoms act: the four forces, electron behavior, nuclear reactions, and chemical bonding.

---

## 1. The Four Fundamental Forces

All interactions in the universe reduce to four forces. At the atomic scale, strong and electromagnetic forces dominate; weak force governs decay; gravity is negligible.

### Strong Nuclear Force

**What it is:** The strongest force in nature. Binds quarks together inside protons and neutrons (via gluon exchange). The *residual* strong force (also called nuclear force) then binds protons and neutrons together inside the nucleus.

**Properties:**
- Strongest of all four forces (reference strength = 1)
- Extremely short range: ~1–3 femtometers (the size of a nucleus)
- Acts equally on protons and neutrons (charge-blind)
- Attractive at nuclear distances; becomes repulsive at very short distances (< 0.7 fm)
- Without it, proton-proton electromagnetic repulsion would blow every nucleus apart

**Carrier:** Gluons (for quark-quark binding); pions (approximate carrier for nucleon-nucleon binding — really a residual effect)

> **Game relevance:** Strong force = structural integrity stat. A nucleus's "health points" are determined by how well the strong force overcomes proton repulsion. When binding energy is exceeded (hit points depleted), the nucleus fragments. Heavy nuclei (many protons repelling each other) are inherently less stable. Mechanic: large nuclei need more neutrons to pad out the proton-proton repulsion — too many or too few neutrons = instability.

---

### Electromagnetic Force

**What it is:** Governs interactions between charged particles. Opposite charges attract; same charges repel. Responsible for: all chemical bonding, light, electricity, magnetism, the behavior of electrons in atoms, and the repulsion between protons in a nucleus.

**Properties:**
- ~137× weaker than the strong force at nuclear distances
- Infinite range (falls off as 1/r²)
- Acts only on charged particles
- Carrier: photon (massless, speed of light)
- Can be attractive OR repulsive

> **Game relevance:** EM force = the universal attraction/repulsion mechanic. Charge is the primary stat for EM interactions. Positive charges repel positives, attract negatives — this is the basis of all "bonding" mechanics. Photons as projectiles carry EM force at the speed of light. Light = EM radiation = the visible manifestation of this force.

---

### Weak Nuclear Force

**What it is:** Governs radioactive beta decay and other transformations where quarks change flavor (e.g., a down quark in a neutron becomes an up quark, turning the neutron into a proton — beta-minus decay). Also responsible for neutrino interactions.

**Properties:**
- ~10⁻⁶ × strength of strong force
- Extremely short range (< 0.1 fm — smaller than a proton)
- Acts on all quarks and leptons (electrons, neutrinos)
- The only force that can change particle flavor (type)
- Carriers: W⁺, W⁻, Z⁰ bosons (very heavy, ~80–91 GeV)

> **Game relevance:** Weak force = the corruption/transformation mechanic. It's the force of change — it converts one thing into another. Beta decay is the weak force at work: a neutron flips to a proton (or vice versa), completely changing nuclear identity. Mechanic: units under "weak force" debuffs slowly change type over time. Neutrinos produced alongside = invisible byproduct that passes through everything.

---

### Gravity

**What it is:** Attractive force between all masses. Weakest of the four forces at atomic scales by an enormous margin.

**Properties:**
- ~10⁻³⁸ × strength of strong force
- Infinite range (falls off as 1/r²)
- Always attractive, never repulsive
- Acts on all massive particles
- Carrier: graviton (hypothesized; not yet detected)
- Negligible at atomic and subatomic scales

> **Game relevance:** Gravity is irrelevant at the particle level — use it only at macro scale (planetary/stellar physics). In a game context, gravity becomes interesting at the scale of neutron stars and black holes — objects where atomic structure collapses under gravitational pressure. Mechanic: extreme gravity as an environmental hazard that crushes atomic structures, overcoming the strong force itself (neutron star = nuclear matter squeezed to nuclear density planet-wide).

---

## 2. Electron Behavior

### Energy Levels and Quantum States

Electrons in atoms exist only at specific, discrete energy levels — they cannot have arbitrary energies (unlike classical physics). This quantization is a core quantum effect.

**Ground state:** The lowest possible energy state for an electron in a given atom. The configuration where all electrons occupy the lowest available orbitals. The "default" or "resting" state. An electron (or atom) is in its ground state when it has not been excited.

**Excited state:** An electron has absorbed energy (a photon, heat, collision) and jumped to a higher energy orbital. This state is temporary — excited electrons return to ground state by emitting a photon.

**Excitation:** The process of promoting an electron from a lower to a higher energy level by supplying exactly the right amount of energy. Like stepping up stairs — only discrete steps are allowed. Photon absorption is the most common excitation mechanism.
> **Game relevance:** Excitation = temporary power boost. Unit absorbs a specific amount of energy → jumps to excited state → gains new abilities/stats → must emit energy (attack/burst) to return to ground state. Each element has a unique excitation "fingerprint" (emission spectrum) — units of the same type all glow in the same color when excited.

**Ionization:** Removing an electron completely from an atom, creating an ion. The energy required is the **ionization energy**. The resulting atom is positively charged (lost an electron → net positive). Adding electrons creates negative ions.
> **Game relevance:** Ionization = removing a defensive layer. First ionization = easiest (outermost electron). Each successive ionization costs more energy (inner electrons are more tightly bound). Fully stripped ions (all electrons removed) = bare nuclei — maximally charged, maximally reactive.

**Emission spectrum:** Each element emits light at specific wavelengths (colors) when its electrons drop from excited states to lower states. These are the element's "fingerprints" — unique patterns of spectral lines. Sodium emits the characteristic yellow of street lights (589 nm doublet). Hydrogen's spectrum: red at 656 nm, cyan at 486 nm, violet at 434 nm.
> **Game relevance:** Emission spectrum = unit identity color code. Each element type has a unique visual signature (glow color set). Identify unknown elements by the colors they emit when energized. An "emission spectrum scanner" could be a game tool that reveals enemy element types.

**Absorption spectrum:** The same spectral lines, but in absorption — light at those specific wavelengths is absorbed (not emitted) when passed through a cool gas of that element. Dark lines appear in the spectrum at characteristic positions.
> **Game relevance:** Absorption = selective immunity. An element is "immune" to photons at the exact wavelengths it emits. Armor that absorbs specific damage frequencies.

**Photoelectric effect:** When photons of sufficient energy strike a metal surface, they eject electrons. There is a minimum threshold frequency below which no electrons are ejected regardless of light intensity. Above the threshold, electron energy scales with photon frequency (not intensity). Einstein's explanation of this won him the Nobel Prize (1921) and was crucial evidence for photon quantization.
> **Game relevance:** Threshold mechanics — below minimum energy, no effect at all (not "weak effect"). Exceeds threshold → energy surplus goes directly to the ejected particle. Design pattern: hard gates, not soft scaling, for some interactions.

---

## 3. Nuclear Behavior

### Radioactive Decay

Unstable nuclei spontaneously transform to reach a more stable configuration. The transformation is random at the individual nucleus level but statistically predictable in bulk (governed by the **half-life**).

**Half-life:** The time required for exactly half of a given quantity of radioactive atoms to decay. A statistical property — you cannot predict which individual nucleus will decay, only the overall rate. Half-lives span from nanoseconds (technetium-106: ~36 seconds) to billions of years (uranium-238: 4.47 billion years).
> **Game relevance:** Half-life = decay timer that's probabilistic, not deterministic. At small unit counts (few atoms), the randomness is significant — this is "small-number statistics" and creates unpredictable behavior at small scales. At large counts, the average is reliable.

**Alpha decay (α):** A heavy nucleus ejects an alpha particle: a helium-4 nucleus (2 protons + 2 neutrons). The parent nucleus loses 2 protons and 2 neutrons. Alpha particles are heavy, have charge +2, and are stopped by a sheet of paper or the outer layer of skin — but are highly damaging if inhaled or ingested. Common in heavy elements (uranium, radon, radium).
- Decay equation: ᴬ_ZX → ᴬ⁻⁴_(Z-2)Y + ⁴₂He
> **Game relevance:** Alpha decay = large chunk expelled (−2 protons, −2 neutrons). The daughter nucleus is a completely different element (−2 in Z). Alpha projectiles: short-range, stopped by light armor, but devastating if they get inside. High damage, low penetration.

**Beta-minus decay (β⁻):** A neutron in the nucleus converts to a proton, emitting an electron (beta particle) and an antineutrino. The nucleus gains one proton (Z increases by 1), becoming the next element up.
- n → p + e⁻ + anti-neutrino
- Example: Carbon-14 → Nitrogen-14 + electron + antineutrino
> **Game relevance:** Beta-minus = identity shift. The unit gains a proton and becomes the next element — transformation mechanic. Beta particle (electron) emitted as medium-range projectile (stopped by plastic or thin metal). Antineutrino = invisible byproduct.

**Beta-plus decay (β⁺):** A proton converts to a neutron, emitting a positron and a neutrino. Z decreases by 1 — becomes the previous element.
- p → n + e⁺ + neutrino
> **Game relevance:** Beta-plus = reverse identity shift. Emits a positron — which will annihilate on contact with any electron, releasing two 511 keV gamma photons. Powerful ranged weapon: shoot positrons into electron-rich targets for guaranteed annihilation burst.

**Gamma decay (γ):** An excited nucleus releases energy as a gamma-ray photon, without changing Z or A. Often follows alpha or beta decay (the daughter nucleus is in an excited state, then emits gamma to reach ground state).
> **Game relevance:** Gamma decay = burst energy release without changing composition. Pure energy output. Gamma rays are highly penetrating (stopped only by thick lead/concrete). Gamma burst = area-denial energy weapon, pierces most armor.

**Electron capture:** A proton-rich nucleus captures one of its inner-shell electrons (K-shell most commonly), converting a proton to a neutron. Z decreases by 1. A neutrino is emitted. The "hole" left in the K-shell is filled by an outer electron, emitting an X-ray.
> **Game relevance:** Electron capture = "absorbing" your own defense to fuel transformation. Consumes an inner-shell electron (a core resource) to change element identity. Produces X-ray flash as byproduct.

**Decay chain:** A sequence of radioactive decays from a parent nuclide through a series of daughter nuclides until a stable end-product is reached. Uranium-238's decay chain has 14 steps, ending at lead-206. The chain passes through radon (a radioactive gas) — the most significant source of natural radiation exposure for humans.
> **Game relevance:** Decay chains = transformation sequences. Starting material → intermediate products (some more dangerous than original) → eventual stable end-state. Game mechanic: some weapons or resources are most dangerous in intermediate decay states, not the starting form.

---

### Nuclear Fission

**Fission:** A heavy nucleus splits into two (or rarely three) smaller nuclei, releasing energy and 2–3 neutrons. The released neutrons can trigger further fission events — the basis of the chain reaction.

Key facts:
- Only heavy nuclei (typically Z ≥ 90) can fission spontaneously or with thermal neutron capture
- **Fissile** nuclides can sustain a chain reaction with slow (thermal) neutrons: U-235, Pu-239, U-233
- **Fissionable** nuclides require fast neutrons to fission: U-238 (will fission, but won't sustain chain reaction)
- Each fission of U-235 releases ~200 MeV — about 50 million times more than burning one carbon atom (~4 eV)
- Releases 2–3 neutrons per event (average ~2.4 for U-235)

**Chain reaction:** Each fission event releases neutrons that trigger further fissions. If each neutron causes less than one new fission, the chain dies out (subcritical). If exactly one causes a new fission, steady controlled reaction (critical). If more than one, exponential growth (supercritical — bomb or meltdown).

**Critical mass:** The minimum amount of fissile material needed to sustain a self-sustaining chain reaction. Depends on geometry, density, and the presence of a reflector (material that bounces neutrons back in). Spherical geometry minimizes critical mass. The critical mass of U-235 is ~52 kg as a bare sphere; ~15 kg with a good neutron reflector.
> **Game relevance:** Fission = chain reaction mechanic. One event triggers multiple others — exponential amplification above a threshold. Critical mass is the threshold mechanic: below it, the chain dies; above it, cascade. Design: AOE weapon that has no effect below 52 units but detonates catastrophically above threshold. Neutrons as "chain" particles that must reach neighbors.

---

### Nuclear Fusion

**Fusion:** Two light nuclei combine to form a heavier nucleus, releasing energy. The combined mass of the products is slightly less than the mass of the inputs — this mass difference is released as energy (E = mc²).

Most important reaction (sun/stars/H-bomb):
- Deuterium (²H) + Tritium (³H) → Helium-4 + neutron + 17.6 MeV
- Deuterium + Deuterium → several possible products

Fusion releases energy only when fusing nuclei lighter than iron (Fe-56 is the stable peak). Elements heavier than iron absorb energy when fused.

Barrier to fusion: the **Coulomb barrier** — protons repel each other electromagnetically. You must force nuclei close enough (< 1 fm) for the strong force to take over and hold them together. This requires extreme temperature and pressure (millions to billions of Kelvin).
> **Game relevance:** Fusion = high-risk, high-reward combination mechanic. Combining two light units creates one more powerful unit, releasing a burst of energy. The barrier to fusion = activation cost. Lightweight units near the top of the binding energy curve are the most rewarding to fuse. "Cold fusion" (at low energy) = essentially impossible classically, but quantum tunneling allows a small probability → very rare chance of spontaneous fusion below the classical threshold.

---

### Nuclear Reactor Components

**Moderator:** Material that slows (thermalizes) fast neutrons to slow neutrons suitable for inducing fission in U-235. Common moderators: ordinary water (H₂O), heavy water (D₂O), graphite. Slow neutrons are ~1000× more likely to cause fission in U-235 than fast neutrons.
> **Game relevance:** Moderator = slow/amplify mechanic. Slowing down projectiles/units makes them MORE effective at triggering reactions (counterintuitive but real).

**Control rod:** Rods made of neutron-absorbing materials (boron, cadmium, hafnium) inserted into the reactor core. More rod insertion = fewer neutrons available = slower/stopped reaction. Emergency shutdown = "SCRAM" (all rods fully inserted).
> **Game relevance:** Control rods = throttle mechanic for chain reactions. Insert = brake. Remove = accelerate. Emergency shutdown = panic button.

**Coolant:** Gas or liquid circulating through the reactor core to carry heat away. Common coolants: water (most reactors), CO₂ (Magnox reactors), liquid sodium (fast reactors). Loss of coolant = meltdown risk.
> **Game relevance:** Coolant = heat management resource. Chain reactions generate heat; if heat exceeds capacity without coolant, cascading failure.

**Prompt neutrons:** The ~99% of fission neutrons released within 10⁻¹⁴ seconds of fission. Too fast to control mechanically — reactors would be uncontrollable if only prompt neutrons existed.

**Delayed neutrons:** The ~1% of fission neutrons emitted seconds to minutes later from certain fission product nuclei. Even though a small fraction, they are essential for reactor control — they slow the effective neutron multiplication rate enough that mechanical control rods can respond in time.
> **Game relevance:** Prompt vs. delayed neutrons = immediate vs. sustained damage. Delayed neutrons create a window for intervention: react within seconds/minutes or suffer consequences. Mechanic: some effects are instant (prompt), others are "timed" triggers (delayed).

---

## 4. Chemical Bonding

Chemistry = the behavior of valence electrons. All chemical bonds are fundamentally electromagnetic — the attraction between opposite charges (or shared electron clouds).

### Primary Bonds (Strong)

**Covalent bond:** Electrons are *shared* between two atoms. Both atoms contribute electrons to a bond; both atoms' nuclei attract the shared electron pair. Covalent bonds are directional and form between non-metals. Single bond = 1 shared pair; double = 2 pairs; triple = 3 pairs. The more pairs shared, the shorter and stronger the bond.
- Example: H₂O has two O-H covalent bonds; O=O (dioxygen) is a double bond; N≡N is a triple bond (extremely strong)
> **Game relevance:** Covalent bonds = mutual-resource-sharing. Two units each contribute slots; shared electrons = combined power/resource locked in the bond. Breaking the bond recovers the electrons but costs energy equal to bond strength.

**Ionic bond:** One atom *transfers* electrons to another. The atom that loses electrons becomes a positive ion (cation); the receiver becomes a negative ion (anion). Opposite charges attract, forming the bond. Common between metals and non-metals. Example: Na⁺Cl⁻ (sodium chloride / table salt).
> **Game relevance:** Ionic bond = full transfer mechanic. One unit captures a resource from another; the donor becomes positively charged (seeks electrons), receiver becomes negatively charged (repels electrons). Crystaline structures (salt lattices) = grid/array of alternating charges — very stable.

**Metallic bond:** A lattice of positive metal ions immersed in a "sea" of free, delocalized valence electrons. Electrons are not tied to any specific atom — they flow freely. This explains electrical conductivity, thermal conductivity, and malleability of metals.
> **Game relevance:** Metallic bond = communal resource pool. Unit collective shares electrons freely among all members. Any unit in the collective can access the electron pool. Adding heat excites electrons → more free motion → electrical current. Conductivity = how fast resource flows through the collective.

### Secondary (Weaker) Bonds

**Hydrogen bond:** A special type of dipole-dipole attraction. Occurs when hydrogen is covalently bonded to a very electronegative atom (O, N, or F), creating a partial positive charge on the H. This H then attracts the lone pairs of another electronegative atom nearby. NOT a true bond (no electron sharing/transfer), but significantly stronger than other intermolecular forces. Crucial for DNA base pairing, water's unusual properties, protein folding.
- Strength: ~5–30 kJ/mol (covalent bonds: 150–1000 kJ/mol)
> **Game relevance:** Hydrogen bonds = temporary alliances. Directional, specific (only H bonded to O/N/F), and weak enough to break at moderate energy — but strong enough to create structure. DNA's double helix uses hydrogen bonds between base pairs (A-T: 2 H-bonds; G-C: 3 H-bonds) — easy to unzip for copying but stable enough to store information.

**Van der Waals forces:** Weak, short-range forces between all atoms and molecules, arising from temporary fluctuations in electron distribution. Three types:
1. **London dispersion forces** (all molecules): temporary dipoles in one molecule induce dipoles in neighbors. Very weak but universal.
2. **Dipole-dipole forces** (polar molecules): partial charges on polar molecules attract each other.
3. **Hydrogen bonds** (special case, covered above).

Van der Waals forces explain: why noble gases can condense into liquids at very low temperatures; why geckos can walk on walls (millions of tiny van der Waals contacts between toe hairs and surface).
> **Game relevance:** Van der Waals = passive adjacency bonuses. When units are close but not formally bonded, they still exert weak mutual attraction. Enough weak contacts in parallel = significant structural force (gecko effect: individually weak, collectively strong).

### Electronegativity

**Electronegativity:** A dimensionless measure of an atom's tendency to attract electrons to itself in a bond. Measured on the Pauling scale (0–4). Fluorine is most electronegative (3.98); cesium is least (0.79).

Electronegativity difference determines bond type:
- **Δ < 0.5:** Non-polar covalent (equal sharing)
- **0.5 ≤ Δ < 1.7:** Polar covalent (unequal sharing; partial charges)
- **Δ ≥ 1.7:** Ionic (transfer)
> **Game relevance:** Electronegativity = greed stat. High electronegativity = draws electrons to itself from bond partners. Two high-EN atoms fight over electrons (polar). Very high Δ = one wins completely (ionic). In game: determines who gets the resource in a shared bond mechanic.

### Valence

**Valence:** The number of bonds an atom can form, determined by the number of valence electrons (or "holes" available to pair up). Carbon has valence 4 — hence 4 bonds in methane (CH₄), the backbone of organic chemistry. Oxygen has valence 2 (as in water, H₂O).

Traditional valence relates to the number of hydrogen atoms an element can combine with (or replace). In modern terms, it's the number of bonding partners.
> **Game relevance:** Valence = connection limit. A carbon unit can bond to 4 others simultaneously; an oxygen can bond to 2. The connectivity limit shapes what molecular structures are possible. Maximizing connections within valence limits = puzzle/optimization mechanic.

---

## Cross-References

- [Atomic Structure](atomic-structure.md) — particles and orbitals that govern these behaviors
- [Quantum Concepts](atomic-quantum.md) — the quantum mechanics underlying bonding and decay
- [Energy, Radiation & Periodic Table](atomic-energy-radiation.md) — radiation types and energy units

## Sources

- Space.com: The Four Fundamental Forces of Nature
- CERN Standard Model
- Chemistry LibreTexts: Development of Quantum Theory
- World Nuclear Association: Nuclear Power Reactors, Physics of Uranium and Nuclear Energy
- Basics of Nuclear Physics and Fission — IEER
- Britannica: Nuclear fission, Chemical bonding
- SA Materials: Bonding Types and Van der Waals Forces
- Wikipedia: Radioactive decay, Nuclear fission, Chemical bond
