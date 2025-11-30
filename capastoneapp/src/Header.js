import * as React from "react";
import NavApp from "./Nav";
import Logo from "./assets/icons_assets/Logo.svg";
import "./Header.css";
const HeaderApp = () => {
  return (
    <>
      <header>
        {/* <h1>Little Lemon Restaurant</h1> */}
        <div class="logo">
          <img src={Logo} alt="Logo for Little Lemon" />
        </div>

        <NavApp />
      </header>
    </>
  );
};
export default HeaderApp;
