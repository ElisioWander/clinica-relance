import { useRouter } from "next/router";
import Link from 'next/link';

export function Navigation() {
  const { asPath } = useRouter();

  return (
      <nav className="hidden md:block md:h-20 ">
        <Link href="/">
          <a
            className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-0 text-gray-300 text-sm lg:text-[16px] font-poppins transition-all
            ${
              asPath == "/"
                ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
                : "text-gray-300"
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/sobre">
          <a
            className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-0 text-gray-300 text-sm lg:text-[16px] font-poppins 
            ${
              asPath == "/sobre"
                ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
                : "text-gray-300"
            }`}
          >
            Sobre
          </a>
        </Link>
        <Link href="/posts">
          <a
            className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-0 text-gray-300 text-sm lg:text-[16px] font-poppins 
            ${
              asPath == "/posts"
                ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
                : "text-gray-300"
            }`}
          >
            Serviços
          </a>
        </Link>
        <Link href="/contato">
          <a
            className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-0 text-gray-300 text-sm lg:text-[16px] font-poppins 
            ${
              asPath == "/contato"
                ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
                : "text-gray-300"
            }`}
          >
            Contato
          </a>
        </Link>
        <Link href="/localizacao">
          <a
            className={`h-20 inline-block leading-[80px] ml-7 relative hover:brightness-0 text-gray-300 text-sm lg:text-[16px] font-poppins 
            ${
              asPath == "/localizacao"
                ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm "
                : "text-gray-300"
            }`}
          >
            Onde estamos
          </a>
        </Link>
      </nav>
  );
}
