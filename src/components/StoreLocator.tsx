import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import Arrow from "../assets/car-left.png";
import BrownStore from "../assets/beown-store.jpg";
import GreenStore from "../assets/green-store.jpg";
import BlueStore from "../assets/blue-store.jpg";
import { useState } from "react";

import { Navigation, Scrollbar } from "swiper/modules";

const StoreLocator = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    console.log(currIndex);
    setCurrIndex(swiper.realIndex);
  };
  return (
    <section className="flex md:flex-row pt-[150px] z-50">
      <div className="w-full md:w-[41.67%] mt-8 md:mt-0">
        <div className="w-full max-w-[480px] mx-auto px-[20px] md:px-[30px] lg:px-[60px]">
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-light leading-[1.2] mb-[15px] md:mb-[20px] tracking-[-0.5px] text-[#333333]">
            Store locator
          </h2>

          <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </p>

          <div className="w-[300px] cursor-pointer flex items-center justify-between p-4 border border-btn-border group hover:bg-dark-bg">
            <p className="font-bold transition duration-300 text text-dark-bg group-hover:text-white">
              Find a nearby store
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-800 transition duration-300 size-4 group-hover:text-white"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[58.33%] relative h-[400px] group">
        <div className="w-full h-full ">
          <Swiper
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            modules={[Scrollbar, Navigation]}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: ".next-slide",
              prevEl: ".prev-slide",
            }}
            className="h-full mySwiper"
          >
            <SwiperSlide className="h-full">
              <img src={BrownStore} alt="brown store" />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img src={GreenStore} alt="brown store" />
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <img src={BlueStore} alt="brown store" />
            </SwiperSlide>
          </Swiper>
          {currIndex !== 0 && (
            <button className="absolute left-0 z-50 flex items-center justify-center pl-8 transition-opacity duration-300 -translate-y-1/2 opacity-0 cursor-pointer prev-slide top-1/2 iabsolute p-7 w-fit bg-dark-bg group-hover:opacity-100">
              <img src={Arrow} alt="left arrow" className="size-6" />
            </button>
          )}

          {currIndex !== 2 && (
            <button className="absolute right-0 z-50 flex items-center justify-center pr-8 transition-opacity duration-300 -translate-y-1/2 opacity-0 cursor-pointer next-slide top-1/2 p-7 w-fit bg-dark-bg group-hover:opacity-100">
              <img src={Arrow} alt="left arrow" className="rotate-180 size-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
