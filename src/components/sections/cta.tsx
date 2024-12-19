import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      // Remove the title and subtitle props here since we're defining them directly in the content
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Elevate Your Organization's AI Journey?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Take the first step towards transforming your enterprise with AI. Our team is ready
          to help you create a customized roadmap for success.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="#"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>
    </Section>
  );
}
