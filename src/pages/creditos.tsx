import { GetServerSideProps } from 'next'
import { client } from '../services/prismic'
import { SeoPage } from '../Components/SeoPage'
import * as prismicH from '@prismicio/helpers'

type CreditData = {
  slug: string
  attributeLink: string
  attributeContent: string
}

interface CreditsProps {
  imagesCredtis: CreditData[]
}

export default function Credits({ imagesCredtis }: CreditsProps) {
  return (
    <>
      <SeoPage
        title="Créditos | Centr Estético Relance"
        description="Créditos por conteúdos de terceiros dentro do website Centro Estético Relance"
        url="https://clinicarelance.com.br/creditos"
      />

      <div className="w-full">
        <div className="w-full h-[calc(100vh-15rem)] flex items-center justify-center bg-white-300 ">
          <h1 className="text-5xl md:text-7xl text-center text-zinc-900 font-bold font-poppins transition-all ">
            Créditos por conteúdo <br /> de terceiros
          </h1>
        </div>

        <section className="w-full max-w-[1024px] m-auto py-14 flex flex-col items-center text-zinc-700 text-sm font-poppins ">
          <h2>Freepik</h2>
          <span className="w-full text-center mt-4">
            {imagesCredtis?.map((credit) => (
              <a
                key={credit.slug}
                href={`${credit.attributeLink}`}
                className="my-4 block "
                target="_blank"
                rel="noreferrer"
              >
                {credit.attributeContent}
              </a>
            ))}
          </span>
        </section>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await client.getAllByType('procedure')

  const imagesCredtis = response.map((credit) => {
    return {
      slug: credit.uid,
      attributeLink: prismicH.asText(credit.data.attribute),
      attributeContent: prismicH.asText(credit.data.contentattribute),
    }
  })

  return {
    props: { imagesCredtis },
  }
}
