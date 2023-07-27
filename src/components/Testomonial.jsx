import React, { useRef } from "react";
import {
  AiOutlineUserDelete,
  AiOutlineSwapRight,
  AiOutlineSwapLeft,
  AiOutlinePhone,
} from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Testomonial = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="w-full cursor-pointer my-20 sm:h-[400px] ">
      <div className="p-[20px]">
        <h1 className="text-4xl  font-bold text-center">
          What our customers are saying about us
        </h1>
      </div>

      <div
        className="mb-10 h-[270px] "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="text-center h-[10px] py-10 mt-10 text-18 flex justify-center items-center ">
            <div className="flex flex-col bottom-0 items-center lg:mx-20">
              <div className=" mt-20 relative text-center ">
                <AiOutlineSwapRight className="absolute top-0 left-2 w-8 h-8 dark:text-gray-700" />
                <div className="py-1 my-10">
                  <p className="px-8 text-gray-600  text-xl italic font-semibold  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet non voluptates suscipit inventore aut modi corporis
                  </p>
                </div>

                <AiOutlineSwapLeft className="absolute bottom-0 right-0 w-8 h-9 dark:text-gray-700" />
              </div>
              <span className="w-40 h-1 my-2 rounded-lg dark:bg-violet-400"></span>

              <div className=" text-gray-800 flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-2 items-center">
                  <AiOutlineUserDelete className=" h-8 " />
                  <p>Manik lama</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <AiOutlinePhone className="" />
                  <p>9827364542</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="text-center h-[10px] py-10 mt-10 text-18 flex justify-center items-center ">
            <div className="flex flex-col bottom-0 items-center lg:mx-20">
              <div className=" mt-20 relative text-center ">
                <AiOutlineSwapRight className="absolute top-0 left-2 w-8 h-8 dark:text-gray-700" />
                <div className="py-1 my-10">
                  <p className="px-8 text-gray-600  text-xl italic font-semibold  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet non voluptates suscipit inventore aut modi corporis,
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, inventore.
                  </p>
                </div>

                <AiOutlineSwapLeft className="absolute bottom-0 right-0 w-8 h-9 dark:text-gray-700" />
              </div>
              <span className="w-40 h-1 my-2 rounded-lg dark:bg-violet-400"></span>

              <div className=" text-gray-800 flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-2 items-center">
                  <AiOutlineUserDelete className=" h-8 " />
                  <p>Manik lama</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <AiOutlinePhone className="" />
                  <p>9827364542</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testomonial;
