"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What bookkeeping services does FineX provide?",
    answer:
      "FineX provides general bookkeeping, bank reconciliation, invoicing and billing, bulk billing, accounts receivable and accounts payable support.",
  },
  {
    question: "Do you also provide accounting services?",
    answer:
      "Yes. FineX offers month-end processing, recurring and month-end journal entries, general ledger and balance sheet reconciliation, and monthly reporting.",
  },
  {
    question: "Who can work with FineX?",
    answer:
      "FineX is positioned as an offshore bookkeeping and accounting partner for businesses worldwide, across different industries.",
  },
  {
    question: "How does the process work?",
    answer:
      "We start by understanding your business and bookkeeping requirements, establish a clear workflow, and then provide ongoing bookkeeping and accounting support.",
  },
  {
    question: "How much does FineX cost?",
    answer:
      "Current packages start at $150–200 per month for Starter and $300–400 per month for Growth. Final pricing depends on the scope and requirements of the engagement.",
  },
  {
    question: "Can I request support beyond the standard packages?",
    answer:
      "Yes. Additional requirements can be discussed based on transaction volume, accounting needs and the scope of work.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-b border-[#d3cfc3] bg-[#eae7e0] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-6 md:px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
            Frequently Asked Questions
          </p>

          <h2 className="finex-heading mt-4 text-5xl leading-[0.95] text-[#1c1a17] md:text-7xl">
            Questions?
            <br />
            <span className="text-[#ef7d24]">We&apos;ve got answers.</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="mt-16 border-t border-[#1c1a17]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#d3cfc3]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="finex-heading text-xl text-[#1c1a17] md:text-2xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1c1a17] transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#ef7d24] text-white border-[#ef7d24]"
                        : ""
                    }`}
                  >
                    <Plus size={17} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="finex-body max-w-3xl pb-6 pr-14 text-sm leading-7 text-[#5c584f] md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}