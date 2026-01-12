import { UserRole } from "./roles";

export const menu = {
  [UserRole.ADMIN]: [
    { label: "Dashboard", href: "/dashboard/admin" },
    { label: "Users", href: "/dashboard/admin/users" },
  ],
  [UserRole.FOUNDER]: [
    { label: "Dashboard", href: "/dashboard/founder" },
    { label: "Projects", href: "/dashboard/founder/projects" },
  ],
  [UserRole.INVESTOR]: [
    { label: "Reports", href: "/dashboard/investor" },
    { label: "Investments", href: "/dashboard/investor/investments" },
  ],
  [UserRole.ADVISOR]: [
    { label: "My Activity", href: "/dashboard/advisor" },
    { label: "Clients", href: "/dashboard/advisor/clients" },
  ],
};
