import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      // 0. Redirect non-www (canonicalize) to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "junaidhomeinteriors.com",
          },
        ],
        destination: "https://www.junaidhomeinteriors.com/:path*",
        permanent: true,
      },
      // 1. Static HTML and PHP pages from old website
      {
        source: "/gallery.html",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/gallery.php",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.php",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/distemper.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/office-wiring.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/home-wiring.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/home-interior.html",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/other-interior.html",
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/normal-pop-design.html",
        destination: "/services/false-ceiling",
        permanent: true,
      },
      {
        source: "/wooden.html",
        destination: "/services/false-ceiling",
        permanent: true,
      },
      {
        source: "/bed-wardrobe.html",
        destination: "/services/modular-wardrobes",
        permanent: true,
      },
      {
        source: "/temple.html",
        destination: "/services/pooja-designs",
        permanent: true,
      },

      // 2. Query param based redirects for old product and lander pages
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "wardrobe",
          },
        ],
        destination: "/services/modular-wardrobes",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "gypsum-ceiling",
          },
        ],
        destination: "/services/false-ceiling",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "paint-and-pop",
          },
        ],
        destination: "/services/false-ceiling",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "kitchen",
          },
        ],
        destination: "/services/modular-kitchens",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "bed",
          },
        ],
        destination: "/services/bedroom-designs",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "shop-interior",
          },
        ],
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "office-interior",
          },
        ],
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "other-interior",
          },
        ],
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "home-interior",
          },
        ],
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "crockery-unit",
          },
        ],
        destination: "/our-work",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "wooden-flooring",
          },
        ],
        destination: "/services",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "distemper",
          },
        ],
        destination: "/services",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "office-wiring",
          },
        ],
        destination: "/services",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "home-wiring",
          },
        ],
        destination: "/services",
        permanent: true,
      },
      {
        source: "/product.php",
        has: [
          {
            type: "query",
            key: "slug",
            value: "light-fitting",
          },
        ],
        destination: "/services",
        permanent: true,
      },
      // Generic fallback for product.php with any other query or none
      {
        source: "/product.php",
        destination: "/services",
        permanent: true,
      },
      // Generic redirect for lander page
      {
        source: "/lander",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
