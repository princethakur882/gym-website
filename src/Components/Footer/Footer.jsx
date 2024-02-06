import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import Location from "../../assets/location.png";
import Email from "../../assets/mail.png";
import Call from "../../assets/call.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="main_container">
        <div className="first">
          <div className="logo-f">
            <img src={Logo} alt="" />
          </div>
          <div className="social-links">
            <img src={Github} alt="github" />
            <img src={Instagram} alt="instagram" />
            <img src={LinkedIn} alt="linkedin" />
          </div>
        </div>
        <div className="second">
          <div className="heading">
            <h2>Quick Links</h2>
          </div>
          <div className="list">
            <Link to="/home">
              <span>Home</span>
            </Link>
            <br />
            <Link to="/program">
              <span>Program</span>
            </Link>
            <br />
            <Link to="/whyus">
              <span>Why Us</span>
            </Link>
            <br />
            <Link to="/plans">
              <span>Plans</span>
            </Link>
            <br />
            <Link to="/testmonials">
              <span>Testimonials</span>
            </Link>
            <br />
          </div>
        </div>
        <div className="third">
          <div className="address">
            <img src={Location} alt="location" />
            <span>
              Vill. Salasi, Sasan, near Govt. high school, opp. RTO. Office,
              Hamirpur, Himachal Pradesh 177001
            </span>
          </div>
          <div className="email">
            <img src={Email} alt="email" />
            <span>princethakur8282@gmail.com</span>
          </div>
          <div className="call">
            <img src={Call} alt="call" />
            <span>+91 9882084882</span>
          </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
      <div className="copyright">© 2023 Copyright: All rights reserved</div>
    </>
  );
};

export default Footer;


