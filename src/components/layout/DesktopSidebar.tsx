"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { menu } from "@/lib/menu";

export default function DesktopSidebar() {
  const { role } = useAuth();
  const items = menu[role];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-muted p-4">
      <h2 className="mb-6 text-xl font-bold">SaaS Dashboard</h2>

      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded px-3 py-2 hover:bg-accent"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
