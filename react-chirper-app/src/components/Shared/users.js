import { createSlice } from "@reduxjs/toolkit";

// Define Action
export const RECEIVE_USERS = "RECEIVE_USERS";

// Define Action Creator
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

// Define reducer

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}

// Attempted shorthand syntax
export const usersShort = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    receive(state, action) {
      // This nests the authedUser too deep
      // state.users = action.payload;

      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
