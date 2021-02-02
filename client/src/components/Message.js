import React from "react"

export default function Message({ sender, text, date }) {
    return (
      <div className="row">
        <div
          className="card-panel blue darken-1"
          style={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <p style={{ margin: 2 }}>{sender}</p>
          <span className="white-text"> {text} </span>
          <p style={{ margin: 2 }}> {date} </p>
        </div>
      </div>
    );
  }