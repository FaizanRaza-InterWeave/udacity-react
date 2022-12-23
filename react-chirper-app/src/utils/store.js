// Store Import
import { combineReducers } from "redux";
import { users } from "../components/Shared/users";
import { tweets } from "../components/Shared/tweets";
import { authedUser } from "../components/Shared/authedUser";

// Short Store Importß
import { usersShort } from "../components/Shared/users";
import { tweetsShort } from "../components/Shared/tweets";
import { authedUserShort } from "../components/Shared/authedUser";

// Middleware
import { logger } from "../components/Shared/logger";

// Redux
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ users, tweets, authedUser });

const shortReducer = combineReducers({
  users: usersShort.reducer,
  tweets: tweetsShort.reducer,
  authedUser: authedUserShort.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
