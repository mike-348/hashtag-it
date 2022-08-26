import React from "react";
import image1 from "../download.jpg";
import "../styles/Image.css";

//display image component
export default function Image() {
    return (
        <div className="image-container">
        <img src={image1} style={{ width: "300px" }} alt="hi" />
        </div>
    );
    }