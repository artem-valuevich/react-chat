export function useButton(input, setInput, sender) {
    return event => {
    if (event.key !== "Enter" && event.key !== undefined) return
    if (!input.value) return
    event.preventDefault();    
    const newMessage = {
        sender,
        text: input.value,
        date: new Date().toLocaleTimeString(),
      };
      fetch("api/createMessage", {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: { "Content-Type": "application/json" },
      });
      setInput("");
    };
  }