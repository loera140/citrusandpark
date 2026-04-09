import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bed, Bath, Ruler, Search, SlidersHorizontal } from "lucide-react";
import { createMetadata } from "@/_lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Homes for Sale in Redlands, CA",
  description:
    "Browse homes for sale in Redlands, Loma Linda, Highland, Yucaipa, and the Inland Empire. Find your dream home with Citrus & Park Real Estate.",
  path: "/listings",
});

const SAMPLE_LISTINGS = [
  { id: 1, slug: "125-cajon-st-redlands", title: "125 Cajon St", city: "Redlands", price: 650000, beds: 4, baths: 3, sqft: 2400, status: "For Sale" },
  { id: 2, slug: "800-orange-ave-redlands", title: "800 Orange Ave", city: "Redlands", price: 525000, beds: 3, baths: 2, sqft: 1800, status: "For Sale" },
  { id: 3, slug: "1450-garden-st-redlands", title: "1450 Garden St", city: "Redlands", price: 780000, beds: 5, baths: 3, sqft: 3200, status: "New" },
  { id: 4, slug: "220-palm-ln-loma-linda", title: "220 Palm Ln", city: "Loma Linda", price: 460000, beds: 3, baths: 2, sqft: 1600, status: "For Sale" },
  { id: 5, slug: "3100-highland-ave", title: "3100 Highland Ave", city: "Highland", price: 395000, beds: 3, baths: 2, sqft: 1450, status: "For Sale" },
  { id: 6, slug: "550-yucaipa-blvd", title: "550 Yucaipa Blvd", city: "Yucaipa", price: 590000, beds: 4, baths: 2, sqft: 2100, status: "New" },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ListingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grove pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl text-white sm:text-5xl">
              Find Your Home
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Explore available properties in Redlands, Loma Linda, Highland,
              Yucaipa, and the greater Inland Empire.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-8 flex max-w-2xl gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
              <Input
                placeholder="Search by address, city, or zip..."
                className="h-12 border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/50"
              />
            </div>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate">
            Showing {SAMPLE_LISTINGS.length} properties
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_LISTINGS.map((listing) => (
              <Link key={listing.id} href={`/listings/${listing.slug}`}>
                <Card className="group cursor-pointer overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="h-full w-full bg-linen" />
                    <Badge
                      className={`absolute left-3 top-3 ${
                        listing.status === "New"
                          ? "bg-citrus text-white"
                          : "bg-grove text-white"
                      }`}
                    >
                      {listing.status}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-2xl font-bold text-grove">
                      {formatPrice(listing.price)}
                    </p>
                    <p className="mt-1 font-medium text-charcoal">
                      {listing.title}
                    </p>
                    <p className="text-sm text-slate">{listing.city}, CA</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-slate">
                      <span className="flex items-center gap-1">
                        <Bed className="h-4 w-4" /> {listing.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="h-4 w-4" /> {listing.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler className="h-4 w-4" />{" "}
                        {listing.sqft.toLocaleString()} sqft
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
