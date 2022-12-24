import { connect } from "react-redux";
import { useState } from "react";
import { handleAddTweet } from "../Shared/tweets";
import { useNavigate } from "react-router-dom";

export const NewTweetComponent = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleAddTweet(text, id));
    setText("");
    if (!id) {
      navigate("/");
    }
  };

  const maxLength = 280;
  const lengthLeft = maxLength - text.length;
  return (
    <div>
      <h3 className="center">Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {/* TODO: Redirect to root route  when submitted */}
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={maxLength}
        />
        {lengthLeft <= 100 && <div className="tweet-length">{lengthLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export const NewTweet = connect()(NewTweetComponent);
