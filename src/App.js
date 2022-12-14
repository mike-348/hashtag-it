import React, { useState } from "react";
import DragDropFile from "./components/DragDropFile";
import ShowImage from "./components/ShowImage";
import TextBox from "./components/TextBox";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = React.useState(null);

  return (
    <div className="App">
      <h1>#hashtag it!</h1>
      <DragDropFile setImageUrl={setImageUrl} />
      <div>{imageUrl && <TextBox imageUrl={imageUrl}/>}</div>
      <div>{imageUrl && <ShowImage imageUrl={imageUrl} />}</div>
    </div>
  );
}

export default App;
