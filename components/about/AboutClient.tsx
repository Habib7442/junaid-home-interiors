"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Sparkles, Clock, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function AboutClient() {
  const stats = [
    { value: "10+ Years", label: "Studio Design Excellence", sub: "Since 2015" },
    { value: "500+ Homes", label: "Completed Projects", sub: "In Silchar & Cachar" },
    { value: "45 Days", label: "Turnkey Handover", sub: "Timeline Guarantee" },
    { value: "10 Years", label: "Material Warranty", sub: "ISO-Certified Plywood" },
  ];

  const pillars = [
    {
      icon: Wrench,
      title: "Factory-Finished Precision",
      description:
        "No raw carpentry or dusty manufacturing on your floor. All modular cabinets, shutters, and drawers are fabricated at our state-of-the-art facility using high-precision CNC machinery and finished with laser edge-banding.",
    },
    {
      icon: Clock,
      title: "45-Day Delivery Guarantee",
      description:
        "We value your time. We sign off on design timelines and guarantee key handovers in 45 days. If we delay, we pay penalty charges. Your move-in date is locked and respected.",
    },
    {
      icon: ShieldCheck,
      title: "Material Transparency",
      description:
        "We never hide cheap MDF or particle board under laminates. We use marine-grade, boiling-water-proof (BWP) blockboards and branded structural acrylic panels with hardware from Blum, Hettich, and Sleek.",
    },
    {
      icon: Sparkles,
      title: "On-Site Design consultations",
      description:
        "Our designers guide you at every step. From conducting three-dimensional room measurements to matching texture schemes in your lighting, we refine every detail on-site before starting production.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero Section */}
      <section className="py-20 md:py-28 pt-28 md:pt-36 bg-[var(--background,#fdf9ef)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Title / Description */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block">
                Our Studio Story
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight">
                Designing spaces that make you feel at <span className="italic font-normal">home</span>.
              </h1>
              <p className="font-sans text-sm sm:text-base md:text-lg text-[var(--on-surface-variant,#45483f)] leading-relaxed">
                Founded in 2015 in Silchar, Assam, Junaid Home Interiors was born from a simple mission: to replace stressful on-site carpentry with factory-finished precision, transparent estimates, and reliable handover dates.
              </p>
              <p className="font-sans text-sm text-[var(--on-surface-variant,#45483f)]/80 leading-relaxed">
                Today, we operate as a full-service turnkey interior studio. We manage everything from spatial layouts, civil modifications, false ceilings, and modular cabinets to premium lighting and flooring installation under one unified contract.
              </p>
            </div>

            {/* Visual Brand Card */}
            <div className="lg:col-span-5 bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/30 rounded-[32px] p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-[var(--primary,#273316)]/5 blur-3xl" />
              
              <div className="space-y-4">
                <span className="font-sans text-[10px] font-bold text-[var(--primary,#273316)] bg-[var(--primary,#273316)]/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Brand Philosophy
                </span>
                <p className="font-heading text-xl md:text-2xl text-[var(--on-surface,#1c1c16)] leading-relaxed italic font-normal">
                  &ldquo;A home should not just look beautiful &mdash; it must serve your family&apos;s daily rhythm and stand the test of time.&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--outline-variant,#c6c8bb)]/20 mt-6">
                <p className="font-sans text-xs font-bold text-[var(--on-surface,#1c1c16)]">
                  Junaid &amp; The Design Team
                </p>
                <p className="font-sans text-[10px] text-[var(--on-surface-variant,#45483f)]/70 uppercase tracking-wider mt-0.5">
                  Founders, Junaid Home Interiors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Lavender background for creative separation */}
      <section className="py-16 bg-[var(--surface-lavender)] border-y border-[var(--outline-variant,#c6c8bb)]/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                variants={itemVariants}
                className="text-center flex flex-col items-center"
              >
                <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--primary,#273316)] mb-2 tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-xs md:text-sm font-bold text-[var(--on-surface,#1c1c16)]">
                  {stat.label}
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-[var(--on-surface-variant,#45483f)]/60 mt-1">
                  {stat.sub}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Core Pillars Section with Sage Background */}
      <section className="py-20 md:py-28 bg-[var(--surface-sage)] border-b border-[var(--outline-variant,#c6c8bb)]/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16">
            <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block mb-3">
              The Junaid Way
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight">
              Our Core Design Pillars
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] mt-2">
              Every project is backed by our strict design standards and client-first delivery commitments.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  className="bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/20 rounded-[28px] p-8 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-12 w-12 rounded-2xl bg-[var(--primary,#273316)]/10 text-[var(--primary,#273316)] flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-medium text-[var(--on-surface,#1c1c16)]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-[var(--on-surface-variant,#45483f)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-[var(--background,#fdf9ef)]">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <div className="bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/25 rounded-[32px] p-8 md:p-12 shadow-sm space-y-6 flex flex-col items-center">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight max-w-xl">
              Ready to start planning your <span className="italic font-normal">dream</span> space?
            </h2>
            <p className="font-sans text-sm text-[var(--on-surface-variant,#45483f)] max-w-lg leading-relaxed">
              Schedule a free consultation call or visit our studio in Silchar to discuss your floor layout plans and receive preliminary estimates.
            </p>
            <Link href="/contact" className="pt-2">
              <Button className="rounded-full bg-[var(--primary,#273316)] text-white hover:bg-[var(--primary-container,#3d4a2a)] text-xs font-bold tracking-wider uppercase px-8 py-4 transition-all shadow-md flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="h-4 w-4 text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
