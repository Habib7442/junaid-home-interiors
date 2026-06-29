"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { services, business } from "@/lib/seo";
import {
  ChefHat,
  DoorOpen,
  Grid,
  ArrowRight,
  Bed,
  Sparkles,
  Key,
  Tv,
  Flower,
} from "lucide-react";

// Map service slugs to Lucide icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "modular-kitchens": ChefHat,
  "modular-wardrobes": DoorOpen,
  "bedroom-designs": Bed,
  "vanity-designs": Sparkles,
  "foyer-designs": Key,
  "tv-units": Tv,
  "false-ceiling": Grid,
  "pooja-designs": Flower,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
      damping: 15,
    },
  },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-[var(--background,#fdf9ef)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block mb-3">
              What We Do
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight">
              Complete A-to-Z Interior Services,{" "}
              <span className="font-heading italic font-light text-[var(--primary,#273316)]">
                customized
              </span>{" "}
              for your lifestyle.
            </h2>
          </div>
          <div>
            <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] leading-relaxed max-w-md">
              From modular setup to core structural alterations, our team in Silchar executes every project under single-point accountability.
            </p>
          </div>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.slug] || Grid;

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between p-6 rounded-[24px] bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/40 hover:border-[var(--primary-container,#3d4a2a)]/40 hover:bg-white hover:shadow-[0_15px_30px_rgba(43,42,36,0.06)] transition-all duration-300"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="h-12 w-12 rounded-xl bg-[var(--primary,#273316)]/5 flex items-center justify-center text-[var(--primary,#273316)] group-hover:bg-[var(--primary,#273316)] group-hover:text-white transition-colors duration-300 mb-6">
                    <IconComponent className="h-5 w-5 stroke-[1.75]" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-medium text-[var(--on-surface,#1c1c16)] mb-2.5">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-[var(--on-surface-variant,#45483f)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Explore Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[var(--secondary,#914b2a)] tracking-wide uppercase group/link hover:text-[var(--primary,#273316)] transition-colors w-fit pt-2 mt-auto"
                >
                  Explore Service
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1 duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[var(--outline-variant,#c6c8bb)] bg-white font-sans text-sm font-semibold text-[var(--primary,#273316)] hover:bg-[var(--primary,#273316)] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}
