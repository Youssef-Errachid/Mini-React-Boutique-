import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";
import "../../styles/Header.css";

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="navbar">
        <NavLink to="/" className="navbar-logo">
          <AiFillShop size={30} />
          <span>Boutique</span>
        </NavLink>

        <div className="navbar-actions">
          <NavLink
            to="/add-product"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            + Add Product
          </NavLink>

          <div className="cart-icon" onClick={onCartClick}>
            <FaCartArrowDown size={22} />
            <span>Cart</span>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
