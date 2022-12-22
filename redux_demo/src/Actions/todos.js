import { API } from "../Util/API";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert("An error occurred, Try again");
    });
  };
}

export function handleAddTodo(todo, resetFieldFunc) {
  return (dispatch) => {
    return API.saveTodo(todo)
      .then((todo) => {
        dispatch(addTodo(todo));

        resetFieldFunc();
      })
      .catch(() => {
        alert("An error occurred, Try again");
      });
  };
}

export function handleToggleTodo(todoId) {
  return (dispatch) => {
    dispatch(toggleTodo(todoId));

    return API.saveTodoToggle(todoId).catch(() => {
      dispatch(toggleTodo(todoId));
      alert("An error occurred, Try again");
    });
  };
}
