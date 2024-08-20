import React, { useState } from "react";
import ThreeSixty from "react-360-view";
import { ReactImageTurntable } from "react-image-turntable";

const ProductCard = ({ product }) => {
  const [rotationDisabled, setRotationDisabled] = useState(true);

  const handleKeyDown = (ev) => {
    if (rotationDisabled) return;

    if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
      setRotationDisabled(true);
    }
  };

  return (
    <div className="product-card">
      <ReactImageTurntable
        images={product.images}
        autoRotate={{ disabled: rotationDisabled, interval: 200 }}
      />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
