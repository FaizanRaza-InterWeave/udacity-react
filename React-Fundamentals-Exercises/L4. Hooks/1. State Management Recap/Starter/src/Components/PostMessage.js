import { useState } from "react";

export const PostMessage = ({ chatUser, setMessages, messages }) => {
  const [message, setMessage] = useState("");
  const isDisabled = () => (message ? false : true);

  console.log({ messagesInPostMessage: messages });

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
          <button
            className="btn submit-button"
            disabled={isDisabled()}
            onClick={(event) => {
              event.preventDefault();

              setMessages([...messages, { username: chatUser, text: message }]);
              setMessage("");
            }}
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
