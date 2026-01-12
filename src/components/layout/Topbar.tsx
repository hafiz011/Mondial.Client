// import ThemeToggle from "../ThemeToggle";

// export default function Topbar() {
//   return (
//     <div className="flex h-14 items-center justify-end border-b px-4">
//       <ThemeToggle />
//     </div>
//   );
// }

import MobileSidebar from "./MobileSidebar";
import ThemeToggle from "../ThemeToggle";

export default function Topbar() {
  return (
    <div className="flex h-14 items-center justify-between border-b px-4">
      <MobileSidebar />
      <ThemeToggle />
    </div>
  );
}
