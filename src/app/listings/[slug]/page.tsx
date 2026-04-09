import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Bath,
  Ruler,
  Calendar as CalendarIcon,
  MapPin,
  Home,
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { LISTINGS, getListingBySlug, formatPrice } from "@/_lib/listings-data";
import { AGENTS } from "@/_lib/agents-data";
import { createMetadata } from "@/_lib/seo";
import { MortgageCalculator } from "@/_components/listings/MortgageCalculator";
import { BUSINESS_INFO } from "@/_lib/constants";

export async function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return {};

  return createMetadata({
    title: `${listing.address}, ${listing.city}, CA ${listing.zip} - ${formatPrice(listing.price)}`,
    description: `${listing.beds} bed, ${listing.baths} bath, ${listing.sqft.toLocaleString()} sqft ${listing.type} for sale in ${listing.city}, CA. ${listing.description.slice(0, 120)}...`,
    path: `/listings/${slug}`,
  });
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const agent = AGENTS.find((a) => a.name === listing.agent);
  const similarListings = LISTINGS.filter(
    (l) => l.id !== listing.id && l.neighborhood === listing.neighborhood
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: `${listing.address}, ${listing.city}, CA`,
    url: `https://www.citrusandpark.com/listings/${listing.slug}`,
    description: listing.description,
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "USD",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.address,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-grove pt-28 pb-8 sm:pt-36 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/listings"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Listings
          </Link>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-heading text-3xl text-white sm:text-4xl">
                  {listing.address}
                </h1>
                <Badge
                  className={
                    listing.status === "New"
                      ? "bg-citrus text-white"
                      : "bg-white/20 text-white"
                  }
                >
                  {listing.status}
                </Badge>
              </div>
              <p className="mt-1 flex items-center gap-1 text-white/70">
                <MapPin className="h-4 w-4" />
                {listing.city}, {listing.state} {listing.zip}
              </p>
            </div>
            <p className="text-3xl font-bold text-citrus sm:text-4xl">
              {formatPrice(listing.price)}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-2 sm:grid-cols-3 sm:grid-rows-2">
            <div className="aspect-[16/10] rounded-lg bg-grove/10 sm:col-span-2 sm:row-span-2">
              <div className="flex h-full items-center justify-center text-grove/30">
                <p>Primary Photo</p>
              </div>
            </div>
            <div className="hidden aspect-[16/10] rounded-lg bg-grove/10 sm:block">
              <div className="flex h-full items-center justify-center text-grove/30">
                <p>Photo 2</p>
              </div>
            </div>
            <div className="hidden aspect-[16/10] rounded-lg bg-grove/10 sm:block">
              <div className="flex h-full items-center justify-center text-grove/30">
                <p>Photo 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Bed, label: "Bedrooms", value: listing.beds },
                  { icon: Bath, label: "Bathrooms", value: listing.baths },
                  {
                    icon: Ruler,
                    label: "Sq Ft",
                    value: listing.sqft.toLocaleString(),
                  },
                  {
                    icon: Home,
                    label: "Type",
                    value: listing.type,
                  },
                ].map((stat) => (
                  <Card key={stat.label} className="border-0 bg-white">
                    <CardContent className="flex flex-col items-center p-4 text-center">
                      <stat.icon className="h-5 w-5 text-citrus" />
                      <p className="mt-2 text-lg font-bold text-grove">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-heading text-2xl text-grove">
                  About This Property
                </h2>
                <p className="mt-3 leading-relaxed text-slate">
                  {listing.description}
                </p>
              </div>

              {/* Property Details */}
              <div>
                <h2 className="font-heading text-2xl text-grove">
                  Property Details
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-xs text-slate">Year Built</p>
                    <p className="font-medium text-charcoal">
                      {listing.yearBuilt}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-xs text-slate">Lot Size</p>
                    <p className="font-medium text-charcoal">
                      {listing.lotSize}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-xs text-slate">Property Type</p>
                    <p className="font-medium text-charcoal">{listing.type}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-heading text-2xl text-grove">
                  Features & Amenities
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {listing.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-charcoal"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-citrus" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="font-heading text-2xl text-grove">Location</h2>
                <div className="mt-4 aspect-[16/9] rounded-xl bg-linen">
                  <div className="flex h-full items-center justify-center text-grove/30">
                    <p>Google Map Embed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              {agent && (
                <Card className="border-0 bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 shrink-0 rounded-full bg-grove/10" />
                      <div>
                        <p className="font-heading text-lg text-grove">
                          {agent.name}
                        </p>
                        <p className="text-sm text-citrus">{agent.title}</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <a
                        href={`tel:${agent.phone.replace(/\D/g, "")}`}
                        className="flex items-center gap-2 text-sm text-slate hover:text-citrus"
                      >
                        <Phone className="h-4 w-4" /> {agent.phone}
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center gap-2 text-sm text-slate hover:text-citrus"
                      >
                        <Mail className="h-4 w-4" /> {agent.email}
                      </a>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      <Button
                        asChild
                        className="w-full bg-citrus hover:bg-citrus-dark"
                      >
                        <Link href="/book">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          Schedule a Showing
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-grove text-grove hover:bg-grove hover:text-white"
                      >
                        <Link href="/contact">Ask a Question</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Mortgage Calculator */}
              <MortgageCalculator defaultPrice={listing.price} />
            </div>
          </div>

          {/* Similar Listings */}
          {similarListings.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl text-grove">
                Similar Properties
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {similarListings.map((l) => (
                  <Link key={l.id} href={`/listings/${l.slug}`}>
                    <Card className="group cursor-pointer overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
                      <CardContent className="p-5">
                        <p className="text-xl font-bold text-grove">
                          {formatPrice(l.price)}
                        </p>
                        <p className="mt-1 font-medium text-charcoal">
                          {l.title}
                        </p>
                        <p className="text-sm text-slate">
                          {l.city}, CA
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-sm text-slate">
                          <span className="flex items-center gap-1">
                            <Bed className="h-3.5 w-3.5" /> {l.beds}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="h-3.5 w-3.5" /> {l.baths}
                          </span>
                          <span className="flex items-center gap-1">
                            <Ruler className="h-3.5 w-3.5" />{" "}
                            {l.sqft.toLocaleString()}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
