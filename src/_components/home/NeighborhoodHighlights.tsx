import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NEIGHBORHOODS } from "@/_lib/constants";

export function NeighborhoodHighlights() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-grove sm:text-4xl">
            Explore Our Neighborhoods
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate">
            Discover what makes each community in the Inland Empire unique.
            Find the perfect neighborhood for your lifestyle.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOODS.map((neighborhood) => (
            <Link
              key={neighborhood.slug}
              href={`/neighborhoods/${neighborhood.slug}`}
            >
              <Card className="group h-full border-0 bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-grove/10 transition-colors group-hover:bg-citrus/10">
                      <MapPin className="h-5 w-5 text-grove transition-colors group-hover:text-citrus" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-grove">
                        {neighborhood.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate">
                        {neighborhood.description}
                      </p>
                    </div>
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
            <Link href="/neighborhoods">
              View All Neighborhoods
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
