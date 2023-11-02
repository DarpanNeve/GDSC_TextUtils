import Alert from "./components/Alert";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
// import {state};
import React, { useState } from "react";


<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>;

function App() {
  const bhai = () => {
    var typed = new typed("#element", {
      strings: [
        "Converting String into Uppercase",
        "Converting String into Uppercase",
        "Removing Extra spaces",
      ],
      typeSpeed: 50,
    });
  };
  const [mode, setMode] = useState("light");
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
    if (document.getElementById(`myBtn${1}`) != null) {
      for (let i = 1; i <= 6; i++) {
        document.getElementById(`myBtn${i}`).style.backgroundColor = "#0d6efd";
        document.getElementById(`myBtn${i}`).style.color = "white";
        document.getElementById(`myBtn${i}`).style.border = "0px solid black";
      }
    }
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181a43";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(()=>{
      //   document.title='TextUtils is Amazing App';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "wheat";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - White Mode";
    }
  };
  const setC = (color) => {
    document.body.style.backgroundColor = color;
    document.body.style.color = "black";
    if (document.getElementById(`myBtn${1}`) != null) {
      for (let i = 1; i <= 6; i++) {
        document.getElementById(`myBtn${i}`).style.backgroundColor = color;
        document.getElementById(`myBtn${i}`).style.color = "black";
        document.getElementById(`myBtn${i}`).style.border = "2px solid black";
      }
    }
    showAlert(
      "You may not be able to see the text due to the background color",
      "waring"
    );
  };
  return (
    <>
      {/* <Navbar title="Textutils" about="About.extutils"/> */}

      <Navbar
        title="Textutils"
        mode={mode}
        toggleMode={toggleMode}
        setC={setC}
      />
      {/* <div> This Website is about </div>
    {bhai} */}
      {/* <span id="element"></span> */}
      {/* <Alert alert={alert}></Alert> */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
