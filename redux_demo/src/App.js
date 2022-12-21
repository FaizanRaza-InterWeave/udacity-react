import { ConnectedTodos } from "./Components/Todos";
import { ConnectedGoals } from "./Components/Goals";
import { store, handleInitialData } from "./Components/store";
import { useEffect, useState, createContext } from "react";
import { Provider, Context, connect } from "./Components/context";

function App({ loading, dispatch }) {
  // let [dummyState, setDummyState] = useState(0);

  // useEffect(() => {
  //   store.subscribe(() => {
  //     setDummyState((value) => value + 1);
  //   });
  // }, []);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="App">
      {/* Rerenders: {dummyState} */}
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
}

// function ConnectedApp(store) {
//   return (
//     <Context.Consumer>{(store) => <App store={store} />}</Context.Consumer>
//   );
// }

const ConnectedApp = connect((state) => ({
  loading: state.loading,
}))(App);

export { ConnectedApp };
