"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
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

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1c1a17] px-6">
      <div className="w-full max-w-md bg-[#eae7e0] p-8 text-[#1c1a17] md:p-10">
        <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
          FineX Admin
        </p>

        <h1 className="finex-heading mt-4 text-4xl">
          Admin Login
        </h1>

        <p className="finex-body mt-3 text-sm text-[#5c584f]">
          Sign in to manage Health Check enquiries.
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
              className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none focus:border-[#ef7d24]"
              placeholder="Admin email"
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
              className="mt-2 w-full border-b border-[#bdb8ad] bg-transparent px-0 py-3 outline-none focus:border-[#ef7d24]"
              placeholder="Password"
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
            className="w-full rounded-full bg-[#ef7d24] px-6 py-4 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}