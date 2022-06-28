import { Logo } from "../Logo";
import { HamburgerMenu } from "../Sidebar/HamburgerMenu";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="w-10/12 max-w[1080px] h-20 m-auto flex items-center justify-between ">
      <HamburgerMenu />
      <Logo />
      <Navigation />
    </header>
  );
}
