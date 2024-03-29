import { GetStaticProps } from 'next'
import { Feedback } from '../Components/Home/Feedback'
import { Introduction } from '../Components/Home/Introduction'
import { MostPopulars } from '../Components/Home/MostPopulars'
import { OurProfessionals } from '../Components/Home/OurProfessionals'
import { Procedures } from '../Components/Home/Procedures'
import { client } from '../services/prismic'
import * as prismicH from '@prismicio/helpers'
import { SeoPage } from '../Components/SeoPage'

type PopularData = {
  slug: string
  title: string
  image: string
  content: string
}

type ProcedureData = {
  slug: string
  title: string
  image: string
  content: string
}

interface HomeProps {
  populars: PopularData[]
  procedures: ProcedureData[]
}

export default function Home({ populars, procedures }: HomeProps) {
  return (
    <>
      <SeoPage
        title="Home | Centro Estético Relance"
        description="O Centro Estético Relance cuida da sua saúde e beleza"
      />

      <div className="w-full box-border bg-white-50 flex flex-col items-center ">
        <Introduction />

        <MostPopulars populars={populars} />

        <OurProfessionals />

        <Procedures procedures={procedures} />

        <Feedback />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPopulars = await client.getAllByType('popular')
  const allProcedures = await client.getAllByType('procedure')

  const populars = allPopulars.map((popular) => {
    return {
      slug: popular.uid,
      title: prismicH.asText(popular.data.title),
      image: popular.data.image.url,
      content:
        prismicH
          .asText(popular.data.content)
          ?.substring(0, 100)
          ?.substring(0, 100) + '...',
    }
  })

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
      populars,
      procedures,
    },
    revalidate: 24 * 60 * 60,
  }
}
