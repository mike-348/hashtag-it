import React, { useState, useEffect } from "react";
import "./App.css";
import DragDropFile from "./components/DragDropFile";
import ShowImage from "./components/ShowImage";

function App() {
  return (
    <div className="App">
      <h1>#hashtag it!</h1>
      <DragDropFile />
      <div>{<ShowImage imageURL={imageURL} />}</div>
    </div>
  );
}

export default App;
