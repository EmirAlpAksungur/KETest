import React from "react";
import menuIcon from "../../assets/Img/menu-icon.png";
const MenuIcon: React.FC = () => {
  return <img src={menuIcon}></img>;
};

export default React.memo(MenuIcon);
