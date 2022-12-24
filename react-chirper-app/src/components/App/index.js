import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Shared/initialData";
import { Dashboard } from "../Dashboard";
import { NewTweet } from "../NewTweet";
import LoadingBar from "react-redux-loading-bar";
import { TweetPage } from "../../pages/Tweet";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  console.log(loading);
  return (
    <>
      <LoadingBar />
      {/* <div>{loading ? null : <Dashboard />}</div> */}
      {/* <div>{loading ? null : <NewTweet />}</div> */}
      <div>
        {loading ? null : (
          <TweetPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authedUser === null,
});

export default connect(mapStateToProps)(App);
