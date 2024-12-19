import Section from "@/components/section";

export default function Component() {
  return (
    <Section title="Features" subtitle="User Flows and Navigational Structures">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Comprehensive Services</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Complete AI Transformation Suite
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-primary">
              Automated Workflows
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">Streamline operations with intelligent process automation and workflow optimization.</p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-primary">
              Content Generation
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">Create high-quality, AI-driven content that maintains your brand voice and standards.</p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-primary">
              GenAI Strategy
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">Develop and implement comprehensive generative AI strategies aligned with business goals.</p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-primary">
              Tool Selection
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">Expert guidance in selecting and implementing the right AI tools for your needs.</p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-primary">
              Custom GPT Bots
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">Build specialized chatbots and AI assistants tailored to your business processes.</p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-primary">
              Ultimate Generalist Program
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
              <p className="flex-auto">Transform your team into AI-powered generalists ready for the future of work.</p>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
