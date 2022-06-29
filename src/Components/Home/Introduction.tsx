import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";

interface IntroductionProps {
  banners: Array<{
    id: string;
    slug: string;
    image: string;
  }>
}

export function Introduction({ banners }: IntroductionProps) {
  return (
    <div className="w-full h-[calc(100vh-10)] lg:h-[calc(100vh-5rem)] animate-goVisible bg-zinc-800">
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
        {banners &&
          banners.map((item) => (
            <SwiperSlide key={item.id}>
              <section className="w-full h-full ">
                <img
                  className="w-full h-full object-cover opacity-80 "
                  src={item.image}
                  alt={`${item.slug || ''}`}
                />
              </section>
            </SwiperSlide>
          )) }
      </Swiper>
    </div>
  );
}
