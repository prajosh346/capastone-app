import React, { useState, useEffect, useRef } from "react";
import NavApp from "./Nav";
import Logo from "./assets/icons_assets/Logo.svg";
import "./Header.css";
import HamburgerImg from "./assets/icons_assets/hamburger.svg";

const HeaderApp = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => setOpen(v => !v);
  const closeMenu = () => setOpen(false);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock scroll and add/remove body class
  useEffect(() => {
    document.body.classList.toggle("sidebar-open", open);
  }, [open]);

  // close sidebar if resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo for Little Lemon" />
        </div>

        {/* Desktop nav (visible on larger screens via CSS) */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavApp />
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger-btn"
          aria-controls="mobile-sidebar"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <img src={HamburgerImg} alt="" aria-hidden="true" style={{height:24, width:24}} />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      {/* Sidebar (mobile) */}
      <aside
        id="mobile-sidebar"
        ref={sidebarRef}
        className={`sidebar-menu ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="sidebar-header">
          <div style={{display:"flex", alignItems:"center", gap:10}}>
            <img src={Logo} alt="Little Lemon logo" style={{height:36}} />
            {/* <strong>Little Lemon</strong> */}
          </div>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            &times;
          </button>
        </div>

        {/* Reuse NavApp for the sidebar too */}
        <nav aria-label="Mobile primary">
          <NavApp />
        </nav>
      </aside>
    </>
  );
};

export default HeaderApp;
