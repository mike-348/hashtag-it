import React from "react";
import "../styles/DragDropFile.css";
import image1 from "/Users/michaelmartin/dev/hashtag-it/src/download.jpg";

// drag drop file component
export default function DragDropFile() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  const [image, setImage] = React.useState(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      e.dataTransfer.files[0].text = e.dataTransfer.getData("text/plain");
      inputRef.current.files = e.dataTransfer.files;
      inputRef.current.dispatchEvent(new Event("change"));
      handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleFiles = async (files) => {
    const data = new FormData();
    console.log(files[0]);
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    // setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dpomruunm/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file.secure_url);
    setImage(file.secure_url);
    // setLoading(false);
  };

  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
      <div className="div-2">
        {
          <img src={image1} style={{ width: "300px" }} alt="hi" />
        }
        {/* {image !== null && (
          <img src={image} style={{ width: "300px" }} alt="hi" />
        )} */}
      </div>
    </form>
  );
}
