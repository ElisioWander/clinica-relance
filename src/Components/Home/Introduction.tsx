import { Swiper, SwiperSlide } from "swiper/react";
import Introducton from "../../../data.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";

export function Introduction() {
  const data = Introducton.Introduction;

  return (
    <div className="w-full h-[calc(100vh-40rem)] md:h-[calc(100vh-30rem)] lg:h-[calc(100vh-5rem)] bg-zinc-800" >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${`w-full h-full rounded-md`}, mySwiper`}
      >
        { data &&
          data.map(item => (
            <SwiperSlide key={item.id}>
              <section className="w-full h-full " >
                <img
                  className="w-full h-full object-cover opacity-80 " 
                  src={item.img}
                  alt="banner principal estetica" />
              </section>
            </SwiperSlide>
          )) }
      </Swiper>
    </div>
  );
}
