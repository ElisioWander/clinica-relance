import { GetStaticProps } from 'next'
import { client } from '../../services/prismic'
import { SeoPage } from '../../Components/SeoPage'
import * as prismicH from '@prismicio/helpers'
import Link from 'next/link'

type ProcedureData = {
  slug: string
  image: string
  title: string
  content: string
}

interface ServicesProps {
  procedures: ProcedureData[]
}

export default function Services({ procedures }: ServicesProps) {
  return (
    <div className="w-full bg-white-300 flex flex-col md:animate-goVisible ">
      <SeoPage
        title="Procedimentos | Centro Estético Relance"
        description="Todos os procedimentos fornecidos pelos profissionais do Centro Estético Relance"
      />

      <h1
        className="w-full p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
        uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
        after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
        after:border-r-transparent after:-translate-x-1/2"
      >
        PROCEDIMENTOS ESTÉTICOS
      </h1>

      <main className="w-full max-w-[1080px] m-auto py-20 md:px-5 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 items-center justify-center md:animate-goTop ">
        {procedures?.map((procedure) => (
          <Link key={procedure.slug} href={`/posts/${procedure.slug}`}>
            <a
              className="w-11/12 h-[380px] md:w-full flex items-center justify-center mb-8 rounded-sm shadow-md hover:shadow-xl relative overflow-hidden hover:scale-105 transition-all"
              style={{
                backgroundImage: `url(${procedure.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-5 text-center text-white-100 md:text-transparent md:hover:text-white-300 bg-zinc-900 md:bg-transparent md:hover:bg-zinc-900 bg-opacity-70 md:hover:bg-opacity-60 transition-all duration-500">
                <p className="text-sm font-poppins tracking-wide ">
                  <span className="text-2xl pb-1 font-merriweather block text-center transition-all duration-500">
                    {procedure.title}
                  </span>
                  {procedure.content}

                  <span className="mt-5 text-base block  ">
                    Click para saber mais
                  </span>
                </p>
              </div>
            </a>
          </Link>
        ))}
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProcedures = await client.getAllByType('procedure')

  const procedures = allProcedures.map((procedure) => {
    return {
      slug: procedure.uid,
      title: prismicH.asText(procedure.data.title),
      image: procedure.data.image.url,
      content:
        prismicH.asText(procedure.data.content)?.substring(0, 100) + '...',
    }
  })

  return {
    props: {
      procedures,
    },
    revalidate: 60 * 60 * 24, // 24 hour,
  }
}
