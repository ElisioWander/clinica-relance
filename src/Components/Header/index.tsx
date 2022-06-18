import { List } from "phosphor-react";

export function Header() {
  return (
    <header className="w-10/12 max-w[1080px] h-20 m-auto flex items-center justify-between ">
      <List size={32} />
      <span className="text-gray-800 text-3xl font-bold ">LOGO</span>
    </header>
  );
}
