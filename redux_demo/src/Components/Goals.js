import { useRef } from "react";
import { List } from "./List";
import { addGoalAction, generateId, removeGoalAction } from "./store";
import { API } from "./API";

export const Goals = ({ store, goals }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();
    return API.saveGoal(inputRef.current.value)
      .then((goal) => {
        store.dispatch(addGoalAction(goal));

        inputRef.current.value = "";
      })
      .catch(() => {
        alert("An error occurred, Try again");
      });
  };

  const removeItem = (goal) => {
    store.dispatch(removeGoalAction(goal.id));

    return API.deleteGoal(goal.id).catch(() => {
      store.dispatch(addGoalAction(goal));
      alert("An error occurred, Try again");
    });
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
