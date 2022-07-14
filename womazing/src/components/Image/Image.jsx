import React from "react";

const Image = ({ href, width, height, alt, ...props }) => {
  return (
    <picture>
      <source srcSet={`${href}.webp`} type="image/webp" />
      <img src={`${href}.jpg`} alt={alt} {...props} />
    </picture>
  );
};

export default Image;
