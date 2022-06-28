import { AiOutlineMenu } from "react-icons/ai"
import { useSidebar } from "../../context/sidebarContext";
import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export function Header() {
  const { handleOpenSidebar } = useSidebar()

  return (
    <header className="w-10/12 max-w[1080px] h-20 m-auto flex items-center justify-between ">
      <AiOutlineMenu 
        className="md:hidden z-50 cursor-pointer "
        size={32}
        onClick={handleOpenSidebar}
      />
      <Logo />
      <Navigation />
    </header>
  );
}
