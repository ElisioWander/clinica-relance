import { Swiper, SwiperSlide } from "swiper/react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay, A11y } from "swiper";

export function Introduction() {
  const [banners] = useAllPrismicDocumentsByType("banner") 

  const banner = banners?.map(item => {
    return {
      id: item.id,
      slug: item.uid,
      image: item.data.image.url,
    }
  })

  return (
    <div className="w-full md:h-[calc(100vh-10rem)] md:animate-goVisible bg-zinc-800">
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
        modules={[Autoplay, Pagination, Navigation, A11y]}
        className={`${`w-full h-full rounded-md`}, mySwiper`}
      >
        {banner &&
          banner.map((item) => (
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
