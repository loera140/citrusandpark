import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/_lib/constants";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-cream">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="text-7xl font-bold text-grove/20">404</p>
        <h1 className="mt-4 font-heading text-3xl text-grove">
          Page Not Found
        </h1>
        <p className="mt-3 text-slate">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          It might have been moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="bg-grove hover:bg-grove-light">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-grove text-grove hover:bg-grove hover:text-white"
          >
            <Link href="/listings">
              <Search className="mr-2 h-4 w-4" />
              Browse Listings
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate">
          Need help?{" "}
          <a
            href={BUSINESS_INFO.phoneHref}
            className="font-medium text-citrus hover:underline"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
