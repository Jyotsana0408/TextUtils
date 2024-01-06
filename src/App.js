import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importing React Router Dom

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#22212c";
      showAlert("Dark mode has been enabled", "success");
      //document.title = "TextUtils - Dark Mode";
    } else {
      {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
        //document.title = "TextUtils - Light Mode";
      }
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About Us"/>  Props */}
      {/* <Navbar/>  Propss */}
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container ">
      <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, 
            Remove extra spaces"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
        </div>
        </Router>
    </>
  );
}

export default App;
