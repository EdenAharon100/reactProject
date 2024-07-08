import React, { useState, useEffect } from "react";

const BearComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bearImages = [
    "גוני1.png",
    "גוני2.png",
    "גוני3.png",
    "גוני4.png",
    "גוני5.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bearImages.length);
    }, 2000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Cute Bear</h2>
      <img
        src={bearImages[currentImage]}
        alt={`Bear Image ${currentImage + 1}`}
        style={{width: "85%", height: "350px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default BearComponent;
