import type { ImageLoaderProps } from "next/image";

const SANITY_CDN_HOST = "cdn.sanity.io";

export function isSanityImage(src: string): boolean {
  return src.startsWith(`https://${SANITY_CDN_HOST}/`);
}

// Resizes Sanity images on Sanity's own CDN instead of Vercel Image Optimization,
// so portfolio photos don't consume Vercel's image transformation quota.
export function sanityImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
}

// Use as `<Image loader={imageLoaderFor(src)} ... />`; falls back to the default
// Next.js optimizer for local images.
export function imageLoaderFor(src: string) {
  return isSanityImage(src) ? sanityImageLoader : undefined;
}
