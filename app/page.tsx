import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import { getSanityProjects } from "@/sanity/lib/client";

// Dynamically import below-the-fold components to defer JS execution and reduce main-thread blocking
const BudgetShowcase = dynamic(() => import("@/components/home/BudgetShowcase"), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-stone-50/50 animate-pulse rounded-3xl" />,
});

const ServicesGrid = dynamic(() => import("@/components/home/ServicesGrid"), {
  ssr: true,
});

const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  ssr: true,
});

export default async function Home() {
  const sanityProjects = await getSanityProjects();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero section */}
      <Hero />

      {/* Featured Work / Portfolio Grid */}
      <FeaturedWork initialProjects={sanityProjects} />

      {/* Homes for every budget (Horizontal 3D cards & WhatsApp lead modal) */}
      <BudgetShowcase />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </main>
  );
}
