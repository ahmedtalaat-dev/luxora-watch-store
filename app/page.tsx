import BestSellers from "@/components/sections/BestSellers";
import BrandStory from "@/components/sections/BrandStory";
import ContactSection from "@/components/sections/Contact";
import FAQSection from "@/components/sections/FAQ";
import FeaturedWatches from "@/components/sections/FeaturedWatches";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SpecialOffers from "@/components/sections/SpecialOffers";
import Testimonials from "@/components/sections/Testimonials ";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

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
      <Footer />
    </main>
  );
}
