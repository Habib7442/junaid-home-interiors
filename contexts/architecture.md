# Architecture Context — Junaid Home Interiors

## Stack

| Layer     | Technology                                   | Role                                                                                  |
| --------- | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| Framework | Next.js (App Router) + TypeScript            | Full-stack framework using server-side rendering and client interaction capabilities  |
| UI        | Tailwind CSS (v4) + Vanilla CSS              | Theme-driven styling implementing the Junaid Brand & Web Design System specifications  |
| Fonts     | Google Fonts (Fraunces & Plus Jakarta Sans)  | Standard brand typography integrated via Next.js Font Optimization                    |
| CMS       | Headless CMS (e.g. Sanity) / Local Content   | Allows administration of services, projects, team profiles, and testimonial reviews   |
| Forms     | Next.js Server Actions + Nodemailer/API      | Secure lead validation and delivery processing to email & WhatsApp                    |
| Maps      | Google Maps Iframe Embed                     | Geographic location indicator on Contact sections                                    |
| Analytics | Google Analytics 4 (GA4)                     | Standard event tracking for conversions, taps, and page views                         |

## System Boundaries

- `app/` — Contains page routes, global layout containers, Server Actions for forms, and styling setup.
- `components/` — Houses reusable UI components (e.g., buttons, form elements, card components, filterable grids) structured according to brand design.
- `contexts/` — Project developer and AI agent context files (the Six-File methodology).
- `public/` — Static assets including logos, project photography files, icons, and metadata icons.
- `lib/` — Shared utilities, validation helper routines, type definitions, and API client initializers.

## Storage Model

- **Local Config / Headless CMS CDN**: Holds service list schema metadata, testimonials details, and portfolio project records.
- **Image CDN / Public Storage**: High-resolution project photography optimized by the Next.js `Image` component (`next/image`) for AVIF/WebP rendering.
- **Leads Inbox**: Direct routing of inquiries to `junaidhomeinteriors7@gmail.com` with logs recorded in a spreadsheet or secure backend table.

## Auth and Access Model

- **Visitor Access**: Fully public marketing website. No client login or session authentication is required.
- **Content Management**: Secure administrator access to the CMS editor dashboard to modify text, project lists, and photos.
- **Form Submission**: Safe API access restricted by anti-bot honeypots and server-side verification tokens.

## Invariants

1. **Strict Design Tokens**: No ad-hoc or hardcoded hex color values in CSS or JSX. Styling must strictly reference variables defined in the Design System.
2. **Mobile First Viewport**: Page components must look correct and adjust cleanly at mobile dimensions (from 360px up) before scale adjustments are applied for desktop viewports.
3. **Optimized LCP & Loading**: All images must use proper sizes, AVIF/WebP formats, lazy-loading, and responsive layout tags. LCP must remain below 2.5 seconds on 4G.
4. **Validated Forms**: All lead forms must validate the 10-digit Indian phone structure, execute honeypot checking, and enforce server-side validation rules before transmission.
