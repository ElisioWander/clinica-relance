import { useSidebar } from "../../context/sidebarContext";
import { useRouter } from "next/router";
import Link from 'next/link'
import { SidebarNavigation } from "./SidebarNavigation";

export function Sidebar() {
  const { sidebarActive } = useSidebar();

  return (
    <>
      {sidebarActive && (
        <div className="w-full h-full bg-zinc-900 bg-opacity-50 absolute z-50 ">
          <div className="w-64 h-full transition-all bg-white-300 animate-goAhead ">
            <SidebarNavigation />
          </div>
        </div>
      )}
    </>
  );
}
