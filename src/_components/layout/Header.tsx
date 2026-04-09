"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, SITE_NAME, BUSINESS_INFO } from "@/_lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.avif"
            alt={SITE_NAME}
            width={48}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
          <span
            className={`font-heading text-lg font-bold sm:text-xl transition-colors ${
              scrolled ? "text-grove" : "text-white"
            }`}
          >
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-grove/10 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS_INFO.phoneHref}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {BUSINESS_INFO.phone}
          </a>
          <Button asChild className="bg-citrus hover:bg-citrus-dark text-white">
            <Link href="/book">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={`lg:hidden rounded-lg p-2 transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-cream">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <Image
                  src="/images/logo.avif"
                  alt={SITE_NAME}
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-heading text-xl font-bold text-grove">
                  {SITE_NAME}
                </span>
              </Link>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-lg font-medium text-charcoal transition-colors hover:bg-grove/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-border pt-4">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex items-center gap-2 px-4 py-2 text-charcoal"
                >
                  <Phone className="h-5 w-5 text-citrus" />
                  {BUSINESS_INFO.phone}
                </a>
                <Button
                  asChild
                  size="lg"
                  className="bg-citrus hover:bg-citrus-dark text-white"
                >
                  <Link href="/book" onClick={() => setOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
