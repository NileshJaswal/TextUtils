import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

const App = () => {
  return (
    <>
      <Navbar title="TextUtils" about="TextUtils about text"/>
      <Textform heading="Enter your Text to Analyse"/>
    </>
  );
};

export default App;
