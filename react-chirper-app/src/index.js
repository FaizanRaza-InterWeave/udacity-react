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

const reducer = combineReducers(users, tweets, authedUser);
const shortReducer = combineReducers(
  usersShort.reducer,
  tweetsShort.reducer,
  authedUserShort.reducer
);

ReactDOM.render(<App />, document.getElementById("root"));
