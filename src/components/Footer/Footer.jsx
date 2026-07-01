import React from "react";
import "../../styles/Footer.css";
import { AiFillShop } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <AiFillShop size={20} />
          <span>Boutique</span>
        </div>
        <p className="footer-text">© 2026 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
