"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/lib/assets";
import { business, telLink, whatsappLink } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--primary,#273316)] text-white shadow-md border-b border-[var(--primary-container,#3d4a2a)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 aspect-[1080/712] rounded-lg overflow-hidden border border-white/10 bg-[#171e26]">
            <Image
              src={assets.images.logo}
              alt={`${business.name} Logo`}
              fill
              className="object-cover"
              sizes="73px"
              priority
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

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-semibold tracking-wide transition-colors hover:text-[var(--secondary-container,#fda27b)] py-2 ${
                isActive(link.href)
                  ? "text-[var(--secondary-container,#fda27b)] border-b-2 border-[var(--secondary-container,#fda27b)]"
                  : "text-stone-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right CTA Elements */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={telLink}
            className="font-sans text-sm font-semibold text-stone-200 hover:text-[var(--secondary-container,#fda27b)] transition-colors flex items-center gap-2"
          >
            {/* Phone Icon */}
            <svg
              className="h-4 w-4 text-[var(--secondary-container,#fda27b)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {business.phoneDisplay}
          </a>

          <Link href="/contact">
            <Button className="rounded-full bg-[var(--secondary,#914b2a)] hover:bg-[var(--secondary-container,#fda27b)] hover:text-[var(--on-secondary-container,#773718)] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 transition-all shadow-md">
              Book Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 text-stone-200 hover:text-white transition-colors"
        >
          {isOpen ? (
            /* Close / X Icon */
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Menu Icon */
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--primary,#273316)] border-t border-[var(--primary-container,#3d4a2a)] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-base font-semibold tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--secondary-container,#fda27b)]"
                    : "text-stone-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
            <a
              href={telLink}
              className="font-sans text-base font-semibold text-stone-200 flex items-center gap-3 py-2"
            >
              <svg
                className="h-5 w-5 text-[var(--secondary-container,#fda27b)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {business.phoneDisplay}
            </a>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full bg-[var(--secondary,#914b2a)] hover:bg-[var(--secondary-container,#fda27b)] hover:text-[var(--on-secondary-container,#773718)] text-white text-sm font-semibold py-3 shadow-md">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
