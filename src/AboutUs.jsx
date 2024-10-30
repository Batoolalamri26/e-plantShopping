import React from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Batool's Plants, where green meets serenity!</p>
      <p className="about-us-content">
       Welcome to Batool's Plants Company (A Closed Joint-Stock Company).The Company established in 1983 as a Sole Proprietorship, 
        in 2003 it was transformed into a limited liability company in 2013, it was finally transformed into a 
        Closed Joint-Stock Company in 2016.we are distributing of the following products: Bedding plants, Vegetable seedlings, 
        Indoor Plants, Rare plants, In/outdoor pots, Garden supplies, Soil, High polished River stone and others.  
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
        Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
        the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
        home or office.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the 
        beauty of nature right at your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
