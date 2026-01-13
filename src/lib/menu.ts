import { UserRole } from "./roles";

export const menu = {
  [UserRole.ADMIN]: [
    { label: "Admin Dashboard", href: "/dashboard/admin" },
  ],
  [UserRole.CREATOR]: [
    { label: "My Projects", href: "/dashboard/creator" },
  ],
  [UserRole.INVESTOR]: [
    { label: "Investments", href: "/dashboard/investor" },
  ],
  [UserRole.ADVISOR]: [
    { label: "Advisory Panel", href: "/dashboard/advisor" },
  ],
};
