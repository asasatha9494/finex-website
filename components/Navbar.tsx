"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-[1200px] items-center justify-between rounded-full border border-[#d3cfc3] bg-[#eae7e0]/95 px-5 py-3 backdrop-blur-md md:px-6">

        {/* FineX Logo */}
        <a
          href="/"
          className="font-[var(--font-cormorant)] text-2xl font-semibold tracking-[-0.03em] text-[#1c1a17]"
        >
          FineX<span className="text-[#ef7d24]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-[var(--font-work-sans)] text-sm font-medium text-[#5c584f] transition-colors duration-200 hover:text-[#1c1a17]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#health-check"
          className="hidden items-center gap-2 rounded-full bg-[#ef7d24] px-5 py-2.5 font-[var(--font-work-sans)] text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 md:flex"
        >
          Books Health Check
          <ArrowUpRight size={15} strokeWidth={2} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d3cfc3] text-[#1c1a17] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-4 mt-2 rounded-3xl border border-[#d3cfc3] bg-[#eae7e0] p-5 shadow-lg md:hidden">
          <div className="flex flex-col">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#d3cfc3] py-4 font-[var(--font-work-sans)] text-sm font-medium text-[#1c1a17]"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#health-check"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#ef7d24] px-5 py-3 font-[var(--font-work-sans)] text-sm font-semibold text-white"
            >
              Books Health Check
              <ArrowUpRight size={15} />
            </a>

          </div>
        </div>
      )}
    </header>
  );
}