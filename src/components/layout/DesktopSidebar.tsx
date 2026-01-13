"use client";

import { useAuth } from "@/context/AuthContext";
import { menu } from "@/lib/menu";

export default function DesktopSidebar() {
  const { user } = useAuth();

  if (!user) return null; // or loader

  const items = menu[user.role];

  return (
    <aside className="w-64 border-r h-screen p-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="block rounded px-3 py-2 hover:bg-muted">
              {/* {item.icon} */}
              <span className="ml-2">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
