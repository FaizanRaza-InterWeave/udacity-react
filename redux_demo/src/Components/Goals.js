import { useRef } from "react";
import { List } from "./List";
import { handleAddGoal, handleDeleteGoal } from "../Actions/goals";
import { connect } from "react-redux";

const GoalsComponent = ({ dispatch, goals }) => {
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

const Goals = connect((state) => ({
  goals: state.goals,
}))(GoalsComponent);

export { Goals };
