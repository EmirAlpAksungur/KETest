import React from "react";
import "../../assets/layouts/sectionFour.scss";
interface ItemPropsType {
  header: string;
  body: string;
}

const Item: React.FC<ItemPropsType> = (props) => {
  const { header, body } = props;
  return (
    <div className="section-four__item">
      <div className="section-four__item__header">{header}</div>
      <div className="section-four__item__body">{body}</div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="section-four">
      <Item header="12K+" body="Project Complete" />
      <Item header="7K+" body="Happy Client" />
      <Item header="10K+" body="Years Experience" />
      <Item header="270K+" body="Win Awards" />
    </div>
  );
};

export default Main;
