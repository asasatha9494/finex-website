"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const checks = [
    "Bank Reconciliation",
    "Accounts Receivable",
    "Accounts Payable",
    "General Ledger",
    "Monthly Reporting",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#eae7e0] pt-32">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1200px] items-center px-6 pb-20 md:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="finex-mono mb-6 text-xs uppercase tracking-[0.22em] text-[#ef7d24]">
              Excellence · Trust · Impact
            </p>

            <h1 className="finex-heading max-w-3xl text-6xl leading-[0.9] text-[#1c1a17] sm:text-7xl lg:text-[7rem]">
              Your books.
              <br />
              <span className="text-[#ef7d24]">Under control.</span>
            </h1>

            <p className="finex-body mt-8 max-w-xl text-lg leading-8 text-[#5c584f] md:text-xl">
              Offshore bookkeeping and accounting built around accuracy,
              clarity and consistency.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#health-check"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#ef7d24] px-7 py-4 font-[var(--font-work-sans)] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Get a Free Books Health Check

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#services"
                className="flex items-center justify-center rounded-full border border-[#1c1a17] px-7 py-4 font-[var(--font-work-sans)] text-sm font-semibold text-[#1c1a17] transition-all duration-300 hover:bg-[#1c1a17] hover:text-white"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#eae7e0] bg-[#1c1a17]">
                  <ShieldCheck size={15} className="text-white" />
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#eae7e0] bg-[#ef7d24]">
                  <TrendingUp size={15} className="text-white" />
                </div>
              </div>

              <p className="finex-body text-sm text-[#5c584f]">
                Built for accuracy.
                <br />
                Designed for clarity.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE — BOOKS STATUS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Decorative circle */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#ef7d24]/30" />

            <div className="relative mx-auto max-w-[500px]">

              {/* Main card */}
              <div className="border border-[#1c1a17] bg-[#ffffff] p-6 shadow-[12px_12px_0px_#1c1a17] md:p-8">

                {/* Card header */}
                <div className="flex items-start justify-between border-b border-[#d3cfc3] pb-5">
                  <div>
                    <p className="finex-mono text-[10px] uppercase tracking-[0.18em] text-[#5c584f]">
                      FineX / Books Status
                    </p>

                    <h2 className="finex-heading mt-2 text-3xl text-[#1c1a17]">
                      Financial Control
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ef7d24]">
                    <Check size={21} className="text-white" />
                  </div>
                </div>

                {/* Status items */}
                <div className="py-3">
                  {checks.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.12,
                      }}
                      className="flex items-center justify-between border-b border-[#d3cfc3] py-4 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eae7e0]">
                          <Check size={13} className="text-[#1c1a17]" />
                        </span>

                        <span className="finex-body text-sm text-[#1c1a17]">
                          {item}
                        </span>
                      </div>

                      <span className="finex-mono text-[10px] uppercase tracking-wider text-[#5c584f]">
                        Verified
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom status */}
                <div className="mt-3 flex items-center justify-between bg-[#1c1a17] px-5 py-4">
                  <span className="finex-mono text-xs uppercase tracking-[0.16em] text-white">
                    Status
                  </span>

                  <span className="finex-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#ef7d24]">
                    Balanced
                  </span>
                </div>
              </div>

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -left-5 border border-[#d3cfc3] bg-[#eae7e0] px-5 py-4 shadow-lg"
              >
                <p className="finex-mono text-[9px] uppercase tracking-[0.16em] text-[#5c584f]">
                  Accuracy
                </p>

                <p className="finex-heading mt-1 text-2xl text-[#1c1a17]">
                  100%
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}