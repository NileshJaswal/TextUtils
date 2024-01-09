import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

const App = () => {
  return (
    <>
      <Navbar title="TextUtils" about="TextUtils about text" />
      <div className="container">
        <Textform heading="Enter your Text to Analyse" />
      </div>
    </>
  );
};

export default App;
