import { GetServerSideProps } from "next";
import { client } from "../../services/prismic";
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

interface SingleServiceProps {
  procedure: {
    slug: string;
    image: string;
    title: string;
    content: string;
    galery?: Array<{
      image: {
        alt: string;
        url: string;
      };
    }>;
    faq: Array<{
      quest: string;
      answer: string;
      id: string;
    }>;
  };
}

export default function SingleService({ procedure }: SingleServiceProps) {
  return (
    <>
      <Head>
        <title>Procedimento | {procedure.slug}</title>
      </Head>

      <section
        className="w-full py-14 md:animate-goVisible "
        style={{
          backgroundImage: `url(${procedure.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <main className="w-4/5 lg:w-2/3 m-auto bg-white-100 z-50 rounded-sm lg:flex lg:justify-center shadow-lg ">
          <div className="md:flex ">
            <div className="w-full flex items-center justify-center">
              <img
                src={procedure.image}
                alt="poster depilação a laiser"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full p-5 pb-10 md:p-10 flex flex-col justify-center bg-white-300 ">
              <h1
                className="py-4 md:m-0 text-center md:text-start 
           text-2xl lg:text-4xl text-gray-300 font-merriweather "
              >
                {procedure.title}
              </h1>

              <p className="text-center md:text-start md:p-2 text-sm lg:text-base leading-5 font-roboto text-zinc-600 transition-all ">
                {procedure.content}
              </p>
            </div>
          </div>
        </main>
      </section>

      <div>
        <main className="w-full max-w-[820px] p-5 pb-14 m-auto md:animate-goBack ">
          <h2 className="text-1xl md:text-3xl py-5 pb-8 md:text-start md:mb-5 flex ">
            O que você precisa saber
            <img
              src="/images/arrow-1.svg"
              alt="flecha na direção das perguntas de estética"
              className="hidden md:block md:w-5 md:mt-5 md:ml-2"
            />
          </h2>

          {procedure &&
            procedure.faq?.map((item) => (
              <div
                key={item.id}
                className="rounded-sm mb-3 shadow-md bg-white-300 "
              >
                <details className="p-6 open:bg-zinc-200 transition-all ">
                  <summary className="text-zinc-700 text-md  md:text-lg font-roboto font-bold hover:cursor-pointer ">
                    <span className="ml-1 ">{item.quest}</span>
                  </summary>

                  <div className="text-zinc-600 text-sm md:text-base p-3 md:px-5 transition-all  tracking-normal font-roboto">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
        </main>

        <section className="w-full max-w-[1080px] m-auto pb-5 md:px-5  md:animate-goTop">
          <h2 className="w-1/3 text-3xl p-5 mb-8 ">Galeria</h2>

          <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 items-center justify-center">
            {procedure &&
              procedure.galery?.map((item) => (
                <div
                  key={item.image?.alt}
                  className="w-11/12 h-[340px] md:w-full flex items-center justify-center mb-8 rounded-sm shadow-md hover:shadow-xl relative overflow-hidden transition-all "
                >
                  <img
                    src={item.image?.url}
                    alt="microderm-peeling-poster"
                    className="w-full h-full object-cover brightness-75 hover:brightness-100 absolute transition-all duration-1000 ease-in-out trasform scale-100 hover:scale-150 "
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;

  const post = await client.getByUID("procedure", String(slug));

  const questions = post.data.body[1]?.items.map((item: any) => {
    return {
      quest: prismicH.asText(item.question),
      answer: prismicH.asText(item.answer),
      id: prismicH.asText(item.question),
    };
  });

  let procedure = post.data;

  procedure = {
    slug: post.uid,
    image: post.data.image.url,
    title: prismicH.asText(post.data.title),
    content: prismicH.asText(post.data.content),
    galery: post.data.body[0]?.items || null,
    faq: questions || null,
  };

  return {
    props: { procedure },
  };
};
