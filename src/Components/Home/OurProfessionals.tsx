import { useSinglePrismicDocument } from "@prismicio/react";
import Link from "next/link";
import * as prismicH from '@prismicio/helpers'

export function OurProfessionals() {
  let [document] = useSinglePrismicDocument("homesummary")
    
  const summary = {
    slug: document?.uid,
    content: prismicH.asText(document?.data.content)?.substring(0, 500) + "...",
    image: document?.data.image.url
  }

  return (
    <div className="w-full bg-white-50 py-14 flex flex-col items-center ">
      <h2>Nossas Profissionais</h2>
      <div className="w-10 h-1 bg-gray-600 mt-4 mb-9 rounded-t-sm "></div>
      <div className="md:flex transition-all ">
        <div
          className="lg:h-[400px] lg:w-[400px] flex items-center justify-center "
          style={{
            'backgroundImage': 'url("/images/ellipse-1.svg")',
            'backgroundSize': 'contain',
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center'
          }}
        >
          <img
            src={summary.image}
            alt="shape with profile photo inside"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="w-full max-w-sm p-2 pt-5 pl-9 lg:flex lg:flex-col lg:items-center lg:justify-center ">
          <p className="text-left text-sm lg:text-base text-zinc-500 font-roboto leading-5 ">
            {summary.content}
          </p>

          <Link href="/sobre" >
            <a
              className="w-[130px] h-10 flex items-center justify-center text-white-50 text-base font-roboto font-semibold rounded-3xl mt-7 bg-green-100 hover:bg-green-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-100 "
            >
              Conheça elas
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
