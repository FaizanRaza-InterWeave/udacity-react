import { useState } from "react";
import { PostMessage } from "./PostMessage";
import { ChatHeadings } from "./ChatHeadings";

export const ChatWindow = ({ users, messages }) => {
  return (
    <div className="chat-window">
      <ChatHeadings users={users} />
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
