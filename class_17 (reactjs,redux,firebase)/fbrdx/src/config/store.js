import { createStore, applyMiddleware } from "redux";
import loginReducer from "./reducers/loginreducer";
import signupreducer from "./reducers/signupreducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
  loginReducer,
  signupreducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
