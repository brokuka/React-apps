import React from "react";
import { Swiper } from "swiper/react";

/* Style */
import "./Slider.scss";

const Slider = ({ children, ...props }) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export default Slider;
