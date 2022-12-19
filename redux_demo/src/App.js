import logo from "./logo.svg";
import { Todos } from "./Components/Todos";
import { Goals } from "./Components/Goals";
import * as Redux from "redux";
import { store } from "./Components/store";
import { useEffect, useState } from "react";
function App() {
  // Library Code
  function createStore(reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. Update the state

    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    };

    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };

    return {
      getState,
      subscribe,
      dispatch,
    };
  }

  let [dummyState, setDummyState] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setDummyState((value) => value + 1);
    });
  }, []);

  const { todos, goals } = store.getState();

  return (
    <div className="App">
      {dummyState}
      <Todos store={store} todos={todos} />
      <Goals store={store} goals={goals} />
    </div>
  );
}

export default App;
