"use client";

import MobileSidebar from "./MobileSidebar";
import ThemeToggle from "../ThemeToggle";
import { LayoutGrid, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import NotificationBell from "@/components/notifications/NotificationBell";
import MessageIcon from "@/components/messages/MessageIcon";


export default function Topbar() {
  const breadcrumbs = useBreadcrumb();

  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 md:px-8">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <MobileSidebar />

          {/* Icon */}
          <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border">
            <LayoutGrid className="h-5 w-5 text-muted-foreground" />
          </div>

          {/* Breadcrumb */}
          <nav className="hidden sm:flex items-center text-sm">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <div key={item.href} className="flex items-center">
                  {index !== 0 && (
                    <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
                  )}

                  {isLast ? (
                    <span className="text-xs font-medium text-foreground">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <MessageIcon />
          <NotificationBell />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
