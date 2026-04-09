import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { PageHero } from "@/_components/shared/PageHero";
import { CalEmbed } from "@/_components/shared/CalEmbed";
import { BUSINESS_INFO } from "@/_lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Book a Consultation",
  description:
    "Schedule a free consultation with Citrus & Park Real Estate. Meet with our Redlands, CA agents to discuss your home buying or selling needs.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book a Consultation"
        description="Schedule a free, no-obligation consultation with one of our agents. We'll discuss your goals and how we can help."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="min-h-[600px]">
              <CalEmbed />
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-slate">
              Prefer to reach out directly? No problem.
            </p>
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2 text-grove hover:text-citrus"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_INFO.phone}
              </a>
              <span className="hidden text-slate/30 sm:block">|</span>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-grove hover:text-citrus"
              >
                <Mail className="h-4 w-4" />
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
