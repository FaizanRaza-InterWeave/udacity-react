import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Shared/initialData";
import { Dashboard } from "../Dashboard";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return <div>{loading ? null : <Dashboard />}</div>;
};

const mapStateToProps = (state) => ({
  loading: state.authedUser === null,
});

export default connect(mapStateToProps)(App);
