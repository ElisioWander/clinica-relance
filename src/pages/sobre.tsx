import { GetStaticProps } from "next";
import { client } from "../services/prismic";
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'

import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

type Summary = {
  title: string;
  name: string;
  summary: string;
  image: string;
};

interface AboutProps {
  amandaSummary: Summary;
  tamyrisSummary: Summary;
}

export default function About({ amandaSummary, tamyrisSummary }: AboutProps) {
  return (
    <div className="w-ful md:animate-goVisible " >
      <Head>
        <title>Sobre | Relance</title>
      </Head>

      <h1
        className="p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
        uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
        after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
        after:border-r-transparent after:-translate-x-1/2"
      >
        CONHEÇA NOSSO TIME
      </h1>
      <main className="w-full m-auto pt-14 transition-all ">
        <section className="md:py-14 mb-14 flex flex-col items-center justify-center md:flex-row md:animate-goBack ">
          <div className="w-80 p-5 md:p-0 md:mt-8 relative ">
            <div
              className="w-[300px] h-[300px] md:w-[320px] md:h-[320px] transition-all "
              style={{
                backgroundImage: 'url("/images/shape-about-image.svg")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={`${tamyrisSummary.image}`}
                alt="foto de perfil"
                className="absolute w-[260px] h-[260px] md:w-[280px] md:h-[280px] left-10 md:left-5 object-cover rounded-full transition-all "
              />
            </div>
          </div>

          <div className="p-7 pt-0 md:mt-2 ">
            <span className="text-sm text-green-300 uppercase font-bold font-poppins ">
              {tamyrisSummary.name}
            </span>
            <span className="w-8 h-1 block bg-green-300"></span>

            <h2 className="pt-5 pb-3 text-start ">{tamyrisSummary.title}</h2>
            <p className="max-w-[720px] text-zinc-600 text-sm md:text-base font-roboto leading-5 ">
              {tamyrisSummary.summary}
            </p>

            <div className="flex gap-1 p-2" >
              <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://api.whatsapp.com/send/?phone=5532998001512" ><IoLogoWhatsapp fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
              <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://www.instagram.com/esteta_tamyrisferreira/" ><AiFillInstagram fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
            </div>
          </div>
        </section>
        <section className="py-14 flex flex-col items-center justify-center md:flex-row bg-white-300 md:animate-goAhead ">
          <div className="w-80 p-5 md:p-0 md:mt-8 relative md:order-1 ">
            <div
              className="w-[300px] h-[300px] md:w-[320px] md:h-[320px] transition-all "
              style={{
                backgroundImage: 'url("/images/shape-about-image.svg")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={`${amandaSummary.image}`}
                alt="foto de perfil"
                className="absolute w-[260px] h-[260px] md:w-[280px] md:h-[280px] left-10 md:left-5 object-cover rounded-full transition-all "
              />
            </div>
          </div>

          <div className="p-7 pt-0 md:mt-2 ">
            <span className="text-sm text-green-300 uppercase font-bold font-poppins ">
              {amandaSummary.name}
            </span>
            <span className="w-8 h-1 block bg-green-300"></span>

            <h2 className="pt-5 pb-3 text-start ">{amandaSummary.title}</h2>
            <p className="w-full max-w-[720px] text-zinc-600 text-sm md:text-base md:text-start font-roboto leading-5 ">
              {amandaSummary.summary}
            </p>
            <div className="flex gap-1 p-2" >
              <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://api.whatsapp.com/send/?phone=5532998001512" ><IoLogoWhatsapp fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
              <a className={`w-9 h-9 md:w-11 md:h-11 bg-zinc-100 shadow-md rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all`} target="_blank" href="https://www.instagram.com/amandaferreira_beauty/" ><AiFillInstagram fontSize={20} className="text-green-100 md:w-7 md:h-7 " /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const summaryOne = await client.getSingle("amandasummary");
  const summaryTwo = await client.getSingle("tamyrissummary");

  const amandaSummary = {
    title: prismicH.asText(summaryOne.data.title),
    name: prismicH.asText(summaryOne.data.name),
    summary: prismicH.asText(summaryOne.data.summary),
    image: summaryOne.data.image.url
  };

  const tamyrisSummary = {
    title: prismicH.asText(summaryTwo.data.title),
    name: prismicH.asText(summaryTwo.data.name),
    summary: prismicH.asText(summaryTwo.data.summary),
    image: summaryTwo.data.image.url
  };

  return {
    props: {
      amandaSummary,
      tamyrisSummary,
    },
  };
};
