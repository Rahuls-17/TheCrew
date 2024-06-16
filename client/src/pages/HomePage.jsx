import React from 'react';
import Layout from '../components/Layout.jsx';
import SlideShow from '../components/SlideShow.jsx';
import {images,texts} from '../components/SliderImages.jsx';
import './HomePage.css';
import ThumbnailContainer from '../components/Containers/ThumbnailContainer.jsx';

const HomePage = () => {
  return (
    <Layout>
      <div className="content-wrapper">
        <SlideShow images={images} texts={texts}/>
        <div className="intro-container">
          <h3>Welcome to The Crew, your premier destination for comprehensive social media solutions tailored to elevate your online presence. Specializing in graphic design, video editing, social media management, SEO, and Discord management, we empower businesses, content creators, and influencers to thrive in the digital landscape. Whether you aim to captivate your audience with stunning visuals, streamline your social media strategy, enhance your search engine visibility, or foster community engagement, our expert team is dedicated to delivering results that exceed your expectations. Let's transform your digital vision into reality.</h3>
        </div>
        <div className='thumbnail-contianer'>
          <ThumbnailContainer/>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
