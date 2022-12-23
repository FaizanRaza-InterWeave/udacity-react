import { useEffect } from "react";
import { connect } from "react-redux";
import {
  handleInitialData,
  handleInitialDataShort,
} from "../Shared/initialData";

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialDataShort());
  }, []);
  return <div>Starter Code</div>;
};

export default connect()(App);
