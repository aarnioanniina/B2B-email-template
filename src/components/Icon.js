import React from "react";
import PropTypes from "prop-types";

const Icon = ({ src, alt, height = "22px", style = {} }) => {
  return (
    <img src={src} alt={alt} style={{ width: "auto", height, ...style }} />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  style: PropTypes.object
};

export default Icon;
