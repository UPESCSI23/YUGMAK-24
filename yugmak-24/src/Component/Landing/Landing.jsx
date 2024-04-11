import React, { useState, useEffect, useRef } from "react";
import Image1 from "../../Assets/Images/main.jpeg";
import Image2 from "../../Assets/Images/project7.jpeg";
import Image3 from '../../Assets/Images/fifa.jpg';
import "./Landing.css";

const Landing = () => {

  const imagesRef = useRef([Image1, Image2, Image3]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesRef.current.length);
    }, 5000);

    return () => {
      clearInterval(timer.current);
    };
  }, [currentIndex]);

  return (
    <div className="fading-images">
      {imagesRef.current.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${index}`}
          className={`${index === currentIndex ? 'visible' : 'hidden'}`}
          style={{
            WebkitTransform:
              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
          }}
        />
      ))}
    </div>
  );
};

export default Landing;