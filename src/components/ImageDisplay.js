import React from "react";
import "./images.css";
import ImageCard from "./ImageCard";

const ImageDisplay = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-display">{images}</div>;
};

export default ImageDisplay;
