# Design System — ANM Accounting

## Aesthetic Direction
**Editorial-financial.** Think Financial Times feature article, Monocle profile, or the marketing site of a serious independent investment firm — translated into a Glasgow accountancy context. Not corporate, not fintech, not template.

Generous whitespace, decisive typographic hierarchy, one committed blue, sandstone-warm neutrals (a nod to Glasgow's actual architecture rather than sterile white). Numbers and figures treated as first-class design elements. The site should read as a confident document, not a sales pitch.

## Color Strategy
**Committed** — one saturated deep blue carries 30–50% of the visible surface, paired with a warm off-white and a dark sandstone-ink. No gradient blues. No additional accent colors except a single restrained burnt-amber used sparingly for in-text emphasis and arrow indicators.

### Tokens (OKLCH)

```
--ink:        oklch(0.22 0.015 250)    /* near-black, cool */
--ink-soft:   oklch(0.35 0.012 250)    /* body text on light */
--ink-mute:   oklch(0.55 0.010 250)    /* secondary text */
--ink-faint:  oklch(0.72 0.008 250)    /* tertiary / captions */

--paper:      oklch(0.975 0.008 85)    /* warm off-white, sandstone-tinted */
--paper-deep: oklch(0.94 0.012 85)     /* section bands, cards */
--rule:       oklch(0.88 0.010 85)     /* hairline borders */

--blue:       oklch(0.38 0.13 245)     /* THE blue — deep oceanic, not navy */
--blue-deep:  oklch(0.28 0.11 245)     /* pressed / hovered solid */
--blue-soft:  oklch(0.92 0.04 245)     /* tinted backgrounds */
--blue-ink:   oklch(0.52 0.14 245)     /* link color on paper */

--amber:      oklch(0.62 0.14 55)      /* restrained accent — used in <2% of surface */

--success:    oklch(0.55 0.12 155)
--danger:     oklch(0.55 0.18 28)
```

**Usage rules**
- `--paper` is the default surface. `--paper-deep` for alternating sections. `--blue` for the brand-heavy hero/footer.
- `--ink` for display headlines on paper. `--paper` for headlines on `--blue`.
- `--amber` is for arrow glyphs in inline links, the occasional underline accent on a deck/standfirst. Never for body backgrounds, never for buttons.
- Never `#000` or `#fff`. Every neutral has a hint of warm chroma.

## Typography
**Display: Fraunces** (variable serif, optical sizes). Used for H1–H3 at heavy optical sizes with -2% to -3% letter-spacing for editorial gravitas. Italics used assertively for the standfirst/deck under headlines.

**Body & UI: Inter** (variable). 16px base, 1.55 line-height, optical-sized.

**Numerals: Fraunces tabular figures** for any displayed figures (tax bands, fees, percentages). This is the brand's visual signature.

### Scale (rem)
```
display-1:  clamp(3.5rem, 7vw, 6rem)     /* hero */
display-2:  clamp(2.5rem, 4.5vw, 4rem)   /* section openers */
h1:         clamp(2rem, 3.2vw, 2.75rem)
h2:         1.75rem
h3:         1.25rem
deck:       1.375rem  /* italic standfirst */
body-lg:    1.125rem
body:       1rem
small:      0.875rem
caption:    0.75rem   /* uppercase tracked, used for eyebrow labels */
```

Hierarchy contrast: display steps use weight 500–600 (Fraunces feels heavy already), body 400, captions 500 uppercase with +8% letter-spacing.

Max body line length: **65ch**. Long-form sections may go to 72ch.

## Layout
- **12-column editorial grid** with asymmetric placement — copy blocks don't always span the same columns. Vary widths to create rhythm.
- Section vertical rhythm: large sections use 7–10rem top/bottom padding on desktop. Tight sections (rules, lists) use 3rem.
- Containers max-width **1280px** for editorial sections, 1440px for full-bleed image/blue bands.
- **No card grids.** Services and similar lists use ruled rows with generous internal padding, numbered (01, 02…) in tabular Fraunces. Borders are full hairlines (1px `--rule`) above and below — never side-stripe accents.

## Components

### Eyebrow label
Uppercase Inter 500 12px, letter-spacing 0.12em, color `--ink-mute`. Often paired with a short rule (1px × 24px in `--blue` or `--ink-faint`).

### Standfirst / deck
Fraunces italic 1.375rem, color `--ink-soft`, max-width 52ch. Sits directly under a display headline. Italic is load-bearing — it carries the editorial voice.

### Primary CTA
Solid `--blue` background, `--paper` text. Inter 500, no rounded corners beyond 4px. Internal padding 18px vertical / 28px horizontal. An inline arrow glyph (→) in `--amber` to the right of the label. On hover, background shifts to `--blue-deep` and the arrow nudges 4px right (transform, not layout).

### Secondary CTA
Text link in `--blue-ink` with a `--amber` arrow glyph. Underlined on hover only.

### Numbered rows (services list, principles list)
Two-column row: left column 2-digit number in Fraunces 1.5rem tabular, right column heading + body. Top and bottom hairline rules. ~32px row padding. Hover: row background tints to `--paper-deep`.

### Pull quote / figure block
For tax band tables, fee summaries, statistics. Fraunces tabular numerals at large sizes (3–4.5rem), Inter caption underneath. Always set against `--paper-deep` or `--blue` band — never a floating card.

## Elevation
**Almost none.** This is a print-first aesthetic. No drop shadows on surfaces. The only elevation cue is the hairline rule (1px `--rule`) separating bands. Sticky header gets a 1px bottom border in `--rule` when scrolled, no shadow.

## Motion
- Hover transitions: 180ms `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart).
- Arrow nudges on hover: `transform: translateX(4px)`, never margin/padding.
- Section reveals on scroll: subtle fade + 12px upward translate, 600ms, ease-out-quart, triggered once per element. Restraint matters — this is not an animation-forward design.
- No bouncing, no elasticity, no parallax.

## Imagery
- Photographic only where it earns its place: a single portrait of the principal (or partner team) on the About page, perhaps one architectural Glasgow exterior shot in the hero or footer band. Black-and-white or low-saturation duotone toward the brand blue.
- No stock photography. No icon sets in the marketing surface.
- Iconography limited to: arrow glyph (→), a single chevron, and a tabular bullet (▪). That's it.

## Anti-patterns (banned in this project)
- Hero metric template (big number + label + 3 supporting stats + accent line).
- Three-column "Our Services" card grid with icon + title + description.
- Gradient blues, gradient text, glassmorphism.
- Drop shadows on anything.
- Side-stripe colored borders on callouts or alerts.
- "Trusted by" logo wall using grayscale partner logos.
- Em dashes in copy. Use commas, colons, or periods.

## Implementation
- **Stack:** Next.js 16 App Router, Tailwind CSS v4 with `@theme` tokens mapped to the OKLCH variables above, Fraunces + Inter via `next/font/google`.
- **Tailwind:** custom utilities for the typographic scale (`text-display-1`, `text-deck`, etc.), color tokens (`bg-paper`, `text-ink`, `bg-blue`).
- All copy is real and specific. No "Lorem ipsum," no "Your tagline here."
