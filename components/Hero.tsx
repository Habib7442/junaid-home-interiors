"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/lib/assets";
import { services, whatsappLink, telLink, business } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    locality: "",
    service: "",
    honeypot: "", // anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = "Enter a valid name";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit Indian phone number";
    }

    if (!formData.locality.trim()) {
      nextErrors.locality = "Locality/City is required";
    }

    if (!formData.service) {
      nextErrors.service = "Please select a service";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Silently discard spam bots
      setIsSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Construct a clean prefilled message with form details
      const message = `Hi Junaid Home Interiors, I've just requested a design consultation on your website.\n\nHere are my details:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Locality: ${formData.locality}\n- Required Service: ${formData.service}\n\nLet's discuss further!`;
      
      const url = whatsappLink(message);
      
      // Open WhatsApp in a new tab
      window.open(url, "_blank");
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Lead submission error: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-[750px] w-full flex items-center overflow-hidden py-16 lg:py-24">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.images.heroBg}
          alt="Premium turnkey interior design mockup by Junaid Home Interiors"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent lg:bg-gradient-to-r lg:from-black/85 lg:via-black/55 lg:to-black/35" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-white">
          {/* Trust Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--primary-container,#3d4a2a)]/80 text-[var(--on-primary-container,#aab990)] text-xs font-bold px-4 py-2 rounded-full mb-6 backdrop-blur-md border border-[var(--on-primary-container,#aab990)]/15 select-none shadow-md">
            <span className="text-amber-400 font-sans">★ ★ ★ ★ ★</span>
            <span className="tracking-wide">
              {business.rating.ratingValue} Rating ({business.rating.reviewCount}+ Google Reviews)
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] lg:leading-[1.1] mb-6 tracking-tight max-w-[650px]">
            Beautiful A-to-Z home interiors,{" "}
            <span className="font-heading italic font-light text-[var(--secondary-container,#fda27b)]">
              crafted
            </span>{" "}
            for your home.
          </h1>

          {/* Subheading */}
          <p className="font-sans text-stone-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-[550px] mb-8">
            Get factory-finished modular kitchens, customized wardrobes, and complete A-to-Z home interior services delivered in just 45 days.
          </p>

          {/* Trust stats row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/20 pt-8 w-full max-w-[550px]">
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--secondary-container,#fda27b)]">
                45 Days
              </div>
              <div className="text-xs sm:text-sm text-stone-300 font-medium mt-1">
                Guaranteed Delivery
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--secondary-container,#fda27b)]">
                10+ Years
              </div>
              <div className="text-xs sm:text-sm text-stone-300 font-medium mt-1">
                Local Experience
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--secondary-container,#fda27b)]">
                100%
              </div>
              <div className="text-xs sm:text-sm text-stone-300 font-medium mt-1">
                Customized Designs
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <Card className="w-full max-w-[430px] rounded-[24px] bg-[var(--surface-container-low,#f8f3ea)] border-0 shadow-[0_20px_50px_rgba(43,42,36,0.18)] p-1">
            <CardHeader className="pt-8 px-6 pb-2">
              <CardTitle className="font-heading text-xl sm:text-2xl font-medium text-[var(--on-surface,#1c1c16)]">
                {isSubmitted ? "Thank You!" : "Book Consultation"}
              </CardTitle>
              <CardDescription className="text-sm text-[var(--on-surface-variant,#45483f)] mt-1.5 leading-relaxed">
                {isSubmitted
                  ? "Your design consultation request has been received."
                  : "Fill in the details below to request a site visit and design quotation from our Silchar team."}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  {/* Success Icon */}
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-[var(--on-surface,#1c1c16)] text-base font-semibold mb-2">
                    We will reply the same day!
                  </p>
                  <p className="text-[var(--on-surface-variant,#45483f)] text-sm mb-6 max-w-[280px]">
                    A designer from our Silchar studio will call you shortly to schedule your site measurement.
                  </p>

                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href={whatsappLink(
                        `Hi Junaid Home Interiors, I've just requested a design consultation on your website.\n\nHere are my details:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Locality: ${formData.locality}\n- Required Service: ${formData.service}\n\nLet's discuss further!`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-md shadow-emerald-900/10"
                    >
                      {/* WhatsApp Icon */}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.724-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.768.002-2.607-1.012-5.059-2.859-6.908C16.375 2.08 13.91 1.066 11.293 1.066c-5.4.002-9.794 4.393-9.797 9.784-.001 2.032.55 4.022 1.585 5.822l-.101-.171-1.009 3.682 3.77-1.001zM17.471 14.397c-.3-.149-1.772-.874-2.047-.975-.276-.101-.476-.149-.676.149-.2.3-.778.975-.95 1.176-.177.199-.35.223-.65.075-.3-.149-1.265-.467-2.41-1.485-.89-.791-1.49-1.77-1.665-2.07-.177-.3-.019-.461.13-.61.136-.137.3-.349.45-.525.15-.173.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.589-.493-.51-.676-.519-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.373-.273.3-1.045 1.02-1.045 2.487 0 1.467 1.07 2.885 1.22 3.085.15.199 2.106 3.2 5.1 4.498.713.309 1.269.493 1.704.631.715.227 1.365.195 1.88.118.571-.085 1.772-.724 2.022-1.424.249-.699.249-1.299.175-1.424-.075-.125-.275-.199-.575-.349z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                    <Button
                      variant="outline"
                      className="rounded-full h-11"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Inquiries
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  {/* Anti-spam Honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  {/* Name field */}
                  <div className="space-y-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Nadia Ahmed"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-3">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative flex">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm text-[var(--on-surface-variant,#45483f)]/60 select-none">
                        +91
                      </span>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        maxLength={10}
                        placeholder="70198 25509"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-12"
                        aria-invalid={!!errors.phone}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Locality field */}
                  <div className="space-y-3">
                    <Label htmlFor="locality">Locality / City</Label>
                    <Input
                      id="locality"
                      name="locality"
                      placeholder="e.g. Meherpur, Silchar"
                      value={formData.locality}
                      onChange={handleChange}
                      aria-invalid={!!errors.locality}
                    />
                    {errors.locality && (
                      <p className="text-[11px] text-red-600 font-medium">
                        {errors.locality}
                      </p>
                    )}
                  </div>

                  {/* Service selection dropdown */}
                  <div className="space-y-3">
                    <Label htmlFor="service">Required Service</Label>
                    <Select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={!!errors.service}
                    >
                      <option value="" disabled>Select design service...</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </Select>
                    {errors.service && (
                      <p className="text-[11px] text-red-600 font-medium">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full h-11 bg-[var(--primary,#273316)] hover:bg-[var(--primary-container,#3d4a2a)] text-white text-sm font-semibold transition-all mt-6 shadow-md hover:-translate-y-[1px] active:translate-y-0"
                  >
                    {isSubmitting ? "Sending details..." : "Book Design Consultation"}
                  </Button>

                  {/* Safety text */}
                  <p className="text-[10px] text-center text-[var(--on-surface-variant,#45483f)]/70 mt-3 font-medium select-none">
                    🔒 Same-day response from our local designer.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
