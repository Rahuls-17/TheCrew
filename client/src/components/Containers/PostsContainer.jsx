import React from 'react';
import Card from './../Card';
import post from './../../assets/post.jpg';
import './Container.css';

const PostsContainer = () => {
  return (
    <div className="image-container">
      <Card media={{ type: 'image', source: post }} className="image-card" />
      <Card media={{ type: 'image', source: post }} className="image-card" />
      <Card media={{ type: 'image', source: post }} className="image-card" />
      <Card media={{ type: 'image', source: post }} className="image-card" />
    </div>
  )
}

export default PostsContainer;
