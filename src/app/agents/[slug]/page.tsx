import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Calendar,
  ArrowLeft,
  Bed,
  Bath,
  Ruler,
} from "lucide-react";
import { AGENTS, getAgentBySlug } from "@/_lib/agents-data";
import { LISTINGS, formatPrice } from "@/_lib/listings-data";
import { createMetadata } from "@/_lib/seo";
import { CTABanner } from "@/_components/shared/CTABanner";

export async function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return {};

  return createMetadata({
    title: `${agent.name} - ${agent.title}`,
    description: `${agent.name} is a ${agent.title} at Citrus & Park Real Estate in Redlands, CA. Specializing in ${agent.specialties.join(", ")}.`,
    path: `/agents/${slug}`,
  });
}

export default async function AgentProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();

  const agentListings = LISTINGS.filter((l) => l.agent === agent.name);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: agent.name,
    jobTitle: agent.title,
    telephone: agent.phone,
    email: agent.email,
    url: `https://www.citrusandpark.com/agents/${agent.slug}`,
    worksFor: {
      "@type": "RealEstateAgent",
      name: "Citrus & Park Real Estate",
    },
    areaServed: {
      "@type": "City",
      name: "Redlands",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-grove pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/agents"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Agents
          </Link>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar */}
            <div>
              <Card className="sticky top-28 border-0 bg-white shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto h-40 w-40 rounded-full bg-linen" />
                  <h1 className="mt-4 font-heading text-2xl text-grove">
                    {agent.name}
                  </h1>
                  <p className="text-sm font-medium text-citrus">
                    {agent.title}
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {agent.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-grove/10 px-3 py-1 text-xs font-medium text-grove"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    <a
                      href={`tel:${agent.phone.replace(/\D/g, "")}`}
                      className="flex items-center justify-center gap-2 text-sm text-slate hover:text-citrus"
                    >
                      <Phone className="h-4 w-4" /> {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-slate hover:text-citrus"
                    >
                      <Mail className="h-4 w-4" /> {agent.email}
                    </a>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <Button
                      asChild
                      className="w-full bg-citrus hover:bg-citrus-dark"
                    >
                      <Link href="/book">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Consultation
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-grove text-grove hover:bg-grove hover:text-white"
                    >
                      <Link href="/contact">Send a Message</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading text-2xl text-grove">About</h2>
                {agent.bio.split("\n\n").map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-slate">
                    {p}
                  </p>
                ))}
              </div>

              {agentListings.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl text-grove">
                    Active Listings
                  </h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {agentListings.map((l) => (
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
                            <p className="font-medium text-charcoal">
                              {l.title}
                            </p>
                            <p className="text-sm text-slate">
                              {l.city}, CA
                            </p>
                            <div className="mt-2 flex gap-3 text-sm text-slate">
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
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
