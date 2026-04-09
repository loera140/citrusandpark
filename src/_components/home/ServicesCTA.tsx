import Link from "next/link";
import { Home, DollarSign, Key, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/_lib/constants";

const ICON_MAP = {
  Home,
  DollarSign,
  Key,
} as const;

export function ServicesCTA() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-grove sm:text-4xl">
            How Can We Help?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate">
            Whether you&apos;re buying your first home, selling a property, or
            looking for the perfect rental, we&apos;re here for you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Link key={service.title} href={service.href}>
                <Card className="group h-full border-0 bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-grove/10 transition-colors group-hover:bg-citrus/10">
                      <Icon className="h-8 w-8 text-grove transition-colors group-hover:text-citrus" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl text-grove">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-citrus">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
