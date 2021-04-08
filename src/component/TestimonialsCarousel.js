import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import avatarts
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";
//--------------------//
const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={2500}
      showIndicators={true}
    >
      <>
        <img src={avatar1} alt="John doe 1" />
        <div className="myCarousel">
          <h3>John doe 1</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            fugit corrupti provident natus doloribus soluta culpa ex et unde
            minima!
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane dane 2" />
        <div className="myCarousel">
          <h3>Jane dane 2</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            fugit corrupti provident natus doloribus soluta culpa ex et unde
            minima!
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John doe 3" />
        <div className="myCarousel">
          <h3>John doe 3</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            fugit corrupti provident natus doloribus soluta culpa ex et unde
            minima!
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John doe 4" />
        <div className="myCarousel">
          <h3>John doe 4</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            fugit corrupti provident natus doloribus soluta culpa ex et unde
            minima!
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
