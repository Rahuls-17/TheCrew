// ThumbnailContainer.jsx
import React, { useState } from 'react';
import Card from './../Card';
import thumbnail from './../../assets/thumbnail.jpg';
import './Container.css'; // Import your CSS file for ThumbnailContainer component

const images = [
  { type: 'image', source: thumbnail },
  { type: 'image', source: thumbnail },
  { type: 'image', source: thumbnail },
  { type: 'image', source: thumbnail },
  { type: 'image', source: thumbnail },
  { type: 'image', source: thumbnail }
];

const ThumbnailContainer = () => {
  const [showAllThumbnails, setShowAllThumbnails] = useState(false);

  const toggleShowAllThumbnails = () => {
    setShowAllThumbnails(!showAllThumbnails);
  };

  return (
    <div>
      <button className="show-more-button" onClick={toggleShowAllThumbnails}>
        {showAllThumbnails ? 'Show less' : 'Show more'}
      </button>
      <div className="image-container">
        {images.slice(0, showAllThumbnails ? images.length : 4).map((image, index) => (
          <Card key={index} media={image} className="image-card" />
        ))}
      </div>
    </div>
  )
}

export default ThumbnailContainer;
