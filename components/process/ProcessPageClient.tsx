"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  Cpu,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HelpCircle,
  Clock,
  ArrowRightCircle,
} from "lucide-react";
import { whatsappLink } from "@/lib/seo";

interface TimelineStep {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  weDo: string[];
  youDo: string[];
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ProcessPageClient() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Meet & Measure",
      icon: Calendar,
      duration: "3 - 5 Days",
      weDo: [
        "Conduct a free initial home consultation",
        "Take precise laser site measurements",
        "Analyze spatial layout and lighting conditions",
        "Draft the first raw 2D layout suggestion",
      ],
      youDo: [
        "Share your floor plans (if available)",
        "Share your budget preferences and style inspirations",
        "Detail your storage requirements",
      ],
      description:
        "We visit your property to understand your vision, inspect the site constraints, and take detailed measurements to construct our design grids.",
    },
    {
      number: "02",
      title: "3D Design & Selection",
      icon: Sparkles,
      duration: "7 - 10 Days",
      weDo: [
        "Create custom high-fidelity 3D renderings",
        "Host detailed material catalog walkthroughs",
        "Provide detailed transparent pricing quote",
        "Incorporate revision feedback",
      ],
      youDo: [
        "Review and modify 3D layouts",
        "Select colors, finishes (acrylic/matte), and handles",
        "Confirm layout selections and sign design contract",
      ],
      description:
        "See your home come to life with photorealistic 3D interior renders. Choose from custom colors, textures, and storage accessories before fabrication.",
    },
    {
      number: "03",
      title: "Precision Fabrication",
      icon: Cpu,
      duration: "20 - 25 Days",
      weDo: [
        "Fabricate custom modular cabinetry in our factory",
        "Source premium hardware (Ebco/Hettich)",
        "Pre-assemble modular units for quality testing",
        "Prepare site plumbing, wiring, and ceiling modifications",
      ],
      youDo: [
        "Ensure site accessibility for setup prep",
        "Release stage-two budget milestone payment",
      ],
      description:
        "While your modular units are built with precision machine-edges in the factory, our onsite team handles false ceilings, electrical rewiring, and civil work.",
    },
    {
      number: "04",
      title: "Assembly & Handover",
      icon: CheckCircle2,
      duration: "5 - 7 Days",
      weDo: [
        "Transport factory-finished parts securely to site",
        "Assemble and install modular kitchen cabinets, wardrobes, and paneling",
        "Mount customized lighting, handles, and accessories",
        "Perform deep cleaning and thorough quality checklist walkthrough",
      ],
      youDo: [
        "Join us for the final project walkthrough",
        "Accept your keys and welcome pack",
      ],
      description:
        "Our skilled carpenters assemble the factory units. After a rigorous quality control check and deep-cleaning, we hand over your beautiful new home.",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Do you charge for the initial consultation and measurements?",
      answer:
        "No, we do not. We offer a completely free introductory design consultation and onsite laser measurements for properties situated in Silchar and nearby regions.",
    },
    {
      question: "How long does the entire home interior transformation take?",
      answer:
        "We offer a 45-day delivery guarantee. Once the 3D renders are signed off and production begins, the factory crafting, transport, and site assembly are completed within 45 calendar days.",
    },
    {
      question: "What materials do you use for cabinetry and modular units?",
      answer:
        "We prioritize durability and use Action Tesa HDHMR (High-Density High Moisture Resistance) board for wet areas like kitchens, and premium CenturyPly or Greenply boiling waterproof plywood. All hinges and drawer runners are heavy-duty fittings from Ebco or Hettich.",
    },
    {
      question: "How is the project payment schedule structured?",
      answer:
        "Our payment structure matches production stages: 10% booking amount to lock services, 40% upon design approval to purchase materials, 45% when factory production begins, and the final 5% upon successful handover.",
    },
    {
      question: "Can I choose my own design colors, textures, and layouts?",
      answer:
        "Absolutely! Our designers guide you through physical laminate swatches, acrylic finishes, profile handles, and sliding layouts so your home matches your exact aesthetic tastes.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  const whatsappMessage =
    "Hi Junaid Home Interiors! I read about your 4-stage process on the website and would like to schedule a consultation.";

  return (
    <div className="flex-1 bg-[var(--background,#fdf9ef)]">
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 px-4 text-center border-b border-[var(--outline-variant,#c6c8bb)]/20 bg-gradient-to-b from-[#f9f4e6] to-[var(--background,#fdf9ef)]">
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-sm font-semibold tracking-wider text-[var(--primary,#4a601b)] uppercase bg-[var(--primary)]/10 px-4 py-1.5 rounded-full inline-block mb-4">
            How We Deliver
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[var(--on-surface,#1c1c16)] mb-6">
            Our Interior Process
          </h1>
          <p className="font-sans text-base sm:text-lg text-[var(--on-surface-variant,#45483f)] leading-relaxed max-w-xl mx-auto">
            From your very first sketch to collecting the keys — here is our
            frictionless 45-day journey to your dream home.
          </p>
        </div>
      </section>

      {/* Main Process Timeline Area */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vertical Step Toggles */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="font-heading text-2xl font-medium text-[var(--on-surface,#1c1c16)] mb-6">
              The 4 Project Stages
            </h2>
            <div className="space-y-3">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-5 rounded-[24px] border transition-all duration-300 flex items-center gap-4 group ${
                      isActive
                        ? "bg-[var(--surface-container-low,#f8f3ea)] border-[var(--primary,#4a601b)]/60 shadow-md scale-[1.01]"
                        : "bg-white/40 border-[var(--outline-variant,#c6c8bb)]/20 hover:bg-white/70 hover:border-[var(--outline-variant,#c6c8bb)]/50"
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center font-heading text-lg font-medium transition-colors duration-300 ${
                        isActive
                          ? "bg-[var(--primary,#4a601b)] text-white"
                          : "bg-stone-100 text-stone-500 group-hover:bg-stone-200"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading font-medium text-[var(--on-surface,#1c1c16)] text-base sm:text-lg">
                          {step.title}
                        </h3>
                        <span className="font-sans text-xs text-[var(--primary,#4a601b)] font-semibold flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[var(--on-surface-variant,#45483f)] mt-0.5 line-clamp-1">
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Stage Detail Panel */}
          <div className="lg:col-span-7 bg-[var(--surface-container-low,#f8f3ea)] rounded-[32px] border border-[var(--outline-variant,#c6c8bb)]/35 p-6 sm:p-8 shadow-sm">
            {/* Stage Title Header */}
            <div className="flex items-start gap-4 pb-6 border-b border-[var(--outline-variant,#c6c8bb)]/20">
              <div className="h-14 w-14 rounded-2xl bg-[var(--primary,#4a601b)]/10 text-[var(--primary,#4a601b)] flex items-center justify-center">
                <StepIcon className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <span className="font-heading text-lg font-bold text-[var(--primary,#4a601b)]">
                  Stage {currentStep.number}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[var(--on-surface,#1c1c16)]">
                  {currentStep.title}
                </h3>
              </div>
              <div className="bg-white/80 border border-[var(--outline-variant,#c6c8bb)]/20 px-4 py-1.5 rounded-full text-xs font-semibold font-sans text-[var(--on-surface-variant,#45483f)] shadow-sm">
                Timeline: {currentStep.duration}
              </div>
            </div>

            {/* Stage Description */}
            <p className="font-sans text-base text-[var(--on-surface-variant,#45483f)] leading-relaxed py-6">
              {currentStep.description}
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--outline-variant,#c6c8bb)]/20">
              {/* What We Do */}
              <div className="space-y-4">
                <h4 className="font-heading text-sm font-semibold tracking-wider text-[var(--primary,#4a601b)] uppercase flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary,#4a601b)]" />
                  What We Do
                </h4>
                <ul className="space-y-3">
                  {currentStep.weDo.map((item, idx) => (
                    <li
                      key={idx}
                      className="font-sans text-sm text-[var(--on-surface-variant,#45483f)] leading-relaxed flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[var(--primary,#4a601b)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You Do */}
              <div className="space-y-4">
                <h4 className="font-heading text-sm font-semibold tracking-wider text-amber-800 uppercase flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-800" />
                  What You Do
                </h4>
                <ul className="space-y-3">
                  {currentStep.youDo.map((item, idx) => (
                    <li
                      key={idx}
                      className="font-sans text-sm text-[var(--on-surface-variant,#45483f)] leading-relaxed flex items-start gap-2.5"
                    >
                      <ArrowRightCircle className="h-4.5 w-4.5 text-amber-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[var(--background,#fdf9ef)] to-[#f9f4e6] border-t border-b border-[var(--outline-variant,#c6c8bb)]/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs font-semibold tracking-wider text-[var(--primary,#4a601b)] uppercase bg-[var(--primary)]/10 px-3 py-1 rounded-full inline-block mb-3">
              Clear Doubts
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[var(--on-surface,#1c1c16)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[var(--outline-variant,#c6c8bb)]/20 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 hover:bg-stone-50/50"
                  >
                    <div className="flex gap-3">
                      <HelpCircle className="h-5 w-5 text-[var(--primary,#4a601b)] shrink-0 mt-0.5" />
                      <span className="font-heading font-medium text-[var(--on-surface,#1c1c16)] text-base sm:text-lg">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-stone-500 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-stone-500 shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-stone-100 font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[var(--on-surface,#1c1c16)] mb-4">
          Ready to Start Your Transformation?
        </h2>
        <p className="font-sans text-base sm:text-lg text-[var(--on-surface-variant,#45483f)] max-w-lg mx-auto mb-8">
          Contact our design studio today for a free space planning session and site measurements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-sans font-semibold text-white bg-[var(--primary,#4a601b)] hover:bg-[#3d5016] px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-101"
          >
            Schedule Free Consultation
            <ArrowRight className="h-5 w-5" />
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto font-sans font-semibold text-[var(--on-surface,#1c1c16)] hover:bg-white border border-[var(--outline-variant,#c6c8bb)] px-8 py-4 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-sm"
          >
            Visit Our Office
          </Link>
        </div>
      </section>
    </div>
  );
}
