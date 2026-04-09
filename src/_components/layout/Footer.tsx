import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_NAME, BUSINESS_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/_lib/constants";

export function Footer() {
  return (
    <footer className="bg-grove text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.avif"
                alt={SITE_NAME}
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-heading text-xl font-bold">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Helping families find their dream homes in Redlands and the Inland
              Empire since {BUSINESS_INFO.foundedYear}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <nav className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-citrus"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="text-sm text-white/70 transition-colors hover:text-citrus"
              >
                Book Consultation
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Contact</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-citrus"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-citrus" />
                {BUSINESS_INFO.address.full}
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-citrus"
              >
                <Phone className="h-4 w-4 shrink-0 text-citrus" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-citrus"
              >
                <Mail className="h-4 w-4 shrink-0 text-citrus" />
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Office Hours</h3>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-citrus" />
                <div>
                  <p>Mon – Fri: {BUSINESS_INFO.hours.weekdays}</p>
                  <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                  <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.facebook && (
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-citrus"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}
            {SOCIAL_LINKS.instagram && (
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-citrus"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
