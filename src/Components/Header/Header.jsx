import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/program" activeClassName="active">Program</NavLink></li>
        <li><NavLink to="/whyus" activeClassName="active">Why Us</NavLink></li>
        <li><NavLink to="/plans" activeClassName="active">Plans</NavLink></li>
        <li><NavLink to="/testimonials" activeClassName="active">Testimonials</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;
