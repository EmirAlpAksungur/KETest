import React from "react";

import Header from "../layouts/header/Main";
import SectionOne from "../layouts/sectionOne/Main";
import SectionTwo from "../layouts/sectionTwo/Main";
import SectionThree from "../layouts/sectionThree/Main";
import SectionFour from "../layouts/sectionFour/Main";
import "../assets/pages/app.scss";

const Main: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default Main;
