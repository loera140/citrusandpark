import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Search, TrendingUp, Globe } from "lucide-react";

const TARGET_KEYWORDS = [
  { keyword: "real estate agent Redlands CA", position: 8, change: "+3", impressions: 1200 },
  { keyword: "homes for sale Redlands CA", position: 12, change: "+5", impressions: 3400 },
  { keyword: "Redlands CA real estate", position: 15, change: "+2", impressions: 2100 },
  { keyword: "best neighborhoods Redlands", position: 6, change: "+4", impressions: 890 },
  { keyword: "selling home Redlands CA", position: 18, change: "+1", impressions: 560 },
  { keyword: "first time home buyer Redlands", position: 22, change: "new", impressions: 340 },
  { keyword: "Loma Linda homes for sale", position: 14, change: "+7", impressions: 780 },
  { keyword: "real estate Yucaipa CA", position: 20, change: "+3", impressions: 450 },
];

export default function AdminAnalyticsPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl text-grove">Analytics & SEO</h1>
      <p className="mt-1 text-sm text-slate">
        Monitor your search performance and keyword rankings.
      </p>

      {/* SEO Overview */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="border-0 bg-white shadow-sm">
          <CardContent className="p-5">
            <Globe className="h-5 w-5 text-citrus" />
            <p className="mt-3 text-2xl font-bold text-charcoal">12,450</p>
            <p className="text-sm text-slate">Google Impressions (30d)</p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white shadow-sm">
          <CardContent className="p-5">
            <Search className="h-5 w-5 text-citrus" />
            <p className="mt-3 text-2xl font-bold text-charcoal">847</p>
            <p className="text-sm text-slate">Organic Clicks (30d)</p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white shadow-sm">
          <CardContent className="p-5">
            <TrendingUp className="h-5 w-5 text-citrus" />
            <p className="mt-3 text-2xl font-bold text-charcoal">14.2</p>
            <p className="text-sm text-slate">Avg. Position</p>
          </CardContent>
        </Card>
      </div>

      {/* Keyword Rankings */}
      <Card className="mt-8 border-0 bg-white shadow-sm">
        <CardContent className="p-5">
          <h2 className="flex items-center gap-2 font-heading text-lg text-grove">
            <BarChart3 className="h-5 w-5" /> Target Keyword Rankings
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase text-slate">
                  <th className="pb-3 pr-4">Keyword</th>
                  <th className="pb-3 pr-4">Position</th>
                  <th className="pb-3 pr-4">Change</th>
                  <th className="pb-3">Impressions</th>
                </tr>
              </thead>
              <tbody>
                {TARGET_KEYWORDS.map((kw) => (
                  <tr key={kw.keyword} className="border-b border-linen">
                    <td className="py-3 pr-4 font-medium text-charcoal">
                      {kw.keyword}
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-grove/10 text-sm font-bold text-grove">
                        {kw.position}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-green-600">{kw.change}</span>
                    </td>
                    <td className="py-3 text-slate">
                      {kw.impressions.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <p className="mt-6 rounded-lg bg-white p-4 text-center text-sm text-slate shadow-sm">
        Connect <strong>Google Search Console API</strong> to display live
        keyword data. Configure a service account and set{" "}
        <code className="rounded bg-linen px-1.5 py-0.5 text-xs">
          GOOGLE_SEARCH_CONSOLE_KEY
        </code>{" "}
        in your environment variables.
      </p>
    </div>
  );
}
