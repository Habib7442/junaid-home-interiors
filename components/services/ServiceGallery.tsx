"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, MessageSquare, ZoomIn, ArrowLeft } from "lucide-react";
import { Project } from "@/lib/projects";
import { whatsappLink } from "@/lib/seo";

interface ServiceGalleryProps {
  title: string;
  description: string;
  projects: Project[];
  slug: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function ServiceGallery({
  title,
  description,
  projects,
  slug,
}: ServiceGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-28 bg-[var(--background,#fdf9ef)] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--secondary,#914b2a)] hover:text-[var(--primary,#273316)] uppercase tracking-wider mb-8 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block mb-3">
            Our Services
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight">
            {title}
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] mt-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Grid Container */}
        {projects.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--outline-variant,#c6c8bb)]/20">
              <span className="font-sans text-xs font-semibold text-[var(--on-surface-variant,#45483f)]">
                Showing {projects.length} design ideas
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  onClick={() => setSelectedProject(project)}
                  className="group relative h-[320px] rounded-[24px] overflow-hidden cursor-pointer bg-stone-100 border border-[var(--outline-variant,#c6c8bb)]/30 hover:shadow-xl hover:shadow-[var(--primary,#273316)]/[0.04] transition-shadow duration-300"
                >
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* Fallback when no projects exist in category */
          <div className="text-center py-20 px-6 bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/20 rounded-[32px] max-w-xl mx-auto">
            <h3 className="font-heading text-xl font-medium text-[var(--on-surface,#1c1c16)] mb-3">
              Portfolio Coming Soon
            </h3>
            <p className="font-sans text-sm text-[var(--on-surface-variant,#45483f)] mb-8 leading-relaxed">
              We are currently uploading our latest completed {title.toLowerCase()} projects. Get in touch with us on WhatsApp to view our catalog or book a site visit.
            </p>
            <a
              href={whatsappLink(
                `Hi Junaid Home Interiors! I saw your ${title} service on the website and would like to enquire about similar interior works.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 px-8 rounded-full bg-[var(--primary,#273316)] text-white font-sans text-sm font-semibold hover:bg-[var(--secondary,#914b2a)] transition-colors shadow-sm"
            >
              <MessageSquare className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
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
