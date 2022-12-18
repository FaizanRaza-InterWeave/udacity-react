import { useRef } from "react";
import { List } from "./List";
import { addTodoAction, generateId } from "./store";

export const Todos = ({ store }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    inputRef.current.value = "";

    store.dispatch(
      addTodoAction({
        name,
        complete: false,
        id: generateId(),
      })
    );
  };
  return (
    <div>
      <h1> Todo List</h1>
      <input type="text" placeholder="Add Todo" ref={inputRef} />
      <button onClick={addItem}>Add Todo</button>
      <List />
    </div>
  );
};
