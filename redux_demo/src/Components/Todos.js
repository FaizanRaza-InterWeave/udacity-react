import { useRef } from "react";
import { List } from "./List";
import {
  handleDeleteTodo,
  handleAddTodo,
  handleToggleTodo,
} from "../Actions/todos";
import { connect } from "react-redux";

const TodosComponent = ({ dispatch, todos }) => {
  const inputRef = useRef();

  const addItem = (event) => {
    event.preventDefault();

    dispatch(
      handleAddTodo(inputRef.current.value, () => (inputRef.current.value = ""))
    );
  };

  const removeItem = (todo) => {
    dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    dispatch(handleToggleTodo(id));
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

const Todos = connect((state) => ({
  todos: state.todos,
}))(TodosComponent);

export { Todos };
