import './App.css';
// import Accordition from './components/Accordition';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import React, { useState } from 'react'



function App() {
  const [mode,setmode]= useState("light");

  const togglemode=()=>{
    console.log("mode changed")
    if(mode==="light")
      {setmode("dark")
      document.body.style.backgroundColor="grey"}
    else
      {setmode("light")
      document.body.style.backgroundColor="white"}
  }

  return (
    <>
    <Navbar title="textutils" navbar1="first" navbar2="second" mode={mode} togglemode={togglemode}/>
    <Textform startingtext="enter text" mode={mode} togglemode={togglemode}/>
    {/* <Accordition/> */}
    </>
  );
}

export default App;
