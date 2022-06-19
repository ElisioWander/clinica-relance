import { Swiper, SwiperSlide } from "swiper/react";
import feedback from "../../../data.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Quotes } from "phosphor-react";

type FeedbackData = Array<{
  id: string;
  img: string;
  content: string;
  name: string;
}>;

export function Feedback() {
  const data: FeedbackData = feedback.feedback;

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
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="flex flex-col items-center justify-center " >
              <div className="w-4/5 h-4/5 p-5  flex flex-col items-center justify-around rounded-sm shadow-lg  ">
                <div className="w-full md:w-4/5 flex bg-green-300 items-center justify-center gap-4 p-5 md:p-12 rounded-lg ">
                  <div><Quotes className="rotate-180 text-green-100 hidden sm:block sm:w-8 sm:h-8 md:w-12 md:h-12 " /></div>
                  <p className="text-gray-700 text-xs sm:text-sm font-poppins ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet velit molestiae illo. Sint vero eius voluptate hic temporibus reprehenderit, laboriosam adipisci esse totam aliquid fugiat natus ipsa recusandae rem!
                  </p>
                </div>
                <div className="w-full h-1/3 flex flex-col items-center p-2 justify-between ">
                  <div className="w-14 h-14 bg-green-300 rounded-full border-2 border-green-300 " >
                    <img
                      src={item.img}
                      alt="banner"
                      className="w-full h-full object-cover rounded-full "
                    />
                  </div>

                  <span className="text-sm text-gray-300 font-roboto font-bold" >{item.name}</span>
                  <span className="text-xs text-gray-700 font-roboto " >Cliente ❤</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
