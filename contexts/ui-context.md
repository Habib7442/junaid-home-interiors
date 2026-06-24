# UI Context — Junaid Home Interiors

## Theme

The design system implements a **"Warm Minimalist"** visual language. It synthesizes editorial polish with the tactile warmth of high-end home interiors, avoiding sterile white/grey minimalism in favor of organic textures, generous whitespace, soft geometries, and warm tonal layering. 

**Layering and Shadows**: Surfaces layer subtly from Cream backgrounds to soft Bone cards. Depth is reinforced via soft, low-opacity, warm-tinted shadows (`#2B2A24` at 8–10% opacity) rather than harsh neutral blacks.

## Colors

All styling properties must use these variables mapped from Junaid's Design System. Hardcoded hex values are prohibited.

| Role | CSS Variable | Value | Description |
|---|---|---|---|
| Page Background | `--background` | `#fdf9ef` | Warm organic base surface |
| Primary Brand | `--primary` | `#273316` | Grounding Deep Olive for structure, headers, CTAs |
| Primary Container | `--primary-container` | `#3d4a2a` | Mid-toned olive for borders and hover backdrops |
| On-primary | `--on-primary` | `#ffffff` | Primary text contrast on deep olive |
| Accent Accent | `--secondary` | `#914b2a` | Terracotta tone for eyebrows, links, highlights |
| Accent Container | `--secondary-container` | `#fda27b` | Warm secondary containers |
| Base Surface | `--surface` | `#fdf9ef` | Primary surface background |
| Surface Low | `--surface-container-low` | `#f8f3ea` | Bone/Cream tier 1 surface layering |
| Surface Mid | `--surface-container` | `#f2ede4` | Bone/Cream tier 2 surface layering |
| Surface High | `--surface-container-high` | `#ece8de` | Bone/Cream tier 3 surface layering |
| Text Primary | `--on-surface` | `#1c1c16` | Espresso near-black for body copy |
| Text Muted | `--on-surface-variant` | `#45483f` | Stone grey for secondary details |
| Border Default | `--outline-variant` | `#c6c8bb` | Thin border tint separating layers |
| Border Active | `--outline` | `#76786e` | Muted slate border for focused states |
| Error | `--error` | `#ba1a1a` | Alert color for invalid states |

## Typography

Typography pairs editorial serifs with geometric, highly-legible sans-serifs.

| Typography Token | Font Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `display-lg` (Desktop) | Fraunces | 64px | 600 (Semibold) | 1.1 | -0.02em |
| `display-lg` (Mobile) | Fraunces | 40px | 600 (Semibold) | 1.2 | None |
| `headline-md` | Fraunces | 32px | 500 (Medium) | 1.2 | None |
| `headline-sm` | Fraunces | 24px | 500 (Medium) | 1.3 | None |
| `body-lg` | Plus Jakarta Sans | 18px | 400 (Regular) | 1.6 | None |
| `body-md` | Plus Jakarta Sans | 16px | 400 (Regular) | 1.6 | None |
| `eyebrow` | Plus Jakarta Sans | 12px | 700 (Bold) | 1.0 | 0.15em (Uppercase) |
| `label-md` | Plus Jakarta Sans | 14px | 600 (Semibold) | 1.4 | None |

*Style Note: Use italicized headings for targeted words (e.g. "Create your **\*dream\*** space") to evoke a crafted, editorial touch.*

## Border Radius

Organic softness dictates generous curves for interactable containers and slightly tighter curves for input components.

| Radius Token | Value | Applied To |
|---|---|---|
| `sm` | 0.5rem (8px) | Badges, tags, layout pills |
| `input` | 0.75rem (12px) | Form text fields, dropdown selectors |
| `DEFAULT` / `md` | 1.5rem (24px) | Service cards, project cards, content blocks |
| `lg` | 2.0rem (32px) | Sections, overlay layouts, modals |
| `full` | 9999px | Primary buttons, floating action bubbles |

## Component Conventions

- **Buttons**:
  - Primary: Deep Olive (`--primary`) pill shape, white text, 8px hover lift.
  - Secondary: Terracotta (`--secondary`) outline or plain text link, subtle hover translation.
- **Cards**: 24px rounded corners (`rounded-2xl` / `1.5rem`), Bone background, shadow offset with brown/umber base (`rgba(43, 42, 36, 0.08)`).
- **Inputs**: Bone surface background, thin `--outline-variant` border. On focus, transitions outline color to `--primary` with a 2px ring.
- **Lists**: Custom bullets utilizing Sage checkmarks or thin terracotta horizontal dividers.
- **Images**: Softened 24px corner curves. Natural sunlit photography showing wood, textiles, and organic tones.

## Layout Patterns

- **Rhythm**: 12-column desktop grid, 1280px max-width container, 24px gutters.
- **Desktop Section Gap**: 120px vertical padding.
- **Mobile Section Gap**: 64px vertical padding, 20px horizontal margins.
- **Header**: Sticky layout container, thin boundary border, primary logo link, quick navigation links, and consultation action CTA.
- **Sticky Footer & Overlay**: Mobile overlay displaying click-to-call, WhatsApp link, and quote actions.
- **Masonry Grid**: Clean portfolio structures that adjust layout count fluidly across desktop, tablet, and mobile.

## Icons

Lucide React is the primary icon set. Stroke-based icons only:
- Inline Indicators: `h-4 w-4` (16px)
- Interaction Targets / Buttons: `h-5 w-5` (20px)
