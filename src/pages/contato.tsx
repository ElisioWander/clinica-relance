import { Form } from "../Components/Form";
import { Modal } from "../Components/Modal";
import { FaFacebookF, FaMapMarkerAlt } from "react-icons/fa"
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import dynamic from "next/dynamic";

const Map = dynamic(import("../Components/Map"), {ssr: false})

export default function Contact() {
  return (
    <>
      <div className="w-full flex flex-col items-center animate-goVisible ">
        <h1
          className="w-full p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
          uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
          after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
          after:border-r-transparent after:-translate-x-1/2"
        >
          Fale conosco
        </h1>
        <div className="w-full h-full flex flex-col items-center justify-center max-w-[1024px] md:h-480px py-14 md:grid md:grid-cols-2 ">
          <div className="w-full h-full flex flex-col justify-center p-5 order-1 md:order-none animate-goAhead " >
            <div >
              <span className="flex text-zinc-600 text-sm font-poppins " >
                <FaMapMarkerAlt className="w-4 h-4 mb-3 mr-2 text-green-300 " />
                R. Altivo Brandão, 626 - Uba, Ubá - MG, 36500-000
              </span>
              <span className="flex text-sm text-zinc-600 font-poppins" >
                (32) 999999999
              </span>
              <span className="flex" >
                <a className="w-9 h-9 my-2 flex items-center justify-center rounded-md hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all " target="_blank" href="https://google.com" ><IoLogoWhatsapp className="text-zinc-700" fontSize={24} /></a>
                <a className="w-9 h-9 my-2 flex items-center justify-center rounded-md hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all " target="_blank" href="https://google.com" ><AiFillInstagram className="text-zinc-700" fontSize={24} /></a>
                <a className="w-9 h-9 my-2 flex items-center justify-center rounded-md hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all " target="_blank" href="https://google.com" ><FaFacebookF className="text-zinc-700" fontSize={24} /></a>
              </span>
            </div>
            <div className="w-full lg:w-[420px] h-[240px] z-[1] relative " >
              <Map />
            </div>
          </div>
          <Form  />
        </div>
      </div>

      <Modal />
    </>
  );
}
