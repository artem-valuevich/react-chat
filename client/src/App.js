import React, { useEffect, useState } from "react"
import Button from "./components/Button"
import MessageList from "./components/MessageList"
import Input from "./components/Input"
import { useButton } from "./hooks/button.hook"
import { useInput } from "./hooks/input.hook"

export default function App({ sender }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useInput();
  const button = useButton(input, setInput, sender);

  useEffect(() => {
    function subscribe(setMessages) {
      fetch("api/routerpoll")
        .then((res) => res.json())
        .then((res) => {
          setMessages(res);
        });
    }
    document.getElementById("message-list").scrollTop = 9999999;
    subscribe(setMessages);
  }, [messages]);

  useEffect(() => {
    fetch("api/getAllMessages");
  }, []);

  return (
    <>
      <h1>Simple chat app</h1>

      <MessageList messages={messages} />

      <div className="row valign-wrapper">
        <Input {...input} onKeyPress={button} />
        <Button onClick={button} />
      </div>
    </>
  );
}


