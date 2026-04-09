import { HeroSection } from "@/_components/home/HeroSection";
import { FeaturedListings } from "@/_components/home/FeaturedListings";
import { ServicesCTA } from "@/_components/home/ServicesCTA";
import { AboutPreview } from "@/_components/home/AboutPreview";
import { TestimonialsSection } from "@/_components/home/TestimonialsSection";
import { NeighborhoodHighlights } from "@/_components/home/NeighborhoodHighlights";
import { NewsletterSignup } from "@/_components/home/NewsletterSignup";
import { CTABanner } from "@/_components/shared/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedListings />
      <ServicesCTA />
      <AboutPreview />
      <TestimonialsSection />
      <NeighborhoodHighlights />
      <NewsletterSignup />
      <CTABanner />
    </>
  );
}
