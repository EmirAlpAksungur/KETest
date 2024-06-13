import React from "react";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import "../../assets/layouts/header.scss";

const Main: React.FC = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo-box">
        <Logo />
      </div>
      <div className="app-header__btn-box">
        <div className="app-header__btn-box__btn">About</div>
        <div className="app-header__btn-box__btn">Service</div>
        <div className="app-header__btn-box__btn">Blogs</div>
        <div className="app-header__btn-box__btn">FAQ</div>
        <div className="app-header__btn-box__ornamental-btn">
          <div className="app-header__btn-box__ornamental-btn__btn">
            Contact Me
          </div>
          <div className="app-header__btn-box__ornamental-btn__ornamental"></div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Main;
