import React from "react";
import Project1 from "./image/project1.jpg";
import Project2 from "./image/project1.jpg";
import Project3 from "./image/project1.jpg";
import Project4 from "./image/project1.jpg";
//font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//react popup
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
  //project1
  const openPopupProject1 = () => {
    const content = (
      <>
        <img className="portfolio-img-popupbox" src={Project1} alt="project1" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptatibus repellendus blanditiis possimus non repudiandae dolorem
          libero nostrum est. Voluptates.
        </p>
        <b>Github:</b>
        <a
          href=""
          className="popbox-hyper-link"
          onClick={() => {
            window.open("https://github.com/ramanes3822/myportfolia");
          }}
        >
          https://github.com/ramanes3822/myportfolia
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };
  const popupboxConfigProject1 = {
    titleBar: {
      enable: true,
      text: "Project1",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //project2
  const openPopupProject2 = () => {
    const content = (
      <>
        <img className="portfolio-img-popupbox" src={Project2} alt="project2" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptatibus repellendus blanditiis possimus non repudiandae dolorem
          libero nostrum est. Voluptates.
        </p>
        <b>Github:</b>
        <a
          href=""
          className="popbox-hyper-link"
          onClick={() => {
            window.open("https://github.com/ramanes3822/myportfolia");
          }}
        >
          https://github.com/ramanes3822/myportfolia,
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };
  const popupboxConfigProject2 = {
    titleBar: {
      enable: true,
      text: "Project2",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //project3
  const openPopupProject3 = () => {
    const content = (
      <>
        <img className="portfolio-img-popupbox" src={Project3} alt="project3" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptatibus repellendus blanditiis possimus non repudiandae dolorem
          libero nostrum est. Voluptates.
        </p>
        <b>Github:</b>
        <a
          href=""
          className="popbox-hyper-link"
          onClick={() => {
            window.open("https://github.com/ramanes3822/myportfolia");
          }}
        >
          https://github.com/ramanes3822/myportfolia,
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };
  const popupboxConfigProject3 = {
    titleBar: {
      enable: true,
      text: "Project3",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //project4
  const openPopupProject4 = () => {
    const content = (
      <>
        <img className="portfolio-img-popupbox" src={Project4} alt="project4" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptatibus repellendus blanditiis possimus non repudiandae dolorem
          libero nostrum est. Voluptates.
        </p>
        <b>Github:</b>
        <a
          href=""
          className="popbox-hyper-link"
          onClick={() => {
            window.open("https://github.com/ramanes3822/myportfolia");
          }}
        >
          https://github.com/ramanes3822/myportfolia,
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProject4 = {
    titleBar: {
      enable: true,
      text: "Project4",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupProject1}>
            <img src={Project1} alt="Project1" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupProject2}>
            <img src={Project2} alt="Project2" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupProject3}>
            <img src={Project3} alt="Project3" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupProject4}>
            <img src={Project4} alt="Project4" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigProject1} />
    </div>
  );
};

export default Portfolio;
