"use client";

import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PricingSection() {
  // State for toggling plans if needed in future expansions.
  const [isMonthly] = useState(true);

  return (
    <Section
      // Use a single main title and subtitle to avoid repetition
      title="Pricing"
      subtitle="Invest in Your Leadership's Readiness"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Elevate Your Executive Team’s Potential with our intensive 2–3 day Executive AI Masterclass.
          We provide clarity, confidence, and a strategic roadmap for scaling AI initiatives across your enterprise.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-neutral-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight">
            Executive AI Masterclass
          </h3>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Tailored to your enterprise’s unique challenges, our seminar equips
            your executive team to harness AI’s potential. From strategic planning
            to ethical oversight, we cover the full spectrum of AI-driven leadership.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-100 dark:bg-neutral-800"></div>
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2"
          >
            <li className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" />
              AI Vision & Strategic Alignment
            </li>
            <li className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" />
              Leadership Training for the AI Era
            </li>
            <li className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" />
              Risk & Compliance Management
            </li>
            <li className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" />
              Actionable Implementation Roadmap
            </li>
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 dark:bg-neutral-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 dark:ring-neutral-700 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-foreground dark:text-foreground">
                Starting at
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground dark:text-foreground">
                  $25K
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  USD
                </span>
              </p>
              <Link
                href="#"
                className={cn(
                  "mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                )}
              >
                Schedule Consultation
              </Link>
              <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-neutral-400">
                Looking for more? Custom enterprise solutions and extended engagements
                are available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
