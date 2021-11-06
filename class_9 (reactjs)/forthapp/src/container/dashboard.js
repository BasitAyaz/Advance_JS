import { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function Dashboard() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          setLogin(true);
          setSignUp(false);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setLogin(false);
          setSignUp(true);
        }}
      >
        Sign up
      </button>
      <div>
        {signUp && <Signup />}
        {login && <Login />}
      </div>
    </>
  );
}
export default Dashboard;
