import './App.css';
import React, {useState} from 'react';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [ mode, setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert( {
      message : message,
      type : type
    });

    setTimeout( () => {
      setAlert(null);
    },1500);
  }

  function toggleMode() {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041d38';
      document.body.style.color = 'white';
      showAlert("Dark Mode enabled", 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode enabled", 'success');
    };
  }  
  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert} />
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading = "Enter text here to analyze" mode = {mode} />
      </div>
    </>
  );
}

export default App;

