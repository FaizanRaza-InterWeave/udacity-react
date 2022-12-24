import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../Shared/initialData";
import { Dashboard } from "../Dashboard";
import { NewTweet } from "../NewTweet";
import LoadingBar from "react-redux-loading-bar";
import { TweetPage } from "../../pages/Tweet";
import { Nav } from "../Nav";
import { Routes, Route } from "react-router-dom";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  console.log(loading);
  return (
    <>
      <LoadingBar />
      <div className="container">
        <Nav />
        {loading ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />}></Route>
            <Route path="/tweet/:id" element={<TweetPage />}></Route>
            <Route path="/new" exact element={<NewTweet />}></Route>
          </Routes>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authedUser === null,
});

export default connect(mapStateToProps)(App);
