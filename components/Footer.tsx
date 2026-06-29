"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/lib/assets";
import { business, telLink, whatsappLink, services } from "@/lib/seo";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[var(--primary,#273316)] text-white border-t border-[var(--primary-container,#3d4a2a)] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 aspect-[1080/712] rounded-lg overflow-hidden border border-white/10 bg-[#171e26]">
              <Image
                src={assets.images.logo}
                alt={`${business.name} Logo`}
                fill
                className="object-cover"
                sizes="73px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-medium tracking-tight leading-none group-hover:text-[var(--secondary-container,#fda27b)] transition-colors">
                {business.name}
              </span>
              <span className="font-sans text-[10px] text-stone-300 font-medium tracking-widest uppercase mt-1">
                Silchar
              </span>
            </div>
          </Link>
          <p className="font-sans text-sm text-stone-300 leading-relaxed mt-2 max-w-sm">
            {business.description}
          </p>
          {/* Trust rating badge in footer */}
          <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl mt-4 select-none">
            <span className="text-amber-400 font-sans text-sm">★ ★ ★ ★ ★</span>
            <span className="font-sans text-xs text-stone-200 font-semibold">
              4.9/5 on Google Reviews ({business.rating.reviewCount}+ ratings)
            </span>
          </div>
        </div>

        {/* Column 2: Navigation links */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--secondary-container,#fda27b)]">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5 font-sans text-sm text-stone-300 font-medium">
            <li>
              <Link href="/" className="hover:text-[var(--secondary-container,#fda27b)] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--secondary-container,#fda27b)] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/our-work" className="hover:text-[var(--secondary-container,#fda27b)] transition-colors">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-[var(--secondary-container,#fda27b)] transition-colors">
                Process
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--secondary-container,#fda27b)] transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--secondary-container,#fda27b)] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services (top 5 list) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--secondary-container,#fda27b)]">
            Our Services
          </h3>
          <ul className="flex flex-col gap-2.5 font-sans text-sm text-stone-300 font-medium">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-[var(--secondary-container,#fda27b)] transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-[var(--secondary-container,#fda27b)] hover:underline font-semibold text-xs flex items-center gap-1 mt-1">
                View All Services &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact details (NAP consistency) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--secondary-container,#fda27b)]">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3 font-sans text-sm text-stone-300 font-medium">
            <li className="flex items-start gap-2.5">
              {/* Maps Icon */}
              <svg className="h-5 w-5 text-[var(--secondary-container,#fda27b)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                {business.address.streetAddress},<br />
                {business.address.locality}, {business.address.region} — {business.address.postalCode}
              </span>
            </li>
            <li>
              <a href={telLink} className="flex items-center gap-2.5 hover:text-[var(--secondary-container,#fda27b)] transition-colors py-1">
                <svg className="h-4 w-4 text-[var(--secondary-container,#fda27b)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2.5 hover:text-[var(--secondary-container,#fda27b)] transition-colors py-1">
                <svg className="h-4 w-4 text-[var(--secondary-container,#fda27b)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-3.5 pt-3">
              {/* Instagram link */}
              <a
                href={business.profiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[var(--secondary,#914b2a)] hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* WhatsApp link */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Message"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-600 hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.724-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.768.002-2.607-1.012-5.059-2.859-6.908C16.375 2.08 13.91 1.066 11.293 1.066c-5.4.002-9.794 4.393-9.797 9.784-.001 2.032.55 4.022 1.585 5.822l-.101-.171-1.009 3.682 3.77-1.001zM17.471 14.397c-.3-.149-1.772-.874-2.047-.975-.276-.101-.476-.149-.676.149-.2.3-.778.975-.95 1.176-.177.199-.35.223-.65.075-.3-.149-1.265-.467-2.41-1.485-.89-.791-1.49-1.77-1.665-2.07-.177-.3-.019-.461.13-.61.136-.137.3-.349.45-.525.15-.173.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.589-.493-.51-.676-.519-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.373-.273.3-1.045 1.02-1.045 2.487 0 1.467 1.07 2.885 1.22 3.085.15.199 2.106 3.2 5.1 4.498.713.309 1.269.493 1.704.631.715.227 1.365.195 1.88.118.571-.085 1.772-.724 2.022-1.424.249-.699.249-1.299.175-1.424-.075-.125-.275-.199-.575-.349z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyrights section */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-medium gap-4">
        <div>
          &copy; {currentYear} {business.name}. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Designed with</span>
          <span className="text-red-500">&hearts;</span>
          <span>in Silchar, Assam.</span>
        </div>
      </div>
    </footer>
  );
}
