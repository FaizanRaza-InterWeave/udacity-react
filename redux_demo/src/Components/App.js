import { Todos } from "./Todos";
import { Goals } from "./Goals";
import { handleInitialData } from "../Actions/shared";
import { useEffect } from "react";
import { connect } from "react-redux";

function AppComponent({ loading, dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="App">
      <Todos />
      <Goals />
    </div>
  );
}

const App = connect((state) => ({
  loading: state.loading,
}))(AppComponent);

export { App };
