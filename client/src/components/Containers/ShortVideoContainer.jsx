import React from 'react';
import Card from './../Card';
import shortVideo from './../../assets/shortVideo.mp4';
import './Container.css';

const ShortVideoContainer = () => {
  return (
    <div className="image-container">
      <Card media={{ type: 'video', source: shortVideo }} className="image-card" />
      <Card media={{ type: 'video', source: shortVideo }} className="image-card" />
      <Card media={{ type: 'video', source: shortVideo }} className="image-card" />
      <Card media={{ type: 'video', source: shortVideo }} className="image-card" />
    </div>
  )
}

export default ShortVideoContainer;
