import React from "react";

import arrow from "../../assets/img/latestBlog/readmore.png";

import facebook from "../../assets/img/social/facebook.png";
import linkedin from "../../assets/img/social/linkedin.png";
import instagram from "../../assets/img/social/instagram.png";
import be from "../../assets/img/social/be.png";
import vector from "../../assets/img/social/vector.png";

import Logo from "../header/Logo";
import "../../assets/layouts/sectionNine.scss";
const Main = () => {
  return (
    <div className="section-nine">
      <div className="section-nine__header">Have you project in mind?</div>
      <div className="section-nine__header-secondary">
        Let's Make Something <br /> Great Together!
      </div>
      <div className="section-nine__ball">
        <div className="section-nine__ball__text">CONTACT WITH US</div>
        <div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="section-nine__logo">
        <Logo />
      </div>
      <div className="section-nine__social-btn ">
        <img src={facebook} alt="" />
        <img src={linkedin} alt="" />
        <img src={instagram} alt="" />
        <img src={be} alt="" />
        <img src={vector} alt="" />
      </div>
    </div>
  );
};

export default Main;
