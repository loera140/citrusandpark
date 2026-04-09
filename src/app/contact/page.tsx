"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/_lib/constants";
import { PageHero } from "@/_components/shared/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Wire up to API route / Resend
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <PageHero
        title="Get in Touch"
        description="Ready to start your real estate journey? We'd love to hear from you. Reach out anytime — we're here to help."
      />

      {/* Content */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-grove">
                Contact Information
              </h2>
              <p className="mt-2 text-slate">
                Visit our office, give us a call, or send us a message. We
                respond to all inquiries within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-grove/10">
                    <MapPin className="h-5 w-5 text-grove" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Office Address</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate hover:text-citrus"
                    >
                      {BUSINESS_INFO.address.full}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-grove/10">
                    <Phone className="h-5 w-5 text-grove" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="text-sm text-slate hover:text-citrus"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-grove/10">
                    <Mail className="h-5 w-5 text-grove" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm text-slate hover:text-citrus"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-grove/10">
                    <Clock className="h-5 w-5 text-grove" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Office Hours</p>
                    <div className="text-sm text-slate">
                      <p>Mon – Fri: {BUSINESS_INFO.hours.weekdays}</p>
                      <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                      <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl bg-linen">
                <div className="flex h-full items-center justify-center text-grove/30">
                  <p className="text-sm">Google Map Embed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-0 bg-white shadow-md">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="font-heading text-2xl text-grove">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-sm text-slate">
                    Fill out the form below and we&apos;ll get back to you
                    shortly.
                  </p>

                  {submitted ? (
                    <div className="mt-8 flex flex-col items-center gap-4 py-12 text-center">
                      <CheckCircle className="h-16 w-16 text-grove" />
                      <h3 className="font-heading text-2xl text-grove">
                        Message Sent!
                      </h3>
                      <p className="max-w-sm text-slate">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                        className="mt-4 border-grove text-grove hover:bg-grove hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            className="mt-1.5"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            className="mt-1.5"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1.5"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="mt-1.5"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="interest">I&apos;m Interested In</Label>
                        <select
                          id="interest"
                          name="interest"
                          className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select an option...</option>
                          <option value="buying">Buying a Home</option>
                          <option value="selling">Selling a Home</option>
                          <option value="renting">Renting</option>
                          <option value="valuation">
                            Free Home Valuation
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell us how we can help..."
                          className="mt-1.5"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-citrus hover:bg-citrus-dark"
                        disabled={loading}
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
