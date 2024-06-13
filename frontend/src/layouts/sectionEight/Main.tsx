import React from "react";
import arrow from "../../assets/img/faqs/arrow.png";
import "../../assets/layouts/sectionEight.scss";
const Main = () => {
  return (
    <div className="section-eight">
      <div className="section-eight__container">
        <div className="section-eight__container__left">
          <div className="section-eight__container__left__item">
            <div className="section-eight__container__left__item__text">
              How can we help your business?
            </div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="section-eight__container__left__item">
            <div className="section-eight__container__left__item__text">
              What are the advantages of Bisnext
            </div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="section-eight__container__left__item">
            <div className="section-eight__container__left__item__text">
              Let’s find an office near you?
            </div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="section-eight__container__left__item">
            <div className="section-eight__container__left__item__text">
              How IT consultancy experts work?
            </div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="section-eight__container__right">
          <div className="section-eight__container__right__header">FAQs</div>
          <div className="section-eight__container__right__header-secondary">
            Be Kind to Your Mind Question & Answer
          </div>
          <div className="section-eight__container__right__content">
            All Your Qustions are in A document, in question and answer format,
            that introduces newcomers to a topic or answers common questions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
