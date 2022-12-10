import { useState } from "react";

export const PostMessage = ({}) => {
  const [message, setMessage] = useState("");
  const isDisabled = () => (message ? true : false);

  return (
    <div>
      <form className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={message}
          onChange={(event) => {
            event.preventDefault();
            setMessage(event.target.value);
          }}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
