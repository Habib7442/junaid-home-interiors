"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, MessageSquare, ZoomIn, ArrowRight } from "lucide-react";
import {
  projects,
  Project,
  ProjectCategory,
  categoryLabels,
} from "@/lib/projects";
import { whatsappLink } from "@/lib/seo";

interface FeaturedWorkProps {
  initialProjects?: Project[];
}

const categoryOrder: ProjectCategory[] = [
  "modular-kitchen",
  "wardrobe-design",
  "bedroom-design",
  "tv-unit",
  "false-ceiling",
  "pvc-ceiling",
  "pooja-unit",
  "foyer-unit",
  "vanity-unit",
];

const getCategoryRedirectUrl = (category: ProjectCategory): string => {
  switch (category) {
    case "modular-kitchen":
      return "/services/modular-kitchens";
    case "wardrobe-design":
      return "/services/modular-wardrobes";
    case "bedroom-design":
      return "/services/bedroom-designs";
    case "vanity-unit":
      return "/services/vanity-designs";
    case "false-ceiling":
    case "pvc-ceiling":
      return "/services/false-ceiling";
    default:
      return "/#services";
  }
};

export default function FeaturedWork({ initialProjects }: FeaturedWorkProps) {
  const displayProjects =
    initialProjects && initialProjects.length > 0 ? initialProjects : projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 bg-[var(--background,#fdf9ef)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block mb-3">
              Our Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight">
              Featured Work
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] mt-2">
              Browse through our actual completed projects across Silchar,
              showcasing factory-finished precision and tailored home designs.
            </p>
          </div>

          <div className="self-start md:self-auto px-4 py-2 bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/20 rounded-full font-sans text-xs font-semibold text-[var(--on-surface-variant,#45483f)] select-none">
            {displayProjects.length} Projects Delivered
          </div>
        </div>

        {/* Portfolio Categories List */}
        <div className="space-y-16">
          {categoryOrder.map((cat) => {
            const catProjects = displayProjects.filter(
              (p) => p.category === cat
            );
            if (catProjects.length === 0) return null;
            const top10 = catProjects.slice(0, 10);

            return (
              <div key={cat} className="group/cat">
                {/* Category Header */}
                <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[var(--outline-variant,#c6c8bb)]/25">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[var(--on-surface,#1c1c16)]">
                    {categoryLabels[cat]} Designs
                  </h3>
                  <span className="font-sans text-xs text-[var(--on-surface-variant,#45483f)] font-medium bg-[var(--surface-container-low,#f8f3ea)] px-2.5 py-1 rounded-full border border-[var(--outline-variant,#c6c8bb)]/10">
                    {catProjects.length} ideas
                  </span>
                </div>

                {/* Horizontal Scroll view */}
                <div className="relative w-full">
                  <div className="flex overflow-x-auto scrollbar-none gap-6 pb-4 snap-x snap-mandatory scroll-smooth px-1">
                    {top10.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="flex-shrink-0 w-[280px] sm:w-[360px] aspect-[4/3] relative rounded-[24px] overflow-hidden cursor-pointer bg-stone-100 border border-[var(--outline-variant,#c6c8bb)]/30 hover:shadow-lg snap-start transition-all duration-300"
                      >
                        {/* Project Image */}
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 280px, 360px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Dark Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                        {/* Centered Zoom Icon on Hover */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                          <div className="h-12 w-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg">
                            <ZoomIn className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Redirect Button */}
                <div className="mt-4 flex justify-end">
                  <Link href={getCategoryRedirectUrl(cat)}>
                    <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[var(--secondary,#914b2a)] hover:text-[var(--primary,#273316)] uppercase tracking-wider transition-colors group/btn">
                      Explore All {categoryLabels[cat]} Designs
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox zoom modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-[500px] bg-stone-900 border border-stone-800 rounded-[32px] overflow-hidden z-10 flex flex-col shadow-2xl"
            >
              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 h-10 w-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Showcase */}
              <div className="relative w-full aspect-[4/3] select-none bg-black">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 500px) 100vw, 500px"
                  priority
                />
              </div>

              {/* Details & WhatsApp trigger */}
              <div className="p-6 flex flex-col gap-4 text-white bg-stone-900">
                {/* Modal CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={whatsappLink(
                      `Hi Junaid Home Interiors! I saw this design (${
                        selectedProject.title
                      }, ${
                        selectedProject.locality
                      }) on your website portfolio and would like to enquire about similar interior work.\n\nDesign Image: ${
                        selectedProject.image.startsWith("http")
                          ? selectedProject.image
                          : `${window.location.origin}${selectedProject.image}`
                      }`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold transition-colors shadow-md"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Enquire on WhatsApp
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full h-12 rounded-full border border-stone-700 hover:bg-stone-800 text-stone-300 font-sans text-sm font-semibold transition-colors"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
