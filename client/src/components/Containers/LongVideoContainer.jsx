import React from 'react';
import Card from './../Card';
import longVideo from './../../assets/longVideo.mp4';
import './Container.css';

const LongVideoContainer = () => {
  return (
    <div className="image-container">
      <Card media={{ type: 'video', source: longVideo }} className="image-card" />
      <Card media={{ type: 'video', source: longVideo }} className="image-card" />
      <Card media={{ type: 'video', source: longVideo }} className="image-card" />
      <Card media={{ type: 'video', source: longVideo }} className="image-card" />
    </div>
  )
}

export default LongVideoContainer;
