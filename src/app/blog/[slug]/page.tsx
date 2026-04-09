import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { createMetadata } from "@/_lib/seo";
import { NewsletterSignup } from "@/_components/home/NewsletterSignup";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "redlands-real-estate-market-update-2026",
    title: "Redlands Real Estate Market Update: What Buyers & Sellers Need to Know",
    excerpt:
      "The Redlands market continues to show strong fundamentals heading into spring.",
    content: `
The Redlands real estate market has remained resilient heading into 2026, with steady demand driven by the city's excellent schools, historic charm, and proximity to outdoor recreation.

## Key Market Trends

**Median Home Price:** The median sale price in Redlands has reached $580,000, reflecting a 4.2% year-over-year increase. This moderate appreciation suggests a healthy, sustainable market rather than a speculative bubble.

**Inventory Levels:** Active listings have increased by 8% compared to last year, giving buyers slightly more options. However, well-priced homes in desirable neighborhoods like the Historic District and North Redlands continue to sell within 2-3 weeks.

**Days on Market:** The average days on market is currently 28 days, down from 35 days at this time last year. Homes priced competitively and in move-in condition are seeing multiple offers.

## What This Means for Buyers

If you're looking to buy in Redlands, the spring market presents a window of opportunity. While prices remain strong, the slight increase in inventory means less competition compared to the frenzy of 2021-2022. Key tips:

- **Get pre-approved** before you start touring homes
- **Act quickly** on homes in the $400K-$600K range — they move fast
- **Consider emerging neighborhoods** like East Redlands for better value
- **Don't skip the inspection** — some older Redlands homes need foundation or plumbing updates

## What This Means for Sellers

It's still a great time to sell in Redlands. To maximize your return:

- **Price strategically** — overpricing in this market leads to longer days on market
- **Invest in staging** — staged homes sell for an average of 5-10% more
- **Highlight Redlands lifestyle** — buyers are attracted to the community, not just the house
- **Market aggressively online** — over 95% of buyers start their search online

## Looking Ahead

We expect the Redlands market to remain stable through 2026, with moderate price appreciation of 3-5%. The city's ongoing downtown revitalization, new dining and retail openings, and strong school ratings continue to attract buyers from across Southern California.

**Ready to make a move?** Contact our team for a personalized market analysis of your home or neighborhood.
    `,
    category: "Market Updates",
    date: "2026-04-01",
    readTime: "5 min read",
    author: "Veronica Ramos",
  },
  {
    slug: "best-neighborhoods-redlands-ca",
    title: "Best Neighborhoods in Redlands, CA: A Complete Guide",
    excerpt:
      "From the historic charm of Smiley Park to the family-friendly streets of North Redlands.",
    content: `
Choosing the right neighborhood is just as important as choosing the right home. Redlands offers a diverse range of communities, each with its own character and appeal.

## Historic District

The crown jewel of Redlands. Tree-lined streets, Victorian and Craftsman homes, and walking distance to downtown. Homes here range from $550K to over $1M, but the charm and character are unmatched.

**Best for:** History lovers, walkability enthusiasts, established families.

## North Redlands

Family-friendly subdivisions with newer construction, good schools, and mountain views. This area offers the best value for space, with many homes featuring larger lots and modern amenities.

**Best for:** Young families, first-time buyers, those wanting newer homes.

## Smiley Park Area

Named after the iconic Smiley Library, this neighborhood sits at the base of the foothills and offers a mix of historic and mid-century homes. Quiet, shaded streets and a strong sense of community.

**Best for:** Professionals, couples, those seeking a quiet residential feel.

## East Redlands / Crafton Hills

More rural feel with larger lots, equestrian properties, and stunning views. Slightly more affordable than central Redlands while offering space and privacy.

**Best for:** Horse enthusiasts, those wanting acreage, nature lovers.

## University District

Close to the University of Redlands campus, this area attracts both students and young professionals. Eclectic mix of housing styles with a vibrant, youthful energy.

**Best for:** Students, young professionals, investors (rental demand is strong).

---

Want to explore these neighborhoods in person? **Schedule a tour with our team** and we'll show you why Redlands is one of Southern California's best-kept secrets.
    `,
    category: "Neighborhood Guides",
    date: "2026-03-15",
    readTime: "8 min read",
    author: "Renee Stallone",
  },
  {
    slug: "first-time-home-buyer-guide-inland-empire",
    title: "First-Time Home Buyer Guide for the Inland Empire",
    excerpt:
      "Everything you need to know about buying your first home in the Inland Empire.",
    content: `
Buying your first home is exciting — and a little overwhelming. This guide walks you through everything you need to know about purchasing a home in the Inland Empire.

## Step 1: Check Your Finances

Before you start browsing listings, get a clear picture of your finances:

- **Credit Score:** Aim for 620+ for conventional loans, 580+ for FHA
- **Down Payment:** While 20% is ideal, many programs allow 3-5% down
- **Debt-to-Income Ratio:** Lenders typically want this below 43%
- **Emergency Fund:** Keep 3-6 months of expenses saved beyond your down payment

## Step 2: Get Pre-Approved

A pre-approval letter from a lender shows sellers you're a serious buyer. Shop around with at least 2-3 lenders to compare rates.

## Step 3: Find the Right Agent

Working with a local agent who knows the Inland Empire market is crucial. We can help you navigate neighborhoods, negotiate offers, and avoid costly mistakes.

## Step 4: Start Your Search

The Inland Empire offers incredible value compared to coastal Southern California. Here's what you can expect:

| City | Median Price | Best For |
|------|-------------|----------|
| Redlands | $580K | History, culture, excellent schools |
| Loma Linda | $475K | Healthcare workers, health-conscious lifestyle |
| Highland | $420K | Affordability, mountain views |
| Yucaipa | $510K | Small-town charm, outdoor lifestyle |

## Step 5: Make an Offer

Your agent will help you craft a competitive offer based on comparable sales, market conditions, and the seller's situation.

## Step 6: Inspections & Appraisal

Never skip the home inspection. In the Inland Empire, pay special attention to:
- Foundation (older homes especially)
- HVAC systems (summers are hot!)
- Roof condition
- Plumbing (check for galvanized pipes in pre-1970 homes)

## Step 7: Close & Get Your Keys!

Closing typically takes 30-45 days from accepted offer. Your agent and lender will guide you through every step.

---

**Ready to start your home-buying journey?** We specialize in helping first-time buyers navigate the Inland Empire market. Reach out for a free consultation.
    `,
    category: "Buyer Tips",
    date: "2026-03-01",
    readTime: "10 min read",
    author: "Veronica Ramos",
  },
  {
    slug: "selling-your-home-in-spring-2026",
    title: "5 Tips for Selling Your Home This Spring",
    excerpt:
      "Spring is the hottest season for real estate. Here are five proven strategies.",
    content: `
Spring is traditionally the busiest season in real estate, and 2026 is shaping up to be strong in the Inland Empire. Here are five strategies to maximize your home's value.

## 1. Price It Right from Day One

Overpricing is the #1 mistake sellers make. A home priced too high will sit on the market, leading buyers to wonder what's wrong with it. Work with your agent to analyze comparable sales and set a competitive price.

## 2. Invest in Curb Appeal

First impressions matter. Simple improvements that pay for themselves:
- Fresh exterior paint or power washing
- Manicured landscaping and fresh mulch
- New house numbers and a clean front door
- Potted plants and seasonal flowers

## 3. Stage Your Home

Staged homes sell faster and for more money. Key staging tips:
- Declutter ruthlessly — less is more
- Depersonalize — remove family photos and personal items
- Let in natural light — open blinds, clean windows
- Add fresh flowers and neutral scents

## 4. Professional Photography

Over 95% of buyers start their search online. Bad photos can cost you thousands. Professional real estate photography is a must — it's a small investment with a huge return.

## 5. Be Flexible with Showings

The more accessible your home is for showings, the faster it will sell. Try to accommodate evening and weekend requests, and keep your home "show-ready" at all times.

---

**Thinking about selling?** Contact us for a free, no-obligation home valuation and personalized selling strategy.
    `,
    category: "Seller Tips",
    date: "2026-02-15",
    readTime: "4 min read",
    author: "Renee Stallone",
  },
];

function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Citrus & Park Real Estate",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-grove pt-28 pb-8 sm:pt-36 sm:pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/10 text-white">
              {post.category}
            </Badge>
            <h1 className="mt-3 font-heading text-3xl leading-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
              <span>{post.author}</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-grove prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-p:text-slate prose-p:leading-relaxed prose-li:text-slate prose-strong:text-charcoal prose-a:text-citrus prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:text-grove prose-td:text-slate">
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-2xl text-grove mt-8 mb-4">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }
              if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                return (
                  <p key={i} className="font-semibold text-charcoal">
                    {trimmed.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (trimmed.startsWith("- ")) {
                return (
                  <li key={i} className="ml-4 text-slate">
                    {trimmed.replace("- ", "")}
                  </li>
                );
              }
              if (trimmed.startsWith("---")) {
                return <hr key={i} className="my-8 border-border" />;
              }
              if (trimmed.startsWith("|")) {
                return null; // Skip markdown tables in this simple renderer
              }

              return (
                <p key={i} className="text-slate leading-relaxed mb-4">
                  {trimmed.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={j} className="text-charcoal">
                          {part.replace(/\*\*/g, "")}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="font-heading text-2xl text-grove">
                More Articles
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`}>
                    <div className="group rounded-xl bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <Badge
                        variant="secondary"
                        className="bg-grove/10 text-grove"
                      >
                        {p.category}
                      </Badge>
                      <h3 className="mt-2 font-heading text-lg text-grove transition-colors group-hover:text-citrus">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate">{p.excerpt}</p>
                      <span className="mt-3 inline-flex items-center text-sm font-medium text-citrus">
                        Read More
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <NewsletterSignup />
    </>
  );
}
