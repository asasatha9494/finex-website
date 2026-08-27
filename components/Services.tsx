import { ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Bookkeeping",
    description:
      "Keep your day-to-day financial records accurate, organized and up to date.",
    items: [
      "General bookkeeping & bank reconciliation",
      "Invoicing, billing & credit processing",
      "Bulk billing",
      "Accounts receivable & payable",
    ],
  },
  {
    number: "02",
    title: "Accounting",
    description:
      "Turn clean books into reliable financial information you can actually use.",
    items: [
      "Month-end entry & processing",
      "Recurring & month-end journal entries",
      "General ledger & balance sheet reconciliation",
      "Monthly reporting",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-[#d3cfc3] bg-[#eae7e0] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
            What We Do
          </p>

          <h2 className="finex-heading mt-4 text-5xl leading-[0.95] text-[#1c1a17] md:text-7xl">
            Two services,
            <br />
            <span className="text-[#ef7d24]">done properly.</span>
          </h2>

          <p className="finex-body mt-6 max-w-xl text-base leading-7 text-[#5c584f] md:text-lg">
            No sprawling menu. Just clean bookkeeping and accurate accounting,
            delivered consistently every month.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative border border-[#1c1a17] bg-white p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <p className="finex-mono text-xs tracking-[0.18em] text-[#ef7d24]">
                  SERVICE {service.number}
                </p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d3cfc3] transition-colors duration-300 group-hover:border-[#ef7d24] group-hover:bg-[#ef7d24]">
                  <ArrowUpRight
                    size={17}
                    className="transition-colors duration-300 group-hover:text-white"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="finex-heading mt-10 text-4xl text-[#1c1a17] md:text-5xl">
                {service.title}
              </h3>

              <p className="finex-body mt-4 max-w-md text-sm leading-6 text-[#5c584f] md:text-base">
                {service.description}
              </p>

              {/* Service items */}
              <div className="mt-8 border-t border-[#d3cfc3]">
                {service.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-[#d3cfc3] py-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eae7e0]">
                      <Check size={13} />
                    </span>

                    <span className="finex-body text-sm text-[#1c1a17]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-6 border border-[#d3cfc3] bg-[#eae7e0] px-6 py-5 md:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="finex-mono text-[10px] uppercase tracking-[0.16em] text-[#ef7d24]">
              Also Available
            </p>

            <p className="finex-body text-sm text-[#5c584f] md:text-right">
              Payroll management & IAS · E-commerce bookkeeping · Real estate
              bookkeeping
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}