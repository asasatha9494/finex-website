import Navbar from "@/components/Navbar";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#eae7e0] text-[#1c1a17]">
      <Navbar />

      <section className="px-6 pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-3xl">
            <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
              FineX Blog
            </p>

            <h1 className="finex-heading mt-4 text-6xl leading-[0.95] md:text-8xl">
              Insights
              <br />
              <span className="text-[#ef7d24]">for better business.</span>
            </h1>

            <p className="finex-body mt-7 max-w-xl text-base leading-7 text-[#5c584f] md:text-lg">
              Practical insights on bookkeeping, accounting, financial
              management and running a stronger business.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <article className="border border-[#1c1a17] bg-white p-7">
              <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                Coming Soon
              </p>

              <h2 className="finex-heading mt-5 text-3xl">
                FineX insights are on the way.
              </h2>

              <p className="finex-body mt-4 text-sm leading-6 text-[#5c584f]">
                We are preparing practical articles covering bookkeeping,
                accounting and financial management for growing businesses.
              </p>
            </article>

          </div>

        </div>
      </section>
    </main>
  );
}