import logo from "./logo.svg";
import { Todos } from "./Components/Todos";
import { Goals } from "./Components/Goals";
import * as Redux from "redux";
import { store, receiveDataAction } from "./Components/store";
import { useEffect, useState } from "react";
import { API } from "./Components/API";
function App() {
  let [dummyState, setDummyState] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setDummyState((value) => value + 1);
    });
  }, []);

  useEffect(() => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      console.log("Todos", todos);
      console.log("Goals", goals);
      store.dispatch(receiveDataAction(todos, goals));
    });
  }, []);

  const { todos, goals, loading } = store.getState();

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="App">
      {dummyState}
      <Todos store={store} todos={todos} />
      <Goals store={store} goals={goals} />
    </div>
  );
}

export default App;
