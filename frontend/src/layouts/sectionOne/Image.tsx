import React from "react";
import sectionOne from "../../assets/Img/sectionOne.png";
const Image: React.FC = () => {
  return <img src={sectionOne}></img>;
};

export default React.memo(Image);
