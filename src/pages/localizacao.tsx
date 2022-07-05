import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { GetStaticProps } from "next";
import { client } from "../services/prismic";
import dynamic from "next/dynamic";
import * as prismicH from "@prismicio/helpers"
import { SeoPage } from "../Components/SeoPage";

const Map = dynamic(import("../Components/Map"), { ssr: false });

interface LocationProps {
  location: {
    image: string;
    title: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    number: string;
    cellphone: string;
  }
}

export default function Location({ location }: LocationProps) {  
  return (
    <>
      <SeoPage 
        title="Localização | Clínica Relance"
        description="R. Altivo Brandão, 626 - Uba, Ubá - MG, 36500-000"
        url="https://clinicarelance.com.br/localizacao" 
      />

      <section className="w-full h-full md:flex relative md:animate-goVisible ">
        <div className="w-full md:w-[420px] md:flex md:flex-col bg-white-300 transition-all ">
          <div className="w-full h-64 ">
            <img
              className="w-full h-full object-cover "
              src={location.image}
              alt="imagem do relance studio"
            />
          </div>

          <div className="p-5">
            <h1 className="text-2xl md:text-3xl font-merriweather font-bold py-4 text-zinc-700 ">
              {location.title}
            </h1>

            <ul className="text-zinc-500 text-sm lg:text-[15px] font-poppins transition-all ">
              <li>
                <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                  Estado:
                </strong>{" "}
                {location.state}
              </li>
              <li>
                <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                  Cidade:
                </strong>{" "}
                {location.city}
              </li>
              <li>
                <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                  Rua:
                </strong>{" "}
                {location.street}
              </li>
              <li>
                <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                  Bairro:
                </strong>{" "}
                {location.neighborhood}
              </li>
              <li>
                <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                  Número:
                </strong>{" "}
                {location.number}
              </li>
              <li>
                <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
                  Telefone:
                </strong>{" "}
                {location.cellphone}
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.getSingle("location")

  const location = {
    image: response.data.image.url,
    title: prismicH.asText(response.data.title),
    state: prismicH.asText(response.data.state),
    city: prismicH.asText(response.data.city),
    street: prismicH.asText(response.data.street),
    neighborhood: prismicH.asText(response.data.neighborhood),
    number: prismicH.asText(response.data.number),
    cellphone: prismicH.asText(response.data.cellphone)
  }

  return {
    props: {
      location
    },
    revalidate: 24 * 60 * 60 //24h
  }
}
