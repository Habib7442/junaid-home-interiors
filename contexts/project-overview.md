# Project Overview — Junaid Home Interiors

## Overview

Junaid Home Interiors is a turnkey residential and commercial interior design studio located in Silchar, Assam, operating since 2015. This project delivers a modern, warm, and conversion-focused marketing and lead-generation website designed to position Junaid Home Interiors as the premier turnkey studio in the Barak Valley. The site's single most critical objective is converting visitors (especially mobile users, who represent 75–85% of traffic) into qualified design-consultation leads through phone calls, WhatsApp chat sessions, and quote-form submissions.

## Goals

1. **Lead Generation**: Capture at least 40+ quote-form submissions and 120+ direct taps (click-to-call & WhatsApp) per month.
2. **High Quality Conversion**: Achieve a minimum lead-to-consultation conversion rate of 30%.
3. **Mobile-First Engagement**: Maintain average session duration of ≥ 1m 30s and a mobile bounce rate of ≤ 55%.
4. **Performance & Speed**: Achieve a mobile Lighthouse Performance score of ≥ 85.
5. **Local Search Dominance**: Rank on Page 1 of Google for "interior designer Silchar" within 6 months of launching.

## Core User Flow

1. **Landing & Inspection**: User lands on the Home page and immediately views key trust factors (10+ years, 500+ homes, 45-day delivery) and the floating quote form.
2. **Exploration**: User browses the 8 rounded service tiles or accesses the Services Overview page to explore specific services (e.g., Modular Kitchen, False Ceiling).
3. **Validation**: User inspectes the filterable masonry portfolio ("Our Work") and reviews specific project details proving local delivery.
4. **Trust Building**: User reads real, verified Google reviews and testimonials showing Junaid's USPs (next-day quotation, designer visits site).
5. **Conversion**: User initiates contact via the sticky action bar, floating WhatsApp button, or submits the Quote/Consultation form.
6. **Lead Delivery**: Lead is successfully delivered to `junaidhomeinteriors7@gmail.com` and logged, returning a thank-you success message.

## Features

### Public Pages
- **Home Page**: Hero section, trust statistics, service grid, "Why Junaid" cards, featured work masonry gallery, process timeline, and Google review cards.
- **Services Overview & Reusable Service Pages**: Descriptions, pricing guides (Essential/Premium/Luxury), inclusions checklists, materials, and swatch configurations.
- **Our Work (Portfolio) & Project Details**: Filterable masonry view linking to photo galleries and project meta (locality, scope, delivery duration).
- **Process & About**: Breakdown of the 4 design phases and story timeline since 2015.
- **Contact Page**: Consultation request form, embedded Google Maps location (Meherpur, Silchar), and business coordinates.

### Lead Capture & CTAs
- **Sticky Navbar**: Unified branding and direct "Book Free Consultation" CTA.
- **Floating Quote Form**: Quick lead capture fields (Name, Phone, Locality, Service, optional Budget/Message).
- **Sticky Mobile Action Bar**: Bottom overlay for mobile displays providing quick links for "Call", "WhatsApp", and "Get Quote".
- **WhatsApp Integration**: Floating button prefilled with: `"Hi, I'd like a free interior design quote"`.

### Content Management (CMS)
- Headless CMS or admin dashboard allowing the team to add/edit completed projects, update service structures, list pricing, and manage reviews without developer overhead.

### Technical & SEO
- Local SEO indexing tags, JSON-LD structured data (`LocalBusiness`), clean sitemap, and Google Analytics 4 event tracking (`generate_lead`, `whatsapp_click`, etc.).

## Scope

### In Scope
- Static and server-rendered page framework for Home, Services, Portfolio, Process, About, and Contact.
- Dynamic form submissions routed via serverless action / mail handler.
- Responsive, mobile-first warm minimalist layout matching `DESIGN.md`.
- Content management interface for services, project photos, and reviews.
- Google Maps embed, SEO tags, schema markup, and GA4 event integrations.

### Out of Scope
- E-commerce operations or online payment capabilities.
- Client account registration or interactive project-tracking dashboards.
- 3D interactive room layout visualizer.
- Multilingual content support (Bengali/Hindi) - postponed to a future release.

## Success Criteria

1. **Successful Lead Delivery**: A test submission on the quote/contact form reliably delivers data to the owner's inbox and logs it within 60 seconds.
2. **Responsive Fidelity**: Layout matches color palettes, typography specs, and spacing models without breaking at 360px, 768px, 1024px, or 1440px widths.
3. **Content Manageability**: Admin users can update, remove, or append portfolio projects and service specs through a visual CMS interface.
4. **Performance Verification**: Home and Category pages maintain a Google Lighthouse mobile score of ≥ 85.
