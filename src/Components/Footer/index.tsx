import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  const navigationStyle = `mb-2 text-base font-roboto text-center hover:underline hover:underline-offset-4 transition-all`;
  const socialMediaStyle = `w-11 h-11 md:w-11 md:h-11 bg-white-300 rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all `;

  return (
    <div className="w-full flex flex-col p-8 text-white-300 bg-zinc-900 transition-all ">
      <div className="text-center mb-2 text-4xl md:text-6xl font-merriweather shadow-sm font-bold ">
        <span>
          Relance<span className="text-green-300 ml-[1px]">.</span>
        </span>
      </div>
      <div className="flex flex-col items-center ">
        <div className="w-full py-5 flex flex-col ">
          <Link href="/">
            <a className={`${navigationStyle}`}> Home</a>
          </Link>
          <Link href="/posts">
            <a className={`${navigationStyle}`}> Serviços</a>
          </Link>
          <Link href="/sobre">
            <a className={`${navigationStyle}`}> Sobre</a>
          </Link>
          <Link href="/contato">
            <a className={`${navigationStyle}`}> Contato</a>
          </Link>
          <Link href="/localizacao">
            <a className={`${navigationStyle}`}> Onde estamos</a>
          </Link>
          <Link href="/politica-de-privacidade">
            <a className={`${navigationStyle}`}> Politica de Privacidade</a>
          </Link>
          <Link href="/termo-de-uso">
            <a className={`${navigationStyle}`}> Termo de Uso</a>
          </Link>
          <Link href="/creditos">
            <a className={`${navigationStyle}`}> Créditos</a>
          </Link>
        </div>
        <div className="flex gap-3 p-2">
          <a
            className={`${socialMediaStyle}`}
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5532998001512"
          >
            <IoLogoWhatsapp
              fontSize={28}
              className="text-zinc-700 md:w-7 md:h-7 "
            />
          </a>
          <a
            className={`${socialMediaStyle}`}
            target="_blank"
            href="https://www.instagram.com/clinica_relance/"
          >
            <AiFillInstagram
              fontSize={28}
              className="text-zinc-700 md:w-7 md:h-7 "
            />
          </a>
        </div>
      </div>
    </div>
  );
}
