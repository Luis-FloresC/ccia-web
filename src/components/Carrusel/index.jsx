"use client";

import { useEffect, useState } from "react";

export function Carrusel({ pictures = [] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(pictures);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageIndex == images.length - 1) {
        setImageIndex(() => 0);
        return;
      }
      setImageIndex(() => imageIndex + 1);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex]);
  



  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <br />
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images[imageIndex]} className="d-block w-100 rounded img-fluid" width='auto' alt="..." style={{height:'350px'}} />
        </div>

      </div>

    </div>



  );
}
