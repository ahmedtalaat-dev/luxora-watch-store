import FeaturedWatches from "@/components/FeaturedWatches";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedWatches />
      <WhyChooseUs />
    </main>
  );
}
