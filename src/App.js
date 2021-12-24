import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';



function App () {
  const [mode, setMode] = useState('light')// WHETHER DARK MODE IS ENABLED OR NOT


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#050c3d';
      document.body.style.color = 'white';
      let myBox = document.getElementById("myBox");
      myBox.style.backgroundColor = '#1d255f'
      myBox.style.color = 'white'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      let myBox = document.getElementById("myBox");
      myBox.style.backgroundColor = 'white'
      myBox.style.color = 'black'

    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert="This is Alert" />
      {/* <Navbar /> */}
      <TextForm heading="Enter The Text To Analyze Below" toggleMode={toggleMode} />
      {/* <About /> */}
    </>
  );
}

export default App;
