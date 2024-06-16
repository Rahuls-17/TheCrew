import React, { useState, useEffect } from 'react';
import './SlideShow.css'; // Import the CSS file for styling

const SlideShow = ({ images, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
            <img src={image} alt={`Slide ${index}`} />
            <div className="text-overlay">{texts[index]}</div> {/* Text overlay */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
