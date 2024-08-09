import React from "react";
import { NavButtons } from "./NavButtons.js";
import { NavPages } from "./NavPages.js";

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavButtons />
        <NavPages />
      </nav>
    </div>
  );
};