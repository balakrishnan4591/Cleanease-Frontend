import React from "react";
import "./Footer.css";
import { assets } from "../../assets/asset";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>
            At Cleanease, we transform your spaces into spotless sanctuaries
            with our dedicated cleaning services. Experience the ease of a
            cleaner home and workplace today!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9876543210</li>
            <li>contact@cleanease.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Cleanease.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
