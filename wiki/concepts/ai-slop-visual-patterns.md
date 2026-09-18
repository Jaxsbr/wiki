# AI-Slop Visual Patterns

**→ [See all 13 tells live and annotated](https://jaxsbr.github.io/wiki/demos/ai-slop.html)** — a real working example with red callouts on every pattern.  
**→ [Well-designed contrast](https://jaxsbr.github.io/wiki/demos/good-design.html)** — same content, none of the tells.

The specific, human-detectable tells that reveal AI-generated websites. Not one single tell —
a **constellation of patterns** converging on the mathematical average of the internet.

See also: [AI-Slop Web Design (overview)](../topics/ai-slop-web-design.md),
[Anti-Slop: Design System Approach](anti-slop-design-system.md)

---

## Typography

**Most reliable single tell.** AI defaults to Inter in 45%+ of detected cases.

### Default fonts to recognise
| Font | Signal strength |
|---|---|
| Inter | Strongest tell — appears universally across unrelated industries |
| Roboto | Common secondary default |
| Space Grotesk | "Startup aesthetic" overuse |
| Geist | Vercel/Next.js ecosystem, signals template usage |
| Instrument Serif | Decorative serif accent on otherwise-sans pages |
| Open Sans / Lato / Arial | Fallback system fonts |

### Typographic hierarchy failures
- Minimal font-size variation → flat, undifferentiated content
- Single typeface throughout — no contrast pairing
- Oversized italic serifs as hero headline purely for decoration
- Tiny uppercase labels ("SECTION LABEL") directly preceding large H1
- **Gradient text**: decorative colour transitions applied to headlines — spectacle without meaning

---

## Colour

### "VibeCode Purple" phenomenon
The single most cited visual tell: a specific lavender/purple-to-blue gradient appearing with
near-universal consistency across AI-generated designs.

**Why it dominates**: Cool saturated hues (purples, teals) dominated tech design in 2023–24.
They became overrepresented in training data. AI interprets "modern" as "what successful
SaaS companies used recently."

### Colour system absence
- Colours used as decoration, not function (no yellow for highlights, no red for warnings)
- Timid, evenly-distributed palettes instead of dominant colour + sharp accent
- No purpose-driven CSS variable naming (should be `--color-primary`, not `--color-purple`)
- Insufficient contrast — body text frequently fails WCAG AA even on dark themes

---

## Layout and Structure

### The canonical AI landing page template
1. Gradient hero (blue/purple) → centered headline → vague CTA
2. Three-column feature card grid
3. Testimonials section (avatar + quote + name/title/company)
4. Three-tier pricing table with checkmark lists
5. Stats banner ("10k+ customers / 50% faster / 99.9% uptime")
6. Final CTA → footer

Varies in order, almost never in content.

### Hero section tells
- Badge above headline: small pill ("AI-Powered", "Trusted by 10k+", "New Feature")
- Vague positioning statement: "Build the future", "Scale without limits", "Empower your team"
- CTA: "Get Started" / "Try Free" / "Join Waitlist"
- Decorative floating orbs or blurred gradient shapes
- Dark background with medium-grey body text

### Feature card tells
- Icon mounted directly above heading (not integrated with content)
- **Coloured left border**: 3–4px stripe, typically purple/blue — "almost as reliable a sign of AI-generated design as em-dashes are for AI text"
- Uniform 16px border radius on all cards and containers
- Identical 24px padding throughout, eliminating visual hierarchy

---

## Visual Effects and Animation

### Framework signatures
- **Glassmorphism**: frosted-glass (`backdrop-filter: blur`) on cards/modals — purely decorative
- **Shadcn/UI defaults**: explicitly designed for AI copy-paste; rounded buttons, subtle shadows, neutral greys

### Decorative effects
- Neon-glow box-shadows in purple/blue
- Blurred gradient orbs floating in backgrounds
- Monospace fonts in non-code decorative contexts

### Animation anti-patterns
AI adds animation for spectacle; professional design uses animation to communicate.

| Pattern | Problem |
|---|---|
| Bounce/elastic easing on buttons | Every button, no restraint |
| `width`/`height` animation | Causes layout reflow (janky) |
| Image scale on hover | Predictable, applied everywhere |
| Floating badges (slow drift) | Decorative without function |
| Wiggling/rotating icons | No state-change meaning |
| Gradient text colour cycles | Visual noise |

---

## Copy and Content

### Linguistic markers
- **Em-dash overuse**: "Build the future—without limits" (as reliable a text tell as purple is a visual one)
- Generic SaaS vocabulary: "streamline", "empower", "world-class", "cutting-edge", "unlock potential"
- **Lists of three**: everything described in triplets ("Fast, secure, reliable")
- Aspirational but non-specific headlines — nothing pinned to what the product actually does
- Hedge language — vague benefits, no specific claims

### Absence of brand voice
Professional copy has founder-inflected personality, specific opinionated claims,
company-specific terminology, and emotional tone. AI copy is interchangeable across
industries and emotionally invisible.

### Imagery
- Stock "diverse team in well-lit office" photos
- AI-generated illustrations with plastic smoothness, excessive symmetry, too-perfect lighting
- Hands with wrong anatomy (extra/merged fingers) — common AI image artefact
- Text embedded in images that appears blended or illegible

---

## Why These Patterns Converge

1. AI trains on billions of existing websites
2. Models identify statistically common patterns
3. Vague prompts trigger the most probable token sequence
4. This delivers the **average of the internet** — not the best of it
5. Popular patterns become *more* popular in training data (self-reinforcing cycle)
6. Training data skews toward well-funded tech companies (SaaS, fintech) and popular tools (Tailwind, shadcn/ui, Vercel)

---

## Detection Tools

- **Impeccable** (`npx impeccable detect`): deterministic CLI tool with 41 rules on CSS/DOM properties; browser extension for one-click scanning. No LLM — purely deterministic to avoid introducing AI bias into slop detection.

---

## See Also
- [AI-Slop Web Design (overview)](../topics/ai-slop-web-design.md)
- [Anti-Slop: Design System Approach](anti-slop-design-system.md)
- [Anti-Slop: Prompting Techniques](anti-slop-prompting.md)
