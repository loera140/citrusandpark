import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { AGENTS } from "@/_lib/agents-data";
import { CTABanner } from "@/_components/shared/CTABanner";
import { PageHero } from "@/_components/shared/PageHero";
import { AgentImage } from "@/_components/agents/AgentImage";

export const metadata: Metadata = createMetadata({
  title: "Our Agents",
  description:
    "Meet the Citrus & Park real estate team in Redlands, CA. Experienced agents ready to help you buy, sell, or rent your next home.",
  path: "/agents",
});

export default function AgentsPage() {
  return (
    <>
      <PageHero
        title="Our Agents"
        description="Meet the experienced professionals who make Citrus & Park the most trusted real estate team in Redlands."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((agent) => (
              <Link key={agent.slug} href={`/agents/${agent.slug}`}>
                <Card className="group h-full cursor-pointer overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="bg-linen py-8">
                    <div className="flex justify-center">
                      <AgentImage
                        src={agent.image}
                        name={agent.name}
                        size="lg"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h2 className="font-heading text-2xl text-grove">
                      {agent.name}
                    </h2>
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
                    <div className="mt-4 flex flex-col items-center gap-1 text-sm text-slate">
                      <span className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" /> {agent.email}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5" /> {agent.phone}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-citrus">
                      View Profile
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
