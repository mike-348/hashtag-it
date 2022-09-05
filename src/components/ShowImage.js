import React, { useEffect } from "react";

function ShowImage({ imageUrl }) {
  return (
    <div className="img-container">
      <img
        src={imageUrl}
        style={{ width: "400px" }}
        className="image"
        alt="hi"
      />
    </div>
  );
}

export default ShowImage;
