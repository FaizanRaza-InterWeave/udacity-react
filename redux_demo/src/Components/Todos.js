import { useRef } from "react";
import { List } from "./List";
import {
  addTodoAction,
  generateId,
  removeTodoAction,
  toggleTodoAction,
  handleDeleteTodo,
} from "./store";
import { API } from "./API";

export const Todos = ({ store, todos }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();

    return API.saveTodo(inputRef.current.value)
      .then((todo) => {
        store.dispatch(addTodoAction(todo));

        inputRef.current.value = "";
      })
      .catch(() => {
        alert("There was an error, try again");
      });
  };

  const removeItem = (todo) => {
    store.dispatch(handleDeleteTodo(todo));

    // store.dispatch(removeTodoAction(todo.id));

    // return API.deleteTodo(todo.id).catch(() => {
    //   store.dispatch(addTodoAction(todo));
    //   alert("An error occurred, Try again");
    // });
  };

  const toggleItem = (id) => {
    store.dispatch(toggleTodoAction(id));

    return API.saveTodoToggle(id).catch(() => {
      store.dispatch(toggleTodoAction(id));
      alert("An error occurred, Try again");
    });
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
