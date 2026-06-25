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

          {/* Map Section */}
          <div className="mt-16 md:mt-20">
            <div className="mb-6">
              <h2 className="font-heading text-2xl font-medium text-[var(--on-surface,#1c1c16)]">
                Find Our Studio on Google Maps
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[var(--on-surface-variant,#45483f)] mt-1.5">
                Our main studio and factory modular showcase is located in Birbal Bazar, Meherpur, Silchar.
              </p>
            </div>
            <div className="relative w-full h-[350px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden border border-[var(--outline-variant,#c6c8bb)]/30 bg-[var(--surface-container-low,#f8f3ea)] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57953.616266917605!2d92.7270555496216!3d24.79199426669323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4bd210f467df%3A0xb68d9ece60e05351!2sJUNAID%20HOME%20INTERIORS!5e0!3m2!1sen!2sin!4v1782399887282!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Junaid Home Interiors Office Location"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
