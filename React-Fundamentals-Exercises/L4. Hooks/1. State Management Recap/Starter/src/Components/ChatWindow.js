import { useState } from "react";

export const ChatWindow = ({ users, isDisabled, messages }) => {
  const [message, setMessage] = useState("");
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{users[1].username}</div>
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === users[1].username
                ? "message sender"
                : "message recipient"
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>

      <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={(event) => {
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
    </div>
  );
};
