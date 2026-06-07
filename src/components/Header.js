import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const logo = new URL("../assets/Namma_Foods_Logo.png", import.meta.url).href;



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onClickBtn = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };
  //subscribing to the store - read from the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container flex items-center p-2" data-testid="logo">
        <img src={logo} alt="Logo" className="w-27 h-27 rounded-full object-cover shadow-md" />
      </div>
      <div className="flex items-center m-4" data-testid="nav-items">
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
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
        <button
          className=" text-blue-300 p-2 border border-blue-300 rounded hover:bg-blue-300 hover:text-white cursor-pointer"
          onClick={onClickBtn}
          data-testid="login-btn"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
