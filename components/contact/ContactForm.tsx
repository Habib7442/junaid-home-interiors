"use client";

import React, { useState } from "react";
import { MessageSquare, Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/seo";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "complete-home",
    message: "",
    whatsAppUpdates: true,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name check
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone check (Indian mobile verification)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    // Email check (optional but validated if provided)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const projectTypeLabels: Record<string, string> = {
    "complete-home": "Complete Home Interior",
    "modular-kitchen": "Modular Kitchen",
    "wardrobe-bedroom": "Wardrobe / Bedroom",
    "living-room": "Living Room Layout",
    "false-ceiling": "Gypsum False Ceiling",
    "office-space": "Office / Commercial Space",
    "other": "Other Enquiry",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate backend logging/tracking delay before WA launch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Create pre-filled WhatsApp inquiry message
      const projectLabel = projectTypeLabels[formData.projectType] || formData.projectType;
      const whatsappMsg = `Hi Junaid Home Interiors! I'd like to book an interior design consultation.

My Details:
👤 *Name:* ${formData.name.trim()}
📞 *Phone:* +91 ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim() || "Not provided"}
🏡 *Project Type:* ${projectLabel}
💬 *Message:* ${formData.message.trim() || "No message entered"}
🔔 *WhatsApp Updates:* ${formData.whatsAppUpdates ? "Yes, opted-in" : "No"}

Please get in touch to coordinate my appointment!`;

      const targetURL = whatsappLink(whatsappMsg);

      // Trigger WhatsApp tab redirection after a slight delay
      setTimeout(() => {
        window.open(targetURL, "_blank");
        // Reset success state after user redirects
        setIsSuccess(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "complete-home",
          message: "",
          whatsAppUpdates: true,
        });
      }, 1000);

    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/30 rounded-[28px] p-8 md:p-10 flex flex-col items-center justify-center text-center h-[520px] shadow-sm">
        <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <Check className="h-8 w-8 stroke-[3]" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-[var(--on-surface,#1c1c16)] mb-2">
          Consultation Request Sent!
        </h3>
        <p className="font-sans text-sm text-[var(--on-surface-variant,#45483f)] max-w-sm mb-6 leading-relaxed">
          Thank you, <span className="font-semibold">{formData.name}</span>. We are now redirecting you to WhatsApp to instantly finalize your consultation booking date.
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--on-surface-variant,#45483f)]/60 animate-pulse">
          <Loader2 className="h-4 w-4 animate-spin" />
          Opening WhatsApp Chat...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/30 rounded-[28px] p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="font-heading text-xl md:text-2xl font-medium text-[var(--on-surface,#1c1c16)]">
          Book Free Consultation
        </h3>
        <p className="font-sans text-xs text-[var(--on-surface-variant,#45483f)] mt-1.5 leading-relaxed">
          Provide your details below to schedule a call or virtual consultation session with our design experts.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name input */}
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Rahul Das"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "border-red-500 ring-1 ring-red-500/20" : ""}
          />
          {errors.name && (
            <p className="font-sans text-xs text-[var(--error,#ba1a1a)] font-medium mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone input */}
        <div className="space-y-1.5">
          <Label htmlFor="phone">Mobile Number (WhatsApp) *</Label>
          <div className="relative flex items-center">
            <span className="absolute left-4 font-sans text-sm text-[var(--on-surface-variant,#45483f)]/50 select-none">
              +91
            </span>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="10-digit number"
              value={formData.phone}
              onChange={handleInputChange}
              className={`pl-12 ${
                errors.phone ? "border-red-500 ring-1 ring-red-500/20" : ""
              }`}
            />
          </div>
          {errors.phone && (
            <p className="font-sans text-xs text-[var(--error,#ba1a1a)] font-medium mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email input */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <Label htmlFor="email">Email Address</Label>
            <span className="font-sans text-[10px] text-[var(--on-surface-variant,#45483f)]/60 italic uppercase tracking-wider">
              Optional
            </span>
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. rahul@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "border-red-500 ring-1 ring-red-500/20" : ""}
          />
          {errors.email && (
            <p className="font-sans text-xs text-[var(--error,#ba1a1a)] font-medium mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Project Selection */}
        <div className="space-y-1.5">
          <Label htmlFor="projectType">Project Requirements *</Label>
          <Select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleSelectChange}
          >
            <option value="complete-home">Complete Home Interior (Turnkey)</option>
            <option value="modular-kitchen">Modular Kitchen Setup</option>
            <option value="wardrobe-bedroom">Bedroom sliding wardrobe & beds</option>
            <option value="living-room">Living room TV cabinets & partitions</option>
            <option value="false-ceiling">False Ceiling LED profile design</option>
            <option value="office-space">Office & Corporate spaces</option>
            <option value="other">Other customization requests</option>
          </Select>
        </div>

        {/* Custom message text area */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <Label htmlFor="message">Brief Project Note</Label>
            <span className="font-sans text-[10px] text-[var(--on-surface-variant,#45483f)]/60 italic uppercase tracking-wider">
              Optional
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Describe your design vision, room count, or special material preferences..."
            value={formData.message}
            onChange={handleInputChange}
            className="flex w-full rounded-[var(--radius-input,12px)] border border-[var(--outline-variant,#c6c8bb)] bg-[var(--surface-container-low,#f8f3ea)] px-4 py-3 text-sm text-[var(--on-surface,#1c1c16)] outline-none transition-all placeholder:text-[var(--on-surface-variant,#45483f)]/40 focus:border-[var(--primary,#273316)] focus:ring-2 focus:ring-[var(--primary,#273316)]/20 resize-none"
          />
        </div>

        {/* Opt-in notifications */}
        <label className="flex items-start gap-3 cursor-pointer select-none group mt-2">
          <input
            type="checkbox"
            name="whatsAppUpdates"
            checked={formData.whatsAppUpdates}
            onChange={handleCheckboxChange}
            className="mt-0.5 rounded border-[var(--outline-variant,#c6c8bb)] text-[var(--primary,#273316)] focus:ring-[var(--primary,#273316)]/20"
          />
          <span className="font-sans text-xs text-[var(--on-surface-variant,#45483f)] leading-normal">
            Send me design quotes, updates, and order progress notifications on WhatsApp.
          </span>
        </label>

        {/* Action Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--primary,#273316)] text-white hover:bg-[var(--primary-container,#3d4a2a)] text-sm font-semibold transition-all duration-200 shadow-md active:scale-[0.98] disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-white" />
              Validating Details...
            </>
          ) : (
            <>
              <MessageSquare className="h-4 w-4 text-white" />
              Proceed to WhatsApp Booking
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
