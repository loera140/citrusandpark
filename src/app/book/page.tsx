import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, Mail } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { PageHero } from "@/_components/shared/PageHero";
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
          <Card className="overflow-hidden border-0 bg-white shadow-lg">
            <CardContent className="p-0">
              {/* Cal.com Embed Placeholder */}
              <div className="flex min-h-[500px] items-center justify-center bg-linen p-8">
                <div className="text-center">
                  <Calendar className="mx-auto h-16 w-16 text-grove/30" />
                  <p className="mt-4 font-heading text-xl text-grove">
                    Scheduling Widget
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Cal.com or Calendly embed will be integrated here.
                  </p>
                  <p className="mt-1 text-xs text-slate/60">
                    Choose a date and time that works for you.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
