import React from "react";
import Project1 from "../images/portfolio1.jpg";
import Project2 from "../images/calculator_project.JPG";
import Project3 from "../images/project3.jpg";
//font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//react popup
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const objectList = [
    {
      id: 1,
      img: Project1,
      name: "First portfolio",
      projectLink: "https://ramanesportfolia.netlify.app/",
      githubLink: "https://github.com/ramanes3822/myportfolia",
      text:
        "This is my first portfolio project, develop by using only javascript,html,css.",
    },
    {
      id: 2,
      img: Project2,
      name: "Simple Javascript calculator",
      projectLink: "https://ramanes-javascript-calculator.netlify.app/",
      githubLink: "https://github.com/ramanes3822/javascript-calculator",
      text:
        "This is a simple javascript calculator, develop with javascript,html,css",
    },
    {
      id: 3,
      img: Project3,
      name: "project3",
      projectLink: "https://github.com/ramanes3822/myportfolia",
      githubLink: "https://github.com/ramanes3822/myportfolia",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus repellendus blanditiis possimus non repudiandae dolorem",
    },
  ];

  objectList.forEach(function (item) {
    item.id = () => {
      const content = (
        <>
          <img
            className="portfolio-img-popupbox"
            src={item.img}
            alt={item.name}
          />
          <p>{item.text}</p>
          <b>Visit page: </b>{" "}
          <a
            className="popbox-hyper-link"
            onClick={() => window.open(item.projectLink, "_blank")}
          >
            {item.projectLink}
          </a>
          <br />
          <b>Github: </b>
          <a
            className="popbox-hyper-link"
            onClick={() => {
              window.open(item.githubLink, "_blank");
            }}
          >
            {item.githubLink}
          </a>
        </>
      );

      PopupboxManager.open({ content });

      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: item.name,
          },
          fadeIn: true,
          fadeInSpeed: 500,
        },
      });
    };
  });

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          {objectList.map((item) => (
            <div key={item}>
              <div className="portfolio-image-box" onClick={item.id}>
                <img
                  src={item.img}
                  alt={item.img}
                  className="portfolio-image"
                />
                <div className="overflow"></div>
                <FontAwesomeIcon
                  className="portfolio-icon"
                  icon={faSearchPlus}
                />
              </div>
              <PopupboxContainer {...item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
