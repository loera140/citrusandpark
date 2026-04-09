import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { CTABanner } from "@/_components/shared/CTABanner";
import { PageHero } from "@/_components/shared/PageHero";
import { AgentImage } from "@/_components/agents/AgentImage";
import { BUSINESS_INFO } from "@/_lib/constants";
import { AGENTS } from "@/_lib/agents-data";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Meet the Citrus & Park team — Redlands real estate experts since 2006. Learn about our story, values, and commitment to the Inland Empire community.",
  path: "/about",
});

const VALUES = [
  {
    title: "Community First",
    description:
      "We live and work in the communities we serve. Our success is tied to the growth and well-being of Redlands and the Inland Empire.",
  },
  {
    title: "Transparency",
    description:
      "No surprises, no hidden agendas. We believe in honest communication and keeping you informed at every step.",
  },
  {
    title: "Client Focused",
    description:
      "Your goals are our goals. We listen, adapt, and work tirelessly to ensure your real estate experience exceeds expectations.",
  },
  {
    title: "Local Expertise",
    description:
      "With over 20 years in the Redlands market, we know every neighborhood, every trend, and every opportunity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Citrus &amp; Park"
        description={`Since ${BUSINESS_INFO.foundedYear}, we've been helping families find their perfect home in Redlands and the Inland Empire. Real estate is more than a transaction — it's a life milestone, and we treat it that way.`}
      />

      {/* Story */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl text-grove sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 leading-relaxed text-slate">
                Citrus &amp; Park was born from a simple idea: real estate should
                be personal. Founded by Veronica Ramos in 2006, our agency
                started with a vision to create a real estate experience that
                puts people before transactions.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                Named after the iconic citrus groves and tree-lined parks of
                historic Redlands, our company reflects the warmth, beauty, and
                character of the community we call home. We&apos;ve grown from a
                one-person operation to a dedicated team, but our commitment to
                personalized service has never wavered.
              </p>
              <p className="mt-4 leading-relaxed text-slate">
                Today, we proudly serve Redlands, Loma Linda, Highland, Yucaipa,
                Mentone, and the greater San Bernardino area. Every client is
                family, and every home is a chapter in someone&apos;s story.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-linen">
                <div className="flex h-full items-center justify-center text-grove/30">
                  <p className="text-sm">Office / Team Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-grove sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate">
              These principles guide everything we do — from how we serve our
              clients to how we engage with the community.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <Card
                key={value.title}
                className="border-0 bg-cream"
              >
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-citrus" />
                  <h3 className="mt-4 font-heading text-xl text-grove">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-16 sm:py-24" id="team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-grove sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate">
              Our experienced agents are passionate about real estate and
              dedicated to your success.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((agent) => (
              <Link key={agent.slug} href={`/agents/${agent.slug}`}>
                <Card className="group h-full cursor-pointer overflow-hidden border-0 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <AgentImage src={agent.image} name={agent.name} size="lg" />
                    <h3 className="mt-4 font-heading text-xl text-grove">
                      {agent.name}
                    </h3>
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
