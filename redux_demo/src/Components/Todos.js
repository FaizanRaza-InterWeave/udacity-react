import { useRef } from "react";
import { List } from "./List";
import {
  addTodoAction,
  generateId,
  removeTodoAction,
  toggleTodoAction,
  handleDeleteTodo,
  handleAddTodo,
  handleToggleTodo,
} from "./store";
import { API } from "./API";

export const Todos = ({ store, todos }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();

    store.dispatch(
      handleAddTodo(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  const removeItem = (todo) => {
    store.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    store.dispatch(handleToggleTodo(id));
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
