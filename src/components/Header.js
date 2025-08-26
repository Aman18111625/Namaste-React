import { useState } from "react";
import { LOGO_URL } from "../utils.js/constant";
import {Link} from 'react-router';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onClickBtn = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button className="login-button" onClick={onClickBtn}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
