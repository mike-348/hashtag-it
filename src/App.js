import React, { useState } from "react";
import "./App.css";
import DragDropFile from "./components/DragDropFile";
import ShowImage from "./components/ShowImage";

function App() {
  const [imageUrl, setImageUrl] = React.useState(null);

  return (
    <div className="App">
      <h1>#hashtag it!</h1>
      <DragDropFile setImageUrl={setImageUrl} />
      <div>{imageUrl && <ShowImage imageUrl={imageUrl} />}</div>
    </div>
  );
}

export default App;
