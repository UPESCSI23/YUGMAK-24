import React, { useState, useEffect, useRef } from "react";
import Image1 from "../../Assets/Images/main.jpeg";
import Image2 from "../../Assets/Images/project7.jpeg";
import Image3 from "../../Assets/Images/fifa.jpg";

const Landing = () => {
  const imagesRef = useRef([Image1, Image2, Image3]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % imagesRef.current.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {imagesRef.current.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${index}`}
          className={`absolute transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: index === currentIndex ? 10 : 1,
          }}
        />
      ))}
    </div>
  );
};

export default Landing;
