import Hero from "@/components/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero section */}
      <Hero />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </main>
  );
}
