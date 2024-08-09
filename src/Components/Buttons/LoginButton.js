import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@chakra-ui/react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <Button className="button__login" onClick={handleLogin}>
      Log In
    </Button>
  );
};