import React from "react";

import Header from "../layouts/header/Main";
import SectionOne from "../layouts/sectionOne/Main";
import "../assets/pages/app.scss";

const Main: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <SectionOne />
    </div>
  );
};

export default Main;
