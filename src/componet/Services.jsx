import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "/src/App.css";

// import required modules
import { Navigation,FreeMode, Pagination } from "swiper/modules";

export default function Services() {
  return (
    <>
      <div className="text-center bg-[#352F44]">
        <h1 className="text-[#D9D9D9] uppercase font-bold text-xl pt-10">
          {" "}
          services{" "}
        </h1>
        <h1 className="text-[#D9D9D9] font-bold text-4xl">
          {" "}
          What I can Do For Now
        </h1>
        <h4 className="text-[#D9D9D9] text-xl sm:text-base ">
          {" "}
          Life for something or Die for nothing
        </h4>
        <div className="py-4 pb-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode,Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="my-10">
              <img
                src="/src/assets/img/Book.png"
                alt=""
                srcSet=""
                className="mx-auto my-10 sm:w-1/3"
                width={70}
              />
              <h2 className="text-2xl text-[#D9D9D9] font-semibold uppercase">
                {" "}
                Reading{" "}
              </h2>
            </SwiperSlide>
            <SwiperSlide className="my-10">
              <img
                src="src/assets/img/Musical Notes.png"
                alt=""
                className="mx-auto my-10 sm:w-1/3"
                width={70}
              />
              <p className="text-2xl font-semibold uppercase text-[#D9D9D9]">
                {" "}
                playing music{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide className="my-10">
              <img
                src="src/assets/img/Quran.png"
                alt=""
                className="mx-auto my-10 sm:w-1/3"
                width={70}
              />
              <p className="text-2xl font-semibold uppercase text-[#D9D9D9]">
                {" "}
                playing music{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide className="my-10">
              <img
                src="src/assets/img/Workstation.png"
                alt=""
                className="mx-auto my-10 sm:w-1/3"
                width={70}
              />
              <p className="text-2xl font-semibold uppercase text-[#D9D9D9]">
                {" "}
                playing music{" "}
              </p>
            </SwiperSlide>
            {/* <SwiperSlide className="my-10">
              <img
                src="src/assets/img/Musical Notes.png"
                alt=""
                className=" md:mx-36 lg:mx-auto "
              />
              <p className="text-2xl font-semibold uppercase text-[#D9D9D9]">
                {" "}
                playing music{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide className="my-10">
              <img
                src="src/assets/img/Musical Notes.png"
                alt=""
                className=" md:mx-36 lg:mx-auto "
              />
              <p className="text-2xl font-semibold uppercase text-[#D9D9D9]">
                {" "}
                playing music{" "}
              </p>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
