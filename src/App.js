
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SpeechToText from './components/SpeechToText.js';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type,
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1000);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#062f56";
      document.body.style.color = "white";
      showalert("Dark Mode is activated", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#062f56";
      showalert("Light Mode is activated", "success");
    }
  }
  return (
    <Router>
      <div>
        <Navbar title="TEXT-UTILS" about="About Us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm heading="Enter Text to Analyze" showalert={showalert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </div>
      <SpeechToText />
    </Router>
  );
}


export default App;