// Store Import
import { combineReducers } from "redux";

// Short Store Import
import { usersShort } from "../components/Shared/users";
import { tweetsShort } from "../components/Shared/tweets";
import { authedUserShort } from "../components/Shared/authedUser";

// Middleware
import { logger } from "../components/Shared/logger";

// Redux
import { configureStore } from "@reduxjs/toolkit";

const shortReducer = combineReducers({
  users: usersShort.reducer,
  tweets: tweetsShort.reducer,
  authedUser: authedUserShort.reducer,
});

export const store = configureStore({
  reducer: shortReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
