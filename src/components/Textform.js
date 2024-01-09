import React, { useState } from "react";

export default function Textform(props) {
  const HandleUpClick = () => {
    console.log("up was Clicked!");
    setText('You Have Clicked the HandleUpClick');
  }
  const HandleOnChange = () => {
    console.log("up was Clicked!");
  }
  const [text, setText] = useState("Enter Text Here");
  // text = "Updated text"; //Wrong way
  // setText = ("Updated Text") //Correct
  return (
    <div className="w-50 mx-auto mt-5">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={HandleOnChange}
          value={text}
        />
      </div>
      <button
        onClick={HandleUpClick}
        type="button"
        className="w-100 btn btn-primary"
      >
        Convert to Uppercase
      </button>
    </div>
  );
}
