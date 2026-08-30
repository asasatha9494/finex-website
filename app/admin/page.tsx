import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/prisma/db";
import AdminLogout from "@/components/AdminLogout";
import AdminStatusSelect from "@/components/AdminStatusSelect";

export default async function AdminPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/admin/login");
    }

    const requests = await db.orm.public.HealthCheckRequest.all();

    return (
        <main className="min-h-screen bg-[#1c1a17] px-6 py-16 text-[#eae7e0]">
            <div className="mx-auto max-w-[1200px]">

                <div className="flex items-start justify-between">
                    <div>
                        <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
                            FineX Admin
                        </p>

                        <h1 className="finex-heading mt-4 text-5xl">
                            Enquiries
                        </h1>

                        <p className="finex-body mt-4 text-[#a9a49a]">
                            Manage your Books Health Check requests.
                        </p>
                    </div>

                    <AdminLogout />
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    <div className="border border-[#403d37] p-6">
                        <p className="finex-mono text-xs uppercase tracking-[0.15em] text-[#a9a49a]">
                            Total Requests
                        </p>

                        <p className="finex-heading mt-3 text-4xl">
                            {requests.length}
                        </p>
                    </div>

                    <div className="border border-[#403d37] p-6">
                        <p className="finex-mono text-xs uppercase tracking-[0.15em] text-[#a9a49a]">
                            New
                        </p>

                        <p className="finex-heading mt-3 text-4xl text-[#ef7d24]">
                            {requests.filter((request) => request.status === "NEW").length}
                        </p>
                    </div>

                    <div className="border border-[#403d37] p-6">
                        <p className="finex-mono text-xs uppercase tracking-[0.15em] text-[#a9a49a]">
                            Admin
                        </p>

                        <p className="finex-body mt-4 text-sm text-[#a9a49a]">
                            {session.user.email}
                        </p>
                    </div>
                </div>

                <div className="mt-12 overflow-hidden border border-[#403d37]">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px]">
                            <thead>
                                <tr className="border-b border-[#403d37] text-left">
                                    <th className="px-5 py-4 finex-mono text-[10px] uppercase tracking-[0.15em]">
                                        Name
                                    </th>

                                    <th className="px-5 py-4 finex-mono text-[10px] uppercase tracking-[0.15em]">
                                        Company
                                    </th>

                                    <th className="px-5 py-4 finex-mono text-[10px] uppercase tracking-[0.15em]">
                                        Email
                                    </th>

                                    <th className="px-5 py-4 finex-mono text-[10px] uppercase tracking-[0.15em]">
                                        Service
                                    </th>

                                    <th className="px-5 py-4 finex-mono text-[10px] uppercase tracking-[0.15em]">
                                        Status
                                    </th>

                                    <th className="px-5 py-4 finex-mono text-[10px] uppercase tracking-[0.15em]">
                                        Message
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {requests.map((request) => (
                                    <tr
                                        key={request.id}
                                        className="border-b border-[#403d37] last:border-b-0"
                                    >
                                        <td className="px-5 py-5 text-sm">
                                            {request.name}
                                        </td>

                                        <td className="px-5 py-5 text-sm text-[#a9a49a]">
                                            {request.company}
                                        </td>

                                        <td className="px-5 py-5 text-sm text-[#a9a49a]">
                                            {request.email}
                                        </td>

                                        <td className="px-5 py-5 text-sm capitalize">
                                            {request.service}
                                        </td>

                                        <td className="px-5 py-5">
                                            <AdminStatusSelect
                                                id={request.id}
                                                currentStatus={request.status}
                                            />
                                        </td>

                                        <td className="max-w-xs px-5 py-5 text-sm text-[#a9a49a]">
                                            {request.message}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </main>
    );
}
