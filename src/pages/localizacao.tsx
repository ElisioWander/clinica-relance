import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import dynamic from "next/dynamic";
import Head from "next/head";

const Map = dynamic(import("../Components/Map"), { ssr: false });

export default function Location() {
  const socialMediaStyle = `w-9 h-9 md:w-11 md:h-11 bg-white-300 rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all `
  
  return (
    <>
      <Head>
        <title>Localização | Relance</title>
      </Head>

      <section className="w-full h-full md:flex relative animate-goVisible ">
        <div className="w-full md:w-[420px] md:flex md:flex-col bg-white-300 transition-all ">
          <div className="w-full h-64 ">
            <img
              className="w-full h-full object-cover "
              src="https://images.prismic.io/relancestudiorepo/2737c8a0-1b5e-482d-a6c6-61a1d72d4bdb_relance-image.png?auto=compress,format"
              alt="imagem do relance studio"
            />
          </div>

          <div className="p-5">
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
                (32) 99800-1512
              </li>
            </ul>
          </div>

          <div className="w-full flex pb-4 pl-5">
          <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://api.whatsapp.com/send/?phone=5532998001512" ><IoLogoWhatsapp fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
              <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://www.instagram.com/clinica_relance/" ><AiFillInstagram fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
          </div>
        </div>
        <div className="w-full h-[420px] md:h-screen p-[2px] z-[1] relative bg-green-100 ">
          <Map />
        </div>
      </section>
    </>
  );
}
