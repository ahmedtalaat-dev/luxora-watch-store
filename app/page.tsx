import BestSellers from "@/components/BestSellers";
import BrandStory from "@/components/BrandStory";
import FeaturedWatches from "@/components/FeaturedWatches";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedWatches />
      <WhyChooseUs />
      <BestSellers />
      <BrandStory />
    </main>
  );
}
