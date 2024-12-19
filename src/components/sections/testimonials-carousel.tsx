"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

const testimonials = [
  {
    quote:
      "#Tier4AI gave our executive team the strategic roadmap we needed. Their 2-day masterclass transformed how we plan and invest in AI.",
    name: "Avery Johnson",
    role: "Chief Data Officer",
    companyIndex: 0,
  },
  {
    quote:
      "Partnering with Tier 4 Intelligence unlocked immediate efficiencies. Our C-suite finally understands where to deploy AI for maximum impact.",
    name: "Jordan Lee",
    role: "VP of Strategy",
    companyIndex: 1,
  },
  {
    quote:
      "We arrived at Tier 4 Advisors unsure of our AI direction. Their executive sessions aligned our leadership and clarified our long-term vision.",
    name: "Morgan Smith",
    role: "COO",
    companyIndex: 2,
  },
  {
    quote:
      "#Tier4AI’s training turned a hesitant board into AI champions. We’re rolling out initiatives confidently and seeing measurable results.",
    name: "Taylor Nguyen",
    role: "CFO",
    companyIndex: 3,
  },
  {
    quote:
      "Our leadership team struggled with AI adoption until Tier 4 Intelligence stepped in. Their guidance made complex concepts simple and actionable.",
    name: "Riley Chen",
    role: "Chief Innovation Officer",
    companyIndex: 4,
  },
  {
    quote:
      "Tier 4 Advisors showed us how to integrate AI seamlessly. From risk management to scaling up, we gained critical insights in just 3 days.",
    name: "Casey Brown",
    role: "Director of Operations",
    companyIndex: 5,
  },
  {
    quote:
      "Before working with #Tier4AI, we were overwhelmed by AI buzzwords. Now we have a concrete roadmap and clear KPIs. Truly transformative.",
    name: "Alex Martinez",
    role: "Chief Technology Officer",
    companyIndex: 6,
  },
];

export default function Component() {
  return (
    <Section
      title="Testimonial Highlight"
      subtitle="What our executive clients are saying"
    >
      <Carousel>
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <BlurFade delay={0.25} inView>
                      <h4 className="text-1xl font-semibold max-w-lg mx-auto px-10">
                        {testimonial.quote}
                      </h4>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                      <div className="mt-8">
                        <Image
                          width={0}
                          height={40}
                          src={`https://cdn.magicui.design/companies/${
                            companies[testimonial.companyIndex % companies.length]
                          }.svg`}
                          alt={`${companies[testimonial.companyIndex % companies.length]} Logo`}
                          className="mx-auto w-auto h-[40px] grayscale opacity-30"
                        />
                      </div>
                    </BlurFade>
                    <BlurFade delay={0.25 * 3} inView>
                      <h4 className="text-1xl font-semibold my-2">
                        {testimonial.name}
                      </h4>
                    </BlurFade>
                    <BlurFade delay={0.25 * 4} inView>
                      <div className="mb-3">
                        <span className="text-sm text-themeDarkGray">
                          {testimonial.role}
                        </span>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}
