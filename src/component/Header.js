import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-bg">
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
          <Link
            className="btn-main-offer"
            smooth={true}
            to="contact"
            offset={-110}
            href="#"
          >
            contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
