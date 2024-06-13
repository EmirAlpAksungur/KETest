import React from "react";

import Header from "../layouts/header/Main";
import SectionOne from "../layouts/sectionOne/Main";
import SectionTwo from "../layouts/sectionTwo/Main";
import "../assets/pages/app.scss";

const Main: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Main;
