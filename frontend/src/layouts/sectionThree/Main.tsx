import React from "react";
import one from "../../assets/img/features/one.png";
import two from "../../assets/img/features/two.png";
import three from "../../assets/img/features/three.png";
import four from "../../assets/img/features/four.png";

import "../../assets/layouts/sectionThree.scss";
interface CardPropsType {
  image: string;
  header: string;
  body: string;
}

const Card: React.FC<CardPropsType> = (props) => {
  const { image, header, body } = props;
  return (
    <div className="section-three-card">
      <img src={image} className="section-three-card__image" />
      <div className="section-three-card__header">{header}</div>
      <div className="section-three-card__body">{body}</div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="section-three">
      <div className="section-three__content">
        <div className="section-three__content__header">FEATURES</div>
        <div className="section-three__content__header-secondary">
          Giving Your Business Some Great Ideas
        </div>
        <div className="section-three__content__body">
          Every designer needs the right tools to do the perfect job.
          Thankfully, we can do that. I design products that are more than
          pretty. I make them shippable and usable.
        </div>
        <div className="section-three__content__btn">
          <div className="section-one__content__btn__btn">Contact US</div>
          <div className="section-one__content__btn__ornamental"></div>
        </div>
      </div>
      <div className="section-three__img-box">
        <div className="section-three__img-box__left">
          <Card
            image={one}
            header="UX Experience"
            body="I design products that are more than pretty. I make them usable."
          />
          <Card
            image={two}
            header="Product Analysis"
            body="I design products that are more than pretty. I make them usable."
          />
        </div>
        <div className="section-three__img-box__right">
          <Card
            image={three}
            header="UI Design"
            body="I design products that are more than pretty. I make them usable."
          />

          <Card
            image={four}
            header="Product Design"
            body="I design products that are more than pretty. I make them usable."
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
