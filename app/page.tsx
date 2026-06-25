import Hero from "@/components/Hero";
import BudgetShowcase from "@/components/home/BudgetShowcase";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero section */}
      <Hero />

      {/* Homes for every budget (Horizontal 3D cards & WhatsApp lead modal) */}
      <BudgetShowcase />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </main>
  );
}
