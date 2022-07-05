import { Form } from "../Components/Form";
import { Modal } from "../Components/Modal";
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import { GetStaticProps } from "next";
import { client } from "../services/prismic";
import dynamic from "next/dynamic";
import * as prismicH from "@prismicio/helpers"
import { SeoPage } from "../Components/SeoPage";


const Map = dynamic(import("../Components/Map"), {ssr: false})

type LocationData = {
  location: {
    street: string;
    neighborhood: string;
    number: string;
    cellphone: string;
  }
}

export default function Contact({ location }: LocationData) {
  return (
    <>
      <SeoPage 
        title="Contato | Clínica Relance"
        description="Fale com a Clínica Relance"
        url="https://clinicarelance.com.br/contato" 
      />

      <div className="w-full flex flex-col items-center md:animate-goVisible ">
        <h1
          className="w-full p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
          uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
          after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
          after:border-r-transparent after:-translate-x-1/2"
        >
          Fale conosco
        </h1>
        <div className="w-full h-full flex flex-col items-center justify-center max-w-[1024px] md:h-480px py-14 md:grid md:grid-cols-2 ">
          <div className="w-full h-full flex flex-col justify-center p-5 order-1 md:order-none md:animate-goAhead " >
            <div >
              <span className="flex text-zinc-600 text-sm font-poppins " >
                <FaMapMarkerAlt className="w-4 h-4 mb-3 mr-2 text-green-300 " />
                {location.street}, {location.number} - Ubá - MG, {location.neighborhood}
              </span>
              <span className="flex text-sm text-zinc-600 font-poppins" >
                {location.cellphone}
              </span>
              <span className="flex gap-1 py-2 " >
              <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://api.whatsapp.com/send/?phone=5532998001512" ><IoLogoWhatsapp fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
              <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://www.instagram.com/clinica_relance/" ><AiFillInstagram fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
              </span>
            </div>
            <div className="w-full lg:w-[420px] h-[220px] z-[1] relative " >
              <Map />
            </div>
          </div>
          <Form />
        </div>
      </div>

      <Modal />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.getSingle("location")

  const location = {
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
