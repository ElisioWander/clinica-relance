import { useSidebar } from "../../context/sidebarContext";
import { SidebarNavigation } from "./SidebarNavigation";

export function Sidebar() {
  const { sidebarActive, handleCloseSidebar } = useSidebar();

  return (
    <>
      {sidebarActive && (
        <aside 
          onClick={handleCloseSidebar}
          className="w-full h-full bg-zinc-900 bg-opacity-50 absolute z-50 "
        >
          <div className="w-64 h-full transition-all bg-white-300 animate-goAhead duration-300 ">
            <SidebarNavigation />
          </div>
        </aside>
      )}
    </>
  );
}
