import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../Buttons/LoginButton.js";
import { LogoutButton } from "../Buttons/LogoutButton.js";
import { SignupButton } from "../Buttons/SignupButton.js";
import { NavBar } from "./NavBar.js";

export const NavButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
            <NavBar/>
          <LogoutButton />
        </>
      )}
    </div>
  );
};