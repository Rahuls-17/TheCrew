import React from 'react';
import Layout from '../components/Layout.jsx'
import logo from '../assets/logo.jpg';
import "./Services.css"

const Services = () => {
  return (
    <Layout>
       <div className="service-page-container">
        <h1>Our Services</h1>
          <div className="whole-container">
              <div className="photo-container">
                <img src={logo} alt=''/>
              </div>
              <div className="text-container">
                <h2>Thumbnail Creation</h2>
                <p>We create eye-catching thumbnails to attract viewers.</p>
              </div>
          </div>
          <div className="whole-container">
              
              <div className="text-container">
                <h2>Social Media Post Maker</h2>
                <p>We design engaging social media posts for various platforms. </p>
              </div>
              <div className="photo-container">
                <img src={logo} alt=''/>
              </div>
          </div>
          <div className="whole-container">
              <div className="photo-container">
                <img src={logo} alt=''/>
              </div>
              <div className="text-container">
                <h2>Short Video Editor</h2>
                <p>We edit short videos to make them visually appealing and impactful.</p>
              </div>
          </div>
          <div className="whole-container">
             
              <div className="text-container">
                <h2>Long Video Editor</h2>
                <p>We edit long videos for a professional and polished look.</p>
              </div>
              <div className="photo-container">
                <img src={logo} alt=''/>
              </div>
          </div>
       </div>
    </Layout>
  )
}

export default Services