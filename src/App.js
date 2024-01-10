import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";

const App = () => {
  const [darkMode, setdarkMode] = useState("light");
  const [buttonText, setButtonText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleStyle = () => {

    if (darkMode === "dark") {
      setdarkMode("light");
      setButtonText("Dark Mode");
      showAlert('Dark mode has been Disabled!', "success");
    } 
    
    else if (darkMode === "light") {
      setdarkMode("dark");
      setButtonText("Light Mode");
      showAlert('Dark mode has been Enabled!', "success");
    }

  };
  return (
    <div className={`main vh-100 bg-${darkMode} text-${darkMode==='light'?'dark':'light'}`} data-bs-theme={darkMode}>
      <Navbar title="TextUtils" about="TextUtils about text" darkMode={darkMode} buttonText={buttonText} setButtonText={setButtonText} toggleStyle={toggleStyle}/>
      <div className="container">
        <Alert alert={alert}/>
        <Textform showAlert={showAlert} heading="Enter your Text to Analyse" />
        {/* <About></About> */}
      </div>
    </div>
  );
};

export default App;
