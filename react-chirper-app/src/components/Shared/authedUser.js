import { createSlice } from "@reduxjs/toolkit";

export const authedUser = createSlice({
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
