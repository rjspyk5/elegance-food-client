import React from "react";
import { HeadingSection } from "../Shared/HeadingSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import s1 from "../../../assets/home/slide1.jpg";
import s2 from "../../../assets/home/slide2.jpg";
import s3 from "../../../assets/home/slide3.jpg";
import s4 from "../../../assets/home/slide4.jpg";
import s5 from "../../../assets/home/slide5.jpg";

export const MenuCarasoul = () => {
  return (
    <div>
      <HeadingSection
        heading="ORDER ONLINE"
        subheading="---From 11:00am to 10:00pm---"
      />

      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={s1} alt="" />
            <p className="text-center font-bold -mt-16 text-white text-lg">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s2} alt="" />
            <p className="text-center font-bold -mt-16 text-white text-lg">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s3} alt="" />
            <p className="text-center font-bold -mt-16 text-white text-lg">
              Soup
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s4} alt="" />
            <p className="text-center font-bold -mt-16 text-white text-lg">
              Desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={s5} alt="" />
            <p className="text-center font-bold -mt-16 text-white text-lg">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
