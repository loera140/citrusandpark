import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Eye,
  MessageSquare,
  Home,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const STATS = [
  {
    label: "Total Visitors (30d)",
    value: "2,847",
    change: "+12.3%",
    icon: Users,
  },
  {
    label: "Page Views (30d)",
    value: "8,421",
    change: "+8.7%",
    icon: Eye,
  },
  {
    label: "New Inquiries",
    value: "14",
    change: "+3",
    icon: MessageSquare,
  },
  {
    label: "Active Listings",
    value: "6",
    change: "0",
    icon: Home,
  },
];

const TOP_PAGES = [
  { page: "/", views: 2134, title: "Homepage" },
  { page: "/listings", views: 1456, title: "Listings" },
  { page: "/about", views: 892, title: "About" },
  { page: "/contact", views: 743, title: "Contact" },
  { page: "/blog/redlands-real-estate-market-update-2026", views: 621, title: "Market Update Blog" },
  { page: "/neighborhoods/redlands", views: 534, title: "Redlands Guide" },
];

const TRAFFIC_SOURCES = [
  { source: "Google Organic", visits: 1423, pct: 50 },
  { source: "Direct", visits: 712, pct: 25 },
  { source: "Social Media", visits: 427, pct: 15 },
  { source: "Referral", visits: 285, pct: 10 },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl text-grove">Dashboard</h1>
      <p className="mt-1 text-sm text-slate">
        Overview of your website performance and activity.
      </p>

      {/* Stats Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label} className="border-0 bg-white shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-grove" />
                <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                  {stat.change}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
              <p className="mt-3 text-2xl font-bold text-charcoal">
                {stat.value}
              </p>
              <p className="text-sm text-slate">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Top Pages */}
        <Card className="border-0 bg-white shadow-sm">
          <CardContent className="p-5">
            <h2 className="flex items-center gap-2 font-heading text-lg text-grove">
              <TrendingUp className="h-5 w-5" /> Top Pages
            </h2>
            <div className="mt-4 space-y-3">
              {TOP_PAGES.map((page) => (
                <div
                  key={page.page}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      {page.title}
                    </p>
                    <p className="text-xs text-slate">{page.page}</p>
                  </div>
                  <span className="text-sm font-medium text-grove">
                    {page.views.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="border-0 bg-white shadow-sm">
          <CardContent className="p-5">
            <h2 className="flex items-center gap-2 font-heading text-lg text-grove">
              <Users className="h-5 w-5" /> Traffic Sources
            </h2>
            <div className="mt-4 space-y-4">
              {TRAFFIC_SOURCES.map((source) => (
                <div key={source.source}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal">{source.source}</span>
                    <span className="text-slate">
                      {source.visits.toLocaleString()} ({source.pct}%)
                    </span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-linen">
                    <div
                      className="h-full rounded-full bg-grove"
                      style={{ width: `${source.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 rounded-lg bg-white p-4 text-center text-sm text-slate shadow-sm">
        Connect <strong>Plausible Analytics</strong> and{" "}
        <strong>Google Search Console</strong> to see live data. Set{" "}
        <code className="rounded bg-linen px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_PLAUSIBLE_DOMAIN
        </code>{" "}
        in your environment variables.
      </p>
    </div>
  );
}
