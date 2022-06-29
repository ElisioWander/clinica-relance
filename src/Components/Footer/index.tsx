import { FaMapMarkerAlt } from "react-icons/fa"
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import { client } from "../../services/prismic"
import { useAllPrismicDocumentsByType } from "@prismicio/react"
import * as prismicH from "@prismicio/helpers"

export function Footer() {
  const [procedures] = useAllPrismicDocumentsByType('procedure')

  const procedure = procedures?.map(item => {
    return {
      slug: item.uid,
      attributeLink: prismicH.asText(item.data.attribute),
      attributeContent: prismicH.asText(item.data.contentattribute)
    }
  })

  const navigationStyle = `text-xs sm:text-sm font-roboto text-center hover:underline hover:underline-offset-4 transition-all`
  const socialMediaStyle = `w-9 h-9 md:w-11 md:h-11 bg-white-300 rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all `

  return (
    <div className="w-full md:h-80 relative flex flex-col md:grid grid-cols-3 items-center p-8 md:px-16 text-white-300 bg-zinc-900 transition-all " >
      <div className="w-full mt-3 flex flex-col gap-2 order-1 md:order-none" >
        <span className="text-zinc-600 text-sm " >
          Creditos <br/>
          { procedure && procedure?.map(item => (
            <a 
              className="text-xs font-light "
              key={item.slug}
              target="_blank"
              href={`${item.attributeLink}`}
            >
              {item.attributeContent}
            </a>
          )) }
        </span>
      </div>
      <div>
        <span className="md:h-60 mb-2 text-4xl md:text-6xl font-merriweather shadow-sm font-bold flex items-start  justify-center " >Relance<span className="text-green-300 ml-[1px]" >.</span></span>
      </div>
      <div className="flex flex-col items-center pb-3 md:p-0 md:items-end gap-2 md:gap-6 ">
        <div className="flex gap-3 p-2" >
          <a className={`${socialMediaStyle}`} target="_blank" href="https://api.whatsapp.com/send/?phone=5532998001512" ><IoLogoWhatsapp fontSize={20} className="text-zinc-700 md:w-7 md:h-7 " /></a>
          <a className={`${socialMediaStyle}`} target="_blank" href="https://www.instagram.com/clinica_relance/" ><AiFillInstagram fontSize={20} className="text-zinc-700 md:w-7 md:h-7 " /></a>
        </div>
        <div className="flex gap-3" >
          <a className={`${navigationStyle}`} href="/"> Home</a>
          <a className={`${navigationStyle}`} href=""> Serviços</a>
          <a className={`${navigationStyle}`} href=""> Sobre</a>
          <a className={`${navigationStyle}`} href=""> contato</a>
          <a className={`${navigationStyle}`} href=""> local</a>
        </div>
      </div>
    </div>
  );
}
