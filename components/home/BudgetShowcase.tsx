"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { assets } from "@/lib/assets";
import { X, Check, ArrowRight } from "lucide-react";

// Card list data
const budgetCards = [
  {
    space: "2BHK",
    price: "₹3.57L*",
    image: assets.images.budget2bhk,
    description: "Cozy living & dining area customized to fit small spaces.",
  },
  {
    space: "3BHK",
    price: "₹4.23L*",
    image: assets.images.budget3bhk,
    description: "Spacious open-concept living room and premium dining.",
  },
  {
    space: "Modular Kitchen",
    price: "₹1.37L*",
    image: assets.images.budgetKitchen,
    description: "Sleek and warm modular cabinets with quartz countertops.",
  },
  {
    space: "Bedroom",
    price: "₹1.49L*",
    image: assets.images.budgetBedroom,
    description: "Cozy master bedroom with elegant bed and wood panels.",
  },
];

// Reusable 3D Tilt Card Component
function TiltCard({
  space,
  price,
  image,
  description,
  onClick,
}: {
  space: string;
  price: string;
  image: string;
  description: string;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking cursor coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform coordinates into rotation degrees
  const rotateX = useTransform(y, [-200, 200], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  // Transform coordinates into glare gradient positions
  const glareX = useTransform(x, [-150, 150], ["0%", "100%"]);
  const glareY = useTransform(y, [-200, 200], ["0%", "100%"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset rotations smoothly
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onClick={onClick}
      className="relative h-[360px] sm:h-[420px] w-[260px] sm:w-full shrink-0 rounded-[28px] overflow-hidden cursor-pointer shadow-[0_15px_35px_rgba(43,42,36,0.12)] group border border-[var(--outline-variant,#c6c8bb)]/20 snap-center bg-stone-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={image}
          alt={`${space} Interior Budget Design`}
          fill
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Soft shadow gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 z-10" />
      </div>

      {/* Dynamic 3D Glare Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />

      {/* Starting Price Tag (Top Left) */}
      <div 
        className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-[11px] font-sans font-bold px-3 py-1.5 rounded-full border border-white/10 select-none transition-transform duration-300 group-hover:scale-105"
        style={{ transform: "translateZ(30px)" }}
      >
        Starting at {price}
      </div>

      {/* Info Content (Bottom) */}
      <div 
        className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-end text-white"
        style={{ transform: "translateZ(40px)" }}
      >
        <h3 className="font-heading text-2xl font-semibold mb-1 group-hover:text-[var(--secondary-container,#fda27b)] transition-colors">
          {space}
        </h3>
        <p className="font-sans text-xs text-stone-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-12 overflow-hidden">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function BudgetShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    whatsAppUpdates: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const openModal = (space: string) => {
    setSelectedSpace(space);
    setStep(1);
    setIsSuccess(false);
    setFormData({ name: "", phone: "", email: "", whatsAppUpdates: true });
    setErrors({});
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = "Enter a valid name (min. 2 characters)";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit Indian phone number";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email ID";
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Success State & WhatsApp Integration
    setIsSuccess(true);
    
    // Construct message details for WhatsApp
    const message = `Hi Junaid Home Interiors! I want to explore design ideas and budget estimates for my *${selectedSpace}* space.

My Details:
👤 *Name:* ${formData.name.trim()}
📞 *Phone:* +91 ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim()}
💬 *WhatsApp Updates:* ${formData.whatsAppUpdates ? "Yes, please" : "No"}

Please get in touch with me soon!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/917019825509?text=${encodedMessage}`;

    // Redirect user to WhatsApp in new window after 1.2s delay
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      closeModal();
    }, 1200);
  };

  return (
    <section className="py-20 bg-[var(--background,#fdf9ef)] border-b border-[var(--outline-variant,#c6c8bb)]/20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-sans text-[11px] font-bold text-[var(--secondary,#914b2a)] tracking-[0.15em] uppercase block mb-3">
              Budget Planning
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[var(--on-surface,#1c1c16)] leading-tight">
              Homes for every budget
            </h2>
            <p className="font-sans text-sm sm:text-base text-[var(--on-surface-variant,#45483f)] mt-2">
              Our interior designers work with you keeping in mind your requirements and budget
            </p>
          </div>
          <button
            onClick={() => openModal("Full Home")}
            className="self-start md:self-auto rounded-full bg-[var(--secondary,#914b2a)] hover:bg-[var(--secondary-container,#fda27b)] hover:text-[var(--on-secondary-container,#773718)] text-white text-xs font-bold tracking-wider uppercase px-7 py-4 transition-all shadow-md shrink-0 active:scale-95 duration-200"
          >
            GET FREE QUOTE
          </button>
        </div>

        {/* Scrollable Cards Container */}
        {/* Mobile: scrollable row, Desktop: 4 columns grid */}
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible scrollbar-hide">
          {budgetCards.map((card) => (
            <TiltCard
              key={card.space}
              space={card.space}
              price={card.price}
              image={card.image}
              description={card.description}
              onClick={() => openModal(card.space)}
            />
          ))}
        </div>

      </div>

      {/* Dynamic 2-Step Lead Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-[430px] rounded-[32px] bg-white shadow-2xl p-8 z-10 overflow-hidden border border-stone-100"
            >
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Success View */}
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6 shadow-sm animate-pulse">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-stone-900 mb-2">
                    Connecting to WhatsApp...
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-xs">
                    Opening chat with Junaid Home Interiors to secure your catalog and custom design quotation.
                  </p>
                </div>
              ) : (
                
                /* Form View */
                <div>
                  
                  {/* Form Steps Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-sans text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                      Step {step} of 2
                    </span>
                    <div className="flex items-center gap-1">
                      {/* Step circles */}
                      <div className={`h-2 w-2 rounded-full ${step === 1 ? "bg-[var(--secondary,#914b2a)]" : "bg-stone-200"}`} />
                      <div className={`h-2 w-2 rounded-full ${step === 2 ? "bg-[var(--secondary,#914b2a)]" : "bg-stone-200"}`} />
                    </div>
                  </div>

                  {/* Step 1 Content */}
                  <AnimatePresence mode="wait">
                    {step === 1 ? (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="font-heading text-2xl font-semibold text-stone-900 leading-tight mb-2">
                          Explore {selectedSpace} Design Ideas
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-stone-500 leading-relaxed mb-6">
                          Fill details, our interior designer will reach you with design ideas & budget.
                        </p>

                        <form onSubmit={handleNext} className="space-y-4">
                          
                          {/* Name Input */}
                          <div className="space-y-2">
                            <label htmlFor="modal-name" className="font-sans text-xs font-bold text-stone-700 uppercase tracking-wide">
                              Name
                            </label>
                            <div className="relative">
                              <input
                                id="modal-name"
                                name="name"
                                type="text"
                                placeholder="Habib"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full h-12 px-4 rounded-[14px] border bg-stone-50 text-sm font-sans focus:outline-none focus:bg-white transition-all ${
                                  errors.name
                                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                                    : "border-stone-200 focus:border-[var(--primary,#273316)] focus:ring-1 focus:ring-[var(--primary,#273316)]"
                                }`}
                              />
                              {formData.name.trim().length >= 2 && !errors.name && (
                                <Check className="absolute right-4 top-3.5 h-5 w-5 text-emerald-600" />
                              )}
                            </div>
                            {errors.name && (
                              <p className="text-[11px] text-red-600 font-medium">{errors.name}</p>
                            )}
                          </div>

                          {/* Phone Input */}
                          <div className="space-y-2">
                            <label htmlFor="modal-phone" className="font-sans text-xs font-bold text-stone-700 uppercase tracking-wide">
                              Phone Number
                            </label>
                            <div className="relative flex">
                              {/* Fake Country Prefix */}
                              <div className="h-12 border border-r-0 border-stone-200 bg-stone-100 rounded-l-[14px] px-3.5 flex items-center gap-1.5 text-stone-500 text-sm select-none">
                                <span className="text-base">🇮🇳</span>
                                <span className="font-sans font-medium text-xs">+91</span>
                              </div>
                              <input
                                id="modal-phone"
                                name="phone"
                                type="tel"
                                maxLength={10}
                                placeholder="91123 45678"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full h-12 px-4 rounded-r-[14px] border bg-stone-50 text-sm font-sans focus:outline-none focus:bg-white transition-all ${
                                  errors.phone
                                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                                    : "border-stone-200 focus:border-[var(--primary,#273316)] focus:ring-1 focus:ring-[var(--primary,#273316)]"
                                }`}
                              />
                              {/^[6-9]\d{9}$/.test(formData.phone) && !errors.phone && (
                                <Check className="absolute right-4 top-3.5 h-5 w-5 text-emerald-600" />
                              )}
                            </div>
                            {errors.phone && (
                              <p className="text-[11px] text-red-600 font-medium">{errors.phone}</p>
                            )}
                          </div>

                          {/* WhatsApp updates Checkbox */}
                          <label className="flex items-center gap-3 select-none cursor-pointer pt-2 group">
                            <input
                              type="checkbox"
                              name="whatsAppUpdates"
                              checked={formData.whatsAppUpdates}
                              onChange={handleInputChange}
                              className="h-5 w-5 rounded border-stone-300 text-[var(--secondary,#914b2a)] focus:ring-0 focus:ring-offset-0 accent-[var(--secondary,#914b2a)] cursor-pointer"
                            />
                            <span className="font-sans text-xs text-stone-600 group-hover:text-stone-900 transition-colors">
                              Send me updates on WhatsApp
                            </span>
                          </label>

                          {/* Next Button */}
                          <button
                            type="submit"
                            className="w-full h-12 rounded-full bg-[var(--secondary,#914b2a)] hover:bg-[var(--secondary-container,#fda27b)] hover:text-[var(--on-secondary-container,#773718)] text-white text-sm font-semibold tracking-wider uppercase transition-all shadow-md mt-6 flex items-center justify-center gap-2 group/btn"
                          >
                            NEXT
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>

                        </form>
                      </motion.div>
                    ) : (
                      
                      /* Step 2 Content */
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="font-heading text-2xl font-semibold text-stone-900 leading-tight mb-2">
                          Get Design Ideas & Budget Now
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-stone-500 leading-relaxed mb-6">
                          Enter your email ID to finish and download your personalized brochure catalog.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          
                          {/* Email Input */}
                          <div className="space-y-2">
                            <label htmlFor="modal-email" className="font-sans text-xs font-bold text-stone-700 uppercase tracking-wide">
                              Email ID
                            </label>
                            <div className="relative">
                              <input
                                id="modal-email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full h-12 px-4 rounded-[14px] border bg-stone-50 text-sm font-sans focus:outline-none focus:bg-white transition-all ${
                                  errors.email
                                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                                    : "border-stone-200 focus:border-[var(--primary,#273316)] focus:ring-1 focus:ring-[var(--primary,#273316)]"
                                }`}
                              />
                              {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && !errors.email && (
                                <Check className="absolute right-4 top-3.5 h-5 w-5 text-emerald-600" />
                              )}
                            </div>
                            {errors.email && (
                              <p className="text-[11px] text-red-600 font-medium">{errors.email}</p>
                            )}
                          </div>

                          <div className="flex gap-4 items-center pt-4">
                            {/* Back Button */}
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="flex-1 h-12 rounded-full border border-stone-200 font-sans text-stone-600 hover:text-stone-950 hover:bg-stone-50 text-xs font-bold tracking-wider uppercase transition-colors"
                            >
                              &larr; BACK
                            </button>

                            {/* Submit Button */}
                            <button
                              type="submit"
                              className="flex-[2] h-12 rounded-full bg-[var(--secondary,#914b2a)] hover:bg-[var(--secondary-container,#fda27b)] hover:text-[var(--on-secondary-container,#773718)] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md"
                            >
                              GET IDEAS & BUDGET
                            </button>
                          </div>

                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Safety text footer */}
                  <p className="font-sans text-[10px] text-stone-400 text-center leading-relaxed mt-6 border-t border-stone-100 pt-4">
                    By submitting this form, you agree to our{" "}
                    <span className="underline hover:text-stone-700 cursor-pointer">privacy policy</span>{" "}
                    &{" "}
                    <span className="underline hover:text-stone-700 cursor-pointer">terms and conditions</span>.
                  </p>

                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
