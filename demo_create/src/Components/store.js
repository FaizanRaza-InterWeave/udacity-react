export function generateId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}

export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

export function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
