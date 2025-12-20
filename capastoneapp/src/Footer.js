import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const FooterApp = () => {
  return (
    <footer className="footer-center">
      <h2 className="footer-brand">Little Lemon</h2>
      <p className="footer-location">Chicago</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order Online</Link>
        <Link to="/reservation">Reservations</Link>
      </div>

      <p className="footer-copy">© 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
};
export default FooterApp;
