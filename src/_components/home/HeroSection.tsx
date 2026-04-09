import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { SITE_TAGLINE } from "@/_lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero/redlands-hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-grove/70 via-grove/50 to-grove/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-heading text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Your trusted real estate partner in Redlands, California. Since 2006,
          we&apos;ve helped families find their perfect home in the Inland Empire.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-citrus px-8 text-lg hover:bg-citrus-dark sm:w-auto"
          >
            <Link href="/listings">
              <Search className="mr-2 h-5 w-5" />
              Browse Listings
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/30 bg-white/10 px-8 text-lg text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
          >
            <Link href="/book">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-citrus">20+</span>
            <span>Years Experience</span>
          </div>
          <div className="hidden h-6 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-citrus">500+</span>
            <span>Homes Sold</span>
          </div>
          <div className="hidden h-6 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-citrus">5.0</span>
            <span>Google Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
