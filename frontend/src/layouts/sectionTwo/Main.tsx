import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import one from "../../assets/Img/trustedBy/one.png";
import two from "../../assets/Img/trustedBy/two.png";
import three from "../../assets/Img/trustedBy/three.png";
import four from "../../assets/Img/trustedBy/four.png";
import five from "../../assets/Img/trustedBy/five.png";

import "swiper/css";
import "swiper/css/autoplay";
import "../../assets/layouts/sectionTwo.scss";

const Main: React.FC = () => {
  return (
    <div className="section-two">
      <div className="section-two__header">Trusted By</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide key={0}>
          <img src={one} className="section-two__icon"></img>
        </SwiperSlide>
        <SwiperSlide key={1}>
          <img src={two} className="section-two__icon"></img>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <img src={three} className="section-two__icon"></img>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <img src={four} className="section-two__icon"></img>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <img src={five} className="section-two__icon"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
