import './App.css';
import Navbar from './component/Navbar';
import Form from './component/Form';
import React, { useState } from 'react';
import Alert from './component/Alert';
//  import About from './component/About';

// import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
// import Home from './component/Home';



// let name="Annas Mir"
function App() {
  const [mode, setMode] = useState('light');
  const [isGreen, setIsGreen] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode is enabled', 'success   ');
      document.title ="Dark Mode";}
      // setInterval=(()=>{
      //   document.title ="Dark Mode";
      //  } ,2000);
      //  setInterval=(()=>{
      //   document.title ="Dark Mode";
      //  } ,1500)} To make it appear in the browser window 


     else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled', 'success  ');
      document.title ="Light Mode";
    }
  };

  const handleGreenMode = () => {
    if (isGreen === 'light') {
      setIsGreen('success');
      document.body.style.backgroundColor = '#008000';
      showAlert('Green Mode is enabled', 'success');
      document.title ="Green Mode";
    } else {
      setIsGreen('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled', 'success');
      document.title ="Light Mode";
    }
  };

  return (
    <>
   
   {/* <Router> */}
   
   <Navbar title="CBTL" isGreen={isGreen} handleGreenMode={handleGreenMode} mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />
        <div className='container my-3'>
   <Form heading="Enter the text to Analyze" showAlert={showAlert} />
   </div>
    {/* <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/form" element={<Form />} />
      <Route path="/about" element={<About />} />
    </Routes> */} 
   
  {/* //  </Router> */}
            
     
    </>
  );
}

export default App;