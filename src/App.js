import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

const App = () => {
  const [darkMode, setdarkMode] = useState("white");
  const [buttonText, setButtonText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleStyle = () => {
    if (darkMode === "dark") {
      setdarkMode("white");
      setButtonText("Dark Mode");
      showAlert("Dark mode has been Disabled!", "success");
      document.title = "TextUtils";
    } else if (darkMode === "white") {
      setdarkMode("dark");
      setButtonText("Light Mode");
      showAlert("Dark mode has been Enabled!", "success");
      document.title = "TextUtils - Dark";
    }
  };
  return (
    <Router>
      <div className={`main bg-${darkMode} text-${darkMode === "white" ? "dark" : "white"}`} data-bs-theme={darkMode}>
        <Navbar title="TextUtils" about="About" darkMode={darkMode} buttonText={buttonText} setButtonText={setButtonText} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <div className="container vh-100">
          <Routes>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Input Text" />}/>
            <Route exact path="/TextUtils" element={<Textform showAlert={showAlert} heading="Input Text" />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
