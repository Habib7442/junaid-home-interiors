# Progress Tracker — Junaid Home Interiors

## Current Phase

- **Phase 0 — Setup and Discovery**

## Current Goal

- Initialize system context files and establish entry-point guidelines.

## Completed

- [x] Analyze Junaid marketing requirements (`prd.md`) and verify USPs.
- [x] Lock Brand & Web Design System specifications (`DESIGN.md`).
- [x] Install agentic development skills (`/architect`, `/imprint`, `/remember`, `/review`, `/recover`).
- [x] Draft core system contexts (`project-overview.md`, `architecture.md`, `ui-context.md`, `code-standards.md`, `ai-workflow-rules.md`).
- [x] Connect entry-point config (`AGENTS.md`) to the new `contexts/` directory structure.
- [x] Create standard SEO helper (`lib/seo.ts`) for Metadata and JSON-LD markup.
- [x] Create assets registry file (`lib/assets.ts`) mapping public images.
- [x] Setup base styling layout, design system variables, and Tailwind CSS v4 variables in `app/globals.css`.
- [x] Build custom Input, Label, and Select UI components in `components/ui/`.
- [x] Create interactive Hero component with custom Google reviews badge, trust metrics, and validation form.
- [x] Mount Hero component on root Home Page (`app/page.tsx`).

## In Progress

- None.

## Next Up

- **Unit 01**: Define build plan specification (`contexts/specs/00-build-plan.md`).
- **Unit 02**: Build sticky header and common footer layout wrappers.

## Open Questions

1. **Pricing Inclusions**: Should category pages display starting prices per tier (Essential/Premium/Luxury), or should pricing remain enquiry-only?
2. **Business Statistics**: What are the exact active years and delivered project counts (e.g. 10+ years, 500+ homes)?
3. **Portfolio Size**: How many high-quality project images are ready for the masonry layout at launch?

## Architecture Decisions

- **Static Content Fallbacks**: Local JSON files (`lib/data/`) will model services and projects content to enable fast development and offline page loads before wiring the headless CMS.
- **Form Server Actions**: Ingestion forms will route through Next.js Server Actions with anti-spam honeypot and email SMTP endpoints.

## Session Notes

- Initiated Junaid Interiors workspace layout. Keep styling aligned with locked HSL warm cream surfaces and Fraunces serifs.
