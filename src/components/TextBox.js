import React, { useEffect } from "react";

function TextBox({ imageUrl }) {
  const [text, SetText] = React.useState("");

  function clickHandler (e) {
    navigator.clipboard.writeText(text);
    console.log("button clicked");
    e.preventDefault();
  }

  return (
    <form>
      <textarea
        className="text-box"
        placeholder="Enter text here"
        onChange={(e) => SetText(e.target.value)}
      ></textarea>
      <div className="text-box-button-div">
        <button className="text-box-button" onClick={clickHandler}>
          Copy to clipboard!
        </button>
      </div>
    </form>
  );
}

export default TextBox;
