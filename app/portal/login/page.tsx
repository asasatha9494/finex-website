"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, LockKeyhole } from "lucide-react";

export default function PortalLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/portal");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1c1a17] px-6 py-16">
      <div className="w-full max-w-md bg-[#eae7e0] p-8 text-[#1c1a17] md:p-10">

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1a17]">
          <LockKeyhole size={19} />
        </div>

        <p className="finex-mono mt-8 text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
          FineX Client Portal
        </p>

        <h1 className="finex-heading mt-4 text-5xl">
          Welcome back.
        </h1>

        <p className="finex-body mt-4 text-sm leading-6 text-[#5c584f]">
          Sign in to track your FineX services, project progress and
          important updates.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          <div>
            <label className="finex-mono text-[10px] uppercase tracking-[0.15em]">
              Email
            </label>

            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Client email"
              className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none focus:border-[#ef7d24]"
            />
          </div>

          <div>
            <label className="finex-mono text-[10px] uppercase tracking-[0.15em]">
              Password
            </label>

            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none focus:border-[#ef7d24]"
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
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ef7d24] px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <ArrowUpRight size={16} />}
          </button>

        </form>

        <p className="finex-body mt-8 text-center text-xs text-[#5c584f]">
          Client access is provided by FineX after your service begins.
        </p>

      </div>
    </main>
  );
}