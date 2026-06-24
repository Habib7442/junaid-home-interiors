---
name: Warm Minimalist Interior Studio
colors:
  surface: '#fdf9ef'
  surface-dim: '#dedad0'
  surface-bright: '#fdf9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ece8de'
  surface-container-highest: '#e6e2d9'
  on-surface: '#1c1c16'
  on-surface-variant: '#45483f'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f5f0e7'
  outline: '#76786e'
  outline-variant: '#c6c8bb'
  surface-tint: '#556341'
  primary: '#273316'
  on-primary: '#ffffff'
  primary-container: '#3d4a2a'
  on-primary-container: '#aab990'
  inverse-primary: '#bdcca2'
  secondary: '#914b2a'
  on-secondary: '#ffffff'
  secondary-container: '#fda27b'
  on-secondary-container: '#773718'
  tertiary: '#293315'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f4a2a'
  on-tertiary-container: '#acb990'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e8bd'
  primary-fixed-dim: '#bdcca2'
  on-primary-fixed: '#141f04'
  on-primary-fixed-variant: '#3e4b2b'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb596'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#743415'
  tertiary-fixed: '#dae8bc'
  tertiary-fixed-dim: '#becca2'
  on-tertiary-fixed: '#151f04'
  on-tertiary-fixed-variant: '#3f4b2a'
  background: '#fdf9ef'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d9'
typography:
  display-lg:
    fontFamily: Fraunces
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Fraunces
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  eyebrow:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-lg: 120px
  section-gap-sm: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built upon the philosophy of "Warm Minimalism"—a synthesis of high-end editorial polish and the tactile comfort of a well-designed home. It targets a discerning clientele looking for turnkey interior solutions that feel both curated and lived-in. 

The aesthetic avoids the coldness of traditional modernism by leaning into organic tones and soft geometry. The emotional response is one of calm, reliability, and "crafted luxury." The UI should feel like a premium physical portfolio, utilizing generous whitespace to allow high-quality interior photography to breathe. Interactive elements are soft and inviting, echoing the comfort of the spaces the studio creates.

## Colors

The palette is rooted in nature, moving away from sterile whites and greys in favor of a warm, earthen spectrum.

- **Primary (Deep Olive):** Used for structural elements like the navbar, footer, and primary call-to-action buttons. It provides a grounded, sophisticated anchor.
- **Secondary (Terracotta):** Reserved for highlights, links, and "eyebrow" labels. Use this sparingly to maintain its impact.
- **Background & Surfaces:** The transition from the warm cream background (#F6F2E9) to soft bone surfaces (#FBF9F3) creates a subtle depth without needing harsh lines.
- **Functional Tints:** Soft Sage and Clay are used for badges, tags, or informational callouts to provide variety while staying within the organic theme.

## Typography

This design system uses a sophisticated typographic pairing to balance heritage and modernity.

- **Headings (Fraunces):** A soft-edged serif that feels editorial and bespoke. Use italics for specific words within headings to emphasize the "crafted" studio feel. Maintain tight line-heights for a compact, professional look.
- **Body & UI (Plus Jakarta Sans):** A clean, geometric sans-serif that ensures legibility across all digital touchpoints. Its open counters feel welcoming.
- **Eyebrows:** Always set in bold, uppercase Plus Jakarta Sans with generous letter-spacing. Use the Terracotta accent color for these to create a clear hierarchy for section categorization.

## Layout & Spacing

The layout philosophy is centered on "The Breathable Canvas." It utilizes a fluid 12-column grid for desktop with wide 24px gutters. 

- **Vertical Rhythm:** Sections should be separated by significant vertical padding (120px on desktop) to prevent the UI from feeling cluttered.
- **Asymmetry:** Occasionally break the grid with imagery or pull-quotes to mimic the layout of a luxury interior design magazine.
- **Mobile Reflow:** On mobile, margins reduce to 20px and sections stack vertically. Use the "section-gap-sm" (64px) to maintain a sense of space even on smaller screens.

## Elevation & Depth

Depth in this design system is achieved through "Warm Tonal Layering" rather than traditional grey shadows.

- **Shadows:** Use extremely soft, low-opacity shadows with a subtle brown/umber tint (#2B2A24 at 8-10% opacity) instead of pure black. This maintains the warmth of the palette.
- **Tonal Layers:** Cards sit on the background with a slight color shift (from Cream to Bone) to denote interactable areas.
- **Imagery Depth:** Large-scale photography should have a subtle inner-glow or soft border to feel "embedded" into the page layout.

## Shapes

The shape language is defined by "Organic Softness." 

- **Pill Shapes:** Primary interactive elements like buttons and tags use a fully rounded (pill) radius.
- **Cards:** Use a generous 24px corner radius. This large radius communicates a friendly, safe, and modern architectural feel.
- **Inputs:** Maintain a slightly smaller but still significant roundedness (12px) to differentiate utility from navigation.

## Components

- **Buttons:** Primary buttons are deep olive pills with white or cream text. Secondary buttons use a terracotta outline or text-only style with a slight hover lift.
- **Cards:** Project and service cards must feature a 24px corner radius. They should use the "Bone" surface color and soft, warm-tinted shadows. 
- **Eyebrows:** These act as the navigation markers of the page. Always small, bold, uppercase, and terracotta.
- **Lists:** Use custom icons for list bullets—ideally a soft sage checkmark or a simple horizontal terracotta line.
- **Input Fields:** Soft bone background with a muted stone border. On focus, the border transitions to deep olive.
- **Imagery:** All photos should have slightly softened corners (match the card 24px radius when appropriate) and prioritize natural sunlight and organic textures like wood and linen.