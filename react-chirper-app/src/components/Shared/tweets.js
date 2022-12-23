import { createSlice } from "@reduxjs/toolkit";

// Define Action
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

// Define Action Creator

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}
// Define reducer

export function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    default:
      return state;
  }
}

// Attempted shorthand syntax
export const tweetsShort = createSlice({
  name: "tweets",
  initialState: {},
  reducers: {
    receive(state, action) {
      console.group("tweets");
      console.log({ state });
      console.log({ action });
      // This nests the tweets too deep
      // state.tweets = action.payload;

      // This works
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
