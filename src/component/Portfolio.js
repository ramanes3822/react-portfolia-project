import React from "react";
import Project1 from "./image/project1.jpg";
import Project2 from "./image/project2.jpg";
import Project3 from "./image/project3.jpg";
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
      name: "project1",
      projectLink: "https://github.com/ramanes3822/myportfolia",
      githubLink: "https://github.com/ramanes3822/myportfolia",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus repellendus blanditiis possimus non repudiandae dolorem",
    },
    {
      id: 2,
      img: Project2,
      name: "project2",
      projectLink: "https://github.com/ramanes3822/myportfolia",
      githubLink: "https://github.com/ramanes3822/myportfolia",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus repellendus blanditiis possimus non repudiandae dolorem",
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
            https://react-redux-task-manager.herokuapp.com/
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
    <div className="portfolio-wrapper">
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
