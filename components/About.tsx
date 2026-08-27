import { ArrowUpRight, Check } from "lucide-react";

const principles = [
  "Accurate and reliable bookkeeping",
  "Clear monthly reporting",
  "Straightforward communication",
  "Cloud accounting expertise",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[#d3cfc3] bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">

        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">

          {/* Left */}
          <div>
            <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
              About FineX
            </p>

            <h2 className="finex-heading mt-4 max-w-2xl text-5xl leading-[0.95] text-[#1c1a17] md:text-7xl">
              A small team,
              <br />
              <span className="text-[#ef7d24]">
                built to do things properly.
              </span>
            </h2>

            <p className="finex-body mt-7 max-w-xl text-base leading-7 text-[#5c584f] md:text-lg">
              FineX Associates is a Sri Lanka-based offshore bookkeeping and
              accounting partner serving businesses worldwide.
            </p>

            <p className="finex-body mt-5 max-w-xl text-sm leading-7 text-[#5c584f]">
              We believe bookkeeping should not be an afterthought. It should
              give business owners accurate records, clear information and the
              confidence to make better decisions.
            </p>

            <a
              href="#health-check"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1c1a17] px-6 py-3.5 font-[var(--font-work-sans)] text-sm font-semibold !text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Talk to FineX
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Right */}
          <div>

            {/* Company snapshot */}
            <div className="border border-[#1c1a17] bg-[#eae7e0] p-7 md:p-8">

              <div className="flex items-center justify-between border-b border-[#d3cfc3] pb-5">
                <p className="finex-mono text-[10px] uppercase tracking-[0.18em] text-[#ef7d24]">
                  FineX / Snapshot
                </p>

                <span className="finex-mono text-[10px] text-[#5c584f]">
                  2026
                </span>
              </div>

              <div className="mt-2">
                <div className="flex items-center justify-between border-b border-[#d3cfc3] py-5">
                  <span className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#5c584f]">
                    Founded
                  </span>

                  <span className="finex-body text-sm font-medium text-[#1c1a17]">
                    Sri Lanka
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#d3cfc3] py-5">
                  <span className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#5c584f]">
                    Founders
                  </span>

                  <span className="finex-body text-sm font-medium text-[#1c1a17]">
                    2 Partners
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#d3cfc3] py-5">
                  <span className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#5c584f]">
                    Reach
                  </span>

                  <span className="finex-body text-sm font-medium text-[#1c1a17]">
                    Worldwide
                  </span>
                </div>

                <div className="flex items-center justify-between py-5">
                  <span className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#5c584f]">
                    Focus
                  </span>

                  <span className="finex-body text-sm font-medium text-[#1c1a17]">
                    Bookkeeping & Accounting
                  </span>
                </div>
              </div>
            </div>

            {/* Principles */}
            <div className="mt-6 border border-[#d3cfc3] p-7">
              <p className="finex-mono text-[10px] uppercase tracking-[0.18em] text-[#ef7d24]">
                What We Stand For
              </p>

              <div className="mt-4">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-center gap-3 border-b border-[#d3cfc3] py-3 last:border-b-0"
                  >
                    <Check size={15} />

                    <span className="finex-body text-sm text-[#1c1a17]">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}