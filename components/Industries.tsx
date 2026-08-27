import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    number: "01",
    name: "E-Commerce",
    text: "Stay on top of transactions, billing and financial records as your online business grows.",
  },
  {
    number: "02",
    name: "Real Estate",
    text: "Keep property-related financial records organized, current and easy to review.",
  },
  {
    number: "03",
    name: "Trading & Retail",
    text: "Maintain accurate books across sales, purchases and day-to-day business activity.",
  },
  {
    number: "04",
    name: "Professional Services",
    text: "Keep financial administration clear while you focus on delivering your expertise.",
  },
  {
    number: "05",
    name: "Construction & Contracting",
    text: "Bring structure and consistency to the financial side of project-based work.",
  },
  {
    number: "06",
    name: "Food & Beverage",
    text: "Keep your books organized across the fast-moving demands of your business.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-[#d3cfc3] bg-[#1c1a17] py-24 text-[#eae7e0] md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
              Industries We Serve
            </p>

            <h2 className="finex-heading mt-4 max-w-2xl text-5xl leading-[0.95] md:text-7xl">
              Built for businesses
              <br />
              <span className="text-[#ef7d24]">that are growing.</span>
            </h2>
          </div>

          <p className="finex-body max-w-sm text-sm leading-6 text-[#a9a49a] md:pb-2">
            FineX works with businesses across different sectors, providing
            consistent bookkeeping and accounting support.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="mt-16 grid border-l border-t border-[#4a4741] md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group min-h-[260px] border-b border-r border-[#4a4741] p-7 transition-colors duration-300 hover:bg-[#27241f] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="finex-mono text-[10px] tracking-[0.16em] text-[#ef7d24]">
                  {industry.number}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4a4741] transition-all duration-300 group-hover:border-[#ef7d24] group-hover:bg-[#ef7d24]">
                  <ArrowUpRight
                    size={16}
                    className="transition-colors group-hover:text-white"
                  />
                </div>
              </div>

              <div className="mt-16">
                <h3 className="finex-heading text-3xl md:text-4xl">
                  {industry.name}
                </h3>

                <p className="finex-body mt-4 max-w-sm text-sm leading-6 text-[#a9a49a]">
                  {industry.text}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}