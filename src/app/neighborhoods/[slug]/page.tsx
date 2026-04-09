import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Users,
  Footprints,
  GraduationCap,
  TreePine,
  CheckCircle,
  Bed,
  Bath,
  Ruler,
} from "lucide-react";
import { NEIGHBORHOOD_DATA, getNeighborhoodBySlug } from "@/_lib/neighborhoods-data";
import { getListingsByNeighborhood, formatPrice } from "@/_lib/listings-data";
import { createMetadata } from "@/_lib/seo";
import { CTABanner } from "@/_components/shared/CTABanner";

export async function generateStaticParams() {
  return NEIGHBORHOOD_DATA.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighborhoodBySlug(slug);
  if (!n) return {};

  return createMetadata({
    title: `${n.name}, CA - Neighborhood Guide`,
    description: `Explore ${n.name}, California. Median home price: ${n.medianPrice}. ${n.description} Schools, amenities, and homes for sale.`,
    path: `/neighborhoods/${slug}`,
  });
}

export default async function NeighborhoodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) notFound();

  const listings = getListingsByNeighborhood(slug);

  return (
    <>
      <section className="bg-grove pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/neighborhoods"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Neighborhoods
          </Link>
          <h1 className="mt-4 font-heading text-4xl text-white sm:text-5xl">
            {neighborhood.name}, California
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/70">
            {neighborhood.description}
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: DollarSign, label: "Median Home Price", value: neighborhood.medianPrice },
              { icon: Users, label: "Population", value: neighborhood.population },
              { icon: Footprints, label: "Walk Score", value: `${neighborhood.walkScore}/100` },
              { icon: GraduationCap, label: "Schools", value: `${neighborhood.schools.length}+` },
            ].map((stat) => (
              <Card key={stat.label} className="border-0 bg-white">
                <CardContent className="flex flex-col items-center p-5 text-center">
                  <stat.icon className="h-6 w-6 text-citrus" />
                  <p className="mt-2 text-xl font-bold text-grove">{stat.value}</p>
                  <p className="text-xs text-slate">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About */}
          <div className="mt-12">
            <h2 className="font-heading text-2xl text-grove">
              About {neighborhood.name}
            </h2>
            <p className="mt-3 max-w-4xl leading-relaxed text-slate">
              {neighborhood.longDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="flex items-center gap-2 font-heading text-xl text-grove">
                <CheckCircle className="h-5 w-5 text-citrus" /> Highlights
              </h3>
              <ul className="mt-4 space-y-2">
                {neighborhood.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-citrus" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-heading text-xl text-grove">
                <GraduationCap className="h-5 w-5 text-citrus" /> Schools
              </h3>
              <ul className="mt-4 space-y-2">
                {neighborhood.schools.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-grove" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-heading text-xl text-grove">
                <TreePine className="h-5 w-5 text-citrus" /> Amenities
              </h3>
              <ul className="mt-4 space-y-2">
                {neighborhood.amenities.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-grove" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Listings in this area */}
          {listings.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading text-2xl text-grove">
                Homes for Sale in {neighborhood.name}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {listings.map((l) => (
                  <Link key={l.id} href={`/listings/${l.slug}`}>
                    <Card className="group cursor-pointer overflow-hidden border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative aspect-[4/3] bg-linen">
                        <Badge
                          className={`absolute left-3 top-3 ${
                            l.status === "New"
                              ? "bg-citrus text-white"
                              : "bg-grove text-white"
                          }`}
                        >
                          {l.status}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-lg font-bold text-grove">
                          {formatPrice(l.price)}
                        </p>
                        <p className="font-medium text-charcoal">{l.title}</p>
                        <div className="mt-2 flex gap-3 text-sm text-slate">
                          <span className="flex items-center gap-1">
                            <Bed className="h-3.5 w-3.5" /> {l.beds}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="h-3.5 w-3.5" /> {l.baths}
                          </span>
                          <span className="flex items-center gap-1">
                            <Ruler className="h-3.5 w-3.5" /> {l.sqft.toLocaleString()}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Button asChild className="bg-citrus hover:bg-citrus-dark">
              <Link href="/listings">View All Listings</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
