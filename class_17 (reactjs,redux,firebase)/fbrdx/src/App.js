import "./App.css";
// import AppRouter from "./config/router";
// import { Provider } from "react-redux";
// import store from "./config/store";
import  ComponentA from "./components/ComponentA";
import { UserProvider } from "./Context/Context";

function App() {
  return (

    <UserProvider>

    <div className="App">
      {/* <Provider store={store}>
        <AppRouter />
      </Provider> */}

      <ComponentA></ComponentA>


    </div>
      </UserProvider>
  );
}

export default App;
