import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// Store Import
import { combineReducers } from "redux";
import { users } from "./components/Shared/users";
import { tweets } from "./components/Shared/tweets";
import { authedUser } from "./components/Shared/authedUser";

// Short Store Import
import { usersShort } from "./components/Shared/users";
import { tweetsShort } from "./components/Shared/tweets";
import { authedUserShort } from "./components/Shared/authedUser";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const reducer = combineReducers({ users, tweets, authedUser });
const shortReducer = combineReducers({
  users: usersShort.reducer,
  tweets: tweetsShort.reducer,
  authedUser: authedUserShort.reducer,
});

const store = configureStore({
  reducer: reducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
