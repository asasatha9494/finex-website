"use client";

import { useState } from "react";

type AdminStatusSelectProps = {
  id: number;
  currentStatus: string;
};

export default function AdminStatusSelect({
  id,
  currentStatus,
}: AdminStatusSelectProps) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  async function handleChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const newStatus = event.target.value;

    setStatus(newStatus);
    setSaving(true);

    try {
      const response = await fetch("/api/admin/health-check", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status: newStatus,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update status.");
      }
    } catch (error) {
      console.error("Status update error:", error);
      setStatus(currentStatus);
      alert("Failed to update status.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={saving}
      className="rounded-full border border-[#403d37] bg-[#1c1a17] px-3 py-1 text-xs font-semibold text-[#eae7e0] outline-none disabled:opacity-50"
    >
      <option value="NEW">NEW</option>
      <option value="CONTACTED">CONTACTED</option>
      <option value="IN_PROGRESS">IN PROGRESS</option>
      <option value="COMPLETED">COMPLETED</option>
    </select>
  );
}