import { UserRole } from "./roles";

export const menu = {
  [UserRole.ADMIN]: [
    { label: "Admin Dashboard", href: "/dashboard/admin" },
  ],
  [UserRole.CREATOR]: [
    { label: "Overview", href: "/dashboard/creator" },
    { label: "My Ideas", href: "/dashboard/creator/myideas" },
    { label: "Investors", href: "/dashboard/creator/investors" },
    { label: "Profile", href: "/dashboard/creator/profile" },
    { label: "Billing History", href: "/dashboard/creator/billinghistory" },
    { label: "Settings", href: "/dashboard/creator/settings" },
    { label: "Help & Support", href: "/dashboard/creator/support" },
  ],
  [UserRole.INVESTOR]: [
    { label: "Investments", href: "/dashboard/investor" },
  ],
  [UserRole.ADVISOR]: [
    { label: "Advisory Panel", href: "/dashboard/advisor" },
  ],
};
