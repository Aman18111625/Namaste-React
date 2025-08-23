import { useState } from "react";
import { LOGO_URL } from "../utils.js/constant";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button className="login-button" onClick={onClickBtn}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
