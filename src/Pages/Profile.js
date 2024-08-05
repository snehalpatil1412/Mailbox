import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <p> Hello!</p>
      <button onClick={(e) => logout()}>Logout</button>
    </div>
  );
};

export default Profile;
