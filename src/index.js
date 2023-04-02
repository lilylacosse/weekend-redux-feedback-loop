import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
// Redux Reducers
const feedback = (state = {}, action) => {
  if (action.type === "SAVE_FEEDBACK") {
    return { ...state, ...action.payload };
  } else if (action.type === "CLEAR_FEEDBACK") {
    return {};
  } else {
    return state;
  }
};
// Redux Store
const storeFeedback = createStore(
  combineReducers({
    // reducers
    feedback,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeFeedback}>
      <App />
    </Provider>
  </React.StrictMode>
);
