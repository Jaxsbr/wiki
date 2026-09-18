# Anti-Slop: Design System Approach

The primary technique for guiding AI toward distinctive, high-quality web design.
A design system document created *before* generation eliminates vague decisions at the source.

> "The fix isn't a better prompt. It's a design system — a reusable reference document you supply BEFORE asking Claude to build anything."

See also: [AI-Slop Visual Patterns](ai-slop-visual-patterns.md), [Anti-Slop: Prompting Techniques](anti-slop-prompting.md)

---

## Why Design Systems Beat Iterative Prompting

| Approach | Result |
|---|---|
| Vague prompt → iterate | "Silence = defaults"; every unconstrained decision reverts to AI norms |
| Better prompt | Applies once per prompt; doesn't prevent default regression |
| Design system document | Constrains ALL decisions upfront; reusable across projects |

**Key rule**: After 2–3 revision rounds without convergence toward your constraints, the problem
is the brief, not the model. Tighten the spec instead of generating more variants.

---

## Design System Components

A functional design system document must cover all seven areas:

### 1. Typography
- **Exact font names** — not categories ("heading font"), specific names (Clash Display, IBM Plex Sans)
- Font weights and pixel sizes — not "large" or "heading"
- Pairing rules: which fonts work together and why
- **Explicit negatives**: "Never use Inter, Roboto, Open Sans, system fonts, Geist, Space Grotesk"

**Fonts to choose from instead of defaults:**

| Context | Options |
|---|---|
| Editorial/premium | Playfair Display, Fraunces, Crimson Pro, Newsreader |
| Bold startup | Clash Display, Satoshi, Cabinet Grotesk, Bricolage Grotesque |
| Technical/professional | IBM Plex Sans, Source Sans 3, IBM Plex Mono |
| Distinctive/artistic | Obviously, Fraunces (variable serif), Bricolage Grotesque |

**Hierarchy rule**: Use extreme weight variation (100 vs 900, not 400 vs 600). Size jumps of 3×+, not 1.5×.

### 2. Colour Palette
- **Exact hex values** — not "modern blue" or "brand purple"
- Named functional roles: `primary`, `surface`, `error`, `warning`, `success`, `accent`
- Dark mode and light mode specified separately
- WCAG compliance stated: 4.5:1 for normal text, 3:1 for large text
- **Explicit ban on purple-blue gradients** and "VibeCode Purple"
- Dominant colour + sharp accent strategy (not timid even distributions)

**CSS variable approach** — purpose-driven naming:
```css
--color-primary: #[hex];    /* CTAs, links */
--color-surface: #[hex];    /* backgrounds */
--color-error: #[hex];
--color-accent: #[hex];     /* emphasis, highlights */
```

### 3. Spacing System
- Base unit: 4px or 8px
- Explicit scales and multipliers
- Padding/margin rules by component type
- Grid systems and max-widths
- **Override**: "Not uniform 24px everywhere"

### 4. Component Styling
- Button shapes, hover states, no default pill buttons
- Border radius: specific value AND explicit prohibition on uniform 16px everywhere
- Shadow specifications with named elevation levels (≤3 elevation levels)
- Input styling and form patterns
- Card and container styling

### 5. Layout Rules
- Grid and column specifications
- Hero section constraints (height, background treatment, content layout)
- Feature card arrangement (must it be three columns?)
- Responsive breakpoints

### 6. Motion Budget
- Maximum animations per page (e.g. "3 meaningful animations")
- Specific transition timing (ms) and easing functions
- Which components get motion — only those with state changes
- **Explicit ban**: no bounce easing, no decorative floating, no gradient text animation

**Motion budget example**:
```
Page load: one 0.8s staggered reveal on hero elements
Form focus: subtle colour transition (0.2s ease)
Primary CTA hover: scale(1.05) + shadow enhancement
State changes: loading spinner (1.5s rotation), disabled opacity
```

### 7. Visual Personality
- 3–4 adjective descriptors: "warm, technical", "bold, accessible", "minimalist, precise"
- **Anti-examples** (as important as examples): "NOT corporate", "NOT purple SaaS", "NOT trendy"
- Reference inspirations: IDE themes, cultural aesthetics, specific competitors
- Brand voice descriptors

---

## Design System Document Template

```markdown
# [Brand] Design System

## Visual Personality
- Aesthetic: [3-4 adjectives]
- We are NOT: [list anti-examples]
- Inspired by: [specific references]

## Typography
- Headlines: [Font name], weights [list]
- Body: [Font name], weights [list]
- Code/mono: [Font name]
- NEVER use: Inter, Roboto, Open Sans, system fonts, Geist

## Colour
- Primary: #[hex] (CTAs, key accents)
- Surface: #[hex] (backgrounds)
- Error: #[hex] | Warning: #[hex] | Success: #[hex]
- Accent: #[hex] (emphasis)
- All text must pass WCAG AA (4.5:1 normal, 3:1 large)
- NEVER use: purple-blue gradients

## Spacing
- Base unit: [4px / 8px]
- Button padding: [values]
- Card padding: [values]
- Section spacing: [values]

## Components
- Buttons: [border-radius], [hover state]
- Cards: [border-radius], [shadow level], [no left-border stripe]
- Inputs: [styling]
- Elevation: [3 named levels max]

## Motion
- Page load: [description]
- Interactive states: [which components, what motion]
- NEVER: bounce easing, decorative floating, gradient text animation
```

---

## Workflow: Constrain → Generate → Normalise → Gate

### Step 1: Constrain (before generation)
- Create the design system document
- Include one reference screen in the prompt
- Vague brief = vague output; tight brief = fast, accurate results

### Step 2: Generate (component by component)
- Request **one section at a time** — nav, hero, feature cards, CTA, footer
- Review and refine each before the next
- Prevents cascading style inconsistencies

### Step 3: Normalise (after generation)
- Replace ad hoc colours with design system tokens
- Remap shadows to ≤3 named elevation levels
- Realign spacing to the base grid
- Convert one-off styles to reusable variants

### Step 4: Gate (quality check before handoff)
Run the **15-minute pre-handoff audit**:

| Check | Pass threshold |
|---|---|
| Token coverage | 8/10 components use design system tokens |
| Shadow recipes | ≤3 elevation levels across all surfaces |
| Contrast | WCAG AA passes for all 5 core text styles (light + dark) |
| State coverage | Focus, hover, disabled, error, loading, empty present on all interactive components |
| Typography | All text uses defined font + weight + size from system |

Missing states → component stays in draft. Contrast failure → block handoff.

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Adding more visual complexity to fix generic output | Add constraint, not complexity |
| Fixing visuals but keeping AI copy | Regenerate design and copy together |
| One-off font/colour tweaks without systemic foundation | Build system first, then generate |
| Creating design for one page, regenerating unrelated styles elsewhere | Permanent design system across all projects |

---

## See Also
- [AI-Slop Visual Patterns](ai-slop-visual-patterns.md)
- [Anti-Slop: Prompting Techniques](anti-slop-prompting.md)
- [AI-Slop Web Design (overview)](../topics/ai-slop-web-design.md)
