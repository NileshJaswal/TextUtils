import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";

const App = () => {
  const [darkMode, setdarkMode] = useState("light");
  const [buttonText, setButtonText] = useState("Enable Dark Mode");

  const toggleStyle = () => {

    if (darkMode === "dark") {
      setdarkMode("light");
      setButtonText("Dark Mode");
    } 
    
    else if (darkMode === "light") {
      setdarkMode("dark");
      setButtonText("Light Mode");
    }
    
  };
  return (
    <div className={`main vh-100 bg-${darkMode} text-${darkMode==='light'?'dark':'light'}`} data-bs-theme={darkMode}>
      <Navbar title="TextUtils" about="TextUtils about text" darkMode={darkMode} buttonText={buttonText} setButtonText={setButtonText} toggleStyle={toggleStyle}/>
      <div className="container">
        <Textform heading="Enter your Text to Analyse" />
        {/* <About></About> */}
      </div>
    </div>
  );
};

export default App;
