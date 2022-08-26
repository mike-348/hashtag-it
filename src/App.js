import React from "react";
import "./App.css";
import DragDropFile from "./components/DragDropFile";
import TextBox from "./components/TextBox";
import Image from "./components/Image";


function App() {
  return (
    <div className="App">
      <h1>#hashtag it</h1>
      <DragDropFile />
      <TextBox />
      <Image />
      {/* <Image /> */}
    </div>
  );
}

export default App;
