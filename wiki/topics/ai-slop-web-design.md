# AI-Slop Web Design: Patterns and Prevention

> Sources: multi-source research (925 Studios, Impeccable, Developers Digest, Claude Cookbook, Managed Code, Medium — see [ai-slop-research-notes](/sources/ai-slop-research-notes.md))

## Live Demos

| | |
|---|---|
| **[Annotated AI-Slop Demo →](https://jaxsbr.github.io/wiki/demos/ai-slop.html)** | A canonical "VibeCode Purple" landing page with 13 annotated tells. Count how many you spot before reading the legend. |
| **[Well-Designed Version →](https://jaxsbr.github.io/wiki/demos/good-design.html)** | Same content, different constraints. Design notes explain every choice. |

---

## What Is AI Slop?

"AI slop" is design that lacks system-level ownership and personality. Individual components
may look polished, but the underlying design system is absent. The result is websites that are
*technically clean but emotionally invisible* — indistinguishable from every competitor and
immediately recognisable to anyone with design experience.

Root cause: AI doesn't design websites — it predicts patterns. Given a vague prompt ("make a
modern SaaS landing page"), a model calculates the statistical average of its training data and
delivers the most probable token sequence. The result converges on whatever dominated the
web in 2023–2024.

**Measured prevalence** (Adrian Krebs, analysis of 1,590 Show HN landing pages):
- 22% heavy slop — multiple clear AI tells
- 32% mild slop — some AI patterns visible
- 46% clean — no obvious AI signatures

**Detection speed**: Professional designers report identifying AI-generated sites in ~0.5 seconds.

---

## Two Sides of the Problem

This topic has two halves — each has its own page:

### 1. Detectable patterns ("tells")
→ [AI-Slop Visual Patterns](../concepts/ai-slop-visual-patterns.md)

The specific typography, colour, layout, animation, and copy patterns that betray AI generation.
Understanding the tells is the diagnostic layer — it tells you *what* to avoid.

### 2. Prevention techniques ("anti-slop")
→ [Anti-Slop: Design System Approach](../concepts/anti-slop-design-system.md)  
→ [Anti-Slop: Prompting Techniques](../concepts/anti-slop-prompting.md)

The methodologies for guiding AI toward distinctive, high-quality output. Two complementary
approaches: design system specification (the primary technique) and prompt engineering.

---

## The Core Insight

> "Silence in your design system = Claude defaults. Every unconstrained decision will revert to the norm."

AI doesn't lack creativity — it averages patterns when given unclear direction. The solution
is **explicit constraint before generation**, not iterative prompting after. Design systems
eliminate vague decision-making at the source. Better prompts help but are secondary.

**Generation is the beginning of design work, not the finish line.**

---

## Quick Reference: Top Tells

| Category | Most Reliable Tell |
|---|---|
| Typography | Inter font everywhere; flat hierarchy; gradient text |
| Colour | Purple-blue gradients ("VibeCode Purple"); dark mode default |
| Layout | Hero → 3-card features → testimonials → pricing → footer |
| Components | Uniform 16px border radius; coloured left border on cards |
| Copy | Em-dashes; "streamline / empower / unlock potential"; lists of three |
| Animation | Bounce easing on buttons; floating decorative orbs |
| Imagery | "Diverse team in well-lit office" stock photos |

Full taxonomy → [AI-Slop Visual Patterns](../concepts/ai-slop-visual-patterns.md)

---

## Quick Reference: Top Prevention Techniques

| Technique | Impact |
|---|---|
| Pre-generation design system document | Highest — eliminates vague decisions |
| Explicit negative constraints ("never use Inter") | High — direct override of defaults |
| Component-by-component generation | High — allows refinement at each step |
| Distinctive font pairing | Immediate visual differentiation |
| Functional colour system with hex values | Eliminates "VibeCode Purple" defaults |
| 15-minute post-generation audit | Catches slop that survives into output |

Full technique detail → [Anti-Slop: Design System Approach](../concepts/anti-slop-design-system.md)

---

## Business Impact

For B2B/SaaS, AI slop has measurable conversion effects:
- Prospects viewing identical layouts across competitors question product differentiation
- Generic aesthetics undermine credibility and brand trust
- The "know / like / trust" marketing pillars are all degraded by interchangeable design

---

## See Also

- [AI-Slop Visual Patterns](../concepts/ai-slop-visual-patterns.md)
- [Anti-Slop: Design System Approach](../concepts/anti-slop-design-system.md)
- [Anti-Slop: Prompting Techniques](../concepts/anti-slop-prompting.md)
