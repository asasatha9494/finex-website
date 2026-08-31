import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import PortalLogout from "@/components/PortalLogout";
import { ArrowUpRight, CheckCircle2, Clock3, FileText } from "lucide-react";

export default async function PortalDashboard() {
    const session = await auth();

    if (!session?.user) {
        redirect("/portal/login");
    }

    return (
        <main className="min-h-screen bg-[#eae7e0] px-6 py-12 text-[#1c1a17] md:px-10 md:py-16">
            <div className="mx-auto max-w-[1200px]">

                {/* Header */}
                <div className="flex flex-col justify-between gap-6 border-b border-[#bdb8ad] pb-8 md:flex-row md:items-end">
                    <div>
                        <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
                            FineX Client Portal
                        </p>

                        <h1 className="finex-heading mt-4 text-5xl md:text-7xl">
                            Welcome back.
                        </h1>

                        <p className="finex-body mt-4 text-sm leading-6 text-[#5c584f]">
                            Track your services, progress and important updates in one place.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <PortalLogout />


                        <Link
                            href="/"
                            className="flex w-fit items-center gap-2 rounded-full bg-[#1c1a17] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                        >
                            Back to FineX
                            <ArrowUpRight size={15} />
                        </Link>

                    </div>

                </div>

                {/* Overview */}
                <div className="mt-10 grid gap-5 md:grid-cols-3">

                    <div className="border border-[#bdb8ad] bg-white p-6">
                        <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                            Current Service
                        </p>

                        <h2 className="finex-heading mt-4 text-3xl">
                            Bookkeeping
                        </h2>

                        <p className="finex-body mt-2 text-sm text-[#5c584f]">
                            Monthly support
                        </p>
                    </div>

                    <div className="border border-[#bdb8ad] bg-white p-6">
                        <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                            Status
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                            <Clock3 size={20} />
                            <h2 className="finex-heading text-3xl">
                                In Progress
                            </h2>
                        </div>

                        <p className="finex-body mt-2 text-sm text-[#5c584f]">
                            Your work is currently being handled by FineX.
                        </p>
                    </div>

                    <div className="border border-[#bdb8ad] bg-white p-6">
                        <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                            Account
                        </p>

                        <h2 className="finex-heading mt-4 text-3xl">
                            Active
                        </h2>

                        <p className="finex-body mt-2 text-sm text-[#5c584f]">
                            Client account
                        </p>
                    </div>

                </div>

                {/* Progress */}
                <section className="mt-10 border border-[#bdb8ad] bg-white p-7 md:p-9">

                    <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                        Service Progress
                    </p>

                    <h2 className="finex-heading mt-4 text-4xl">
                        Your bookkeeping journey.
                    </h2>

                    <div className="mt-8 space-y-5">

                        <div className="flex items-center gap-4">
                            <CheckCircle2
                                size={22}
                                className="shrink-0 text-[#ef7d24]"
                            />

                            <div>
                                <p className="font-semibold">
                                    Initial consultation
                                </p>

                                <p className="finex-body text-sm text-[#5c584f]">
                                    Completed
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2
                                size={22}
                                className="shrink-0 text-[#ef7d24]"
                            />

                            <div>
                                <p className="font-semibold">
                                    Books review
                                </p>

                                <p className="finex-body text-sm text-[#5c584f]">
                                    Completed
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Clock3
                                size={22}
                                className="shrink-0 text-[#ef7d24]"
                            />

                            <div>
                                <p className="font-semibold">
                                    Monthly bookkeeping
                                </p>

                                <p className="finex-body text-sm text-[#5c584f]">
                                    In progress
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FileText
                                size={22}
                                className="shrink-0 text-[#5c584f]"
                            />

                            <div>
                                <p className="font-semibold">
                                    Monthly report
                                </p>

                                <p className="finex-body text-sm text-[#5c584f]">
                                    Pending
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Updates */}
                <section className="mt-10 grid gap-6 md:grid-cols-2">

                    <div className="border border-[#bdb8ad] bg-[#1c1a17] p-7 text-[#eae7e0] md:p-9">
                        <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                            Latest Update
                        </p>

                        <h2 className="finex-heading mt-4 text-3xl">
                            Books are being reviewed.
                        </h2>

                        <p className="finex-body mt-4 text-sm leading-6 text-[#a9a49a]">
                            FineX is currently reviewing your bookkeeping records and
                            preparing the next stage of your monthly support.
                        </p>

                        <p className="mt-6 text-xs text-[#a9a49a]">
                            Updated recently
                        </p>
                    </div>

                    <div className="border border-[#bdb8ad] bg-white p-7 md:p-9">
                        <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                            Documents
                        </p>

                        <h2 className="finex-heading mt-4 text-3xl">
                            Your documents.
                        </h2>

                        <p className="finex-body mt-4 text-sm leading-6 text-[#5c584f]">
                            Important files and reports shared by FineX will appear here.
                        </p>

                        <button
                            type="button"
                            className="mt-6 rounded-full border border-[#1c1a17] px-5 py-3 text-sm font-semibold"
                        >
                            Documents coming soon
                        </button>
                    </div>

                </section>

            </div>
        </main>
    );
}