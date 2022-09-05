import React from "react";
import "../styles/TextBox.css";

export default function TextBox(props) {
  return (
    <div className="text-box">
      <textarea
        className="text-box-text"
        placeholder="Type here..."
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
