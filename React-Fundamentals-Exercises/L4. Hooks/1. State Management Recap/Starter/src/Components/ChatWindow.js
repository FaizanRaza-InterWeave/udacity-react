import { useState } from "react";
import { PostMessage } from "./PostMessage";
import { ChatHeadings } from "./ChatHeadings";
import { ChatBox } from "./ChatBox";

export const ChatWindow = ({ users, messages }) => {
  return (
    <div className="chat-window">
      <ChatHeadings users={users} />
      <ChatBox messages={messages} users={users} />

      <PostMessage />
    </div>
  );
};
