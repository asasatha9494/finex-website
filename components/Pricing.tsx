import { ArrowUpRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    number: "01",
    price: "$150–200",
    period: "/ month",
    description:
      "For businesses that need reliable day-to-day bookkeeping support.",
    features: [
      "Bookkeeping",
      "Up to ~150–200 transactions / month",
    ],
    featured: false,
  },
  {
    name: "Growth",
    number: "02",
    price: "$300–400",
    period: "/ month",
    description:
      "For growing businesses that need bookkeeping plus accounting support.",
    features: [
      "Bookkeeping + Accounting",
      "Closing support",
      "Accounts receivable management",
      "Accounts payable management",
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-[#d3cfc3] bg-[#eae7e0] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
            Pricing
          </p>

          <h2 className="finex-heading mt-4 text-5xl leading-[0.95] text-[#1c1a17] md:text-7xl">
            Straightforward
            <br />
            <span className="text-[#ef7d24]">pricing.</span>
          </h2>

          <p className="finex-body mt-6 max-w-xl text-base leading-7 text-[#5c584f] md:text-lg">
            Start with the level of support your business needs. As your
            requirements grow, your service can grow with you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative border p-7 md:p-9 ${
                plan.featured
                  ? "border-[#1c1a17] bg-[#1c1a17] text-[#eae7e0]"
                  : "border-[#1c1a17] bg-white text-[#1c1a17]"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className={`finex-mono text-[10px] tracking-[0.18em] ${
                      plan.featured
                        ? "text-[#ef7d24]"
                        : "text-[#ef7d24]"
                    }`}
                  >
                    PACKAGE {plan.number}
                  </p>

                  <h3 className="finex-heading mt-4 text-4xl md:text-5xl">
                    {plan.name}
                  </h3>
                </div>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                    plan.featured
                      ? "border-[#5c584f]"
                      : "border-[#d3cfc3]"
                  }`}
                >
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* Price */}
              <div className="mt-12">
                <div className="flex items-end gap-2">
                  <span className="finex-heading text-5xl md:text-6xl">
                    {plan.price}
                  </span>

                  <span
                    className={`finex-body mb-2 text-sm ${
                      plan.featured
                        ? "text-[#a9a49a]"
                        : "text-[#5c584f]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`finex-body mt-4 max-w-md text-sm leading-6 ${
                    plan.featured
                      ? "text-[#a9a49a]"
                      : "text-[#5c584f]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div
                className={`mt-8 border-t ${
                  plan.featured
                    ? "border-[#4a4741]"
                    : "border-[#d3cfc3]"
                }`}
              >
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-center gap-3 border-b py-4 ${
                      plan.featured
                        ? "border-[#4a4741]"
                        : "border-[#d3cfc3]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-[#ef7d24] text-white"
                          : "bg-[#eae7e0] text-[#1c1a17]"
                      }`}
                    >
                      <Check size={13} />
                    </span>

                    <span className="finex-body text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#health-check"
                className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-[var(--font-work-sans)] text-sm font-semibold transition-transform duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-[#ef7d24] text-white"
                    : "bg-[#1c1a17] text-white"
                }`}
              >
                Get Started
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>

        {/* Pricing note */}
        <div className="mt-6 border border-[#d3cfc3] px-6 py-5">
          <p className="finex-mono text-[10px] uppercase tracking-[0.16em] text-[#ef7d24]">
            Need Something Different?
          </p>

          <p className="finex-body mt-2 text-sm leading-6 text-[#5c584f]">
            Pricing can be discussed based on your transaction volume,
            accounting requirements and scope of work.
          </p>
        </div>

      </div>
    </section>
  );
}