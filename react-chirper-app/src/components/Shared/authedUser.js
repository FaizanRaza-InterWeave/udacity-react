import { createSlice } from "@reduxjs/toolkit";

// Define Action
export const SET_AUTHED_USER = "SET_AUTHED_USER";

// Define Action Creator

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

// Define reducer

export function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}

// Attempted shorthand syntax
export const authedUserShort = createSlice({
  name: "authedUser",
  initialState: null,
  reducers: {
    receive(state, action) {
      // This nests the authedUser too deep
      // state.authedUser = action.payload;

      // This works
      return action.payload;
    },
  },
});
