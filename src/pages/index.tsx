import { GetStaticProps } from "next";
import { Feedback } from "../Components/Home/Feedback";
import { Introduction } from "../Components/Home/Introduction";
import { MostPopulars } from "../Components/Home/MostPopulars";
import { OurProfessionals } from "../Components/Home/OurProfessionals";
import { Procedures } from "../Components/Home/Procedures";
import { client } from "../services/prismic";
import Head from "next/head"

import * as prismicH from '@prismicio/helpers'

type PopularsData = Array<{
  slug: string;
  title: string;
  image: string;
  content: string;
}>

type ProceduresData = {
  slug: string;
  title: string;
  image: string;
  content: string;
}

type BannersData = {
  id: string;
  slug: string;
  image: string;
}

interface HomeProps {
  populars: PopularsData,
  procedures: ProceduresData[]
  banners: BannersData[]
}

export default function Home({ populars, procedures, banners }: HomeProps) {
  return (
    <div className="w-full box-border bg-white-50 flex flex-col items-center ">
      <Head>
        <title>Home | Relance</title>
      </Head>

      <Introduction banners={banners} />

      <MostPopulars populars={populars} />

      <OurProfessionals />

      <Procedures procedures={procedures} />

      <Feedback />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPopulars = await client.getAllByType('popular')
  const allProcedures = await client.getAllByType('procedure')
  const allBanners = await client.getAllByType('banner')

  const populars = allPopulars.map(popular => {
    return {
      slug: popular.uid,
      title: prismicH.asText(popular.data.title),
      image: popular.data.image.url,
      content: prismicH.asText(popular.data.content)?.substring(0, 100)
    }
  })

  const procedures = allProcedures.map(procedure => {
    return {
      slug: procedure.uid,
      title: prismicH.asText(procedure.data.title),
      image: procedure.data.image.url,
      content: prismicH.asText(procedure.data.content)?.substring(0, 100) + "..."
    }
  })

  const banners = allBanners.map(banner => {
    return {
      id: banner.id,
      slug: banner.uid,
      image: banner.data.image.url
    }
  })

  return {
    props: {
      populars,
      procedures,
      banners
    }
  }
}
