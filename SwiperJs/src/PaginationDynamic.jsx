import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const PaginationDynamic = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-10">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="w-full max-w-xl"
      >
        {[...Array(9)].map((_, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-40 bg-amber-300 rounded-xl shadow-md text-xl font-semibold text-gray-800 p-10"
          >
            Slide {i + 1}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PaginationDynamic;
