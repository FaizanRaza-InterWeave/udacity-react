import { createSlice } from "@reduxjs/toolkit";

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
