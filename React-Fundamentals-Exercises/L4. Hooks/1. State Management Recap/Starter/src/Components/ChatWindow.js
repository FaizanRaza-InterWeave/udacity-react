import { useState } from "react";
import { PostMessage } from "./PostMessage";

export const ChatWindow = ({ users, isDisabled, messages }) => {
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

      <PostMessage />
    </div>
  );
};
