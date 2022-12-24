import { createSlice } from "@reduxjs/toolkit";
import { saveLikeToggle } from "../../utils/api";

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

    toggleTweet(state, action) {
      // This nests the tweets too deep
      // state.tweets = action.payload;

      // This works
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          likes:
            action.payload.hasLiked === true
              ? state[action.payload.id].likes.filter(
                  (uid) => uid !== action.payload.authedUser
                )
              : state[action.payload.id].likes.concat([
                  action.payload.authedUser,
                ]),
        },
      };
    },
  },
});

// Wrapper around dispatch action to provide error handling
export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(tweets.actions.toggleTweet(info));
    return saveLikeToggle(info).catch((e) => {
      console.warn("Error in handleToggleTweet: ", e);
      dispatch(tweets.actions.toggleTweet(info));
      alert("There was an error liking the tweet, Try Again.");
    });
  };
}
