import React, { useState, useEffect } from "react";

const Bear = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bearImages = [
    "wine16.jpg",
    "wine17.jpg",
    "wine18.jpg",
    "wine19.jpg"
    
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
        style={{ width: "50%", height: "350px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default Bear;
