import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { CTABanner } from "@/_components/shared/CTABanner";
import { BUSINESS_INFO } from "@/_lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Meet the Citrus & Park team — Redlands real estate experts since 2006. Learn about our story, values, and commitment to the Inland Empire community.",
  path: "/about",
});

const AGENTS = [
  {
    name: "Veronica Ramos",
    title: "Broker / Owner",
    bio: "With nearly two decades of experience in the Redlands real estate market, Veronica founded Citrus & Park to provide a more personal, community-focused approach to buying and selling homes. Her deep knowledge of the Inland Empire and commitment to client satisfaction has made her one of the most trusted names in local real estate.",
    specialties: ["Luxury Homes", "First-Time Buyers", "Investment Properties"],
    email: "veronica@citrusandpark.com",
    phone: "(909) 705-5275",
  },
  {
    name: "Renee Stallone",
    title: "Real Estate Agent",
    bio: "Renee brings passion and dedication to every client relationship. Known for her attention to detail and tireless work ethic, she helps buyers and sellers navigate the market with confidence. Whether you're looking for your first home or downsizing, Renee makes the process seamless.",
    specialties: ["Residential Sales", "Relocations", "Market Analysis"],
    email: "renee@citrusandpark.com",
    phone: "(909) 705-5275",
  },
];

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
      {/* Hero */}
      <section className="bg-grove pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl text-white sm:text-5xl">
              About Citrus &amp; Park
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Since {BUSINESS_INFO.foundedYear}, we&apos;ve been helping
              families find their perfect home in Redlands and the Inland
              Empire. Real estate is more than a transaction — it&apos;s a life
              milestone, and we treat it that way.
            </p>
          </div>
        </div>
      </section>

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
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {AGENTS.map((agent) => (
              <Card
                key={agent.name}
                className="overflow-hidden border-0 bg-white shadow-md"
              >
                <CardContent className="p-0">
                  <div className="grid sm:grid-cols-5">
                    <div className="flex items-center justify-center bg-linen sm:col-span-2">
                      <div className="p-8">
                        <div className="mx-auto h-32 w-32 rounded-full bg-grove/10" />
                      </div>
                    </div>
                    <div className="p-6 sm:col-span-3">
                      <h3 className="font-heading text-2xl text-grove">
                        {agent.name}
                      </h3>
                      <p className="text-sm font-medium text-citrus">
                        {agent.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate">
                        {agent.bio}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {agent.specialties.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-grove/10 px-3 py-1 text-xs font-medium text-grove"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-col gap-1 text-sm text-slate">
                        <a
                          href={`mailto:${agent.email}`}
                          className="flex items-center gap-1.5 hover:text-citrus"
                        >
                          <Mail className="h-3.5 w-3.5" /> {agent.email}
                        </a>
                        <a
                          href={`tel:${agent.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-1.5 hover:text-citrus"
                        >
                          <Phone className="h-3.5 w-3.5" /> {agent.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
