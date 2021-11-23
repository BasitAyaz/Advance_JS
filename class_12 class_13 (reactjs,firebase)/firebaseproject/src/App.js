import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/router";
import Firebase from "./config/firebase";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
