import React from 'react';
import './Home.css'; // Create a CSS file for styling
import VideoCom from './features/wine/VideoCom copy';
import BearComponent from './BearComponent';
import Bear from './Bear';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Welcome to The Vineyard</h1>
        <p>Explore the finest selection of wines</p>
      </div>

      <div className="image-container">
      <img src="../wine4.jpg" alt='wine 1'/>
      <img src="../wine10.jpg" alt="Wine 2" />
      <img src="../wine3.jpg" alt="Wine 2" />


        {/* Add more images as needed */}
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>
          The Vineyard is your destination for exquisite wines from around the
          world. Our passion is to bring you the finest flavors, carefully
          selected for your enjoyment.
        </p>
      </div>

      <div className="featured-wines">
        
        <h2>Featured Wines</h2>
        <div className="wine-card">
          {/* <img src="../wine13.jpg" alt="Featured Wine 1" className='wine8' /> */}
          <VideoCom/>
          <p>Chardonnay Reserve</p>
          <p>$39.99</p>
        </div>
        {/* Add more featured wines as needed */}
        <img src="../wine14.webp" alt="Featured Wine 1" className='wineImg'/>
        <div className="image-grid">
          <BearComponent/>
          <Bear/>
      </div>
        <img src="../wine15.webp" alt="Featured Wine 1" className='wineImg'/>

      </div>

      <div className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Reach out to our knowledgeable
          staff at support@thevineyard.com.
        </p>
      </div>
    </div>
  );
};

export default Home;