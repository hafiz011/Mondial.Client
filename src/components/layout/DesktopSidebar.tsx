"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { menu } from "@/lib/menu";

export default function DesktopSidebar() {
  const { user } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const sections = menu[user.role];

  return (
    <aside className="w-64 border-r h-screen p-4 space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
            {section.title}
          </p>

          <ul className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded px-3 py-2 text-sm transition
                      ${
                        active
                          ? "bg-muted font-medium"
                          : "hover:bg-muted"
                      }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
