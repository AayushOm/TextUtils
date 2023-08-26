// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

import Navbar from './Components/Navbar';
import About from './Components/About';
import Textarea from './Components/Textarea';
// import Alerts from './Components/Alerts';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
    msg: message,
    type: type
  })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  
  const rem=()=>{
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-dark");
  }

  const toggle=(cls)=>{

    setMode(cls);
    rem();
    document.body.classList.add("bg-"+cls);
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success");
    }
  }
  return (
   
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggle={toggle}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={<Textarea showAlert={showAlert} title="Enter text here to analyze" mode={mode}/>} />
        <Route path="/About" element={<About mode={mode}/>} />
    </Routes>
    </div>
  </BrowserRouter>

  );
}

export default App;
