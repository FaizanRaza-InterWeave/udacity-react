import { connect } from "react-redux";
import { Tweet } from "../../components/Tweet";
import { NewTweet } from "../../components/NewTweet";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const TweetPageComponent = (props) => {
  return (
    <div>
      <Tweet id={props.id} />
      <NewTweet id={props.id} />
      {props.replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {props.replies.map((replyId) => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ authedUser, tweets, users }, props) => {
  const { id } = props.router.params;

  const replies = [...tweets[id].replies];

  return {
    id,
    replies: !tweets[id]
      ? []
      : replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
  };
};

export const TweetPage = withRouter(
  connect(mapStateToProps)(TweetPageComponent)
);
