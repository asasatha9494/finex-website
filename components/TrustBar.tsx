import {
  Check,
  Cloud,
  LockKeyhole,
  Target,
} from "lucide-react";

const trustItems = [
  {
    icon: Check,
    label: "METICULOUS",
    text: "Accuracy-first delivery",
  },
  {
    icon: Cloud,
    label: "CLOUD NATIVE",
    text: "Built around modern accounting",
  },
  {
    icon: LockKeyhole,
    label: "CONFIDENTIAL",
    text: "Your financial data stays protected",
  },
  {
    icon: Target,
    label: "CONSISTENT",
    text: "Reliable ongoing support",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[#d3cfc3] bg-[#eae7e0]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`flex items-center gap-4 px-6 py-7 ${
                index !== trustItems.length - 1
                  ? "border-b border-[#d3cfc3] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1c1a17]">
                <Icon size={17} strokeWidth={1.7} />
              </div>

              <div>
                <p className="finex-mono text-[9px] tracking-[0.16em] text-[#ef7d24]">
                  {item.label}
                </p>

                <p className="finex-body mt-1 text-xs text-[#5c584f]">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}