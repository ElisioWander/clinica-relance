import { useSidebar } from "../../context/sidebarContext";
import { useRouter } from "next/router";
import Link from 'next/link'

export function Sidebar() {
  const { sidebarActive } = useSidebar();

  const {asPath} = useRouter()

  return (
    <>
      {sidebarActive && (
        <div className="w-full h-full bg-zinc-900 bg-opacity-50 absolute z-50 ">
          <div className="w-64 h-full transition-all bg-white-300 animate-goAhead ">
            <nav className="w-full h-full py-20">
              <ul className="w-full mt-10 flex flex-col text-center justify-center">
                <li className={`w-full p-3 text-lg text-gray-300 hover:text-zinc-50 font-poppins cursor-pointer hover:bg-green-100 transition-all hover:text-xl ${asPath === "/" ? "font-semibold bg-green-100 text-zinc-50 hover:text-lg " : "bg-transparent"} `}>
                  <Link href="/" >
                    <a>Home</a>
                  </Link>
                </li>
                <li className={`w-full p-3 text-lg text-gray-300 hover:text-zinc-50 font-poppins cursor-pointer hover:bg-green-100 transition-all hover:text-xl ${asPath === "/sobre" ? "font-semibold bg-green-100  text-zinc-50 hover:text-lg " : "bg-transparent"} `}>
                  <Link href="/sobre" >
                    <a>Sobre</a>
                  </Link>
                </li>
                <li className={`w-full p-3 text-lg text-gray-300 hover:text-zinc-50 font-poppins cursor-pointer hover:bg-green-100 transition-all hover:text-xl ${asPath === "/posts" ? "font-semibold bg-green-100  text-zinc-50 hover:text-lg " : "bg-transparent"} `}>
                  <Link href="/posts" >
                    <a>Serviços</a>
                  </Link>
                </li>
                <li className={`w-full p-3 text-lg text-gray-300 hover:text-zinc-50 font-poppins cursor-pointer hover:bg-green-100 transition-all hover:text-xl ${asPath === "/contato" ? "font-semibold bg-green-100  text-zinc-50 hover:text-lg " : "bg-transparent"} `}>
                  <Link href="/contato" >
                    <a>Contato</a>
                  </Link>
                </li>
                <li className={`w-full p-3 text-lg text-gray-300 hover:text-zinc-50 font-poppins cursor-pointer hover:bg-green-100 transition-all hover:text-xl ${asPath === "/localizacao" ? "font-semibold bg-green-100 text-zinc-50  hover:text-lg " : "bg-transparent"} `}>
                  <Link href="/localizacao" >
                    <a>Onde estamos</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
