import { API } from "../Components/API";

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

export function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

export function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

export function handleAddGoal(goal, resetFieldFunc) {
  return (dispatch) => {
    return API.saveGoal(goal)
      .then((goal) => {
        dispatch(addGoal(goal));

        resetFieldFunc();
      })
      .catch(() => {
        alert("An error occurred, Try again");
      });
  };
}

export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert("An error occurred, Try again");
    });
  };
}
