import { Metadata } from "next";
import ServicesGrid from "@/components/home/ServicesGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Interior Design Services in Silchar | Junaid Home Interiors",
  description:
    "Explore our complete range of custom interior design services in Silchar, Assam. We build modular kitchens, sliding wardrobes, false ceilings, foyer consoles, bedroom designs, and luxury pooja rooms.",
  keywords: [
    "interior design services Silchar",
    "home interior decorator Assam",
    "modular kitchen installation Silchar",
    "wardrobe false ceiling designs",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const whatsappMsg =
    "Hi Junaid Home Interiors! I saw your list of interior design services on the website and would like to get a quote.";

  return (
    <main className="flex-1 bg-[var(--background,#fdf9ef)] pt-24">
      {/* Services Sub-Hero */}
      <section className="px-4 text-center max-w-4xl mx-auto pb-6">
        <span className="font-sans text-xs font-semibold tracking-wider text-[var(--primary,#4a601b)] uppercase bg-[var(--primary)]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Our Specializations
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-medium text-[var(--on-surface,#1c1c16)] mb-6">
          Premium Interior Design Solutions
        </h1>
        <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] leading-relaxed max-w-xl mx-auto">
          We design, fabricate, and install high-end modular spaces. From spatial
          layouts to final assembly, explore our list of expert interior design
          services.
        </p>
      </section>

      {/* Services Grid Component */}
      <ServicesGrid />

      {/* Closing CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-[var(--background,#fdf9ef)] to-[#f9f4e6] text-center border-t border-[var(--outline-variant,#c6c8bb)]/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-medium text-[var(--on-surface,#1c1c16)] mb-4">
            Need a Customized Layout?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] mb-8 max-w-md mx-auto">
            Schedule a free site measurement and consult with our designers to
            get a transparent pricing estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans font-semibold text-white bg-[var(--primary,#4a601b)] hover:bg-[#3d5016] px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Consult on WhatsApp
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto font-sans font-semibold text-[var(--on-surface,#1c1c16)] hover:bg-white border border-[var(--outline-variant,#c6c8bb)] px-8 py-3.5 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-sm"
            >
              Book Site Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
