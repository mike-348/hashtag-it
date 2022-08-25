import React from "react";

export default function Image() {
  const [image, setImage] = React.useState(null);
  // const [loading, setLoading] = React.useState(false);
  const [imageSelected, setImageSelected] = React.useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
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
    setImageSelected(!imageSelected);
    setImage(file.secure_url);
    // setLoading(false);
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {imageSelected && <img src={image} style={{ width: "300px" }} alt="hi" />}
    </div>
  );
}
