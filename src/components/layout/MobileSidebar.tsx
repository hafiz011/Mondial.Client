"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { menu } from "@/lib/menu";

export default function MobileSidebar() {
  const { user } = useAuth(); // destructure user, not role

  if (!user) return null; // user not logged in

  const items = menu[user.role]; // role comes from user

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
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
      </SheetContent>
    </Sheet>
  );
}
