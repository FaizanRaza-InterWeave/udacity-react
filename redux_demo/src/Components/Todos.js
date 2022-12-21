import { useRef } from "react";
import { List } from "./List";
import { handleDeleteTodo, handleAddTodo, handleToggleTodo } from "./store";
import { connect } from "react-redux";

export const Todos = ({ dispatch, todos }) => {
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

// export const ConnectedTodos = () => {
//   return (
//     <Context.Consumer>
//       {(store) => {
//         const { todos } = store.getState();
//         return <Todos todos={todos} dispatch={store.dispatch} />;
//       }}
//     </Context.Consumer>
//   );ß
// };

export const ConnectedTodos = connect((state) => ({
  todos: state.todos,
}))(Todos);
