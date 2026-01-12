// import Sidebar from "@/components/layout/Sidebar";
// import Topbar from "@/components/layout/Topbar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex h-screen bg-background">
//       <Sidebar />
//       <main className="flex-1">
//         <Topbar />
//         <div className="p-6">{children}</div>
//       </main>
//     </div>
//   );
// }
import DesktopSidebar from "@/components/layout/DesktopSidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
