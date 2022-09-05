import React, {useEffect} from "react";

function ShowImage({ imageUrl }) {

  return (
    <div>
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
