import type { Metadata } from "next";
import { createMetadata } from "@/_lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Citrus & Park Real Estate in Redlands, CA. Call (909) 705-5275 or visit our office at 330 N 6th St, Suite 203. We're here to help with buying, selling, and renting.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
