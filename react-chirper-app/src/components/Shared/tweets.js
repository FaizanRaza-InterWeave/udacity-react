import { createSlice } from "@reduxjs/toolkit";

export const tweets = createSlice({
  name: "tweets",
  initialState: {},
  reducers: {
    receive(state, action) {
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
