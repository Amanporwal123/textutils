
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,

// } from "react-router-dom";




//import react doesn't require because of in this project we use function base component
function App() {
  const [mode,setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togglemode = ()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    document.body.style.color = 'white';
    showAlert("Dark mode has been enable","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enable","success")
    }
  }
  return (
    <>
     {/* <Router>
    */}
   <Navbar tittle = "Textutils" mode = {mode}  toggleMode={togglemode}/>
   <Alert alert = {alert}/>
   {/* <div className="app-container">
   <Routes>
        <Route path="/" element={<Textform  showAlert = {showAlert} heading = "Enter the text to analyze"/> 
          } />
          <Route path="/abouts" element={<Abouts/>
          } />  
    </Routes>
        </div>
    </Router> */}
    <Textform  showAlert = {showAlert} heading = "Enter the text to analyze"/>
   </>
  );
}

export default App;
