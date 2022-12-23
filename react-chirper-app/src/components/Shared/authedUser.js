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
  switch (action) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}

// Attempted shorthand syntax
export const authedUserShort = createSlice({
  name: "tweets",
  initialState: null,
  reducers: {
    receive(state, action) {
      return { ...state, ...action.id };
    },
  },
});
