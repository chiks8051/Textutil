import './App.css';
import React ,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter, Route,Routes } from 'react-router-dom';



export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    },2000)
  }

  
  const toggleModeBlue = () =>{
    if(mode === 'light'){
      setMode('blue');
      document.body.style.background = '#042743';
      showAlert('Blue Dark Mode has been enabled','success');
    }else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert('light Mode has been enabled','success');
    }
  }
  const toggleModeRed = () =>{
    if(mode === 'light'){
      setMode('red');
      document.body.style.background = '#FF0000';
      showAlert('Red Dark Mode has been enabled','success');
    }else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert('light Mode has been enabled','success');
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeRed={toggleModeRed}/>
        <Alert alert={alert} />
        <div className='container my-3'>
        <TextForm heading = "enter your TEXT to analyze" mode={mode} showAlert={showAlert}/>
        {/* <Routes> */}
          {/* <Route path='/about' element={<About/>} /> */}
          {/* <Route path='/' element={<TextForm heading = "enter your TEXT to analyze" mode={mode} showAlert={showAlert}/>} /> */}
        {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}