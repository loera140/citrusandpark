import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Mail, Phone } from "lucide-react";

const SAMPLE_INQUIRIES = [
  {
    id: 1,
    name: "Maria Garcia",
    email: "maria.g@email.com",
    phone: "(909) 555-0123",
    interest: "Buying",
    message: "We're interested in homes in the $500K-$600K range in Redlands. Looking for 3+ bedrooms with a yard. Can we schedule a showing?",
    date: "2026-04-08",
    status: "new" as const,
  },
  {
    id: 2,
    name: "James Thompson",
    email: "j.thompson@email.com",
    phone: "(909) 555-0456",
    interest: "Selling",
    message: "Thinking about selling our home on Brookside Ave. Would like a free valuation. When can we meet?",
    date: "2026-04-07",
    status: "read" as const,
  },
  {
    id: 3,
    name: "Lisa Chen",
    email: "lisa.chen@email.com",
    phone: "",
    interest: "Renting",
    message: "Looking for a 2-bedroom rental in Loma Linda near the medical center. Budget around $2000/month.",
    date: "2026-04-05",
    status: "responded" as const,
  },
];

const STATUS_STYLES = {
  new: "bg-citrus/10 text-citrus",
  read: "bg-grove/10 text-grove",
  responded: "bg-green-100 text-green-700",
  archived: "bg-gray-100 text-gray-500",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function AdminInquiriesPage() {
  return (
    <div>
      <h1 className="font-heading text-3xl text-grove">Inquiries</h1>
      <p className="mt-1 text-sm text-slate">
        Contact form submissions and lead inquiries.
      </p>

      <div className="mt-6 space-y-4">
        {SAMPLE_INQUIRIES.map((inquiry) => (
          <Card key={inquiry.id} className="border-0 bg-white shadow-sm">
            <CardContent className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium text-charcoal">
                      {inquiry.name}
                    </h3>
                    <Badge className={STATUS_STYLES[inquiry.status]}>
                      {inquiry.status}
                    </Badge>
                    <Badge variant="secondary" className="bg-linen text-grove">
                      {inquiry.interest}
                    </Badge>
                  </div>
                  <div className="mt-1 flex items-center gap-4 text-sm text-slate">
                    <span className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" /> {inquiry.email}
                    </span>
                    {inquiry.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5" /> {inquiry.phone}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {inquiry.message}
                  </p>
                </div>
                <p className="shrink-0 text-xs text-slate">
                  {formatDate(inquiry.date)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 rounded-lg bg-white p-4 text-center text-sm text-slate shadow-sm">
        Inquiries will be managed through your third-party contact form
        integration (Tawk.to, Typeform, or similar). This page will display
        data from that integration.
      </p>
    </div>
  );
}
