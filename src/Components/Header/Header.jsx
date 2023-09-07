import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Program</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
