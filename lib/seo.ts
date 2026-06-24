/**
 * seo.ts — Central SEO & Local-SEO configuration for Junaid Home Interiors
 * --------------------------------------------------------------------------
 * Target stack: Next.js (App Router) + TypeScript.
 *
 * This single module is the source of truth for:
 *   1. Business NAP constants (Name / Address / Phone) — keep IDENTICAL everywhere
 *      (site, footer, Google Business Profile, JustDial). NAP consistency is a
 *      top local-SEO ranking factor.
 *   2. Default + per-page <head> metadata (Next.js `Metadata`).
 *   3. JSON-LD structured data (LocalBusiness, Service, Breadcrumb, FAQ, WebSite).
 *
 * Usage examples are at the bottom of this file.
 *
 * ⚠️ TODO before launch — confirm with the client:
 *   - Exact opening hours (defaults below are assumed).
 *   - Verified stats for aggregateRating (ratingValue + reviewCount).
 *   - Exact map pin / lat-lng from their Google Business Profile.
 *   - Final canonical domain (www vs non-www) and https.
 */

import type { Metadata } from "next";

/* ────────────────────────────────────────────────────────────────────────
 * 1. BUSINESS CONSTANTS (NAP + identity) — single source of truth
 * ──────────────────────────────────────────────────────────────────────── */

export const business = {
  legalName: "Junaid Home Interiors",
  name: "Junaid Home Interiors",
  tagline: "Turnkey interiors, made in Silchar",
  description:
    "Junaid Home Interiors is a turnkey home-interior studio in Silchar, Assam, " +
    "established in 2015. We design, manufacture and install modular kitchens, " +
    "wardrobes, false ceilings and complete home interiors — delivered in 45 days.",
  foundingYear: "2015",

  // ── Contact (NAP) ──
  phone: "+917019825509", // E.164 — for tel: links & schema
  phoneDisplay: "+91 70198 25509", // human-readable
  whatsapp: "917019825509", // wa.me number (no +)
  email: "[email protected]",

  // ── Address ──
  address: {
    streetAddress: "Alitikar Road, Meherpur, Birbal Bazar",
    locality: "Silchar",
    region: "Assam",
    postalCode: "788015",
    country: "IN",
  },

  // ── Geo (route-level geocode — refine from Google Business Profile) ──
  geo: {
    latitude: 24.7921165,
    longitude: 92.798922,
  },

  // ── Areas served (drives "near me" + regional local SEO) ──
  areaServed: ["Silchar", "Cachar", "Barak Valley", "Assam"],

  // ── Opening hours (TODO: confirm) ──
  openingHours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], opens: "10:00", closes: "19:00" },
    // Sunday: closed (omit) — update if they open
  ],

  priceRange: "₹₹",

  // ── Social / citation profiles (schema `sameAs`) ──
  profiles: {
    instagram: "https://www.instagram.com/junaidhomeinteriors__official/",
    justdial:
      "https://www.justdial.com/Silchar/Junaid-Home-Interiors-Nagatila-Point-Meherpur/9999P3842-3842-230409014517-E7X7_BZDET",
    // google: "https://www.google.com/maps/place/...", // add Google Business Profile URL
  },

  // ── Ratings (TODO: confirm real numbers before publishing) ──
  rating: {
    ratingValue: "4.9",
    reviewCount: "120",
  },
} as const;

/* ────────────────────────────────────────────────────────────────────────
 * 2. SITE CONFIG
 * ──────────────────────────────────────────────────────────────────────── */

export const siteConfig = {
  url: "https://www.junaidhomeinteriors.com", // canonical origin (no trailing slash)
  title: "Junaid Home Interiors | Best Interior Designer in Silchar, Assam",
  titleTemplate: "%s | Junaid Home Interiors", // per-page <title> pattern
  description: business.description,
  locale: "en_IN",
  ogImage: "/og-image.jpg", // 1200×630
  twitterHandle: "", // add if a Twitter/X account exists
} as const;

export const sameAs: string[] = Object.values(business.profiles).filter(Boolean);

/* ────────────────────────────────────────────────────────────────────────
 * 3. LOCAL KEYWORDS — primary local-intent terms
 * ──────────────────────────────────────────────────────────────────────── */

export const localKeywords: string[] = [
  "interior designer in Silchar",
  "home interiors Silchar",
  "modular kitchen Silchar",
  "false ceiling Silchar",
  "wardrobe design Silchar",
  "POP false ceiling Silchar",
  "interior designer Cachar",
  "turnkey home interiors Barak Valley",
  "office interior design Silchar",
  "best interior designer in Assam",
  "Junaid Home Interiors",
];

/* ────────────────────────────────────────────────────────────────────────
 * 4. SERVICES — drives service pages, sitemap, and schema offer catalog
 * ──────────────────────────────────────────────────────────────────────── */

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    description:
      "Custom modular kitchens in Silchar — cabinets, countertops, tall units and " +
      "soft-close fittings, factory-finished and installed to fit your space.",
    keywords: ["modular kitchen Silchar", "kitchen interior Silchar", "modular kitchen Assam"],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    description:
      "Built-in and sliding wardrobes designed for storage and style, custom-made " +
      "for bedrooms in Silchar and the Barak Valley.",
    keywords: ["wardrobe design Silchar", "sliding wardrobe Silchar", "bedroom wardrobe Assam"],
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling",
    description:
      "Gypsum, wooden and POP false ceiling designs with integrated lighting — " +
      "installed by Junaid Home Interiors across Silchar.",
    keywords: ["false ceiling Silchar", "POP design Silchar", "gypsum ceiling Silchar"],
  },
  {
    slug: "tv-units",
    title: "TV Units",
    description: "Modern TV units and entertainment walls with smart storage and cable management.",
    keywords: ["tv unit design Silchar", "tv cabinet Silchar"],
  },
  {
    slug: "pooja-unit",
    title: "Pooja Unit",
    description: "Bespoke pooja units that create a serene, dedicated space for worship at home.",
    keywords: ["pooja unit design Silchar", "mandir design Silchar"],
  },
  {
    slug: "full-home-interior",
    title: "Full Home Interior",
    description:
      "Complete turnkey home interiors in Silchar — from 2D/3D design to delivery and " +
      "installation in 45 days.",
    keywords: ["home interiors Silchar", "turnkey interiors Silchar", "full home interior Assam"],
  },
  {
    slug: "office-interior",
    title: "Office Interior",
    description: "Productive, professional office and commercial interiors designed and built end to end.",
    keywords: ["office interior design Silchar", "commercial interior Silchar"],
  },
  {
    slug: "painting-finishes",
    title: "Painting & Finishes",
    description: "Premium wall painting and finishes, including high-sheen washable Royal Shine paint.",
    keywords: ["wall painting Silchar", "home painting service Silchar"],
  },
];

/* ────────────────────────────────────────────────────────────────────────
 * 5. DEFAULT METADATA (applied in app/layout.tsx)
 * ──────────────────────────────────────────────────────────────────────── */

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: localKeywords,
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: business.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    ...(siteConfig.twitterHandle ? { creator: siteConfig.twitterHandle } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
  // verification: { google: "GOOGLE_SEARCH_CONSOLE_TOKEN" }, // add after Search Console setup
  category: "Interior Design",
};

/* ────────────────────────────────────────────────────────────────────────
 * 6. PER-PAGE METADATA HELPER
 * ──────────────────────────────────────────────────────────────────────── */

export interface PageMetaInput {
  title: string;
  description?: string;
  path?: string; // e.g. "/services/modular-kitchen"
  image?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  keywords,
  noindex = false,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: business.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/* ────────────────────────────────────────────────────────────────────────
 * 7. JSON-LD STRUCTURED DATA GENERATORS
 *    Inject the returned object via:
 *    <script type="application/ld+json"
 *            dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
 * ──────────────────────────────────────────────────────────────────────── */

const ABSOLUTE = (path = "") => `${siteConfig.url}${path}`;
const BUSINESS_ID = ABSOLUTE("/#business");

/** Primary LocalBusiness node — the heart of local SEO. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": BUSINESS_ID,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: siteConfig.url,
    telephone: business.phone,
    email: business.email,
    image: ABSOLUTE(siteConfig.ogImage),
    logo: ABSOLUTE("/logo.png"),
    priceRange: business.priceRange,
    foundingDate: business.foundingYear,
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${business.geo.latitude},${business.geo.longitude}`,
    areaServed: business.areaServed.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: business.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${dayName(d)}`),
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.ratingValue,
      reviewCount: business.rating.reviewCount,
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: ABSOLUTE(`/services/${s.slug}`),
      },
    })),
  };
}

/** WebSite node (enables sitelinks search box where eligible). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ABSOLUTE("/#website"),
    url: siteConfig.url,
    name: business.name,
    description: siteConfig.description,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-IN",
  };
}

/** Breadcrumb trail — pass ordered [{ name, path }]. */
export interface BreadcrumbItem {
  name: string;
  path: string;
}
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: ABSOLUTE(item.path),
    })),
  };
}

/** Service node for an individual service page. */
export function serviceJsonLd(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: ABSOLUTE(`/services/${service.slug}`),
    provider: { "@id": BUSINESS_ID },
    areaServed: business.areaServed.map((a) => ({ "@type": "City", name: a })),
  };
}

/** FAQ node — great for local "People also ask" visibility. */
export interface FaqItem {
  question: string;
  answer: string;
}
export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/* ────────────────────────────────────────────────────────────────────────
 * 8. CONVERSION LINK HELPERS (referenced by CTAs)
 * ──────────────────────────────────────────────────────────────────────── */

export const telLink = `tel:${business.phone}`;

export function whatsappLink(
  message = "Hi, I'd like a free interior design quote from Junaid Home Interiors."
) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

/* ────────────────────────────────────────────────────────────────────────
 * Internal util
 * ──────────────────────────────────────────────────────────────────────── */

function dayName(short: string): string {
  const map: Record<string, string> = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };
  return map[short] ?? short;
}

/* ══════════════════════════════════════════════════════════════════════════
 * USAGE EXAMPLES (Next.js App Router)
 * ══════════════════════════════════════════════════════════════════════════
 *
 * ── app/layout.tsx ──────────────────────────────────────────────────────
 *   import { defaultMetadata, localBusinessJsonLd, websiteJsonLd } from "@/seo";
 *
 *   export const metadata = defaultMetadata;
 *
 *   export default function RootLayout({ children }: { children: React.ReactNode }) {
 *     return (
 *       <html lang="en-IN">
 *         <body>
 *           {children}
 *           <script
 *             type="application/ld+json"
 *             dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
 *           />
 *           <script
 *             type="application/ld+json"
 *             dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
 *           />
 *         </body>
 *       </html>
 *     );
 *   }
 *
 * ── app/services/[slug]/page.tsx ────────────────────────────────────────
 *   import { services, buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/seo";
 *
 *   export function generateStaticParams() {
 *     return services.map((s) => ({ slug: s.slug }));
 *   }
 *
 *   export function generateMetadata({ params }: { params: { slug: string } }) {
 *     const s = services.find((x) => x.slug === params.slug)!;
 *     return buildMetadata({
 *       title: `${s.title} in Silchar`,
 *       description: s.description,
 *       path: `/services/${s.slug}`,
 *       keywords: s.keywords,
 *     });
 *   }
 *
 *   // In the component, render serviceJsonLd(s) and breadcrumbJsonLd([...]) as <script> tags.
 *
 * ── Conversion CTAs ─────────────────────────────────────────────────────
 *   import { telLink, whatsappLink } from "@/seo";
 *   <a href={telLink}>Call us</a>
 *   <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
 *
 * ════════════════════════════════════════════════════════════════════════ */