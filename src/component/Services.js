import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <div>
        <h1 className="py-5">Services</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="icons-bg">
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faDesktop}
                    size="2x"
                  />
                </div>
                <h3>Web Design</h3>
                <p>
                  I approach each project individually and always focus on the
                  result.
                </p>
              </div>
            </div>
            {/*-Web development-*/}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="icons-bg">
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faFileCode}
                    size="2x"
                  />
                </div>
                <h3>Web Development</h3>
                <p>Your website will be build with new proven technologies.</p>
              </div>
            </div>
            {/*-Facebook-*/}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="icons-bg">
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faFacebookF}
                    size="2x"
                  />
                </div>
                <h3>Facebook Adds</h3>
                <p>
                  Your potential clients well see your services or product on
                  Facebook
                </p>
              </div>
            </div>
            {/*-Google Ads-*/}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="icons-bg">
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faGoogle}
                    size="2x"
                  />
                </div>
                <h3>Google Ads</h3>
                <p>
                  Your product or service will appear at the top of the Google
                  search.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
