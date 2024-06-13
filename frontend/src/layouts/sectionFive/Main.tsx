import React from "react";
import one from "../../assets/img/portfolio/one.png";
import two from "../../assets/img/portfolio/two.png";
import three from "../../assets/img/portfolio/three.png";
import "../../assets/layouts/sectionFive.scss";
const Main: React.FC = () => {
  return (
    <div className="section-five">
      <div className="section-five__header">PORTFOLIO</div>
      <div className="section-five__body">
        <div className="section-five__body__left">Some Of Our Best Works</div>
        <div className="section-five__body__right">
          <div className="section-five__body__right__btn">Load More</div>
          <div className="section-five__body__right__ornamental"></div>
        </div>
      </div>
      <div className="section-five__img-box">
        <div className="section-five__img-box__special-img">
          <img src={one} alt="" />
          <div className="section-five__img-box__special-img__header">
            UI Design
          </div>
          <div className="section-five__img-box__special-img__body">
            Greenfy Website
          </div>
        </div>
        <div>
          <img src={two} alt="" />
        </div>
        <div>
          <img src={three} alt="" />
        </div>
        <div>
          <img src={three} alt="" />
        </div>
        <div>
          <img src={two} alt="" />
        </div>
        <div>
          <img src={one} alt="" />
        </div>
        <div>
          <img src={one} alt="" />
        </div>
        <div>
          <img src={two} alt="" />
        </div>
        <div>
          <img src={three} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
