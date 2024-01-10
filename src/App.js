import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

const App = () => {
  const [darkMode, setdarkMode] = useState("light");
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
      setdarkMode("light");
      setButtonText("Dark Mode");
      showAlert("Dark mode has been Disabled!", "success");
      document.title = "TextUtils";
    } else if (darkMode === "light") {
      setdarkMode("dark");
      setButtonText("Light Mode");
      showAlert("Dark mode has been Enabled!", "success");
      document.title = "TextUtils - Dark";
    }
  };
  return (
    <Router>
      <div className={`main vh-100 bg-${darkMode} text-${darkMode === "light" ? "dark" : "light"}`} data-bs-theme={darkMode}>
        <Navbar title="TextUtils" about="About" darkMode={darkMode} buttonText={buttonText} setButtonText={setButtonText} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your Text to Analyse" />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
