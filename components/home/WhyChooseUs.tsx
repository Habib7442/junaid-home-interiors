"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CalendarCheck, Factory, FileText, UserCheck } from "lucide-react";

const usps = [
  {
    icon: CalendarCheck,
    title: "45-Day Delivery Guarantee",
    description: "Get your home ready in 45 days, or we pay you rent. No timeline excuses, complete accountability from design to handover.",
  },
  {
    icon: Factory,
    title: "Factory-Finished Quality",
    description: "Modular panels processed on state-of-the-art precision machinery. Flawless laminates, bubble-free edges, and long durability.",
  },
  {
    icon: FileText,
    title: "Next-Day Transparent Quote",
    description: "Receive detailed, fully itemized cost estimates and layouts within 24 hours of site measurements. Zero hidden charges.",
  },
  {
    icon: UserCheck,
    title: "On-Site Designer Visits",
    description: "Our principal designer personally visits your site, takes precision measurements, and coordinates technical execution on-ground.",
  },
];

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[var(--surface-container-low,#f8f3ea)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block mb-3">
            The Junaid Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight mb-4">
            Why Silchar Homeowners{" "}
            <span className="font-heading italic font-light text-[var(--primary,#273316)]">
              trust
            </span>{" "}
            Us
          </h2>
          <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] leading-relaxed">
            We bridge the gap between national design standards and local execution constraints, giving you a beautiful home without the stress.
          </p>
        </div>

        {/* USPS Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative flex flex-col items-center text-center p-8 rounded-[24px] bg-white border border-[var(--outline-variant,#c6c8bb)]/30 hover:shadow-[0_20px_40px_rgba(43,42,36,0.06)] hover:border-[var(--primary-container,#3d4a2a)]/20 transition-all duration-300"
              >
                {/* Circle Icon Badge */}
                <div className="h-16 w-16 rounded-full bg-[var(--primary,#273316)]/5 flex items-center justify-center text-[var(--primary,#273316)] group-hover:bg-[var(--primary,#273316)] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                  <IconComponent className="h-7 w-7 stroke-[1.5]" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-medium text-[var(--on-surface,#1c1c16)] mb-3 group-hover:text-[var(--secondary,#914b2a)] transition-colors">
                  {usp.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--on-surface-variant,#45483f)] leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
