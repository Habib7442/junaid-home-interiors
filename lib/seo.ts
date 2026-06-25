/**
 * seo.ts — Central SEO & Local-SEO configuration for Junaid Home Interiors
 * --------------------------------------------------------------------------
 * Target stack: Next.js (App Router) + TypeScript.
 */

import type { Metadata } from "next";

export const business = {
  legalName: "Junaid Home Interiors",
  name: "Junaid Home Interiors",
  tagline: "Complete A-to-Z Home Interior Service",
  description:
    "Junaid Home Interiors is a turnkey home-interior studio in Silchar, Assam, " +
    "established in 2015. We design, manufacture and install modular kitchens, " +
    "wardrobes, false ceilings and complete home interiors — delivered in 45 days.",
  foundingYear: "2015",

  phone: "+917019825509", // E.164 — for tel: links & schema
  phoneDisplay: "+91 70198 25509", // human-readable
  whatsapp: "917019825509", // wa.me number (no +)
  email: "junaidhomeinteriors7@gmail.com",

  address: {
    streetAddress: "Alitikar Road, Meherpur, Birbal Bazar",
    locality: "Silchar",
    region: "Assam",
    postalCode: "788015",
    country: "IN",
  },
  geo: {
    latitude: 24.7921165,
    longitude: 92.798922,
  },
  areaServed: ["Silchar", "Cachar", "Barak Valley", "Assam"],
  openingHours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], opens: "10:00", closes: "19:00" },
  ],
  priceRange: "₹₹",
  profiles: {
    instagram: "https://www.instagram.com/junaidhomeinteriors__official/",
    justdial:
      "https://www.justdial.com/Silchar/Junaid-Home-Interiors-Nagatila-Point-Meherpur/9999P3842-3842-230409014517-E7X7_BZDET",
  },
  rating: {
    ratingValue: "4.9",
    reviewCount: "120",
  },
} as const;

export const siteConfig = {
  url: "https://www.junaidhomeinteriors.com",
  title: "Junaid Home Interiors | Best Interior Designer in Silchar, Assam",
  titleTemplate: "%s | Junaid Home Interiors",
  description: business.description,
  locale: "en_IN",
  ogImage: "/og-image.jpg",
  twitterHandle: "",
} as const;

export const sameAs: string[] = Object.values(business.profiles).filter(Boolean);

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

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    description:
      "Premium modular kitchens — L-shaped, U-shaped, parallel and island designs customized with soft-close fittings and factory finishes.",
    keywords: ["modular kitchen Silchar", "kitchen interior Silchar", "modular kitchen Assam"],
  },
  {
    slug: "modular-wardrobes",
    title: "Modular Wardrobes",
    description:
      "Built-in sliding and open wardrobes tailored to your bedroom layout with customized racks, drawers, and premium textures.",
    keywords: ["wardrobe design Silchar", "sliding wardrobe Silchar", "bedroom wardrobe Assam"],
  },
  {
    slug: "lighting",
    title: "Lighting",
    description:
      "Modern ambient, task, and accent lighting layouts including false ceiling LED profiles, strip lights, and decorative fixtures.",
    keywords: ["home lighting design Silchar", "LED profiles design Silchar", "false ceiling lights Silchar"],
  },
  {
    slug: "flooring",
    title: "Flooring",
    description:
      "Premium wooden, vitrified tiles, marble, and vinyl flooring options installed with flawless precision.",
    keywords: ["flooring installation Silchar", "wooden flooring Silchar", "tiles marble contractor Silchar"],
  },
  {
    slug: "electrical-work",
    title: "Electrical Work",
    description:
      "Complete house wiring, socket relocations, safety switches, and appliance installations managed end-to-end.",
    keywords: ["house wiring electrician Silchar", "electrical contractor Silchar"],
  },
  {
    slug: "civil-work",
    title: "Civil Work",
    description:
      "Structural masonry, wall alterations, bathroom tiling, and plumbing alterations executed with expert quality.",
    keywords: ["civil work contractor Silchar", "tiling plumbing work Silchar"],
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling",
    description:
      "Custom false ceiling designs in Gypsum, Wooden, and POP finishes with integrated cove lighting and layouts.",
    keywords: ["false ceiling Silchar", "POP design Silchar", "gypsum ceiling Silchar"],
  },
  {
    slug: "wall-design-painting",
    title: "Wall Design & Painting",
    description:
      "Flawless wall finishing services from putty applications to texture painting and washable royal shine paints.",
    keywords: ["wall painting Silchar", "home painting service Silchar", "texture painting Silchar"],
  },
];

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
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE", // Replace with your verification code from Google Search Console
  },
  category: "Interior Design",
};

export interface PageMetaInput {
  title: string;
  description?: string;
  path?: string;
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

const ABSOLUTE = (path = "") => `${siteConfig.url}${path}`;
const BUSINESS_ID = ABSOLUTE("/#business");

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
    logo: ABSOLUTE("/logo.jpeg"),
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

export const telLink = `tel:${business.phone}`;

export function whatsappLink(
  message = "Hi, I'd like a free interior design quote from Junaid Home Interiors."
) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

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
