"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with ConvertKit API
    setSubmitted(true);
  };

  return (
    <section className="bg-citrus py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl text-white sm:text-4xl">
          Stay in the Loop
        </h2>
        <p className="mt-3 text-white/80">
          Get the latest Redlands market updates, new listings, and real estate
          tips delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-white">
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-medium">
              Thanks for subscribing!
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 border-white/20 bg-white/20 text-white placeholder:text-white/60 focus:border-white focus:ring-white sm:w-80"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 bg-grove hover:bg-grove-light"
            >
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/50">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
