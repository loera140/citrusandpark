import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Ruler, ArrowRight } from "lucide-react";

const SAMPLE_LISTINGS = [
  {
    id: 1,
    slug: "125-cajon-st-redlands",
    title: "125 Cajon St",
    city: "Redlands",
    price: 650000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: "/images/listings/home-1.jpg",
    status: "For Sale" as const,
  },
  {
    id: 2,
    slug: "800-orange-ave-redlands",
    title: "800 Orange Ave",
    city: "Redlands",
    price: 525000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "/images/listings/home-2.jpg",
    status: "For Sale" as const,
  },
  {
    id: 3,
    slug: "1450-garden-st-redlands",
    title: "1450 Garden St",
    city: "Redlands",
    price: 780000,
    beds: 5,
    baths: 3,
    sqft: 3200,
    image: "/images/listings/home-3.jpg",
    status: "New" as const,
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function FeaturedListings() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-grove sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate">
            Explore our handpicked selection of homes in Redlands and the
            surrounding Inland Empire communities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-grove text-grove hover:bg-grove hover:text-white"
          >
            <Link href="/listings">
              View All Listings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
