import React from 'react';
import "./Card.css"

const Card = ({ media, title, description, buttonText }) => {
  if (!media || !media.type || !media.source) {
    return (
      <div className="card">
        <div className="card-content">
          {/* <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <button className="card-button">{buttonText}</button> */}
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      {media.type === 'image' && (
        <img src={media.source} alt={title} className="card-media" />
      )}
      {media.type === 'video' && (
        <video controls className="card-media">
          <source src={media.source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {/* <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div> */}
    </div>
  );
};

export default Card;
