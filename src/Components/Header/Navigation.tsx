import { useRouter } from "next/router";
import Link from 'next/link';

export function Navigation() {
  const { asPath } = useRouter();
  
  const genericNavigationStyle = `h-20 inline-block leading-[80px] ml-7 relative hover:brightness-0 text-gray-300 text-sm lg:text-[16px] font-poppins transition-all`
  const targetNavigationStyle = `font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm`

  return (
      <nav className="hidden md:block md:h-20 ">
        <Link href="/">
          <a
            className={`${genericNavigationStyle}
            ${
              asPath == "/"
                ? targetNavigationStyle
                : "text-gray-300"
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/sobre">
          <a
            className={`${genericNavigationStyle}
            ${
              asPath == "/sobre"
                ? targetNavigationStyle
                : "text-gray-300"
            }`}
          >
            Sobre
          </a>
        </Link>
        <Link href="/posts">
          <a
            className={`${genericNavigationStyle}
            ${
              asPath == "/posts"
                ? targetNavigationStyle
                : "text-gray-300"
            }`}
          >
            Serviços
          </a>
        </Link>
        <Link href="/contato">
          <a
            className={`${genericNavigationStyle}
            ${
              asPath == "/contato"
                ? targetNavigationStyle
                : "text-gray-300"
            }`}
          >
            Contato
          </a>
        </Link>
        <Link href="/localizacao">
          <a
            className={`${genericNavigationStyle}
            ${
              asPath == "/localizacao"
                ? targetNavigationStyle
                : "text-gray-300"
            }`}
          >
            Onde estamos
          </a>
        </Link>
      </nav>
  );
}
