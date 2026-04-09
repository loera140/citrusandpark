import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/_lib/constants";

const HIGHLIGHTS = [
  "Serving Redlands & the Inland Empire since 2006",
  "Deep local market knowledge and connections",
  "Personalized service from start to closing",
  "Expert guidance for buyers, sellers, and renters",
];

export function AboutPreview() {
  return (
    <section className="bg-linen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-grove/10">
              {/* Placeholder for team/office photo */}
              <div className="flex h-full items-center justify-center text-grove/30">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-grove/10" />
                  <p className="mt-4 text-sm">Team Photo</p>
                </div>
              </div>
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-citrus p-6 text-white shadow-lg lg:block">
              <p className="text-4xl font-bold">
                {new Date().getFullYear() - BUSINESS_INFO.foundedYear}+
              </p>
              <p className="text-sm font-medium">Years of Experience</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="font-heading text-3xl text-grove sm:text-4xl">
              Your Neighbors, Your Realtors
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              At Citrus &amp; Park, we&apos;re more than real estate agents —
              we&apos;re members of the Redlands community. We know every
              neighborhood, every school district, and every hidden gem because
              this is our home too.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              Our team makes it a point to be involved through every stage of
              your property journey. From the first showing to handing over the
              keys, we&apos;re with you every step of the way.
            </p>

            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-citrus" />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-grove hover:bg-grove-light"
            >
              <Link href="/about">
                Meet the Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
