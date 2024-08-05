import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";

function Auth() {
  const { user, isAuthenticated } = useAuth0();
  console.log("Current user", user);

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? <Profile /> : <Dashboard />}
      </header>
    </div>
  );
}

export default Auth;
