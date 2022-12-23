import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Shared/initialData";
import { Dashboard } from "../Dashboard";

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return <Dashboard></Dashboard>;
};

export default connect()(App);
