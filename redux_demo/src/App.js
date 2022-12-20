import { ConnectedTodos } from "./Components/Todos";
import { ConnectedGoals } from "./Components/Goals";
import { store, handleInitialData } from "./Components/store";
import { useEffect, useState, createContext } from "react";
import { Provider, Context } from "./Components/context";

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

  const { loading } = store.getState();

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="App">
      {dummyState}
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
}

function ConnectedApp(store) {
  return (
    <Context.Consumer>{(store) => <App store={store} />}</Context.Consumer>
  );
}

export { ConnectedApp };
