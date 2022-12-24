import { connect } from "react-redux";
import { useState } from "react";

export const NewTweetComponent = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: add tweet to store
    console.log("New Tweet: ", text);

    setText("");
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

const mapStateToProps = () => {
  return {};
};

export const NewTweet = connect(mapStateToProps)(NewTweetComponent);
