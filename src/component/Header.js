import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>web development and website promotion</h1>
        <Typed
          className="Typed-text"
          strings={[
            "Web design",
            "Web development",
            "Facebook Ads",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#Contact" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
