// Store Import
import { combineReducers } from "redux";

//  Store Import
import { users } from "../components/Shared/users";
import { tweets } from "../components/Shared/tweets";
import { authedUser } from "../components/Shared/authedUser";

// Middleware
import { logger } from "../components/Shared/logger";

// Redux
import { configureStore } from "@reduxjs/toolkit";

import { loadingBarReducer } from "react-redux-loading-bar";

const reducer = combineReducers({
  users: users.reducer,
  tweets: tweets.reducer,
  authedUser: authedUser.reducer,
  loadingBar: loadingBarReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
