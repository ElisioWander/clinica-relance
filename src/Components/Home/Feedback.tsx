import { Swiper, SwiperSlide } from "swiper/react";
import { ImQuotesLeft } from "react-icons/im";

import * as prismicH from '@prismicio/helpers'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

export function Feedback() {
  const [feedbacks] = useAllPrismicDocumentsByType('feedback')

  const feedback = feedbacks?.map(fb => {
    return {
      slug: fb.uid,
      name: prismicH.asText(fb.data.name),
      image: fb.data.image.url,
      comment: prismicH.asText(fb.data.comment)?.substring(0, 400)
    }
  })

  return (
    <div className="w-full flex flex-col items-center py-14 bg-white-50 ">
      <h2 className="mb-4">Feedback</h2>
      <div className="w-10 h-1 bg-gray-600 rounded-t-sm "></div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
        className={`${`w-full max-w-[1080px] h-[500px] rounded-md`}, mySwiper`}
      >
        {feedback &&
          feedback.map((item) => (
            <SwiperSlide  key={item.slug} className="flex flex-col items-center justify-center " >
              <div className="w-4/5 h-4/5 p-5  flex flex-col items-center justify-around rounded-sm shadow-lg  ">
                <div className="w-full md:w-4/5 flex bg-green-300 items-center justify-center gap-4 p-5 md:p-12 rounded-lg ">
                  <div><ImQuotesLeft className="rotate-180 text-green-100 hidden sm:block sm:w-8 sm:h-8 md:w-12 md:h-12 " /></div>
                  <p className="text-zinc-700 text-xs sm:text-sm font-poppins ">
                    {item.comment}
                  </p>
                </div>
                <div className="w-full h-1/3 flex flex-col items-center p-2 justify-between ">
                  <div className="w-14 h-14 bg-green-300 rounded-full border-2 border-green-300 " >
                    <img
                      src={item.image}
                      alt="banner"
                      className="w-full h-full object-cover rounded-full "
                    />
                  </div>

                  <span className="text-sm text-zinc-700 font-roboto font-bold" >{item.name}</span>
                  <span className="text-xs text-zinc-500 font-roboto " >Cliente ❤</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
