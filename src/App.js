import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(massage,type)=>{
            setAlert({
              msg:massage,
              type:type

            })
            setTimeout(() => {
              setAlert(null);
            }, 1500);
  }
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='#1A4274 '
      showAlert("Dark mode has been enable","success");
      document.title="TextUtils-Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.background='white'
      showAlert("Light mode has been enable","success");
      document.title="TextUtils-Light Mode";
   } 
  }
  return (
   <>
{/* <Navbar title="patil"/> */}
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes> 

<Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}/>}/>
<Route path="/about" element={<About/>}/>

</Routes>

            


         
</div>
</>



  );
}

export default App;
