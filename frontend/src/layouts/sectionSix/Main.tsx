import React from "react";
import image from "../../assets/img/latestBlog/image.png";
import imageTwo from "../../assets/img/latestBlog/imageTwo.png";
import readmore from "../../assets/img/latestBlog/readmore.png";
import "../../assets/layouts/sectionSix.scss";

const Item: React.FC<{ photo: boolean }> = ({ photo }) => {
  return (
    <div className="section-six__container__content__item">
      <img src={photo ? image : imageTwo} alt="" />
      <div className="section-six__container__content__item__box">
        <div className="section-six__container__content__item__header">
          UI Design | 22 May 2023
        </div>
        <div className="section-six__container__content__item__header-secondary">
          What is UI Design in Front End Design?
        </div>
        <div className="section-six__container__content__item__content">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system
        </div>
        <div className="section-six__container__content__item__read-more">
          READ MORE{" "}
          <img
            src={readmore}
            alt=""
            className="section-six__container__content__item__read-more__icon"
          />
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="section-six">
      <div className="section-six__container">
        <div className="section-six__container__header">LATEST BLOG</div>
        <div className="section-six__container__body">
          <div className="section-six__container__body__left">
            Some Of Our Best Works
          </div>
          <div className="section-six__container__body__right">
            <div className="section-six__container__body__right__btn">
              Load More
            </div>
            <div className="section-six__container__body__right__ornamental"></div>
          </div>
        </div>
        <div className="section-six__container__content">
          <Item photo={true} />
          <Item photo={false} />
          <Item photo={true} />
          <Item photo={false} />
          <Item photo={true} />
          <Item photo={false} />
        </div>
      </div>
    </div>
  );
};

export default Main;
