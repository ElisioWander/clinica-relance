import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import dynamic from "next/dynamic";

const Map = dynamic(import("../Components/Map"), { ssr: false });

export default function Location() {
  return (
    <section className="w-full h-full md:flex relative animate-goVisible ">
      <div className="w-full md:w-[420px] md:flex md:flex-col bg-white-300 transition-all ">
        <div className="w-full h-64 ">
          <img
            className="w-full h-full object-cover "
            src="https://images.prismic.io/relancestudiorepo/2737c8a0-1b5e-482d-a6c6-61a1d72d4bdb_relance-image.png?auto=compress,format"
            alt="imagem do relance studio"
          />
        </div>

        <div className="p-5" >
          <h1 className="text-2xl md:text-3xl font-merriweather font-bold py-4 text-zinc-700 ">
            Relance Studio
          </h1>

          <ul className="text-zinc-500 text-sm lg:text-[15px] font-poppins transition-all ">
            <li>
              <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                Estado:
              </strong>{" "}
              Minas Gerais
            </li>
            <li>
              <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                Cidade:
              </strong>{" "}
              Ubá
            </li>
            <li>
              <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                Rua:
              </strong>{" "}
              Av. Padre Arnaldo Jansen
            </li>
            <li>
              <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                Número:
              </strong>{" "}
              626
            </li>
            <li>
              <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                Telefone:
              </strong>{" "}
              (32) 9 99999999
            </li>
          </ul>
        </div>

        <div className="w-full flex pb-4 pl-5">
          <a
            className="w-12 h-12 mr-2 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all "
            target="_blank"
            href="https://google.com"
          >
            <IoLogoWhatsapp
              fontSize={30}
              className="text-zinc-700 md:w-7 md:h-7 "
            />
          </a>
          <a
            className="w-12 h-12 mr-2 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all "
            target="_blank"
            href="https://google.com"
          >
            <AiFillInstagram
              fontSize={30}
              className="text-zinc-700 md:w-7 md:h-7 "
            />
          </a>
          <a
            className="w-12 h-12 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all "
            target="_blank"
            href="https://google.com"
          >
            <FaFacebookF
              fontSize={30}
              className="text-zinc-700 md:w-7 md:h-7 "
            />
          </a>
        </div>
      </div>
      <div className="w-full h-[420px] md:h-screen p-[2px] z-[1] relative bg-green-100 ">
        <Map />
      </div>
    </section>
  );
}
