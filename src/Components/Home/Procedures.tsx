import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";

interface ProceduresProps {
  procedures: Array<{
    slug: string;
    title: string;
    image: string;
    content: string;
  }>
}

export function Procedures({ procedures }: ProceduresProps) {
  return (
    <div className="w-full flex flex-col items-center p-4 py-14 bg-white-400 ">
      <h2 className="">Procedimentos</h2>
      <div className="w-10 h-1 bg-gray-600 mt-4 rounded-t-sm "></div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        className={`${`w-full h-[500px] max-w-[1080px] rounded-md`}, mySwiper`}
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
        {procedures &&
          procedures.map((item) => (
            <SwiperSlide
              key={item.slug}
              className="flex items-center justify-center "
            >
              <a
                href="/"
                className="w-11/12 h-[420px] md:w-full lflex items-center justify-center mb-8 rounded-sm shadow-md hover:shadow-xl relative overflow-hidden transition-all "
              >
                <img
                  src={item.image}
                  alt="microderm-peeling-poster"
                  className="w-full h-full object-cover brightness-75 hover:brightness-100 absolute transition-all duration-1000 ease-in-out trasform scale-100 hover:scale-150 "
                />

                <div className="w-full flex flex-col items-center absolute bottom-0 p-5 bg-white-100 ">
                  <h3 className="mb-2 text-gray-700 text-lg font-poppins font-semibold ">
                    Título
                  </h3>

                  <p className="font-roboto font-light relative text-zinc-500 text-sm leading-5 text-center after:content-['...'] after:text-zinc-500 ">
                    {item.content}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
