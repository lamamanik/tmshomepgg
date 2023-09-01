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
import { Autoplay } from "swiper/modules";
import Fade from "react-reveal/Fade";

const Testimonial = () => {
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
    <Fade bottom>
      <div
        name="testomonial"
        className="  cursor-pointer my-28 text-[#FFEDDB]  sm:px-10 rounded-xl  relative shadow-sm "
      >
        <div className="py-16 ">
          <Fade bottom>
            <h1 className="text-4xl font-bold text-center">
              What our customers are saying about us
            </h1>
          </Fade>
        </div>

        <div
          className="mb-10 h-[270px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="text-center  px-6   text-18 flex justify-center items-center">
              <div className="flex flex-col bottom-0 items-center lg:mx-20">
                <div className=" relative text-center">
                  {/* <AiOutlineSwapRight className="absolute top-0 left-2 w-8 h-8 dark:text-gray-700" /> */}
                  <div className="py-1">
                    <Fade bottom>
                      <p className="text-xl italic font-semibold">
                        "Our productivity soared with the Task Management System
                        (TMS)! Seamless task handling, better teamwork, and easy
                        organization. A true asset to our success!"
                      </p>
                    </Fade>
                  </div>
                  {/* <AiOutlineSwapLeft className="absolute bottom-0 right-0 w-8 h-9 dark:text-gray-700" /> */}
                </div>

                <div className="  flex flex-row gap-4 items-center">
                  <Fade bottom>
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlineUserDelete className="h-8" />

                      <p>Conner mcgregor</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlinePhone className="" />
                      <p>9827364542</p>
                    </div>
                  </Fade>
                </div>
                <span className="w-[300px] h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center  px-6  mt-5 text-18 flex justify-center items-center">
              <div className="flex flex-col bottom-0 items-center lg:mx-20">
                <div className=" relative text-center">
                  {/* <AiOutlineSwapRight className="absolute top-0 left-2 w-8 h-8 dark:text-gray-700" /> */}
                  <div className="py-1">
                    <Fade bottom>
                      <p className="text-xl italic font-semibold">
                        "We love our new Task Management System (TMS)! It
                        streamlines tasks, enhances teamwork, and boosts
                        productivity. A game-changer for our business!"
                      </p>
                    </Fade>
                  </div>
                  {/* <AiOutlineSwapLeft className="absolute bottom-0 right-0 w-8 h-9 dark:text-gray-700" /> */}
                </div>
                <Fade bottom>
                  <div className=" mt-5 flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlineUserDelete className="h-8" />
                      <p>Hari prasad</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlinePhone className="" />
                      <p>9827364542</p>
                    </div>
                  </div>
                </Fade>
                <span className="w-[300px] h-1 my-2 rounded-lg z-0 dark:bg-violet-400"></span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center  px-6  mt-5 text-18 flex justify-center items-center">
              <div className="flex flex-col bottom-0 items-center lg:mx-20">
                <div className=" relative text-center">
                  {/* <AiOutlineSwapRight className="absolute top-0 left-2 w-8 h-8 dark:text-gray-700" /> */}
                  <div className="py-1">
                    <Fade bottom>
                      <p className="text-xl italic font-semibold">
                        "We love our new Task Management System (TMS)! It
                        streamlines tasks, enhances teamwork, and boosts
                        productivity. A game-changer for our business!"
                      </p>
                    </Fade>
                  </div>
                  {/* <AiOutlineSwapLeft className="absolute bottom-0 right-0 w-8 h-9 dark:text-gray-700" /> */}
                </div>
                <Fade bottom>
                  <div className=" mt-5 flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlineUserDelete className="h-8" />
                      <p>Hari prasad</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlinePhone className="" />
                      <p>9827364542</p>
                    </div>
                  </div>
                </Fade>
                <span className="w-[300px] h-1 my-2 rounded-lg z-0 dark:bg-violet-400"></span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center  px-6  mt-5 text-18 flex justify-center items-center">
              <div className="flex flex-col bottom-0 items-center lg:mx-20">
                <div className=" relative text-center">
                  {/* <AiOutlineSwapRight className="absolute top-0 left-2 w-8 h-8 dark:text-gray-700" /> */}
                  <div className="py-1">
                    <Fade bottom>
                      <p className="text-xl italic font-semibold">
                        "We love our new Task Management System (TMS)! It
                        streamlines tasks, enhances teamwork, and boosts
                        productivity. A game-changer for our business!"
                      </p>
                    </Fade>
                  </div>
                  {/* <AiOutlineSwapLeft className="absolute bottom-0 right-0 w-8 h-9 dark:text-gray-700" /> */}
                </div>
                <Fade bottom>
                  <div className=" mt-5 flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlineUserDelete className="h-8" />
                      <p>Hari prasad</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlinePhone className="" />
                      <p>9827364542</p>
                    </div>
                  </div>
                </Fade>
                <span className="w-[300px] h-1 my-2 rounded-lg z-0 dark:bg-violet-400"></span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center  px-6  mt-5 text-18 flex justify-center items-center">
              <div className="flex flex-col bottom-0 items-center lg:mx-20">
                <div className=" relative text-center">
                  {/* <AiOutlineSwapRight className="absolute top-0 left-2 w-8 h-8 dark:text-gray-700" /> */}
                  <div className="py-1">
                    <Fade bottom>
                      <p className="text-xl italic font-semibold">
                        "We love our new Task Management System (TMS)! It
                        streamlines tasks, enhances teamwork, and boosts
                        productivity. A game-changer for our business!"
                      </p>
                    </Fade>
                  </div>
                  {/* <AiOutlineSwapLeft className="absolute bottom-0 right-0 w-8 h-9 dark:text-gray-700" /> */}
                </div>
                <Fade bottom>
                  <div className=" mt-5 flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlineUserDelete className="h-8" />
                      <p>Hari prasad</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <AiOutlinePhone className="" />
                      <p>9827364542</p>
                    </div>
                  </div>
                </Fade>
                <span className="w-[300px] h-1 my-2 rounded-lg z-0 dark:bg-violet-400"></span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Fade>
  );
};

export default Testimonial;
