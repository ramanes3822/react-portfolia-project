import React from "react";
import my_picture from "../images/myPic.jpg";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={my_picture} alt="my_pic" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">ABOUT ME</h1>
          <p>
            Hello! I am Ramanes. I have been developing websites for over 3
            years. Technologies I use is MERN(MongoDB, Express, ReactJS and
            NodeJS). I create responsive websites that are displayed on all
            devices desktops and smartphones.I develop this website to show my
            ability on creating React based website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
