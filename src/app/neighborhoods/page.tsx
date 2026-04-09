import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, DollarSign, Users } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { NEIGHBORHOOD_DATA } from "@/_lib/neighborhoods-data";
import { CTABanner } from "@/_components/shared/CTABanner";

export const metadata: Metadata = createMetadata({
  title: "Neighborhoods & Community Guides",
  description:
    "Explore neighborhoods in Redlands, Loma Linda, Highland, Yucaipa, Mentone, and San Bernardino. School info, median prices, and local amenities.",
  path: "/neighborhoods",
});

export default function NeighborhoodsPage() {
  return (
    <>
      <section className="bg-grove pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl text-white sm:text-5xl">
              Neighborhood Guides
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Get to know the communities of the Inland Empire. Find the
              perfect neighborhood for your lifestyle, budget, and family.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEIGHBORHOOD_DATA.map((n) => (
              <Link key={n.slug} href={`/neighborhoods/${n.slug}`}>
                <Card className="group h-full cursor-pointer overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[16/9] bg-linen">
                    <div className="flex h-full items-center justify-center text-grove/30">
                      <MapPin className="h-10 w-10" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="font-heading text-2xl text-grove">
                      {n.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {n.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-slate">
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5 text-citrus" />
                        {n.medianPrice}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-citrus" />
                        {n.population}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-citrus">
                      Explore Guide
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
