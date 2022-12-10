import { useState } from "react";
import { PostMessage } from "./PostMessage";
import { ChatHeadings } from "./ChatHeadings";
import { ChatBox } from "./ChatBox";

export const ChatWindow = ({ users, messages, chatUser, setMessages }) => {
  console.log({ messagesInChatWindow: messages });
  return (
    <div className="chat-window">
      <ChatHeadings users={users} chatUser={chatUser} />
      <ChatBox messages={messages} users={users} chatUser={chatUser} />

      <PostMessage
        chatUser={chatUser}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
};
