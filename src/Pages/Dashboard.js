import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user, loginWithRedirect } = useAuth0();
  console.log("Current user", user);
  return (
    <div>
      <button onClick={(e) => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Dashboard;
