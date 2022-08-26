//create a textbox component
import React from "react";
import "../styles/TextBox.css";

// create a textbox component
export default function TextBox(props) {
    return (
        <div className="text-box">
        <textarea
            className="text-box-text"
            placeholder="Type here..."
            onChange={props.onChange}
            value={props.value}
        />
        </div>
        
    );
}
