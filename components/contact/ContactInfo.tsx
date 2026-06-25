"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { business, telLink } from "@/lib/seo";

export default function ContactInfo() {
  const contactChannels = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Direct line for initial consultations and instant answers.",
      value: business.phoneDisplay,
      href: telLink,
      actionText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your project layout drawings or request references.",
      value: business.email,
      href: `mailto:${business.email}`,
      actionText: "Write Email",
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      description: "See actual material samples and meet our interior design team.",
      value: `${business.address.streetAddress}, ${business.address.locality}, ${business.address.region} - ${business.address.postalCode}`,
      href: `https://www.google.com/maps/search/?api=1&query=${business.geo.latitude},${business.geo.longitude}`,
      actionText: "Get Directions",
      external: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Channels Grid */}
      <div className="grid grid-cols-1 gap-6">
        {contactChannels.map((channel) => {
          const Icon = channel.icon;
          return (
            <div
              key={channel.title}
              className="bg-[var(--surface-container-low,#f8f3ea)] border border-[var(--outline-variant,#c6c8bb)]/30 rounded-[24px] p-6 hover:shadow-lg hover:shadow-[var(--primary,#273316)]/[0.02] transition-all duration-300 flex flex-col justify-between min-h-[160px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 bg-[var(--primary,#273316)]/10 text-[var(--primary,#273316)] rounded-xl flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-[var(--on-surface,#1c1c16)]">
                    {channel.title}
                  </h3>
                </div>
                <p className="font-sans text-xs text-[var(--on-surface-variant,#45483f)] mb-4 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-[var(--outline-variant,#c6c8bb)]/20">
                <span className="font-sans text-sm font-semibold text-[var(--on-surface,#1c1c16)] break-words max-w-[280px] sm:max-w-none">
                  {channel.value}
                </span>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[var(--secondary,#914b2a)] hover:text-[var(--secondary-container,#fda27b)] transition-colors self-start sm:self-auto uppercase tracking-wider"
                >
                  {channel.actionText}
                  {channel.external ? (
                    <ExternalLink className="h-3.5 w-3.5" />
                  ) : (
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Studio Working Hours Info */}
      <div className="bg-[var(--surface-container,#f2ede4)] border border-[var(--outline-variant,#c6c8bb)]/40 rounded-[24px] p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 bg-[var(--primary,#273316)]/10 text-[var(--primary,#273316)] rounded-xl flex items-center justify-center">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="font-heading text-lg font-medium text-[var(--on-surface,#1c1c16)]">
            Studio Hours
          </h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-sans text-sm text-[var(--on-surface,#1c1c16)]">
            <span>Monday - Saturday</span>
            <span className="font-semibold">10:00 AM - 07:00 PM</span>
          </div>
          <div className="flex justify-between font-sans text-sm text-[var(--on-surface-variant,#45483f)]/70">
            <span>Sunday</span>
            <span className="font-medium italic">Studio Closed</span>
          </div>
        </div>
        <p className="font-sans text-xs text-[var(--on-surface-variant,#45483f)] mt-4 leading-relaxed border-t border-[var(--outline-variant,#c6c8bb)]/20 pt-4">
          📍 *Design consultations must be pre-booked in advance to ensure on-site architect availability.*
        </p>
      </div>
    </div>
  );
}
