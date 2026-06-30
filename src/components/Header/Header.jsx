import React from "react";
import "../../styles/Header.css";
import { AiFillShop } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-logo">
          <AiFillShop size={30} />
          <span>Boutique</span>
        </div>

        <div className="cart-icon">
          <FaCartArrowDown size={22} />
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
