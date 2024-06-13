import React from "react";
import Image from "./Image";
import "../../assets/layouts/section.scss";
const Main: React.FC = () => {
  return (
    <div className="section-one">
      <div className="section-one__image">
        <Image />
      </div>
      <div className="section-one__content">
        <div className="section-one__content__header">
          <div className="section-one__content__header__miami">MIAMI</div>
          <div className="section-one__content__header__walke">
            WALKE<span className="section-one__content__header__r">R</span>
          </div>
        </div>
        <div className="section-one__content__body">
          Award Wining product designer based in Georgia. We create
          user-friendly interfaces for fast-growing startups.
        </div>
        <div className="section-one__content__btn">
          <div className="section-one__content__btn__btn">Book A Call</div>
          <div className="section-one__content__btn__ornamental"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
