import React, { useState, style } from "react";
import logo from "../images/my_logo3.png";
import { Link } from "react-scroll";

//react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const menuItems = [
    { title: "Home", url: "home", cName: "nav-link" },
    { title: "About", url: "about", cName: "nav-link" },
    { title: "Services", url: "services", cName: "nav-link" },
    { title: "Experience", url: "experience", cName: "nav-link" },
    { title: "Portfolio", url: "portfolio", cName: "nav-link" },
    { title: "Contact", url: "contact", cName: "nav-link" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark fixed-top"
      style={{ color: "lightblue" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>

        <button className="navbar-toggler" onClick={handleClick}>
          <FontAwesomeIcon
            icon={clicked ? faTimes : faBars}
            style={{ color: "#fff" }}
          />
        </button>
        <div
          className={`${
            clicked ? "navbar-collapse" : "collapse"
          } navbar-collapse`}
        >
          <ul className="navbar-nav ml-auto ">
            {menuItems.map(function (items) {
              return (
                <li className="nav-item">
                  <Link
                    smooth={true}
                    to={items.url}
                    offset={-110}
                    className={items.cName}
                    onClick={handleClick}
                  >
                    {items.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
