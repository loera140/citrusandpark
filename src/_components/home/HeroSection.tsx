"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Star } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE } from "@/_lib/constants";

const HERO_IMAGES = [
  "/images/hero/redlands-hero.jpg",
  "/images/hero/redlands-hero-2.jpg",
  "/images/hero/redlands-hero-3.jpg",
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Rotating Background Images with Ken Burns effect */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Beautiful home in Redlands, California"
            fill
            className={`object-cover ${
              i === currentImage ? "animate-slow-zoom" : ""
            }`}
            priority={i === 0}
            sizes="100vw"
            quality={85}
          />
        </div>
      ))}

      {/* Gradient Overlays - more cinematic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-grove/40 via-transparent to-grove/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-citrus text-citrus" />
            ))}
          </div>
          <span className="text-sm font-medium text-white/90">
            Top-Rated Redlands Real Estate Team
          </span>
        </div>

        <h1 className="font-heading text-5xl font-normal leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Your trusted real estate partner in Redlands, California. Since 2006,
          we&apos;ve helped families find their perfect home in the Inland Empire.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="h-14 w-full bg-citrus px-10 text-lg font-semibold shadow-lg shadow-citrus/30 hover:bg-citrus-dark hover:shadow-xl hover:shadow-citrus/40 transition-all sm:w-auto"
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
            className="h-14 w-full border-white/30 bg-white/10 px-10 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:text-white transition-all sm:w-auto"
          >
            <Link href="/book">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 inline-flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md sm:gap-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">20+</span>
            <span className="mt-0.5 text-xs uppercase tracking-wider text-white/50">
              Years Experience
            </span>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">500+</span>
            <span className="mt-0.5 text-xs uppercase tracking-wider text-white/50">
              Homes Sold
            </span>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">5.0</span>
            <span className="mt-0.5 text-xs uppercase tracking-wider text-white/50">
              Google Rating
            </span>
          </div>
        </div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentImage
                ? "w-8 bg-citrus"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
