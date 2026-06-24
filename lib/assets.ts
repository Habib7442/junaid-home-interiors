/**
 * assets.ts — Central registry for project static assets
 * --------------------------------------------------------
 * All assets placed in the /public folder are registered here
 * for clean, type-safe imports throughout components.
 */

export const assets = {
  images: {
    heroBg: "/hero-bg.webp",
    ogImage: "/og-image.jpg",
    logo: "/logo.jpeg",
  },
} as const;

export type Assets = typeof assets;
