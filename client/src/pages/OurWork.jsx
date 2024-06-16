import React from 'react';
import Layout from '../components/Layout';
import ShortVideoContainer from '../components/Containers/ShortVideoContainer';
import LongVideoContainer from '../components/Containers/LongVideoContainer';
import ThumbnailContainer from '../components/Containers/ThumbnailContainer';
import PostsContainer from '../components/Containers/PostsContainer';
import './OurWork.css'; // Import your CSS file for OurWork component

const OurWork = () => {
  return (
    <Layout>
      <div className="page-container">
        {/* Photos */}
        <div className="category">
          <h3 className="category-title">Photos</h3>

          <h4 className="subcategory-title">Thumbnail</h4>
          <ThumbnailContainer />

          <h4 className="subcategory-title">Posts</h4>
          <PostsContainer />
        </div>

        {/* Videos */}
        <div className="category">
          <h3 className="category-title">Videos</h3>

          <h4 className="subcategory-title">Short Videos</h4>
          <ShortVideoContainer />

          <h4 className="subcategory-title">Long Videos</h4>
          <LongVideoContainer />
        </div>
      </div>
    </Layout>
  );
}

export default OurWork;
