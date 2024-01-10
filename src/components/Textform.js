import React, { useState } from "react";

export default function Textform(props) {
  //Text is a variable where we storing the value and set text iws the variable which we will use to update the value text
  const [text, setText] = useState("");

  let wordCount = text.split(" ").length;
  if (text === '') {
    wordCount = 0;
  }

  // Update the text on manually changing the text area value onchange listn
  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

 //Uppercase
  const HandleUpClick = () => {
    // console.log("up was Clicked on" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Lowercase
  const HandleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Capitalize Words
  const capitalizeText = () => {
    const words = text.split(' '); // Split text into an array of words
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each word
    });
    const capitalizedText = capitalizedWords.join(' '); // Join the words back into a string
    setText(capitalizedText);
  };

  // Capitalize Sentence
  const capitalizeSentence = () => {
    const words = text.toLowerCase().split(' ');
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const capitalizedText = words.join(' ');
    setText(capitalizedText);
  };

  // Copy Text
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('Text is Copied to Clipboard!', "success");
      /* .then(() => {
        // Handle successful copy
        alert('Text copied to clipboard!');
      })
      .catch((error) => {
        // Handle error
        console.error('Could not copy text: ', error);
      }); */
  };

  // Clear Text
  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={HandleOnChange}
            value={text}
          />
        </div>
        <div className="d-flex flex-column flex-md-row gap-2">
          <button onClick={HandleUpClick} type="button" className="btn btn-primary">
            Convert to Uppercase
          </button>
          <button onClick={HandleLoClick} type="button" className="btn btn-primary">
            Convert to Lowercase
          </button>
          <button onClick={capitalizeText} type="button" className="btn btn-primary">
            Capitalize Words
          </button>
          <button onClick={capitalizeSentence} type="button" className="btn btn-primary">
            Capitalize Sentence
          </button>
          <button onClick={handleCopyClick} type="button" className="btn btn-primary">
            Copy Text
          </button>
          <button onClick={clearText} type="button" className="btn btn-danger">
            Clear Text
          </button>
        </div>
      </div>
      <div className="container mt-4">
        <h3>Your Text Summary</h3>
        <p>
          {wordCount} Words, {text.length} Characters
        </p>
        <p>{0.008 * wordCount} Minutes Read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
