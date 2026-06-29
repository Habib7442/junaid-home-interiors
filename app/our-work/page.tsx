import { Metadata } from "next";
import FeaturedWork from "@/components/home/FeaturedWork";
import { getSanityProjects } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Our Work | Completed Interior Portfolios in Silchar",
  description:
    "Explore our full gallery of completed modular kitchens, sliding wardrobes, false ceilings, foyer consoles, and bedroom designs delivered across Silchar by Junaid Home Interiors.",
  keywords: [
    "interior design projects Silchar",
    "Junaid Home Interiors portfolio",
    "home decoration photos Assam",
  ],
  alternates: {
    canonical: "/our-work",
  },
};

export default async function OurWorkPage() {
  const sanityProjects = await getSanityProjects();

  return (
    <main className="pt-12">
      <FeaturedWork initialProjects={sanityProjects} />
    </main>
  );
}
