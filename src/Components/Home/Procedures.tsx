import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Pagination, Navigation, Autoplay, A11y } from 'swiper'
import Link from 'next/link'

type ProcedureData = {
  slug: string
  title: string
  image: string
  content: string
}

interface ProceduresProps {
  procedures: ProcedureData[]
}

export function Procedures({ procedures }: ProceduresProps) {
  return (
    <div className="w-full flex flex-col items-center p-4 py-14 bg-white-400 ">
      <h2 className="">Procedimentos</h2>
      <div className="w-10 h-1 bg-gray-600 mt-4 rounded-t-sm "></div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, A11y]}
        spaceBetween={15}
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        className={`${`w-full h-[600px] max-w-[1080px] rounded-md`}, mySwiper`}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {procedures?.map((item) => (
          <SwiperSlide
            key={item.slug}
            className="flex items-center justify-center "
          >
            <div className="w-11/12 h-[500px] md:w-full lflex items-center justify-center mb-8 rounded-sm shadow-md hover:shadow-xl relative overflow-hidden transition-all ">
              <img
                src={item.image}
                alt="microderm-peeling-poster"
                className="w-[570px] h-[320px] lg:w-[280px] lg:h-[280px] object-cover brightness-75 hover:brightness-100 transition-all duration-1000 ease-in-out trasform scale-100 hover:scale-150 "
              />

              <div className="w-full flex flex-col items-center absolute bottom-0 p-5 bg-white-100 ">
                <h3 className="mb-2 text-gray-700 text-lg font-poppins font-semibold ">
                  {item.title}
                </h3>

                <p className="font-roboto font-light relative text-zinc-500 text-sm leading-5 text-center ">
                  {item.content}
                </p>

                <Link href={`/posts/${item.slug}`}>
                  <a className="w-[130px] h-10 flex items-center justify-center text-white-50 text-base font-roboto font-semibold rounded-3xl mt-7 bg-green-100 hover:bg-green-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-100 ">
                    Saiba mais
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
