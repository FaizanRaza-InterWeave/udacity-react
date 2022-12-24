import { connect } from "react-redux";
import { formatDate, formatTweet } from "../../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";

import { handleToggleTweet } from "../Shared/tweets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const TweetComponent = ({ authedUser, tweet, dispatch }) => {
  const {
    name,
    avatar,
    timestamp,
    text,
    hasLiked,
    likes,
    replies,
    parent,
    id,
  } = tweet;

  const navigate = useNavigate();
  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  };

  const handleLike = (e) => {
    e.preventDefault();

    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser,
      })
    );
  };

  if (tweet === null) {
    return <p>This tweet does not exist</p>;
  }
  return (
    <Link to={`/tweet/${id}`} className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(event) => toParent(event, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>

        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button
            className="heart-button"
            onClick={(e) => {
              handleLike(e);
            }}
          >
            {hasLiked === true ? (
              <TiHeartFullOutline color="red" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </Link>
  );
};

//(state, props)
const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser: authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};

export const Tweet = connect(mapStateToProps)(TweetComponent);
