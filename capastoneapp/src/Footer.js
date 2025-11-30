import React from "react";
import "./Footer.css";
const FooterApp = () => {
  return (
    <footer className="footer-center">
      <h2 className="footer-brand">Little Lemon</h2>
      <p className="footer-location">Chicago</p>

      {/* <div className="footer-links">
        <span>Home</span>
        <span>Menu</span>
        <span>Order Online</span>
        <span>Reservations</span>
      </div> */}

      <p className="footer-copy">© 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
};
export default FooterApp;
