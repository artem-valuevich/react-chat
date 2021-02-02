import React from "react"

export default function Input(props) {
    return (
      <div className="input-field col s11">
        <textarea
          id="textarea1"
          className="materialize-textarea"
          {...props}
        ></textarea>
        <label htmlFor="textarea1">Messadge</label>
      </div>
    );
  }