import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="profile">
        <img src="phot.jpeg" alt="Your Photo" />
        <h1>Harsha Vardhan Reddy Maram Reddy</h1>
        <p>Age: 19</p>
        <p>Email: harshvardhanreddy2211@gmail.com</p>
        <p>Currently pursuing Btech in VIT-AP</p>
      </div>
      <div className="quote">
        <p>"Weaker will always die, be Stronger"</p>
      </div>
    </div>
  );
};

export default Portfolio;
