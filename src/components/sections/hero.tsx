"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/section";
import { Icons } from "@/components/icons";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";

const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="mx-auto max-w-[800px] text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Accelerate Your Business into the Next Dimension of Automation
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
        Tier4AI unifies your data, automates your workflows, and empowers your leadership team—without the busywork.
      </p>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
        <Button size="lg" className="w-full sm:w-auto rounded-full" asChild>
          <Link href="/signup">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
              Watch Demo (90s)
              <PlayCircle className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[825px]">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                title="Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <Section id="hero" className="overflow-hidden">
      <div className="relative flex w-full flex-col items-center justify-start pt-20 sm:pt-24 md:pt-32">
        {/* DotPattern Background */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <DotPattern
            className="opacity-10 brightness-75 scale-90 sm:scale-100 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          />
        </div>
        {/* Hero Content with higher z-index */}
        <div className="relative z-10">
          <HeroTitles />
        </div>
      </div>
    </Section>
  );
}
