import { useRef } from "react";
import { List } from "./List";
import {
  addTodoAction,
  generateId,
  removeTodoAction,
  toggleTodoAction,
} from "./store";

export const Todos = ({ store, todos }) => {
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

  const removeItem = (todo) => {
    store.dispatch(removeTodoAction(todo.id));
  };

  const toggleItem = (id) => {
    store.dispatch(toggleTodoAction(id));
  };
  return (
    <div>
      <h1> Todo List</h1>
      <input type="text" placeholder="Add Todo" ref={inputRef} />
      <button onClick={addItem}>Add Todo</button>
      <List items={todos} removeItem={removeItem} toggleItem={toggleItem} />
    </div>
  );
};
