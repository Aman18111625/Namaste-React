import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const logo = new URL("../assets/Namma_Foods_Logo.png", import.meta.url).href;



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onClickBtn = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 z-999 h-20 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 flex justify-between items-center px-8">
      <div className="flex items-center gap-3" data-testid="logo">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-[#ff6b35]"
        />
        <span className="font-extrabold text-2xl bg-gradient-to-r from-[#ff6b35] to-[#ff9f1c] bg-clip-text text-transparent hidden sm:inline-block">
          Namma Food
        </span>
      </div>

      <div className="flex items-center gap-8" data-testid="nav-items">
        <ul className="flex items-center gap-6 font-semibold text-gray-700">
          <li className="hover:text-[#ff6b35] transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#ff6b35] transition-colors">
            <a href="#restaurants">Restaurants</a>
          </li>
          <li className="hover:text-[#ff6b35] transition-colors">
            <a href="#offers">Offers</a>
          </li>
          <li className="hover:text-[#ff6b35] transition-colors">
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <div className="flex items-center gap-5 border-l border-gray-200 pl-6 text-gray-600">
          <button className="hover:text-[#ff6b35] transition-colors cursor-pointer text-lg">
            🔍
          </button>
          <button className="hover:text-[#ff6b35] transition-colors cursor-pointer text-lg">
            ❤️
          </button>

          <Link
            to="/cart"
            className="relative hover:text-[#ff6b35] transition-colors text-lg flex items-center gap-1 font-bold"
          >
            🛒
            <span className="bg-[#ff6b35] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
              Cart ({cartItems.length})
            </span>
          </Link>

          <button
            onClick={onClickBtn}
            data-testid="login-btn"
            className="bg-[#ff6b35] hover:bg-[#e0531f] text-white px-5 py-2 rounded-full font-bold text-sm transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
