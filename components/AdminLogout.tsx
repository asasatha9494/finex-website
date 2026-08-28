"use client";

import { signOut } from "next-auth/react";

export default function AdminLogout() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="rounded-full border border-[#5c584f] px-5 py-3 text-sm transition hover:bg-[#eae7e0] hover:text-[#1c1a17]"
    >
      Sign Out
    </button>
  );
}