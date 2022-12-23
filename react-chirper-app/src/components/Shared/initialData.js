import { getInitialData } from "../../utils/api";
import { usersShort, receiveUsers } from "./users";
import { tweetsShort, receiveTweets } from "./tweets";
import { authedUserShort, setAuthedUser } from "./authedUser";

// _____________________________________________________________________________

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}

export function handleInitialDataShort() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(usersShort.actions.receive(users));
      dispatch(tweetsShort.actions.receive(tweets));
      dispatch(authedUserShort.actions.receive(AUTHED_ID));
    });
  };
}
