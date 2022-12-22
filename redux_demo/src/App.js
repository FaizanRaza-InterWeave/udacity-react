import { ConnectedTodos } from "./Components/Todos";
import { ConnectedGoals } from "./Components/Goals";
import { store, handleInitialData } from "./Components/store";
import { useEffect, useState, createContext } from "react";
import { Provider, connect } from "react-redux";

function App({ loading, dispatch }) {
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

const ConnectedApp = connect((state) => ({
  loading: state.loading,
}))(App);

export { ConnectedApp };
