import React, { useEffect, useState } from 'react';
import './App.css';

const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;
  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};

function ImageContainer({ src, alt, subtitle }) {
  const [imageDimensions, setImageDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    loadImage(setImageDimensions, src);
  }, [src]);

  const calculatedHeight = (imageDimensions.height / imageDimensions.width) * 1000;

  return (
    <div className="image-container">
      <img src={src} alt={alt} width="1000" height={calculatedHeight} />
      {subtitle && <p className="image-subtitle">{subtitle}</p>}
    </div>
  );
}

export default ImageContainer;
