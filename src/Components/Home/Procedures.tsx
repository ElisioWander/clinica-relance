import { Swiper, SwiperSlide } from "swiper/react";
import procedures from "../../../data.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";

type ProceduresData = Array<{
  id: string;
  img: string;
  content: string;
}>;

export function Procedures() {
  const data: ProceduresData = procedures.procedures;

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h2 className="mt-14" >Procedimentos</h2>
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
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="flex items-center justify-center " >
              <div className="w-11/12 h-[400px] bg-white-100 flex flex-col items-center rounded-lg shadow-md ">
                <div className="w-full h-[190px]">
                  <img
                    src={item.img}
                    alt="banner"
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="w-full h-full flex flex-col items-center text-center justify-between pt-10 pb-8 px-2 ">
                  <h3 className="text-gray-600 text-md font-poppins">
                    {item.content}
                  </h3>

                  <a
                    href="#"
                    className="w-[124px] h-9 flex items-center justify-center bg-green-300 text-white-100 text-sm font-semibold font-roboto rounded-3xl hover:brightness-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-100 "
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
