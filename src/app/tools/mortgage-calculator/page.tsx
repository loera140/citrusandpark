import type { Metadata } from "next";
import { createMetadata } from "@/_lib/seo";
import { MortgageCalculator } from "@/_components/listings/MortgageCalculator";
import { CTABanner } from "@/_components/shared/CTABanner";

export const metadata: Metadata = createMetadata({
  title: "Mortgage Calculator",
  description:
    "Estimate your monthly mortgage payment for homes in Redlands, CA. Free calculator with principal, interest, taxes, and insurance breakdown.",
  path: "/tools/mortgage-calculator",
});

export default function MortgageCalculatorPage() {
  return (
    <>
      <section className="bg-grove pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl text-white sm:text-5xl">
              Mortgage Calculator
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Estimate your monthly mortgage payment and plan your home
              purchase with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <MortgageCalculator />
          <p className="mt-6 text-center text-sm text-slate">
            This calculator provides estimates only. Actual rates and payments
            may vary. Contact us for a personalized mortgage analysis.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
