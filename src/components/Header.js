import { useState } from "react";
import { LOGO_URL } from "../utils.js/constant";
import {Link} from 'react-router';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onClickBtn = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="w-30" />
      </div>
      <div className="flex items-center m-4">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button className=" text-blue-300 p-2 border border-blue-300 rounded hover:bg-blue-300 hover:text-white cursor-pointer" onClick={onClickBtn}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
