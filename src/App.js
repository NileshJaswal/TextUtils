import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

const App = () => {
  const [darkMode, setdarkMode] = useState("dark");
  const [buttonText, setButtonText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (darkMode === "dark") {
      setdarkMode("light");
    } else if (darkMode === "light") {
      setdarkMode("dark");
    }
  };
  return (
    <div className="main" data-bs-theme={darkMode}>
      <Navbar title="TextUtils" about="TextUtils about text" />
      <div className="container">
        <Textform heading="Enter your Text to Analyse" />
        <About buttonText={buttonText} setButtonText={setButtonText} toggleStyle={toggleStyle}></About>
      </div>
    </div>
  );
};

export default App;
