import "./App.css";
import AppRouter from "./config/router";
import { Provider } from "react-redux";
import store from "./config/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
