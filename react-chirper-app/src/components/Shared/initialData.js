import { getInitialData } from "../../utils/api";
import { usersShort } from "./users";
import { tweetsShort } from "./tweets";
import { authedUserShort } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialDataShort() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(usersShort.actions.receive(users));
      dispatch(tweetsShort.actions.receive(tweets));
      dispatch(authedUserShort.actions.receive(AUTHED_ID));
    });
  };
}
