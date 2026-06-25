import React from "react";
import type { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";
import { buildMetadata, localBusinessJsonLd, websiteJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Turnkey Interior Studio in Silchar",
  description:
    "Learn about Junaid Home Interiors, Silchar's premier turnkey design studio. Established in 2015, we deliver factory-finished modular kitchens, wardrobes, and ceilings in 45 days.",
  path: "/about",
  keywords: [
    "about Junaid Home Interiors",
    "turnkey interior designer Silchar",
    "factory modular kitchen Silchar",
    "home interior designs Assam",
    "Junaid team interior designers",
  ],
});

export default function AboutPage() {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd(),
      websiteJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
      ]),
    ],
  };

  return (
    <>
      {/* Search Engine Optimization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* Animated Client UI content */}
      <AboutClient />
    </>
  );
}
