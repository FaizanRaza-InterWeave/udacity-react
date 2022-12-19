import { useRef } from "react";
import { List } from "./List";
import {
  addGoalAction,
  generateId,
  removeGoalAction,
  handleAddGoal,
  handleDeleteGoal,
} from "./store";
import { API } from "./API";

export const Goals = ({ store, goals }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();
    store.dispatch(
      handleAddGoal(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  const removeItem = (goal) => {
    store.dispatch(handleDeleteGoal(goal));

    // return API.deleteGoal(goal.id).catch(() => {
    //   store.dispatch(addGoalAction(goal));
    //   alert("An error occurred, Try again");
    // });
  };

  return (
    <div>
      <h1>Goals</h1>
      <input type="text" placeholder="Add Goal" ref={inputRef} />
      <button onClick={addItem}>Add Goal</button>
      <List items={goals} removeItem={removeItem} />
    </div>
  );
};
