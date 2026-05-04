# Design System: Tania's Portfolio

## Color Palette

### Light Mode
**Primary Strategy**: Warm, earthy palette with cream backgrounds and beige accents

- **Cream (Primary BG)**: `oklch(98% 0.02 70)` (#faf8f5) — Main background
- **Beige (Accent)**: `oklch(80% 0.08 70)` (#e8dcc8) — Cards, sections, emphasis
- **Warm Brown**: `oklch(40% 0.06 70)` (#5a4a3a) — Primary text, headings
- **Soft Taupe**: `oklch(65% 0.05 70)` (#9a8a78) — Secondary text, metadata
- **Accent (Warm Gold)**: `oklch(65% 0.12 60)` (#c9a961) — CTAs, highlights, emphasis

### Dark Mode
**Strategy**: Deep, warm darks paired with cream accents

- **Dark Brown (Primary BG)**: `oklch(20% 0.05 70)` (#1a1410) — Main background
- **Dark Taupe (Card)**: `oklch(28% 0.05 70)` (#3a3026) — Cards, sections
- **Cream (Text)**: `oklch(92% 0.02 70)` (#f5f2ee) — Body text
- **Off-White (Headings)**: `oklch(96% 0.01 70)` (#faf8f5) — Primary text
- **Accent (Warm Gold)**: `oklch(70% 0.14 60)` (#e0b76f) — CTAs, highlights

### Status Colors
- **Success**: `oklch(65% 0.15 140)` (green)
- **Warning**: `oklch(70% 0.15 65)` (warm amber)
- **Error**: `oklch(55% 0.16 30)` (warm red)

## Typography

### Font Families
- **Heading Font**: System stack or `Inter` (modern, clean, professional)
- **Body Font**: System stack or `Inter` (excellent readability at all sizes)
- **Monospace** (if needed): `Monaco`, `Courier New`

### Type Scale
- **H1 (Hero)**: 56px / 1.2 line-height (brand/page title)
- **H2 (Section)**: 36px / 1.25 line-height
- **H3 (Subsection)**: 28px / 1.3 line-height
- **H4 (Card title)**: 20px / 1.4 line-height
- **Body**: 16px / 1.6 line-height (65-75ch max width)
- **Small**: 14px / 1.5 line-height (labels, metadata)
- **Tiny**: 12px / 1.4 line-height (captions, footnotes)

### Weight Contrast
- Headings: 600–700 (bold)
- Body: 400 (regular)
- Labels/metadata: 500 (medium)

## Spacing System
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
```
- Use varied spacing for rhythm; avoid uniform padding everywhere

## Elevation / Shadows
- **Subtle**: `0 1px 3px rgba(0, 0, 0, 0.08)`
- **Card**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Hover**: `0 8px 12px rgba(0, 0, 0, 0.12)`
- **Modal**: `0 20px 40px rgba(0, 0, 0, 0.2)`

## Motion Principles
- **Easing**: Ease-out (exponential, not linear bounce)
- **Duration**: 200–300ms for micro-interactions
- Avoid animating layout properties (use `opacity`, `transform` instead)

## Components

### Buttons
- **Primary**: Blue background, white text, rounded corners (6–8px)
- **Secondary**: Light gray background, dark text
- **States**: Normal → Hover (darker blue) → Active (pressed, slight inset)
- **Disabled**: Reduced opacity, no hover effect

### Cards
Use sparingly. Only for distinct, independent items. Never nest cards.

### Forms
- **Input**: Light gray border, rounded corners, padding 12px
- **Focus**: Blue border, subtle shadow
- **Label**: Medium weight, 14px, above input

### Navigation
- **Sticky header**: Subtle shadow, high z-index
- **Links**: Blue text, underline on hover, no "visited" state change (trust)

## Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px – 1024px
- **Desktop**: > 1024px

## Accessibility
- Minimum contrast ratio: 4.5:1 for body text
- Focus indicators: Always visible, 2px outline
- Button size: Minimum 44×44px for touch targets
- Semantic HTML: Use `<button>`, `<a>`, `<nav>`, `<section>`, etc.

## Current Recommendations for Enhancement
- **Typography**: Upgrade to a premium system font (Inter or Outfit)
- **Spacing**: Increase vertical rhythm; vary card spacing for rhythm
- **Color depth**: Consider subtle background tints in sections (light blue, off-white alternation)
- **Hierarchy**: Strengthen visual distinction between primary actions and secondary content
- **Micro-interactions**: Add smooth transitions on hover, focus, and state changes
