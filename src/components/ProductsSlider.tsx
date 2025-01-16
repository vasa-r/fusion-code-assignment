import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import Left from "../assets/left.svg";
import Arrow from "../assets/car-left.png";

import { Navigation, Scrollbar } from "swiper/modules";
import ProductCard from "./ProductCard";

import { productsData } from "../lib/constants";
import { useState } from "react";

const ProductsSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrIndex(swiper.realIndex);
  };

  return (
    <section className="relative w-full">
      <div className="pt-[75px] md:pt-[150px] w-full md:h-[720px] md:px-24 group">
        <Swiper
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          modules={[Scrollbar, Navigation]}
          slidesPerView={3}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
          }}
          className="h-full mySwiper"
        >
          <SwiperSlide className="h-full">
            <div className="px-4">
              <p className="mb-[5px] font-bold">Skin Care+</p>
              <h1 className="text-[30px] text-text mb-[5px] font-medium">
                Intensive formulations for complex skin
              </h1>
              <p className="text-text text text-bold mb-[30px]">
                Explore products formulated with mature skin and urban dwellers
                in mind, to provide daily hydration and the additional benefit
                of potent vitamins and anti-oxidants.
              </p>
              <div className="w-full">
                <div className="w-[300px] cursor-pointer flex items-center gap-2 p-4 pl-0">
                  <p className="font-normal transition duration-300 text text-dark-bg">
                    Browse formulations
                  </p>
                  <img src={Left} alt="left arrow" className="size-5" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {productsData.map(({ id, title, subHeading, img }) => (
            <SwiperSlide className="h-full" key={id}>
              <ProductCard title={title} subHeading={subHeading} img={img} />
            </SwiperSlide>
          ))}
        </Swiper>
        {currIndex !== 0 && (
          <button className="absolute left-0 z-50 flex items-center justify-center pl-8 transition-opacity duration-300 opacity-0 cursor-pointer prev-slide top-1/2 iabsolute p-7 w-fit bg-dark-bg group-hover:opacity-100">
            <img src={Arrow} alt="left arrow" className="size-6" />
          </button>
        )}

        {currIndex !== productsData.length - 3 && (
          <button className="absolute right-0 flex items-center justify-center pr-8 transition-opacity duration-300 opacity-0 cursor-pointer next-slide top-1/2 p-7 w-fit bg-dark-bg group-hover:opacity-100">
            <img src={Arrow} alt="left arrow" className="rotate-180 size-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductsSlider;
