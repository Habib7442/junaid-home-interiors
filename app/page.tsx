import Hero from "@/components/Hero";
import BudgetShowcase from "@/components/home/BudgetShowcase";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedWork from "@/components/home/FeaturedWork";
import { getSanityProjects } from "@/sanity/lib/client";

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
