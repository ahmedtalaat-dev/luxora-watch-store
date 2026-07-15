import BestSellers from "@/components/BestSellers";
import BrandStory from "@/components/BrandStory";
import ContactSection from "@/components/Contact";
import FAQSection from "@/components/FAQ";
import FeaturedWatches from "@/components/FeaturedWatches";
import HeroSection from "@/components/HeroSection";
import SpecialOffers from "@/components/SpecialOffers";
import Testimonials from "@/components/Testimonials ";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedWatches />
      <WhyChooseUs />
      <BestSellers />
      <BrandStory />
      <Testimonials />
      <SpecialOffers />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
