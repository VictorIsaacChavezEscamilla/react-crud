import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as fromReducer } from "redux-form";
import thunk from "redux-thunk";

import * as reducers from "./reducers";
import asyncMiddleware from "./reducers/helpers/async-middleware";
import App from "./App";

import "./tailwind.generated.css";

const store = createStore(
  combineReducers({
    ...reducers,
    form: fromReducer
  }),
  applyMiddleware(thunk, asyncMiddleware)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
