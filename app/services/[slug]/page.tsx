import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/seo";
import { getSanityProjects } from "@/sanity/lib/client";
import { Project, ProjectCategory } from "@/lib/projects";
import ServiceGallery from "@/components/services/ServiceGallery";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map service slug to Sanity category values
const slugToCategoryMap: Record<string, ProjectCategory[]> = {
  "modular-kitchens": ["modular-kitchen"],
  "modular-wardrobes": ["wardrobe-design"],
  "false-ceiling": ["false-ceiling", "pvc-ceiling"],
  "bedroom-designs": ["bedroom-design"],
  "vanity-designs": ["vanity-unit"],
  "foyer-designs": ["foyer-unit"],
  "tv-units": ["tv-unit"],
  "pooja-designs": ["pooja-unit"],
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Premium Interior Design in Silchar`,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Fetch all projects (caches on the server for 1 hour)
  const allProjects = await getSanityProjects();

  // Determine allowed project categories for this service slug
  const targetCategories = slugToCategoryMap[slug] || [];

  // Filter projects by category.
  // If we fetched projects from Sanity, filter them.
  // Otherwise (or if Sanity returns empty), we can fall back to filtering our local database projects.
  let filteredProjects = allProjects.filter((proj) =>
    targetCategories.includes(proj.category)
  );

  // If Sanity is empty, fallback to local file database
  if (filteredProjects.length === 0) {
    const { projects: localProjects } = await import("@/lib/projects");
    filteredProjects = localProjects.filter((proj) =>
      targetCategories.includes(proj.category)
    );
  }

  return (
    <ServiceGallery
      title={service.title}
      description={service.description}
      projects={filteredProjects}
      slug={slug}
    />
  );
}
