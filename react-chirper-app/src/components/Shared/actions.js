import { getInitialData } from "../../utils/api";

// _____________________________________________________________________________

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

const AUTHED_ID = "tylermcginnis";

// _____________________________________________________________________________

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function receiveTweets(tweets) {
  return {
    action: RECEIVE_TWEETS,
    tweets,
  };
}

// _____________________________________________________________________________

export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    action: RECEIVE_USERS,
    users,
  };
}

// _____________________________________________________________________________

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then((users, tweets) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_ID));
      })
      .catch(() => {
        alert("An error occurred, Try again");
      });
  };
}
