import { ADD_TODO } from "../Actions/todos";
import { ADD_GOAL } from "../Actions/goals";

export const checker = (store) => (next) => (action) => {
  // We have access to store, next and action here
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }

  return next(action);
};
