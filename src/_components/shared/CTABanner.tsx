import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/_lib/constants";

export function CTABanner() {
  return (
    <section className="bg-grove py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl text-white sm:text-4xl">
          Ready to Find Your Dream Home?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Let&apos;s start the conversation. Whether you&apos;re buying,
          selling, or just exploring your options, our team is here to help.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-citrus px-8 hover:bg-citrus-dark sm:w-auto"
          >
            <Link href="/book">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Consultation
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <a href={BUSINESS_INFO.phoneHref}>
              <Phone className="mr-2 h-5 w-5" />
              Call {BUSINESS_INFO.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
