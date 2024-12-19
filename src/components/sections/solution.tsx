"use client";

import Section from "@/components/section";

export default function Component() {
  return (
    <Section
      title="Solution"
      subtitle="Empower Your Leadership with AI Mastery"
      description="A one-size-fits-all AI toolset won't unlock true transformation. Our Executive AI Masterclass is designed to equip your C-level leaders with the strategic insight and operational frameworks they need to confidently guide your organization into the AI era."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">The Solution</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Executive AI Masterclass
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Our intensive 2–3 day seminars transform your leadership team into AI-ready decision-makers. We bridge the gap between theoretical AI potential and practical, board-level action:
        </p>
        <ul className="mt-6 text-lg leading-8 text-muted-foreground list-disc text-left pl-6">
          <li>Align AI opportunities with core business goals</li>
          <li>Develop comprehensive AI roadmaps for long-term ROI</li>
          <li>Master risk, ethics, and compliance management in AI deployment</li>
          <li>Equip executives to drive cultural change and organizational readiness</li>
        </ul>
      </div>
    </Section>
  );
}
