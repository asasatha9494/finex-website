"use client";

import { signOut } from "next-auth/react";

export default function PortalLogout() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/portal/login" })}
      className="rounded-full border border-[#bdb8ad] px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-[#1c1a17] hover:text-white"
    >
      Sign Out
    </button>
  );
}