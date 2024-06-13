import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import quotes from "../../assets/img/testimonials/Icon.png";
import star from "../../assets/img/testimonials/star.png";
import userOne from "../../assets/img/testimonials/userOne.png";
import userTwo from "../../assets/img/testimonials/userTwo.png";
import userThree from "../../assets/img/testimonials/userThree.png";

import "swiper/css";
import "swiper/css/autoplay";
import "../../assets/layouts/sectionSeven.scss";

interface ItemPropsType {
  content: string;
  icon: string;
  name: string;
  point: string;
}

const Item: React.FC<ItemPropsType> = (props) => {
  const { content, icon, name, point } = props;
  return (
    <div className="testimonials-item">
      <div>
        <img src={quotes} alt="" />
      </div>
      <div className="testimonials-item__content">{content}</div>
      <div className="testimonials-item__user-info">
        <div className="testimonials-item__user-info__left">
          <img src={icon} alt="" />
          <div className="testimonials-item__user-info__left__name">{name}</div>
        </div>
        <div className="testimonials-item__user-info__right">
          <img src={star} alt="" />
          <div className="testimonials-item__user-info__right__point">
            {point}
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="section-seven">
      <div className="section-seven__header">Testimonials</div>
      <div className="section-seven__header-secondary">
        What our customer say
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        }}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="testimonials-swipper"
        style={{ overflow: "visible" }}
      >
        <SwiperSlide key={0}>
          <Item
            content="“Now, i can track my business activity with easier and have a great understandable to operate the products"
            icon={userOne}
            name="Berry Gunawan"
            point="3.5"
          />
        </SwiperSlide>
        <SwiperSlide key={1}>
          <Item
            content="“Now, i can track my business activity with easier and have a great understandable to operate the products"
            icon={userTwo}
            name="Janne Cooper"
            point="3.5"
          />
        </SwiperSlide>

        <SwiperSlide key={2}>
          <Item
            content="“Now, i can track my business activity with easier and have a great understandable to operate the products"
            icon={userThree}
            name="Cobocannaeru"
            point="3.5"
          />
        </SwiperSlide>
      </Swiper>
      <div className="testimonials-mobile">
        <Item
          content="“Now, i can track my business activity with easier and have a great understandable to operate the products"
          icon={userOne}
          name="Berry Gunawan"
          point="3.5"
        />
        <Item
          content="“Now, i can track my business activity with easier and have a great understandable to operate the products"
          icon={userTwo}
          name="Janne Cooper"
          point="3.5"
        />
        <Item
          content="“Now, i can track my business activity with easier and have a great understandable to operate the products"
          icon={userThree}
          name="Cobocannaeru"
          point="3.5"
        />
      </div>
    </div>
  );
};

export default Main;
