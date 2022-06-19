import { List } from "phosphor-react";
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Header() {
  const { asPath } = useRouter()

  return (
    <header className="w-10/12 max-w[1080px] h-20 m-auto flex items-center justify-between ">
      <List className="md:hidden" size={32} />
      <span className="text-gray-300 font-merriweather text-3xl font-bold ">Relance<span className="text-green-300 ml-[1px] ">.</span></span>
      <nav className="hidden md:block md:h-20 " >
        <Link href="/" >
          <a className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-75 text-gray-300 text-base font-poppins transition-all
            ${asPath == "/"
              ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
              : "text-gray-300"}`}
          >
            Home
          </a>
        </Link>
        <Link href="/about" >
          <a className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-75 text-gray-300 text-base font-poppins 
            ${asPath == "/about"
              ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
              : "text-gray-300"}`}
          >
            Sobre
          </a>
        </Link>
        <Link href="/services" >
          <a className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-75 text-gray-300 text-base font-poppins 
            ${asPath == "/services"
              ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
              : "text-gray-300"}`}
          >
            Serviços
          </a>
        </Link>
        <Link href="/contact" >
          <a className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-75 text-gray-300 text-base font-poppins 
            ${asPath == "/contact"
              ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
              : "text-gray-300"}`}
          >
            Fale conosco
          </a>
        </Link>
        <Link href="/location" >
          <a className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-75 text-gray-300 text-base font-poppins 
            ${asPath == "/location"
              ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
              : "text-gray-300"}`}
          >
            Onde estamos
          </a>
        </Link>
      </nav>
    </header>
  );
}
