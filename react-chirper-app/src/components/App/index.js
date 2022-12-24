import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Shared/initialData";
import { Dashboard } from "../Dashboard";
import { NewTweet } from "../NewTweet";
import LoadingBar from "react-redux-loading-bar";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <>
      <LoadingBar />
      {/* <div>{loading ? null : <Dashboard />}</div> */}
      <div>{loading ? null : <NewTweet />}</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authedUser === null,
});

export default connect(mapStateToProps)(App);
