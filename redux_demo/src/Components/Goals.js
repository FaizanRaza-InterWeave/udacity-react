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
import { connect } from "react-redux";

export const Goals = ({ dispatch, goals }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();
    dispatch(
      handleAddGoal(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  const removeItem = (goal) => {
    dispatch(handleDeleteGoal(goal));
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

export const ConnectedGoals = connect((state) => ({
  goals: state.goals,
}))(Goals);
