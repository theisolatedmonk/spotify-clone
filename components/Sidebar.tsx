"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routs = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/",
      },
    ],
    [pathname]
  );
  return (
    <div className=" flex h-full">
      <div
        className=" hidden
    md:flex
    flex-col
    gap-2
    bg-black
    h-full
    w-[300px]
    p-2"
      >
        <Box>Sidebar Navigation</Box>
      </div>
    </div>
  );
};
export default Sidebar;
