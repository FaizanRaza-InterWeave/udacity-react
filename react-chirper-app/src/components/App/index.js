import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Shared/initialData";

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return <div>Starter Code</div>;
};

export default connect()(App);
