import Link from "next/link";
import { useRouter } from "next/router";

export function SidebarNavigation() {
  const {asPath} = useRouter()

  const genericNavigationStyle = `w-full p-3 text-lg text-gray-300 hover:text-zinc-50 font-poppins cursor-pointer hover:bg-green-100 transition-all hover:text-xl`
  const targetNavigationStyle = `font-semibold bg-green-100 text-zinc-50 hover:text-lg`

  return (
    <nav className="w-full h-full py-20">
      <ul className="w-full mt-10 flex flex-col text-center justify-center">
        <li
          className={`${genericNavigationStyle} ${
            asPath === "/"
              ? targetNavigationStyle
              : "bg-transparent"
          } `}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li
          className={`${genericNavigationStyle} ${
            asPath === "/sobre"
              ? targetNavigationStyle
              : "bg-transparent"
          } `}
        >
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </li>
        <li
          className={`${genericNavigationStyle} ${
            asPath === "/posts"
              ? targetNavigationStyle
              : "bg-transparent"
          } `}
        >
          <Link href="/posts">
            <a>Serviços</a>
          </Link>
        </li>
        <li
          className={`${genericNavigationStyle} ${
            asPath === "/contato"
              ? targetNavigationStyle
              : "bg-transparent"
          } `}
        >
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </li>
        <li
          className={`${genericNavigationStyle} ${
            asPath === "/localizacao"
              ? targetNavigationStyle
              : "bg-transparent"
          } `}
        >
          <Link href="/localizacao">
            <a>Onde estamos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
