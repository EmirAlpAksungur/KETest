import React from "react";

import "../../assets/layouts/footer.scss";
const Main = () => {
  return (
    <>
      <div className="app-footer-web">
        <hr className="app__divider" />
        <div className="app-footer">
          <div>© 2023 Ideapeel Inc. All Rights Reserved</div>
          <div>Privacy Policy | Terms and Conditions</div>
        </div>
      </div>
      <div className="app-footer-mobil">
        <div>Privacy Policy | Terms and Conditions</div>
        <hr className="app__divider" />
        <div>© 2023 Ideapeel Inc. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Main;
