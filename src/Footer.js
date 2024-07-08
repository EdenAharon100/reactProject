import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-side">
        <img src="logo3.jpeg" alt="Website Logo" />
        <p>The Vineyard</p>
      </div>
      <div className="right-side">
        <div className="footer-icon" title="Phone">
          <PhoneIcon />
          <span className="tooltip">050-345-1234</span>
        </div>
        <div className="footer-icon" title="Branches">
          <StoreIcon />
          <div className="tooltip">
            <p>Branch 1</p>
            <p>Address 1</p>
            <p>Branch 2</p>
          </div>
        </div>
        <div className="footer-icon" title="Location">
          <LocationOnIcon />
          <span className="tooltip">Wiz Map</span>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
