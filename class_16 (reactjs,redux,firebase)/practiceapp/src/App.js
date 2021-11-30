import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/router";
import { Provider } from "react-redux";
import myStore from "./config/store";

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
