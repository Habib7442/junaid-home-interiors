# Product Requirements Document — Junaid Home Interiors Website

| | |
|---|---|
| **Product** | Junaid Home Interiors — Marketing & Lead-Generation Website |
| **Version** | 1.0 |
| **Date** | 24 June 2026 |
| **Owner** | Junaid Home Interiors (Silchar, Assam) |
| **Status** | Draft for build |
| **Related docs** | Brand & Web Design System v1.0 (palette, typography, Google Stitch prompts) |

---

## 1. Executive Summary

Junaid Home Interiors is a turnkey home-interior studio in Silchar, Assam, operating since 2015. The current website (`junaidhomeinteriors.com`) is dated, keyword-stuffed, and does not convert visitors into enquiries.

This project delivers a **modern, warm, conversion-focused website** that positions Junaid as the most trustworthy turnkey interior studio in the Barak Valley — competing visually with national players (Livspace, HomeLane) while keeping a distinctly local, hand-crafted feel.

The site's single most important job is to **turn visitors into qualified design-consultation leads** (phone calls, WhatsApp chats, and quote-form submissions), backed by a portfolio that proves quality of work.

---

## 2. Background & Context

- **Business:** Junaid Home Interiors — turnkey residential & commercial interiors.
- **Established:** 2015.
- **Location:** Alitikar Road, Meherpur, Birbal Bazar, Silchar, Assam — 788015.
- **Phone:** 70198 25509 · **Email:** junaidhomeinteriors7@gmail.com
- **Instagram:** @junaidhomeinteriors__official
- **Service area:** Silchar and the wider Cachar / Barak Valley region.
- **Proof:** Strong word-of-mouth and numerous positive Google reviews citing on-time delivery, quality, and reasonable pricing.

**Differentiators (USPs):** 45-day delivery · factory-finished joinery · next-day quotation · designer visits the site · 100% customized.

**Why now:** Buyers in Tier-2/3 India increasingly research interior firms online before calling. A credible, modern website with real project photos directly affects whether a homeowner chooses Junaid over a competitor.

---

## 3. Goals & Success Metrics

### 3.1 Business Goals
1. Generate qualified interior-design enquiries from Silchar/Cachar homeowners.
2. Establish premium, trustworthy brand perception online.
3. Showcase completed projects as social proof.
4. Reduce time spent answering repetitive questions (services, process, pricing tiers).

### 3.2 Success Metrics (KPIs)

| Metric | Target (first 90 days post-launch) |
|---|---|
| Quote-form submissions | ≥ 40 / month |
| Click-to-call + WhatsApp taps | ≥ 120 / month |
| Lead → consultation conversion | ≥ 30% |
| Avg. time on site | ≥ 1m 30s |
| Mobile bounce rate | ≤ 55% |
| Lighthouse Performance (mobile) | ≥ 85 |
| Google "interior designer Silchar" ranking | Page 1 within 6 months |

### 3.3 Non-Goals (v1)
- E-commerce / online payment.
- Customer login / project-tracking portal.
- Online 3D room designer / configurator.
- Multi-language (Bengali/Hindi) — *backlog, see §16*.

---

## 4. Target Users & Personas

**Persona A — "New-Home Nadia" (primary)**
New homeowner, 28–45, just received apartment/house possession. Needs full-home interiors or a modular kitchen. Anxious about cost, timeline, and trust. Researches on mobile, compares 2–3 firms, wants to see real local work and call quickly.

**Persona B — "Renovating Rahul"**
35–55, renovating one or two rooms (kitchen, false ceiling, wardrobe). Budget-conscious, values reasonable pricing and reliability. Often referred by word-of-mouth, visits site to validate.

**Persona C — "Office/Shop Owner"**
Small commercial fit-out (office, clinic, shop). Cares about turnaround time and professional finish.

**Device reality:** ~75–85% of traffic expected on **mobile**. Mobile-first is mandatory, not optional.

---

## 5. Scope

### In Scope (v1)
- Public marketing website: Home, Services (+ category pages), Our Work, Process, About, Contact.
- Lead-capture: quote form, click-to-call, WhatsApp, consultation booking.
- Project portfolio gallery with category filtering.
- CMS so the team can add projects, services, and testimonials without a developer.
- SEO foundations, analytics, and a Google Maps embed.

### Out of Scope (v1)
- Payments, user accounts, blog automation, multilingual content, native mobile app.

---

## 6. Information Architecture / Sitemap

```
Home
├── Services (overview)
│   ├── Modular Kitchens
│   ├── Modular Wardrobes
│   ├── Lighting
│   ├── Flooring
│   ├── Electrical Work
│   ├── Civil Work
│   ├── False Ceiling
│   └── Wall Design & Painting
│   ├── Full Home Interior
│   ├── Office Interior
│   ├── Commercial Interior
│   └── Commercial Ceiling
├── Our Work (portfolio)
│   └── Project Detail (template)
├── Process
├── About
└── Contact
Global: Sticky header (nav + Book Consultation), Footer, Floating WhatsApp + Call button
```

Primary nav: **Home · Services · Our Work · Process · About · Contact** + persistent **Book Free Consultation** CTA and visible phone number.

---

## 7. Page-by-Page Functional Requirements

### 7.1 Home
- **Sticky navbar** with wordmark, nav links, phone number, and primary "Book Free Consultation" pill.
- **Hero:** full-bleed interior photo, Google-rating badge, serif headline, sub-copy, primary CTA, and a **floating quote form** (Name, Phone, Locality/City, Service dropdown → submit). Form is the priority conversion element.
- **Trust stat strip:** 10+ years · 500+ homes · 45-day delivery · 100% customized. *(Numbers must be confirmed by client before launch.)*
- **Services grid:** 8 rounded image tiles linking to category pages.
- **Why Junaid:** 4 icon cards (45-day delivery, factory finish, next-day quotation, designer on-site).
- **Featured Work:** filterable masonry gallery (All / Kitchen / Living / Bedroom / Ceiling).
- **Process timeline:** Meet & Measure → 2D/3D Design → Craft & Build → Delivery & Installation.
- **Testimonials:** real Google reviews with stars + names.
- **Closing CTA band** (olive) with consultation button + phone.
- **Footer:** contact, address, map link, Instagram, service links.

**Acceptance:** All CTAs functional; quote form validates and delivers a lead (§8); page passes mobile Lighthouse ≥ 85.

### 7.2 Services Overview
- Intro + grid of all service categories, each linking to its detail page. Each card: thumbnail, title, one-line description.

### 7.3 Service Category Page (template, e.g. Modular Kitchen)
- Breadcrumb; split hero (copy + inclusions checklist + CTA / hero photo).
- Gallery of layouts/variations.
- **Pricing tiers** (Essential / Premium / Luxury) with "starting from" guidance and inclusions. *(Pricing display TBD with client — see §19.)*
- Materials & finishes strip (swatch chips).
- Service-specific process recap + testimonial + CTA.

**Acceptance:** Template is reusable across all 8 services via CMS; content editable without code.

### 7.4 Our Work (Portfolio)
- Page header; sticky filter pills (All / Kitchen / Living / Bedroom / Ceiling / Office).
- Responsive masonry grid; each card → optional **Project Detail** page.
- Featured-project block; stats band; closing CTA.

### 7.5 Project Detail (template)
- Hero image; project meta (client first name, locality, scope, timeline e.g. "delivered in 42 days"); image gallery/carousel; short story; related projects; CTA.

### 7.6 Process
- Detailed 4-stage walkthrough (Planning → Design 2D/3D → Execution → Handover), timelines, what the client does at each stage, FAQs.

### 7.7 About
- Story (since 2015), milestone timeline, values, **Meet the Team** grid, trust strip, CTA.

### 7.8 Contact
- Two-column: contact details (address, phone, email, Instagram, hours) + **consultation request form** (Name, Phone, Email, Locality, Service, Budget range, Message).
- Embedded Google Map of the Meherpur location.
- Tap-to-call band.

---

## 8. Lead Capture & Conversion Requirements

This is the core of the product. Every page must make contacting Junaid effortless.

1. **Quote / Consultation form**
   - Fields: Name*, Phone* (10-digit IN validation), Locality/City, Service (dropdown), optional Budget, optional Message.
   - On submit: store lead + send notification.
   - **Delivery channels (priority order):**
     - Email to junaidhomeinteriors7@gmail.com.
     - WhatsApp/SMS notification to the business number (via integration, see §13).
     - Optional: append to a Google Sheet / CRM.
   - Success state: thank-you message + "we reply the same day" + WhatsApp shortcut.
   - **Spam protection:** honeypot + reCAPTCHA v3 (invisible).
2. **Click-to-call:** `tel:` links on the phone number everywhere; tap-to-call sticky button on mobile.
3. **Floating WhatsApp button** (`wa.me/9170198 25509`) with a pre-filled message ("Hi, I'd like a free interior design quote").
4. **Sticky mobile action bar:** Call · WhatsApp · Get Quote.

**Acceptance:** A test submission reaches email + WhatsApp within 1 minute; phone/WhatsApp links open correctly on Android & iOS.

---

## 9. Brand & Design Requirements

Follow the **Junaid Home Interiors Brand & Web Design System v1.0**. Summary:

- **Aesthetic:** warm minimalism — calm, crafted, trustworthy.
- **Colors:** Olive `#3D4A2A` (primary), Sage `#9DAA82`, Terracotta `#C2724E` (accent), Clay `#E3C3AE`, Cream `#F6F2E9` (bg), Bone `#FBF9F3` (cards), Espresso `#2B2A24` (text), Stone `#6F6C60` (secondary), border `#E4DDCE`.
- **Typography:** Headings **Fraunces** (serif); body/UI **Plus Jakarta Sans**; eyebrow labels uppercase, tracked, terracotta. (Both Google Fonts.)
- **Components:** fully-rounded pill buttons; 22–24px rounded cards; soft warm shadows; generous whitespace.
- **Imagery:** full-bleed, natural-light photos of real finished interiors. **Replace all placeholder/stock images with Junaid's own project photos before launch.**
- **Logo:** serif wordmark + roofline "J" monogram (see brand doc / logo brief).

**Design tool note:** Initial UI to be generated in **Google Stitch** using the prompts in the brand system, then refined and handed to development.

---

## 10. Content Requirements

| Asset | Source / Owner | Status |
|---|---|---|
| Logo (vector: SVG + PNG, light/dark) | To be finalized from brand brief | Pending |
| Project photos (min. 12 projects, 6+ photos each, high-res) | Junaid team | **Critical — pending** |
| Service descriptions & inclusions (8 services) | Junaid + copywriter | Pending |
| Real testimonials (text + name; Google review screenshots) | Pull from Google | Available |
| Team photos + names/roles | Junaid team | Pending |
| Verified stats (years, homes delivered, rating) | Junaid team | **Must confirm** |
| Pricing guidance per service (if displayed) | Junaid | Decision needed |
| Business details (address, hours, map pin) | Junaid | Available |

> ⚠️ **Photography is the #1 dependency.** The site's credibility depends on real, well-lit project photos. A short photo shoot of recent projects is strongly recommended before launch.

---

## 11. Technical Requirements

- **Recommended stack:** Next.js (React) + Tailwind CSS, deployed on Vercel/Netlify. *(Alternative: WordPress + a custom block theme if the team prefers a familiar CMS.)*
- **CMS:** Headless (Sanity / Contentful / Strapi) or WordPress — must let non-technical staff manage Projects, Services, Testimonials, and Team.
- **Forms:** Server action / serverless function or a form service (e.g. Formspree/Web3Forms) wired to email + WhatsApp.
- **Hosting:** HTTPS enforced; global CDN; image optimization (next/image or equivalent).
- **Domain:** Use existing `junaidhomeinteriors.com`; implement 301 redirects from old URLs to new structure.
- **Browser support:** Latest 2 versions of Chrome, Safari, Edge, Firefox; Android Chrome & iOS Safari.

---

## 12. SEO Requirements

- Local SEO focus: "interior designer in Silchar", "modular kitchen Silchar", "false ceiling Silchar/Cachar", "home interiors Assam".
- Unique `<title>` + meta description per page; clean, readable URLs (`/services/modular-kitchen`).
- Semantic HTML headings (one H1 per page); descriptive `alt` text on all images.
- **Structured data (JSON-LD):** `LocalBusiness` / `HomeAndConstructionBusiness` with address, geo, hours, phone, `aggregateRating`; `BreadcrumbList`.
- XML sitemap + robots.txt; Open Graph + Twitter cards for social sharing.
- Google Business Profile linked; NAP (Name/Address/Phone) consistent everywhere.
- Avoid the old site's keyword-stuffing; write for humans.

---

## 13. Integrations

| Integration | Purpose | Priority |
|---|---|---|
| WhatsApp (wa.me link / Business API) | Primary contact + lead alerts | Must |
| Email (form → inbox) | Lead delivery | Must |
| Google Maps embed | Location on Contact | Must |
| Google Analytics 4 | Traffic & conversion tracking | Must |
| Meta Pixel | Future retargeting / IG ads | Should |
| Google Business Profile / Reviews | Trust + live reviews | Should |
| Google Sheets / CRM | Lead log | Could |

---

## 14. Analytics & Event Tracking

Track as GA4 events / conversions:
- `generate_lead` (quote form submit)
- `click_to_call` (tel: tap)
- `whatsapp_click`
- `service_view` (category page view)
- `portfolio_filter_used`
- `book_consultation_click`

Set up a simple monthly dashboard: leads, calls, top services, top traffic sources.

---

## 15. Non-Functional Requirements

- **Performance:** Lighthouse mobile ≥ 85; LCP < 2.5s on 4G; all images lazy-loaded & compressed (WebP/AVIF).
- **Accessibility:** WCAG 2.1 AA — color contrast ≥ 4.5:1 body text, alt text, keyboard navigation, focus states, `prefers-reduced-motion` respected.
- **Responsive:** Mobile-first; verified at 360px, 768px, 1024px, 1440px.
- **Security:** HTTPS; form spam protection; no secrets in client code.
- **Maintainability:** Documented CMS workflow; design tokens centralized; reusable components.
- **Privacy:** Basic privacy policy + consent for analytics where required.

---

## 16. Milestones & Phases

| Phase | Deliverables | Est. Duration |
|---|---|---|
| **0 — Discovery** | Confirm stats, pricing approach, gather photos/content | 1 week |
| **1 — Brand & Design** | Logo finalized; Stitch UI → hi-fi designs (Home + templates) | 1–2 weeks |
| **2 — Build** | Front-end + CMS + forms/integrations; all pages | 2–3 weeks |
| **3 — Content load** | Real photos, services, projects, testimonials | 1 week (parallel) |
| **4 — QA & SEO** | Cross-device QA, performance, SEO, analytics, redirects | 1 week |
| **5 — Launch** | DNS cutover, GBP update, monitor | 2–3 days |
| **6 — Post-launch** | Iterate on conversion, add projects | Ongoing |

*Indicative total: ~6–8 weeks, dependent on content/photo readiness.*

---

## 17. Risks & Assumptions

**Risks**
- *No real photos* → site looks generic and untrustworthy. **Mitigation:** prioritize a photo shoot in Phase 0.
- *Unverified stats* (500+ homes, 4.9★) → credibility/legal risk. **Mitigation:** confirm or soften claims before launch.
- *Low SEO until indexed* → leads slow initially. **Mitigation:** Google Business Profile + paid search to bridge.
- *Content delays* from a busy operating team. **Mitigation:** assign a single content owner; provide templates.

**Assumptions**
- Existing domain is accessible and can be repointed.
- Team can supply project photos and approve copy.
- WhatsApp is the preferred primary contact channel.

---

## 18. Acceptance Criteria (Launch Checklist)

- [ ] All pages built per §7 and match brand system §9.
- [ ] Quote form delivers to email + WhatsApp; reCAPTCHA active.
- [ ] Click-to-call & WhatsApp work on Android + iOS.
- [ ] All placeholder images replaced with real project photos.
- [ ] Stats and claims verified by client.
- [ ] Mobile Lighthouse Performance ≥ 85, Accessibility ≥ 90.
- [ ] GA4 + events firing; Maps embed correct; structured data valid.
- [ ] 301 redirects from old URLs; sitemap submitted.
- [ ] Privacy policy published; favicon + social cards set.

---

## 19. Open Questions

1. **Pricing:** Display "starting from" prices per service, or keep pricing enquiry-only?
2. **Stats:** What are the real, defensible numbers (years active is 10+; homes delivered? current Google rating & review count)?
3. **Languages:** Is a Bengali (or Hindi) version needed for the local market — now or later?
4. **Portfolio depth:** How many completed projects can be documented with quality photos at launch?
5. **CMS preference:** Does the team want WordPress (familiar) or a modern headless CMS (faster site)?
6. **Booking:** Simple form, or scheduled calendar slots for consultations?
7. **Domain/email:** Keep Gmail address publicly, or set up a branded `@junaidhomeinteriors.com` inbox?

---

## 20. Appendix

- **Brand & Web Design System v1.0** — full palette, typography specimens, UI components, homepage anatomy, and Google Stitch prompts.
- **Reference aesthetics:** EarthSlice landing page (olive/sage, full-bleed hero, pill buttons, floating quote card) + Livspace.com (conversion structure).
- **Service list (full):** Modular kitchens, modular wardrobes, lighting, flooring, electrical work, civil work, false ceiling, wall design & painting.

---

*End of PRD v1.0 — Junaid Home Interiors Website.*