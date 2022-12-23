import { createSlice } from "@reduxjs/toolkit";

// Define Action
export const RECEIVE_USERS = "RECEIVE_USERS";

// Define Action Creator
export function receiveUsers(users) {
  return {
    action: RECEIVE_USERS,
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
      return { ...state, ...action.users };
    },
  },
});
