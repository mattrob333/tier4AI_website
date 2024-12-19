import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "No Cohesive AI Vision",
    description:
      "C-level teams struggle to define a unified AI strategy, leaving initiatives scattered and opportunities unrealized.",
    icon: Brain,
  },
  {
    title: "Fragmented Workflows & Data Silos",
    description:
      "Without a clear roadmap, enterprises grapple with disjointed processes and siloed data—stalling innovation and slowing decision-making.",
    icon: Zap,
  },
  {
    title: "Leadership Hesitation & Risk",
    description:
      "Uncertainty around ROI, compliance, and cultural resistance causes executive hesitation, hindering confident AI adoption.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Where Enterprises Fall Short in AI Adoption"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">The Challenge</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Enterprise AI Strategy: A Critical Missing Piece
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Today’s enterprises face unprecedented hurdles in leveraging AI effectively:
        </p>
        <ul className="mt-6 text-lg leading-8 text-muted-foreground list-disc text-left pl-6">
          <li>Lack of an enterprise-wide AI vision</li>
          <li>Complex, siloed workflows blocking seamless execution</li>
          <li>No clear, actionable AI roadmap to guide investment</li>
          <li>Leadership uncertainty, risking missed opportunities and slow adoption</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
