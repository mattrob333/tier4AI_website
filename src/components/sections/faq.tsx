import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Tier4AI?",
    answer:
      "Tier4AI is a premium AI advisory and training service designed to empower executive teams. Through our seminars and strategic sessions, we help leaders confidently implement AI strategies and drive transformative growth across their organizations. Learn more at Tier4Intelligence.com.",
  },
  {
    question: "How does Tier4AI differ from other AI consultancies?",
    answer:
      "Unlike generic providers, Tier4AI focuses on top-down leadership alignment, strategic AI roadmapping, and customized frameworks. Our approach ensures that C-level executives and managers can seamlessly integrate AI initiatives into their core business strategies. Explore t4i.ai for more details.",
  },
  {
    question: "What types of engagements does Tier4AI offer?",
    answer:
      "Our flagship offering is the Executive AI Masterclass—a 2–3 day intensive seminar for your leadership team. We also provide ongoing advisory services, custom training modules, and one-off builds tailored to your unique enterprise requirements.",
  },
  {
    question: "Is Tier4AI suitable for enterprises at different maturity levels?",
    answer:
      "Yes. Whether you’re just starting to explore AI opportunities or looking to refine complex implementations, Tier4AI provides the insights, frameworks, and best practices needed at every stage of your AI journey.",
  },
  {
    question: "How do I get in touch with Tier4AI?",
    answer:
      "For inquiries, consultations, or custom requests, email us at support@t4i.ai. Our team will be happy to discuss your needs and guide you on the path to AI-driven success.",
  },
];

export default function FAQ() {
  return (
    <Section title="FAQ" subtitle="Your Questions, Our Answers">
      <div className="mx-auto my-12 md:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={faq.question}
              className="w-full overflow-hidden rounded-lg border"
            >
              <AccordionTrigger className="px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
        Still have questions? Email us at{" "}
        <a href="mailto:support@t4i.ai" className="underline">
          support@t4i.ai
        </a>
        .
      </h4>
    </Section>
  );
}
