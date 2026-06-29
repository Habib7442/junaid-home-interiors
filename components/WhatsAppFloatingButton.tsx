"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/seo";

export default function WhatsAppFloatingButton() {
  const pathname = usePathname();

  // Hide on Sanity Studio path
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const prefilledMessage =
    "Hi Junaid Home Interiors! I visited your website and would like to enquire about interior design services for my home.";

  return (
    <a
      href={whatsappLink(prefilledMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25d366] hover:bg-[#22c35e] flex items-center justify-center shadow-xl hover:shadow-[#25d366]/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label="Contact Junaid Home Interiors on WhatsApp"
    >
      {/* Pulse Ripple Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25d366]/30 animate-ping group-hover:animate-none pointer-events-none" />

      {/* WhatsApp Image Icon */}
      <div className="relative h-7 w-7 z-10">
        <Image
          src="/social-icons/whatsapp.png"
          alt="WhatsApp Logo"
          fill
          sizes="28px"
          className="object-contain"
        />
      </div>
    </a>
  );
}
