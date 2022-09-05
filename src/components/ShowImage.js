import React from "react";

function ShowImage({ imageURL }) {
  return (
    <div>
      <img
        src={imageURL}
        style={{ width: "400px" }}
        className="image"
        alt="hi"
      />
    </div>
  );
}

export default ShowImage;
