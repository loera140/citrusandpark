import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Home,
  FileText,
  MessageSquare,
  BarChart3,
  ArrowLeft,
} from "lucide-react";
import { SITE_NAME } from "@/_lib/constants";

export const metadata: Metadata = {
  title: {
    default: `Admin | ${SITE_NAME}`,
    template: `%s | Admin | ${SITE_NAME}`,
  },
  robots: { index: false, follow: false },
};

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Listings", href: "/admin/listings", icon: Home },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linen pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-56">
            <nav className="sticky top-24 space-y-1">
              <Link
                href="/"
                className="mb-4 flex items-center gap-2 text-sm text-slate hover:text-citrus"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Site
              </Link>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate">
                Admin
              </p>
              {ADMIN_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-grove/10 hover:text-grove"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="min-w-0 flex-1 pb-12">{children}</main>
        </div>
      </div>
    </div>
  );
}
