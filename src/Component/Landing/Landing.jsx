import React, { useState, useEffect, useRef } from "react";
import Image1 from "../../Assets/Images/main.jpeg";
import Image2 from "../../Assets/Images/project7.jpeg";
import Image3 from "../../Assets/Images/fifa.jpg";
import img from '../../Assets/Images/csi logo.png';
import './Landing.css';
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
    <>
      <div className="logo" style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}>
        <img src={img} alt="Logo" className="csi-logo" style={{ maxWidth: "100px", height: "auto", paddingRight: '15px' }} />
      </div>
      <div className="flex justify-center items-center h-screen" style={{ position: "relative", zIndex: 1 }}>


        {imagesRef.current.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index}`}
            className={`absolute h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{
              zIndex: index === currentIndex ? 10 : 1,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Landing;
