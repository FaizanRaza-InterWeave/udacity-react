import { Todos } from "./Components/Todos";
import { Goals } from "./Components/Goals";
import { store, handleInitialData } from "./Components/store";
import { useEffect, useState } from "react";

function App() {
  let [dummyState, setDummyState] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setDummyState((value) => value + 1);
    });
  }, []);

  useEffect(() => {
    store.dispatch(handleInitialData());
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
