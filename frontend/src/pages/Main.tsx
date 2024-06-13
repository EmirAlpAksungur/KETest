import React from "react";

import Header from "../layouts/header/Main";
import SectionOne from "../layouts/sectionOne/Main";
import SectionTwo from "../layouts/sectionTwo/Main";
import SectionThree from "../layouts/sectionThree/Main";
import SectionFour from "../layouts/sectionFour/Main";
import SectionFive from "../layouts/sectionFive/Main";
import SectionSix from "../layouts/sectionSix/Main";
import SectionSeven from "../layouts/sectionSeven/Main";
import SectionEight from "../layouts/sectionEight/Main";
import SectionNine from "../layouts/sectionNine/Main";
import Footer from "../layouts/footer/Main";
import "../assets/pages/app.scss";

const Main: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <Footer />
    </div>
  );
};

export default Main;
