"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

interface MortgageCalculatorProps {
  defaultPrice?: number;
}

export function MortgageCalculator({ defaultPrice = 500000 }: MortgageCalculatorProps) {
  const [homePrice, setHomePrice] = useState(defaultPrice);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const monthly = useMemo(() => {
    const downPayment = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) return loanAmount / numPayments;

    const payment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return payment;
  }, [homePrice, downPaymentPct, interestRate, loanTerm]);

  const downPaymentAmount = homePrice * (downPaymentPct / 100);
  const loanAmount = homePrice - downPaymentAmount;
  const taxesInsurance = homePrice * 0.015 / 12; // rough estimate

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <Card className="border-0 bg-cream">
      <CardContent className="p-6">
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-grove" />
          <h3 className="font-heading text-xl text-grove">Mortgage Calculator</h3>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="calc-price">Home Price</Label>
            <Input
              id="calc-price"
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="calc-down">Down Payment (%)</Label>
            <Input
              id="calc-down"
              type="number"
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              min={0}
              max={100}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="calc-rate">Interest Rate (%)</Label>
            <Input
              id="calc-rate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step={0.1}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="calc-term">Loan Term (years)</Label>
            <select
              id="calc-term"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value={15}>15 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-grove p-5 text-white">
          <p className="text-sm text-white/60">Estimated Monthly Payment</p>
          <p className="mt-1 text-3xl font-bold">
            {formatCurrency(monthly + taxesInsurance)}
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/70">Principal & Interest</span>
              <span>{formatCurrency(monthly)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Taxes & Insurance (est.)</span>
              <span>{formatCurrency(taxesInsurance)}</span>
            </div>
            <div className="mt-2 border-t border-white/20 pt-2">
              <div className="flex justify-between">
                <span className="text-white/70">Loan Amount</span>
                <span>{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Down Payment</span>
                <span>{formatCurrency(downPaymentAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
