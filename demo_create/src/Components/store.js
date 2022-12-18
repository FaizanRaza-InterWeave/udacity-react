import * as Redux from "redux";

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

// App Code
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

const checker = (store) => (next) => (action) => {
  // We have access to store, next and action here
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }

  return next(action);
};

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The actions: ", action);
  const result = next(action);
  console.log("The new state is: ", store.getState());
  console.groupEnd();
  return result;
};

export const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals,
  }),
  Redux.applyMiddleware(logger, checker)
);

store.subscribe(() => {
  const { goals, todos } = store.getState();

  document.getElementById("goals").innerHTML = "";
  document.getElementById("todos").innerHTML = "";

  goals.forEach(addGoalToDOM);
  todos.forEach(addTodoToDOM);
});

// DOM code
function addTodo() {
  const input = document.getElementById("todo");
  const name = input.value;
  input.value = "";

  store.dispatch(
    addTodoAction({
      name,
      complete: false,
      id: generateId(),
    })
  );
}

function addGoal() {
  const input = document.getElementById("goal");
  const name = input.value;
  input.value = "";

  store.dispatch(
    addGoalAction({
      id: generateId(),
      name,
    })
  );
}

document.getElementById("todoBtn").addEventListener("click", addTodo);

document.getElementById("goalBtn").addEventListener("click", addGoal);

function createRemoveButton(onClick) {
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";
  removeBtn.addEventListener("click", onClick);
  return removeBtn;
}

function addTodoToDOM(todo) {
  const node = document.createElement("li");
  const text = document.createTextNode(todo.name);

  const removeBtn = createRemoveButton(() => {
    store.dispatch(store, removeTodoAction(todo.id));
  });

  node.appendChild(text);
  node.appendChild(removeBtn);
  node.style.textDecoration = todo.complete ? "line-through" : "none";
  node.addEventListener("click", () => {
    store.dispatch(store, toggleTodoAction(todo.id));
  });

  document.getElementById("todos").appendChild(node);
}

function addGoalToDOM(goal) {
  const node = document.createElement("li");
  const text = document.createTextNode(goal.name);
  const removeBtn = createRemoveButton(() => {
    store.dispatch(removeGoalAction(goal.id));
  });

  node.appendChild(text);
  node.appendChild(removeBtn);

  document.getElementById("goals").append(node);
}
