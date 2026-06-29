import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";
import { Project } from "@/lib/projects";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV !== "development", // Disable CDN caching in development to get fresh data instantly
});

export async function getSanityProjects(): Promise<Project[]> {
  if (!projectId || !dataset) {
    return [];
  }

  try {
    const query = `*[_type == "gallery"] {
      category,
      images[] {
        asset->{
          _id,
          url
        },
        title,
        locality,
        description,
        _key
      }
    }`;

    // Disable caching in development, cache for 1 hour in production
    const revalidateTime = process.env.NODE_ENV === "development" ? 0 : 3600;

    const galleries = await client.fetch<any[]>(
      query,
      {},
      {
        next: {
          revalidate: revalidateTime,
        },
      }
    );

    if (!galleries || !Array.isArray(galleries)) {
      return [];
    }

    const projectsList: Project[] = [];

    galleries.forEach((gallery: any) => {
      const category = gallery.category;
      if (gallery.images && Array.isArray(gallery.images)) {
        gallery.images.forEach((img: any) => {
          if (img.asset?.url) {
            // Auto-format slug into display title: e.g. "wardrobe-design" -> "Wardrobe Design"
            const fallbackTitle = category
              ? category
                  .split("-")
                  .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : "Interior Design";

            projectsList.push({
              id: img._key || Math.random().toString(36).substring(2, 9),
              title: img.title || fallbackTitle,
              category: category,
              image: img.asset.url,
              locality: img.locality || "Silchar",
              description: img.description || "",
            });
          }
        });
      }
    });

    return projectsList;
  } catch (error) {
    console.error(
      "Failed to fetch projects from Sanity, falling back to local database:",
      error
    );
    return [];
  }
}
