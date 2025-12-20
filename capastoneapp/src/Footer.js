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
        <Link to="/reviews">Reviews</Link>
        <Link to="/order">Order Online</Link>
        <Link to="/reservation">Reservations</Link>
      </div>

      <div className="newsletter">
        <p>Subscribe to our newsletter for updates and specials!</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email" required />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>

      <p className="footer-copy">© 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
};
export default FooterApp;
