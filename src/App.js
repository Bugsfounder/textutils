import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App () {
  const [mode, setMode] = useState('light'); // WHETHER DARK MODE IS ENABLED OR NOT
  const [alert, setAlert] = useState(null);

  const showAlert = (message, status) => {
    setAlert({
      msg: message,
      status: status
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#050c3d';
      document.body.style.color = 'white';
      let myBox = document.getElementById("myBox");
      myBox.style.backgroundColor = '#1d255f';
      myBox.style.color = 'white';
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils - Home";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      let myBox = document.getElementById("myBox");
      myBox.style.backgroundColor = 'white';
      myBox.style.color = 'black';
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";

      // setInterval(() => {
      //   document.title = "TextUtils - Home";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode";
      // }, 1500);
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <About /> */}
        {/* <TextForm heading="Enter The Text To Analyze Below" showAlert={showAlert} toggleMode={toggleMode} /> */}
        <Switch>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter The Text To Analyze Below" showAlert={showAlert} toggleMode={toggleMode} />
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
