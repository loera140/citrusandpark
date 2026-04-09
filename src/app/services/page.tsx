import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  DollarSign,
  Key,
  Search,
  FileText,
  Handshake,
  TrendingUp,
  Camera,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { CTABanner } from "@/_components/shared/CTABanner";
import { PageHero } from "@/_components/shared/PageHero";

export const metadata: Metadata = createMetadata({
  title: "Our Services",
  description:
    "Citrus & Park offers expert buying, selling, and rental services in Redlands, CA. Full-service real estate from market analysis to closing.",
  path: "/services",
});

const BUYING_STEPS = [
  {
    icon: Search,
    title: "Consultation & Search",
    description:
      "We start by understanding your needs, budget, and dream neighborhood. Then we curate a personalized list of properties that match your criteria.",
  },
  {
    icon: Home,
    title: "Showings & Tours",
    description:
      "We schedule private tours, provide detailed market comparisons, and help you evaluate each property's potential.",
  },
  {
    icon: FileText,
    title: "Offer & Negotiation",
    description:
      "We craft competitive offers, negotiate on your behalf, and navigate inspections and contingencies with expertise.",
  },
  {
    icon: Handshake,
    title: "Closing & Keys",
    description:
      "We coordinate with lenders, escrow, and title companies to ensure a smooth closing. Then we hand you the keys to your new home.",
  },
];

const SELLING_STEPS = [
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description:
      "We provide a comprehensive comparative market analysis to determine the optimal listing price for maximum return.",
  },
  {
    icon: Camera,
    title: "Staging & Marketing",
    description:
      "Professional photography, virtual tours, and a multi-channel marketing strategy to showcase your property to the widest audience.",
  },
  {
    icon: Users,
    title: "Showings & Offers",
    description:
      "We manage all showings, open houses, and incoming offers. We negotiate aggressively to get you the best possible price.",
  },
  {
    icon: Handshake,
    title: "Closing",
    description:
      "We handle all paperwork, coordinate with the buyer's agent, and ensure everything goes smoothly through escrow and closing.",
  },
];

const RENTAL_SERVICES = [
  "Tenant screening and background checks",
  "Rental market pricing analysis",
  "Property listing and marketing",
  "Lease preparation and negotiation",
  "Move-in/move-out coordination",
  "Ongoing property management referrals",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="From your first home to your forever home, we provide comprehensive real estate services tailored to your needs."
      />

      {/* Buying */}
      <section className="bg-cream py-16 sm:py-24" id="buying">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-grove/10">
              <Home className="h-7 w-7 text-grove" />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-grove sm:text-4xl">
                Buying a Home
              </h2>
              <p className="text-slate">
                Your journey to homeownership, guided every step of the way.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUYING_STEPS.map((step, i) => (
              <Card key={step.title} className="relative border-0 bg-white">
                <CardContent className="p-6">
                  <span className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-citrus text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <step.icon className="mt-2 h-6 w-6 text-grove" />
                  <h3 className="mt-4 font-heading text-lg text-grove">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-grove hover:bg-grove-light"
            >
              <Link href="/listings">
                Browse Available Homes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Selling */}
      <section className="bg-white py-16 sm:py-24" id="selling">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-citrus/10">
              <DollarSign className="h-7 w-7 text-citrus" />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-grove sm:text-4xl">
                Selling Your Home
              </h2>
              <p className="text-slate">
                Maximum value, minimal stress. Our proven process gets results.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SELLING_STEPS.map((step, i) => (
              <Card key={step.title} className="relative border-0 bg-cream">
                <CardContent className="p-6">
                  <span className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-citrus text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <step.icon className="mt-2 h-6 w-6 text-grove" />
                  <h3 className="mt-4 font-heading text-lg text-grove">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-citrus hover:bg-citrus-dark"
            >
              <Link href="/contact">
                Get a Free Home Valuation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Renting */}
      <section className="bg-cream py-16 sm:py-24" id="renting">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-grove/10">
                  <Key className="h-7 w-7 text-grove" />
                </div>
                <h2 className="font-heading text-3xl text-grove sm:text-4xl">
                  Rental Services
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-slate">
                Whether you&apos;re a landlord looking for quality tenants or a
                renter searching for the perfect place, our rental services
                connect the right people with the right properties.
              </p>
              <ul className="mt-6 space-y-3">
                {RENTAL_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-citrus" />
                    <span className="text-charcoal">{service}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-grove hover:bg-grove-light"
              >
                <Link href="/contact">
                  Inquire About Rentals
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-linen">
              <div className="flex h-full items-center justify-center text-grove/30">
                <p className="text-sm">Rental Property Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
