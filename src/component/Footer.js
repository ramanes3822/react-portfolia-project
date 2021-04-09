import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Mascow main st 2020 office #223</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+601135508507</a>
            </div>
            <div className="d-flex">
              <p>ramanes3822@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-Nav">Home</a>
                <br />
                <a className="footer-Nav">About Me</a>
                <br />
                <a className="footer-Nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-Nav">Experience</a>
                <br />
                <a className="footer-Nav">Portfolio</a>
                <br />
                <a className="footer-Nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-centre">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://github.com/ramanes3822"}
                quote={"FullStack Developer"}
                hashtag="#JavaScript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://github.com/ramanes3822"}
                quote={"FullStack Developer"}
                hashtag="#JavaScript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://github.com/ramanes3822"}
                quote={"FullStack Developer"}
                hashtag="#JavaScript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://github.com/ramanes3822"}
                quote={"FullStack Developer"}
                hashtag="#JavaScript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;{new Date().getFullYear()}&nbsp;Galaxies
              technologies | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
