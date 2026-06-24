# Code Standards — Junaid Home Interiors

## General Principles

- **Component Single Responsibility**: Keep modules and files small. Divide layouts, cards, filters, and forms into dedicated, single-purpose components.
- **Root Cause Fixing**: Address styling and logical bugs at the base layout level. Do not use ad-hoc margin or padding offsets as quick fixes.
- **Separation of Concerns**: Do not bundle client-side interactivity, database queries, and layout structures in a single component.

## TypeScript Guidelines

- **Strict Typing**: Enforce strict TypeScript checking. Use interface models for all data entities (e.g., Projects, Services, Testimonials).
- **No Implicit `any`**: Explicitly type all functional arguments, event handlers, and data structures.
- **Input Validation**: Clean and validate incoming request payloads at network boundaries before allowing execution.

## Next.js Conventions

- **Server-First Components**: Default to Server Components for static layouts, SEO efficiency, and page generation.
- **Client Boundary Scoping**: Place `"use client"` directives at the lowest practical level (e.g. on individual quote forms, filter selectors, or image carousels) rather than page-level layouts.
- **Form Server Actions**: Process form submissions using Next.js Server Actions with strict parameter typing and return error/success status payloads.

## Styling Rules

- **Token Compliance**: Reference Tailwind utility colors or custom properties (`var(--primary)`, etc.) to align layout changes with `ui-context.md`.
- **Radius Conformity**: Apply exact border-radius classes based on the design scale (e.g. `rounded-2xl` / `1.5rem` for cards, `rounded-xl` / `12px` for inputs).
- **Responsive Breakpoints**: Build mobile layout configurations (single columns) first, then layer tablet (`md:`) and desktop (`lg:`) layouts.

## API & Lead Processing

- **Predictable Responses**: All API endpoints and Server Actions must return a standardized JSON structure:
  ```ts
  type ActionResponse = {
    success: boolean;
    message?: string;
    errors?: Record<string, string>;
  };
  ```
- **Spam Interception**: Enforce honeypot key checking and basic anti-spam controls before triggering email or WhatsApp notifications.

## File Organization

- `app/` — Next.js routing files, layouts, global CSS imports, and metadata configurations.
- `components/` — Shared layouts and page components.
  - `components/ui/` — Fine-grained elements (buttons, inputs, badge indicators).
  - `components/common/` — Site structure wrappers (navbar, footer, contact banner).
  - `components/home/` — Home page sections (masonry grids, stats grids).
  - `components/services/` — Service sheets and pricing tables.
- `lib/` — Schema models, server action files, validation routines, and helper functions.
- `contexts/` — Developer reference docs and session tracker files.
- `public/` — Optimizable project images, brand asset SVGs, and favicon files.
