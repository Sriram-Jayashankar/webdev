import './App.css';
import Alert from './components/Alert';
// import Accordition from './components/Accordition';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import React, { useState } from 'react'



function App() {
  const [alert,setalert]= useState(null);


  const putalertfn=(message,type)=>{
    setalert({
      alerttype:type,
      alerttitle:message
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  // below code is for converting darkmode to lightmode 
  const [mode,setmode]= useState("light");
  const togglemode=()=>{
    console.log("mode changed")
    if(mode==="light")
      {setmode("dark")
      document.body.style.backgroundColor="grey"
      putalertfn("changed type","success")}
    else
      {setmode("light")
      document.body.style.backgroundColor="white"
      putalertfn("changed type","success")}
  }

  return (
    <>
    <Navbar title="textutils" navbar1="first" navbar2="second" mode={mode} togglemode={togglemode} putalertfn={putalertfn}/>
    <Alert alert={alert} />
    <Textform startingtext="enter text" mode={mode} togglemode={togglemode} putalertfn={putalertfn}/>
    {/* <Accordition/> */}
    </>
  );
}

export default App;
