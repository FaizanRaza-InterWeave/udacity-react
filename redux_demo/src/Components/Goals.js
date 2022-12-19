import { useRef } from "react";
import { List } from "./List";
import { addGoalAction, generateId, removeGoalAction } from "./store";

export const Goals = ({ store, goals }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    inputRef.current.value = "";

    store.dispatch(
      addGoalAction({
        name,
        id: generateId(),
      })
    );
  };

  const removeItem = (goal) => {
    store.dispatch(removeGoalAction(goal.id));
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
