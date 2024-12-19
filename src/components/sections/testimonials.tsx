"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      "border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO at InnovateTech",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description: (
      <p>
        Partnering with <Highlight>#Tier4AI</Highlight> provided the strategic AI
        roadmap our leadership team needed.{" "}
        <Highlight>We’re making data-driven decisions faster than ever.</Highlight>
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director at NextGen Solutions",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        Working with <Highlight>Tier 4 Intelligence</Highlight> revolutionized our
        approach to market analysis.{" "}
        <Highlight>We’ve seen a 40% uptick in campaign performance.</Highlight> A
        must-have ally for any modern marketing team.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder & CEO at StartUp Grid",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        <Highlight>Tier 4 Advisors</Highlight> guided us through AI adoption, turning
        uncertainty into clarity.{" "}
        <Highlight>Our entire exec team is now aligned and confident.</Highlight>{" "}
        Crucial for early-stage startups seeking AI-driven growth.
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Manager at Digital Wave",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        <Highlight>#Tier4AI</Highlight> helped us integrate predictive analytics into
        our product roadmap.{" "}
        <Highlight>We’ve accelerated decision-making and reduced development cycles.</Highlight>{" "}
        Game-changing support.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Data Scientist at FinTech Innovations",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        With <Highlight>Tier 4 Intelligence</Highlight>, we’ve refined our financial
        models and improved forecasting accuracy.{" "}
        <Highlight>Now we consistently outpace competitors in market response.</Highlight>
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "VP of Operations at LogiChain Solutions",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        <Highlight>Tier 4 Advisors</Highlight> streamlined our logistics operations
        with targeted AI strategies.{" "}
        <Highlight>Operational efficiency and cost savings have soared.</Highlight>
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Head of R&D at EcoInnovate",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        Partnering with <Highlight>#Tier4AI</Highlight> informed our R&D directions.
        <Highlight>We’re now integrating sustainable AI solutions across the board.</Highlight>{" "}
        Fueling our mission for a greener future.
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "Chief Marketing Officer at Fashion Forward",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        <Highlight>Tier 4 Intelligence</Highlight> helped us harness AI to predict
        fashion trends.{" "}
        <Highlight>Our collections launch with unprecedented accuracy and appeal.</Highlight>{" "}
        Perfect synergy of creativity and data.
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Director of IT at HealthTech Solutions",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        <Highlight>Tier 4 Advisors</Highlight> brought clarity to our AI strategy in
        healthcare.{" "}
        <Highlight>Patient outcomes have improved, and operational bottlenecks are dissolving.</Highlight>{" "}
        A vital partner in our digital transformation.
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "CEO at EduTech Innovations",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        With <Highlight>#Tier4AI</Highlight>, we’ve implemented adaptive learning
        models, enhancing student engagement.{" "}
        <Highlight>Our educational platforms are more effective and inclusive.</Highlight>
      </p>
    ),
  },
  {
    name: "Jake Morrison",
    role: "CTO at SecureNet Tech",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
    description: (
      <p>
        <Highlight>Tier 4 Intelligence</Highlight> fortified our cybersecurity posture
        using advanced AI detection.{" "}
        <Highlight>We’re confidently outpacing emerging threats.</Highlight> Indispensable for digital security.
      </p>
    ),
  },
  {
    name: "Nadia Ali",
    role: "Product Manager at Creative Solutions",
    img: "https://randomuser.me/api/portraits/women/78.jpg",
    description: (
      <p>
        <Highlight>Tier 4 Advisors</Highlight> provided tailored AI insights that
        refined our design processes.{" "}
        <Highlight>Innovation and production cycles have never been smoother.</Highlight>
      </p>
    ),
  },
  {
    name: "Omar Farooq",
    role: "Founder at Startup Hub",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    description: (
      <p>
        Embracing <Highlight>#Tier4AI</Highlight> transformed how we approach funding
        and product-market fit.{" "}
        <Highlight>Data-driven decisions now guide our every step.</Highlight> Critical for early-stage scaling.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
