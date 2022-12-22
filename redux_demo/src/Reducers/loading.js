import { RECEIVE_DATA } from "../Actions/shared";

export function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}
