"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria G.",
    text: "Veronica and her team made our first home buying experience so smooth. They truly care about their clients and go above and beyond. We couldn't have asked for better guidance through the process.",
    rating: 5,
    location: "Redlands, CA",
  },
  {
    id: 2,
    name: "James & Lisa T.",
    text: "We sold our home in just two weeks thanks to Citrus & Park's incredible marketing strategy. They knew exactly how to price and present our property. Highly recommend!",
    rating: 5,
    location: "Loma Linda, CA",
  },
  {
    id: 3,
    name: "Robert K.",
    text: "As a first-time investor, I was nervous about purchasing rental property. The team at Citrus & Park walked me through everything and found me an amazing deal in Highland.",
    rating: 5,
    location: "Highland, CA",
  },
  {
    id: 4,
    name: "Sandra M.",
    text: "Professional, knowledgeable, and always available. Renee helped us find our dream home in Yucaipa and made the entire process feel effortless. Five stars all the way!",
    rating: 5,
    location: "Yucaipa, CA",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-grove py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/60">
            Don&apos;t just take our word for it — hear from the families
            we&apos;ve helped find their perfect home.
          </p>
        </div>

        {/* Mobile: Single card carousel */}
        <div className="mt-12 sm:hidden">
          <Card className="border-0 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-citrus/60" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: TESTIMONIALS[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-citrus text-citrus"
                    />
                  )
                )}
              </div>
              <p className="mt-4 leading-relaxed text-white/90">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-semibold text-white">
                  {TESTIMONIALS[current].name}
                </p>
                <p className="text-sm text-white/60">
                  {TESTIMONIALS[current].location}
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-white/40">
              {current + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 bg-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-citrus/60" />
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-citrus text-citrus"
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/60">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
