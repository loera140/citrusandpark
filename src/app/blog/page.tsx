import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { PageHero } from "@/_components/shared/PageHero";
import { NewsletterSignup } from "@/_components/home/NewsletterSignup";

export const metadata: Metadata = createMetadata({
  title: "Real Estate Blog",
  description:
    "Redlands real estate market updates, home buying tips, neighborhood guides, and more from the Citrus & Park team.",
  path: "/blog",
});

const SAMPLE_POSTS = [
  {
    slug: "redlands-real-estate-market-update-2026",
    title: "Redlands Real Estate Market Update: What Buyers & Sellers Need to Know",
    excerpt:
      "The Redlands market continues to show strong fundamentals heading into spring. Here's what the latest data tells us about pricing, inventory, and opportunities.",
    category: "Market Updates",
    date: "2026-04-01",
    readTime: "5 min read",
    image: "/images/blog/market-update.jpg",
  },
  {
    slug: "best-neighborhoods-redlands-ca",
    title: "Best Neighborhoods in Redlands, CA: A Complete Guide",
    excerpt:
      "From the historic charm of Smiley Park to the family-friendly streets of North Redlands, discover what makes each neighborhood special.",
    category: "Neighborhood Guides",
    date: "2026-03-15",
    readTime: "8 min read",
    image: "/images/blog/neighborhoods.jpg",
  },
  {
    slug: "first-time-home-buyer-guide-inland-empire",
    title: "First-Time Home Buyer Guide for the Inland Empire",
    excerpt:
      "Everything you need to know about buying your first home in the Inland Empire — from loan programs to closing costs and everything in between.",
    category: "Buyer Tips",
    date: "2026-03-01",
    readTime: "10 min read",
    image: "/images/blog/first-time-buyer.jpg",
  },
  {
    slug: "selling-your-home-in-spring-2026",
    title: "5 Tips for Selling Your Home This Spring",
    excerpt:
      "Spring is the hottest season for real estate. Here are five proven strategies to maximize your home's value and attract serious buyers.",
    category: "Seller Tips",
    date: "2026-02-15",
    readTime: "4 min read",
    image: "/images/blog/selling-spring.jpg",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Real Estate Blog"
        description="Market insights, neighborhood guides, and expert advice from the Citrus & Park team."
      />

      {/* Blog Grid */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {SAMPLE_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full cursor-pointer overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden bg-linen">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-grove/10 text-grove"
                      >
                        {post.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-slate">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h2 className="mt-3 font-heading text-xl text-grove transition-colors group-hover:text-citrus">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate">
                        {post.readTime}
                      </span>
                      <span className="inline-flex items-center text-sm font-medium text-citrus">
                        Read More
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
