import React, { useState } from "react";

export default function Textform(props) {
  //Text is a variable where we storing the value and set text iws the variable which we will use to update the value text
  const [text, setText] = useState("");

  let wordCount = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;


  const notEmpty = () => wordCount !== 0;

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
    const words = text.split(" "); // Split text into an array of words
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each word
    });
    const capitalizedText = capitalizedWords.join(" "); // Join the words back into a string
    setText(capitalizedText);
  };

  // Capitalize Sentence
  const capitalizeSentence = () => {
    const words = text.toLowerCase().split(" ");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const capitalizedText = words.join(" ");
    setText(capitalizedText);
  };

  // Copy Text
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is Copied to Clipboard!", "success");
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
      <div className="container p-0 mt-5">
        <div className="mb-3 row">
          <div className="col-md-6">
            <h4 className="">{props.heading}</h4>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" onChange={HandleOnChange} value={text} />
          </div>
         
            <div className="col-md-6 mt-md-0 mt-4 d-flex flex-column">
              <h4>Preview</h4>
              <p id="preview" className="border h-100 mb-0 rounded p-2">
                {text.length>0?text:'Enter Something to Preview!'}
              </p>
            </div>
        
          <div className="col-md-6">
            <div className="mb-3 copy-reset mt-4">
              <button disabled={text.length===0} onClick={handleCopyClick} type="button" className="me-2 btn btn-light">
                <i className="bi bi-copy"></i>
              </button>
              <button disabled={text.length===0} onClick={clearText} type="button" className="btn btn-danger">
                Reset
              </button>
            </div>
            <div className="d-flex flex-wrap gap-2 buttons">
              <button disabled={text.length===0} onClick={HandleUpClick} type="button" className="btn btn-secondary">
                Uppercase
              </button>
              <button disabled={text.length===0} onClick={HandleLoClick} type="button" className="btn btn-secondary">
                Lowercase
              </button>
              <button disabled={text.length===0} onClick={capitalizeText} type="button" className="btn btn-secondary">
                Capitalize Words
              </button>
              <button disabled={text.length===0} onClick={capitalizeSentence} type="button" className="btn btn-secondary">
                Capitalize Sentence
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3 row m-0 align-items-center gap-4 word-count mt-4">
              <div className="row m-0 col-md-2 col-5 p-0 align-items-center">
                <div className="col-5 p-0">
                  <input value={wordCount} type="email" className="form-control" id="exampleFormControlInput1" onChange={HandleOnChange} readOnly  />
                </div>
                <div className="col-7">
                  <label htmlFor="exampleFormControlInput1" className="form-label m-0">
                    Words
                  </label>
                </div>
              </div>

              <div className="row m-0 col-md-2 col-5 p-0 align-items-center">
                <div className="col-5 p-0">
                  <input value={text.length} type="email" className="form-control" id="exampleFormControlInput1" onChange={HandleOnChange} readOnly  />
                </div>
                <div className="col-7">
                  <label htmlFor="exampleFormControlInput1" className="form-label m-0">
                    Characters
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
