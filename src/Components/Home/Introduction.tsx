import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";
import { client } from "../../services/prismic";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner";

type BannersData = Array<{
  id: string;
  image: string;
  slug: string | null ;
}>


export function Introduction() {
  // const [banners] = useAllPrismicDocumentsByType('banner')
  const [banner, setBanner] = useState<BannersData>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async function() {
      setIsLoading(true)
      const banners = await client.getAllByType("banner")

      const banner = banners?.map(item => {
        return {
          id: item.id,
          slug: item.uid,
          image: item.data.image.url,
        }
      })

      setBanner(banner)
      setIsLoading(false)
    })()
  }, [])

  return (
    <div className="w-full md:h-[calc(100vh-10rem)] animate-goVisible bg-zinc-800">
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
        {isLoading && (
          <SwiperSlide >
            <Spinner />
          </SwiperSlide>
        )}

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
