import { getInitialData } from "../../utils/api";
import { authedUser } from "./authedUser";
import { tweets } from "./tweets";
import { users } from "./users";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then((response) => {
      dispatch(users.actions.receive(response.users));
      dispatch(tweets.actions.receive(response.tweets));
      dispatch(authedUser.actions.receive(AUTHED_ID));
    });
  };
}
