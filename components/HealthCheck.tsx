"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

export default function HealthCheck() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/health-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="health-check"
      className="bg-[#1c1a17] py-24 text-[#eae7e0] md:py-32"
    >
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left */}
        <div>
          <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
            Books Health Check
          </p>

          <h2 className="finex-heading mt-4 text-5xl leading-[0.95] md:text-7xl">
            Let&apos;s get your
            <br />
            <span className="text-[#ef7d24]">books in order.</span>
          </h2>

          <p className="finex-body mt-7 max-w-md text-base leading-7 text-[#a9a49a]">
            Tell us a little about your business and what you need help with.
            We&apos;ll use this information to understand your requirements.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "Bookkeeping & accounting support",
              "Clear and straightforward communication",
              "Flexible support based on your needs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ef7d24] text-white">
                  <Check size={14} />
                </span>

                <span className="finex-body text-sm text-[#eae7e0]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#eae7e0] p-6 text-[#1c1a17] md:p-9">

          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ef7d24] text-white">
                <Check size={24} />
              </div>

              <h3 className="finex-heading mt-6 text-4xl">
                Request received.
              </h3>

              <p className="finex-body mt-4 max-w-md text-sm leading-6 text-[#5c584f]">
                Thank you for contacting FineX. We&apos;ll review your information
                and get back to you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="finex-mono text-[10px] uppercase tracking-[0.15em]">
                    Full Name
                  </label>

                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none placeholder:text-[#8b877f] focus:border-[#ef7d24]"
                  />
                </div>

                <div>
                  <label className="finex-mono text-[10px] uppercase tracking-[0.15em]">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none placeholder:text-[#8b877f] focus:border-[#ef7d24]"
                  />
                </div>

              </div>

              <div>
                <label className="finex-mono text-[10px] uppercase tracking-[0.15em]">
                  Company
                </label>

                <input
                  required
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none placeholder:text-[#8b877f] focus:border-[#ef7d24]"
                />
              </div>

              <div>
                <label className="finex-mono text-[10px] uppercase tracking-[0.15em]">
                  What do you need help with?
                </label>

                <select
                  required
                  name="service"
                  defaultValue=""
                  className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none focus:border-[#ef7d24]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="bookkeeping">
                    Bookkeeping
                  </option>

                  <option value="accounting">
                    Accounting
                  </option>

                  <option value="both">
                    Bookkeeping & Accounting
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="finex-mono text-[10px] uppercase tracking-[0.15em]">
                  Tell us more
                </label>

                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your current situation..."
                  className="mt-2 w-full resize-none border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none placeholder:text-[#8b877f] focus:border-[#ef7d24]"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ef7d24] px-6 py-4 font-[var(--font-work-sans)] text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request Books Health Check"}

                {!loading && <ArrowUpRight size={17} />}
              </button>

              <p className="finex-body text-center text-xs text-[#5c584f]">
                Your information will be used to respond to your enquiry.
              </p>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}