import {
  ArrowRight,
  ClipboardCheck,
  FileCheck,
  MessageSquare,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Talk to us",
    description:
      "Tell us about your business, your current bookkeeping setup and where you need support.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Understand & organise",
    description:
      "We understand your requirements and establish a clear workflow around your bookkeeping and accounting needs.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Deliver consistently",
    description:
      "Your books are maintained with a focus on accuracy, consistency and clear communication.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-[#d3cfc3] bg-[#eae7e0] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
              How It Works
            </p>

            <h2 className="finex-heading mt-4 max-w-2xl text-5xl leading-[0.95] text-[#1c1a17] md:text-7xl">
              Simple process.
              <br />
              <span className="text-[#ef7d24]">Clear delivery.</span>
            </h2>
          </div>

          <p className="finex-body max-w-md text-sm leading-7 text-[#5c584f] md:pb-1 md:text-base">
            A straightforward process keeps expectations clear from the first
            conversation through ongoing monthly support.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 border-t border-[#1c1a17]">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group grid gap-6 border-b border-[#d3cfc3] py-8 md:grid-cols-[100px_70px_1fr_40px] md:items-center"
              >
                {/* Number */}
                <p className="finex-mono text-xs tracking-[0.18em] text-[#ef7d24]">
                  STEP {step.number}
                </p>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1a17] transition-all duration-300 group-hover:bg-[#ef7d24] group-hover:border-[#ef7d24]">
                  <Icon
                    size={18}
                    className="transition-colors group-hover:text-white"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="finex-heading text-3xl text-[#1c1a17] md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="finex-body mt-2 max-w-2xl text-sm leading-6 text-[#5c584f]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex md:justify-end">
                  <ArrowRight
                    size={20}
                    className="text-[#5c584f] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#ef7d24]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 border border-[#1c1a17] bg-[#1c1a17] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="finex-mono text-[10px] uppercase tracking-[0.18em] text-[#ef7d24]">
              The FineX Approach
            </p>

            <p className="finex-heading mt-2 text-2xl text-[#eae7e0] md:text-3xl">
              Accurate books. Clear communication. Consistent support.
            </p>
          </div>

          <a
            href="#health-check"
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ef7d24] px-6 py-3 font-[var(--font-work-sans)] text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}