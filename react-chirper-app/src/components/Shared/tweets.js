import { createSlice } from "@reduxjs/toolkit";

// Define Action
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

// Define Action Creator

export function receiveTweets(tweets) {
  return {
    action: RECEIVE_TWEETS,
    tweets,
  };
}
// Define reducer

export function tweets(state = {}, action) {
  switch (action) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    default:
      break;
  }
}

// Attempted shorthand syntax
export const tweetsShort = createSlice({
  name: "tweets",
  initialState: {},
  reducers: {
    receive(state, action) {
      return { ...state, ...action.tweets };
    },
  },
});
