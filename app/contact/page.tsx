import React from "react";
import type { Metadata } from "next";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata, localBusinessJsonLd, websiteJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Junaid Home Interiors Silchar",
  description:
    "Get in touch with Junaid Home Interiors in Silchar, Assam. Book a free consultation for modular kitchens, sliding wardrobes, false ceilings and turnkey home interiors.",
  path: "/contact",
  keywords: [
    "contact Junaid Home Interiors",
    "interior designer Silchar contact",
    "book consultation Silchar interiors",
    "Junaid Home Interiors phone number",
    "office location Meherpur Silchar",
  ],
});

export default function ContactPage() {
  // Combine multiple schema specifications in a single graph
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd(),
      websiteJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact" },
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

      <section className="min-h-screen py-20 md:py-28 pt-28 md:pt-36 bg-[var(--background,#fdf9ef)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          
          {/* Editorial Page Header */}
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block mb-3">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight">
              Let&apos;s start co-designing your <span className="italic font-normal">dream</span> home.
            </h1>
            <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] mt-4 leading-relaxed">
              Have questions about factory-finished modular cabinets, false ceiling estimates, or turnkey timelines? Contact our Silchar team or visit our Meherpur design studio.
            </p>
          </div>

          {/* Contact Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left side details: channels and locations */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ContactInfo />
            </div>

            {/* Right side form card */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
