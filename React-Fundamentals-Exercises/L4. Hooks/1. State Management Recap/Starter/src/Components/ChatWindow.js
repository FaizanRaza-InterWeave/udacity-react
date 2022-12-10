import { useState } from "react";
import { PostMessage } from "./PostMessage";
import { ChatHeadings } from "./ChatHeadings";
import { ChatBox } from "./ChatBox";

export const ChatWindow = ({ users, messages, chatUser }) => {
  return (
    <div className="chat-window">
      <ChatHeadings users={users} chatUser={chatUser} />
      <ChatBox messages={messages} users={users} chatUser={chatUser} />

      <PostMessage />
    </div>
  );
};
