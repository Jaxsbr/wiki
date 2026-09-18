# Anti-Slop: Prompting Techniques

Prompt-level techniques to guide AI toward distinctive, high-quality web design.
These work best *combined with* a design system document — prompting alone is insufficient
because it applies once and doesn't prevent default regression across a project.

See also: [Anti-Slop: Design System Approach](anti-slop-design-system.md), [AI-Slop Visual Patterns](ai-slop-visual-patterns.md)

---

## The Core Anti-Slop Prompt (Anthropic Recommended)

Add this as a system prompt or conversation prefix for all frontend design requests:

```
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design,
this creates what users call the "AI slop" aesthetic. Avoid this: make creative,
distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic
fonts like Arial and Inter; opt instead for distinctive choices that elevate the
frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency.
Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only
solutions for HTML. Use Motion library for React when available. Focus on high-impact
moments: one well-orchestrated page load with staggered reveals (animation-delay)
creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors.
Layer CSS gradients, use geometric patterns, or add contextual effects that match
the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for
the context. Vary between light and dark themes, different fonts, different aesthetics.
</frontend_aesthetics>
```

---

## Typography Prompt Block

Add this to any prompt where font choice matters:

```
<use_interesting_fonts>
Typography instantly signals quality. Avoid using boring, generic fonts.

NEVER use: Inter, Roboto, Open Sans, Lato, default system fonts, Geist, Space Grotesk.

For this project, use [CHOSEN FONT] for headlines because [REASON].
Body: [CHOSEN FONT].

Pairing principle: High-contrast pairs (e.g., display + monospace) are preferred over
safe same-family choices.

Hierarchy: Use extreme weight variation (100 vs 900, not 400 vs 600).
Size jumps: 3× minimum between hierarchy levels, not 1.5×.

Load fonts from Google Fonts.
</use_interesting_fonts>
```

---

## Aesthetic Constraint Examples

### Solarpunk
```
<aesthetic_constraint>
Design with Solarpunk aesthetic:
- Warm, optimistic palettes (greens, golds, earth tones)
- Organic shapes mixed with technical elements
- Nature-inspired patterns
- Bright, hopeful atmosphere
- Retro-futuristic typography
</aesthetic_constraint>
```

### Minimal/Precise Technical Product
```
Design System Constraint:
Aesthetic: minimalist, precise, authoritative
Typography: IBM Plex Sans Bold (headings), IBM Plex Mono (code/accents)
Colors: [specific hex], black/white/greys only — no gradients
Spacing: 8px grid, 2× multiples only
Components: sharp corners, no shadows, max 1px borders
Motion: focus states and loading only — nothing decorative
NEVER use: rounded corners, gradients, Inter
```

### Warm Cultural Aesthetic
```
Design System Constraint:
Aesthetic: warm, locally-rooted, technical
Typography: Fraunces (editorial warmth), IBM Plex Sans (body clarity)
Colors: golds, warm earth tones, sunset oranges — no cool defaults
Motion: minimal — functional state changes only
Performance: optimise for slower connections
NEVER use: purple-blue gradients, cool tones, Western SaaS defaults
```

---

## Component Prompting Template

Generate one component at a time; review before proceeding to the next.

```
Generate a [COMPONENT NAME] following this design system:

Typography: [font], [weights], [sizes]
Colors: primary [hex], surface [hex], accent [hex]
Spacing: [base unit] grid
Border radius: [specific value — or "none"]
Motion: [specific interaction — or "none"]

What this component does:
[Describe user interaction and functional purpose]

NEVER:
- Use Inter or system fonts
- Apply uniform styling to all elements
- Add decorative animations without function
- Use purple gradients or glassmorphism

Reference aesthetic: [2-3 adjectives]
```

---

## The DESIGNER MODE Framework

A structured prompting approach for complex UI work (8 components):

1. **Decision context** — user needs and goals
2. **Environment & constraints** — device, screen size, usage conditions
3. **System & patterns** — reference existing design system
4. **Intent** — what should feel obvious and effortless
5. **Guardrails** — define failure explicitly (what won't work)
6. **Narrative** — how attention moves through the interface
7. **Evaluation criteria** — success metrics established before generation
8. **Refinement loop** — specific, measurable feedback on each iteration

---

## Negative Constraints (High Value)

Explicit "never do this" statements are often higher value than positive direction because they
directly override the statistical defaults AI would otherwise fall back on.

**High-impact negatives to include:**
- "Never use Inter, Roboto, Open Sans, or system fonts"
- "No purple or blue gradients"
- "No uniform 16px border radius on all elements"
- "No coloured left borders on cards"
- "No floating decorative orbs"
- "No bounce or elastic easing"
- "No gradient text effects"
- "No em-dashes in copy"
- "No hero badge reading 'AI-Powered' or similar"
- "No three-tier pricing with checkmark lists unless explicitly requested"

---

## Why Most Builders Skip Design Discipline

Understanding the failure mode helps you teach others to avoid it:

1. Tutorials emphasise workflow mechanics, not design principles
2. Developers prioritise speed — "good enough" output discourages refinement
3. Design feels optional when functionality is the goal
4. Prompting for design adds apparent time/complexity
5. The output looks plausible, so problems aren't noticed until comparison

**Fix**: Treat design constraints as non-negotiable requirements, equivalent to code specs.
A page without brand identity has a functional bug, not just an aesthetic one.

---

## Combined Approach (Most Effective)

1. Write the [design system document](anti-slop-design-system.md) once — reuse across the project
2. Attach the core anti-slop prompt as a system prompt
3. Add typography and colour blocks to each generation request
4. Generate component by component
5. Include explicit negative constraints in every prompt
6. Run the 15-minute quality audit before shipping

---

## See Also
- [Anti-Slop: Design System Approach](anti-slop-design-system.md)
- [AI-Slop Visual Patterns](ai-slop-visual-patterns.md)
- [AI-Slop Web Design (overview)](../topics/ai-slop-web-design.md)
