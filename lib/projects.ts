export type ProjectCategory =
  | "modular-kitchen"
  | "tv-unit"
  | "false-ceiling"
  | "pvc-ceiling"
  | "pooja-unit"
  | "foyer-unit"
  | "vanity-unit"
  | "bedroom-design"
  | "wardrobe-design";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  locality: string;
  description: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  "modular-kitchen": "Modular Kitchen",
  "tv-unit": "TV Unit",
  "false-ceiling": "False Ceiling Design",
  "pvc-ceiling": "PVC False Ceiling Design",
  "pooja-unit": "Pooja Unit Design",
  "foyer-unit": "Foyer Unit Design",
  "vanity-unit": "Vanity Unit Design",
  "bedroom-design": "Bedroom Design",
  "wardrobe-design": "Wardrobe Design",
};

export const projects: Project[] = [
  {
    id: "proj-kitchen-1",
    title: "Premium Acrylic Modular Kitchen",
    category: "modular-kitchen",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.22 AM.webp",
    locality: "Meherpur, Silchar",
    description: "Sleek L-shaped layout with soft-close tandem drawers and profile handles.",
  },
  {
    id: "proj-living-1",
    title: "Minimalist Sunlit Living Room",
    category: "tv-unit",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.24 AM.webp",
    locality: "Link Road, Silchar",
    description: "Warm-minimalist TV unit, custom wall panelling, and elegant textures.",
  },
  {
    id: "proj-bedroom-1",
    title: "Cozy Master Bedroom Suite",
    category: "bedroom-design",
    image: "/works/bed-room-1.webp",
    locality: "Meherpur, Silchar",
    description: "Custom cushioned headboard, floor-to-ceiling sliding wardrobe, and wooden tones.",
  },
  {
    id: "proj-ceiling-1",
    title: "Gypsum False Ceiling with Profile LED",
    category: "false-ceiling",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.22 AM (2).webp",
    locality: "Tarapur, Silchar",
    description: "Multi-layered gypsum ceiling with diffused warm LED profile lighting.",
  },
  {
    id: "proj-kitchen-2",
    title: "Sleek Charcoal Parallel Kitchen",
    category: "modular-kitchen",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.30 AM.webp",
    locality: "Sonai Road, Silchar",
    description: "Parallel design with high-gloss laminates, quartz countertops, and smart chimneys.",
  },
  {
    id: "proj-living-2",
    title: "Warm Wood-Accent Living Lounge",
    category: "tv-unit",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.24 AM (1).webp",
    locality: "Malugram, Silchar",
    description: "Tactile wooden partition panels and a display cabinet for collectibles.",
  },
  {
    id: "proj-bedroom-2",
    title: "Kids Room Bedroom Storage Setup",
    category: "bedroom-design",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.21 AM (1).webp",
    locality: "Link Road, Silchar",
    description: "Compact study desk paired with functional open/closed wall cabinets.",
  },
  {
    id: "proj-ceiling-2",
    title: "Minimalist Cove Light Ceiling Design",
    category: "false-ceiling",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.29 AM.webp",
    locality: "Meherpur, Silchar",
    description: "Clean perimeter cove lighting layout creating an airy, tall room feel.",
  },
  {
    id: "proj-kitchen-3",
    title: "Wood & White Dual-Tone Kitchen",
    category: "modular-kitchen",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.33 AM.webp",
    locality: "National Highway, Silchar",
    description: "Factory-finished wood-grain bottom cabinets and matte white overhead modules.",
  },
  {
    id: "proj-living-3",
    title: "Contemporary Foyer & TV Lounge",
    category: "foyer-unit",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.24 AM.webp",
    locality: "Tarapur, Silchar",
    description: "Sunlit foyer area featuring elegant wood partition columns and accent seating.",
  },
  {
    id: "proj-bedroom-3",
    title: "Warm Light Luxury Bedroom Layout",
    category: "bedroom-design",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.22 AM (1).webp",
    locality: "Malugram, Silchar",
    description: "Indirect headboard accent strip lighting and side tables in matching finishes.",
  },
  {
    id: "proj-ceiling-3",
    title: "Wooden Rafter Ceiling Integration",
    category: "false-ceiling",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.30 AM (1).webp",
    locality: "Sonai Road, Silchar",
    description: "Elegantly spaced wooden rafters integrated with false ceiling lighting panels.",
  },
  {
    id: "proj-kitchen-4",
    title: "Compact L-Shaped Modular Setup",
    category: "modular-kitchen",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.35 AM.webp",
    locality: "Cachar, Assam",
    description: "Optimized corner space usage with lazy-susan accessories and custom tall units.",
  },
  {
    id: "proj-living-4",
    title: "Sunlit Editorial Sitting Area",
    category: "tv-unit",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.28 AM.webp",
    locality: "Meherpur, Silchar",
    description: "Relaxed open-layout sitting lounge prioritizing natural sunlight and warm linen textures.",
  },
  {
    id: "proj-bedroom-4",
    title: "Modern Wardrobe & Dressing Layout",
    category: "wardrobe-design",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.34 AM.webp",
    locality: "Sonai Road, Silchar",
    description: "Premium built-in wardrobe with soft-close doors and integrated full-length vanity mirror.",
  },
  {
    id: "proj-ceiling-4",
    title: "Elegant Geometric False Ceiling",
    category: "false-ceiling",
    image: "/works/WhatsApp Image 2026-06-25 at 9.12.33 AM (1).webp",
    locality: "Link Road, Silchar",
    description: "Custom geometric framing ceiling setup with warm sunlight coves and spot spotlights.",
  },
];
