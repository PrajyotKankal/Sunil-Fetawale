# Design System
## Sunil Phetawale Wedding Accessories

*Quiet Luxury Indian Wedding Aesthetic*

---

## 🎨 Color Palette

### Primary: Maroon
The cornerstone of our palette - deep, sophisticated, traditional.

| Token | Hex | Usage |
|-------|-----|-------|
| `maroon-500` | `#8B2635` | Primary CTAs, headings, accents |
| `maroon-400` | `#D67A7A` | Hover states, lighter accents |
| `maroon-600` | `#7A1F2D` | Dark text on light backgrounds |
| `maroon-100` | `#FAEAEA` | Subtle backgrounds, highlights |

**Do:**
- Use maroon-500 for primary CTAs and important headings
- Use maroon-600 for text on ivory backgrounds
- Use maroon-100 for subtle background tints

**Don't:**
- Don't use maroon on dark backgrounds (poor contrast)
- Don't use all maroon shades in one component
- Don't pair with bright, saturated colors

---

### Accent: Soft Gold
Premium accent - use sparingly for emphasis.

| Token | Hex | Usage |
|-------|-----|-------|
| `gold-500` | `#D4AF37` | Decorative accents, icons |
| `gold-400` | `#EFD080` | Hover effects on gold elements |
| `gold-700` | `#A6861F` | Text on light backgrounds |
| `gold-100` | `#FDF6E3` | Subtle highlights |

**Do:**
- Use gold for product codes, badges, special labels
- Use gold icons sparingly as accents
- Keep gold elements small and refined

**Don't:**
- Don't use gold as a primary button color
- Don't use gold for large backgrounds
- Don't combine multiple gold shades in same view

---

### Surface: Ivory
Warm, welcoming neutrals.

| Token | Hex | Usage |
|-------|-----|-------|
| `ivory-500` | `#E8D5C4` | Secondary buttons, cards |
| `ivory-200` | `#FAF4EB` | Page backgrounds, sections |
| `ivory-50` | `#FEFDFB` | Primary backgrounds |
| `ivory-600` | `#D4BCA8` | Borders, subtle dividers |

**Do:**
- Use ivory-50 as main page background
- Use ivory-200 for alternating sections
- Use ivory-500 for secondary button backgrounds

**Don't:**
- Don't use ivory for text (no contrast)
- Don't use too many ivory shades simultaneously
- Don't use ivory on white backgrounds

---

### Neutrals: Warm Grays
Text and UI elements.

| Token | Hex | Usage |
|-------|-----|-------|
| `warm-800` | `#292524` | Primary text |
| `warm-600` | `#57534E` | Secondary text |
| `warm-500` | `#78716C` | Tertiary text, metadata |
| `warm-200` | `#E7E5E4` | Borders, dividers |
| `warm-50` | `#FAFAF9` | Subtle backgrounds |

**Do:**
- Use warm-800 for body text
- Use warm-600 for secondary information
- Use warm-500 for product codes, captions

**Don't:**
- Don't use warm-200 or lighter for text
- Don't use warm-800 on dark backgrounds
- Don't mix with cool grays

---

## ✍️ Typography

### Font Families

**Display**: Playfair Display (serif)
- Usage: Hero sections only
- Fallback: Georgia, serif
- Weight: 400 (Regular), 600 (SemiBold)

**Headings**: Cormorant Garamond (serif)
- Usage: All headings (H1-H4)
- Fallback: Georgia, serif
- Weight: 400 (Regular), 600 (SemiBold)

**Body**: Inter (sans-serif)
- Usage: Body text, UI elements
- Fallback: system-ui, sans-serif
- Weight: 400 (Regular), 500 (Medium), 600 (SemiBold)

---

### Type Scale

| Style | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `text-7xl` | 72px (4.5rem) | 1.05 | -0.04em | Hero headings |
| `text-5xl` | 48px (3rem) | 1.2 | -0.03em | H1 page titles |
| `text-4xl` | 36px (2.25rem) | 1.3 | -0.02em | H2 section titles |
| `text-3xl` | 30px (1.875rem) | 1.4 | -0.02em | H3 subsections |
| `text-2xl` | 24px (1.5rem) | 1.5 | -0.01em | H4 card titles |
| `text-lg` | 18px (1.125rem) | 1.7 | 0 | Intro paragraphs |
| `text-base` | 16px (1rem) | 1.7 | 0.005em | Body text |
| `text-sm` | 14px (0.875rem) | 1.6 | 0.01em | Captions, codes |

---

### Typography Rules

**Do:**
- Use one hero (`text-7xl`) per page maximum
- Use serif fonts for headings, sans for body
- Maintain generous line-height (1.6-1.7) for readability
- Use proper heading hierarchy (H1 → H2 → H3)

**Don't:**
- Don't use all caps for long text (max 3 words)
- Don't reduce line-height below 1.4
- Don't mix more than 2 font families
- Don't use decorative fonts for body text

---

## 📐 Spacing System

### Component Spacing
```
xs:  8px   (0.5rem)  - Tight internal spacing
sm:  16px  (1rem)    - Default internal spacing
md:  24px  (1.5rem)  - Comfortable internal spacing
lg:  32px  (2rem)    - Generous internal spacing
xl:  48px  (3rem)    - Large component gaps
2xl: 64px  (4rem)    - Extra large gaps
3xl: 96px  (6rem)    - Section dividers
```

### Section Spacing (Vertical)
```
Mobile:   64px  (4rem)   - Between major sections
Tablet:   96px  (6rem)   - Between major sections
Desktop:  128px (8rem)   - Between major sections
Large:    160px (10rem)  - Between major sections
```

### Container Padding
```
Mobile:   24px  (1.5rem)
Tablet:   32px  (2rem)
Desktop:  48px  (3rem)
```

### Grid Gaps
```
Tight:    16px  (1rem)   - Dense product grids
Normal:   24px  (1.5rem) - Default product grids
Relaxed:  32px  (2rem)   - Featured products
Loose:    48px  (3rem)   - Editorial layouts
```

---

### Spacing Rules

**Do:**
- Use generous whitespace for editorial feel
- Maintain consistent section spacing
- Use larger spacing on desktop than mobile
- Let content breathe with ample padding

**Don't:**
- Don't crowd elements together
- Don't use inconsistent spacing
- Don't reduce section spacing below minimums
- Don't forget responsive spacing adjustments

---

## 🔘 Button Styles

### Primary Button
```jsx
// Used for main CTAs: Contact, Inquire
bg-maroon-500 text-white
hover:bg-maroon-600
px-8 py-3.5
rounded-lg
shadow-soft-sm hover:shadow-soft
transition-all duration-300
font-medium text-base
```

**Usage**: Primary actions, important CTAs

---

### Secondary Button
```jsx
// Used for secondary actions
bg-ivory-500 text-warm-800
hover:bg-ivory-600
px-8 py-3.5
rounded-lg
shadow-soft-xs hover:shadow-soft-sm
transition-all duration-300
font-medium text-base
```

**Usage**: Alternative actions, "Learn More"

---

### Ghost Button
```jsx
// Minimal, text-based
bg-transparent text-maroon-500
hover:bg-maroon-50
px-6 py-3
rounded-lg
transition-all duration-300
font-medium text-base
```

**Usage**: Tertiary actions, "View All"

---

### WhatsApp Button
```jsx
// Primary contact method
bg-[#25D366] text-white
hover:bg-[#1EAE54]
px-8 py-3.5
rounded-lg
shadow-soft-sm hover:shadow-soft
transition-all duration-300
font-medium text-base
// Include WhatsApp icon
```

**Usage**: Contact via WhatsApp

---

### Button Rules

**Do:**
- Use primary buttons sparingly (1-2 per section)
- Maintain consistent padding and sizing
- Include subtle hover effects
- Use semantic color for WhatsApp buttons

**Don't:**
- Don't use more than one primary button in close proximity
- Don't make buttons too small (min 44px height)
- Don't use flashy animations
- Don't use multiple button styles in same group

---

## 🃏 Card Styles

### Product Card
```jsx
bg-white
border border-warm-200
rounded-lg
shadow-soft hover:shadow-soft-md
transition-all duration-350
overflow-hidden
```

**Structure:**
- Image (aspect-ratio-square)
- Title (text-xl font-serif text-warm-800)
- Product Code (text-sm text-warm-500 font-mono)
- Hover: Subtle lift + shadow increase

---

### Featured Product Card
```jsx
bg-ivory-50
rounded-xl
shadow-soft-lg hover:shadow-soft-xl
transition-all duration-400
overflow-hidden
```

**Structure:**
- Larger image
- Title (text-2xl font-serif)
- Description (text-base text-warm-600)
- Product Code badge (bg-gold-100 text-gold-700)

---

### Info Card
```jsx
bg-white
border border-warm-200
rounded-lg
p-8
shadow-soft-xs
```

**Usage**: About sections, wholesale info

---

### Card Rules

**Do:**
- Maintain consistent border-radius
- Use subtle shadows
- Keep hover effects elegant
- Ensure adequate padding (min 1.5rem)

**Don't:**
- Don't use dramatic shadows
- Don't overcomplicate card layouts
- Don't use cards within cards
- Don't forget hover states

---

## 📏 Layout Rules

### Max Widths
```
Text Content:     65ch   (prose)
Forms:            640px  (narrow)
Standard Section: 1024px (wide)
Full Container:   1400px (max)
```

### Product Grids
```
Mobile:   1 column
Tablet:   2 columns (gap-6)
Desktop:  3 columns (gap-6)
Large:    4 columns (gap-8)
```

### Featured Grid
```
Mobile:   1 column
Tablet:   2 columns (gap-8)
Desktop:  2 columns (gap-12)
```

---

### Layout Rules

**Do:**
- Center align text content with max-w-prose
- Use full-width for images and visual sections
- Maintain consistent container padding
- Use CSS Grid for product layouts

**Don't:**
- Don't exceed 65ch for text blocks
- Don't make grids too dense
- Don't forget responsive breakpoints
- Don't use fixed widths for content

---

## 🎭 Shadows

```css
soft-xs:  subtle - cards at rest
soft-sm:  gentle - buttons, small cards
soft:     default - product cards
soft-md:  moderate - hover states
soft-lg:  elevated - featured cards
soft-xl:  prominent - modals, overlays
```

All shadows use maroon tint with low opacity (3-8%).

**Do:**
- Use shadows to create subtle depth
- Increase shadow on hover
- Keep shadows soft and diffused

**Don't:**
- Don't use harsh, dark shadows
- Don't use multiple shadow layers
- Don't use shadows on all elements

---

## ⏱️ Motion & Animation

### Durations
```
Instant:  150ms - Icon transitions
Fast:     250ms - Button hovers
Normal:   350ms - Card hovers
Slow:     450ms - Page transitions
```

### Easing
```
elegant:     cubic-bezier(0.4, 0, 0.2, 1) - Default
elegant-in:  cubic-bezier(0.4, 0, 1, 1)   - Accelerate
elegant-out: cubic-bezier(0, 0, 0.2, 1)   - Decelerate
```

### Allowed Animations
- Fade in/out
- Subtle scale (0.95 → 1.0)
- Fade + translate (max 16px)
- Opacity changes
- Shadow transitions

---

### Animation Rules

**Do:**
- Use subtle, refined animations
- Keep durations under 500ms
- Use elegant easing curves
- Respect prefers-reduced-motion

**Don't:**
- ❌ No carousels/sliders
- ❌ No flashy transitions
- ❌ No parallax scrolling
- ❌ No auto-playing animations
- ❌ No bounce/elastic effects
- ❌ No gradients

---

## ✅ Core Design Principles

### DO:
- ✓ Embrace generous whitespace
- ✓ Use warm, muted colors
- ✓ Maintain editorial typography
- ✓ Keep animations subtle
- ✓ Prioritize readability
- ✓ Use high-quality imagery
- ✓ Design mobile-first
- ✓ Ensure accessibility (WCAG AA)
- ✓ Use semantic HTML
- ✓ Display product codes, not prices

### DON'T:
- ✗ Use flashy animations
- ✗ Use gradients
- ✗ Use carousels
- ✗ Overcrowd layouts
- ✗ Use bright, saturated colors
- ✗ Use decorative fonts for body text
- ✗ Forget mobile responsiveness
- ✗ Sacrifice readability for style
- ✗ Show prices (catalog only)

---

## 📱 Responsive Breakpoints

```javascript
sm:  640px   // Mobile landscape
md:  768px   // Tablet
lg:  1024px  // Desktop
xl:  1280px  // Large desktop
2xl: 1400px  // Extra large
```

Use mobile-first approach:
```jsx
// Mobile default
<div className="text-2xl md:text-3xl lg:text-4xl">
```

---

## 🎯 Component Examples

### Section Header
```jsx
<header className="text-center mb-16 md:mb-20">
  <h2 className="font-serif text-4xl md:text-5xl text-warm-800 mb-4">
    Featured Collection
  </h2>
  <p className="text-lg text-warm-600 max-w-prose mx-auto">
    Handpicked accessories for your special day
  </p>
</header>
```

### Product Code Badge
```jsx
<span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-md text-sm font-mono">
  SKU-2024-001
</span>
```

### Section Container
```jsx
<section className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12">
  <div className="max-w-container-2xl mx-auto">
    {/* Content */}
  </div>
</section>
```

---

## 🔗 WhatsApp Integration

### WhatsApp URL Format
```javascript
// Product inquiry
`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in ${productCode} - ${productName}`

// General inquiry
`https://wa.me/91XXXXXXXXXX?text=Hi, I'd like to know more about your wedding accessories`

// Wholesale inquiry
`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in wholesale orders`
```

### WhatsApp Button
Always include WhatsApp icon (from react-icons or similar).
Use green (#25D366) as brand color.

---

This design system ensures consistency and maintains the quiet luxury aesthetic throughout the website.
