import React from "react"
import Message from "./Message"

export default function MessageList({ messages }) {
    return (
      <div style={{ height: 400, overflow: "auto" }} id="message-list">
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>
    );
  }