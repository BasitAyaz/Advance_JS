import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./container/dashboard";
import Signup from "./container/signup";
import Login from "./container/login";

function App() {
  const [signup, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  return (
    <div className="App">
      <Dashboard />
     
    </div>
  );
}

export default App;
