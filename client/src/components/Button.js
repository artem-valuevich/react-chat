import React from "react"

export default function Button({ onClick }) {
    return (
      <div className="col s1">
        <button
          className="btn waves-effect waves-light blue darken-1"
          name="action"
          onClick={onClick}
        >
          Send
        </button>
      </div>
    );
  }