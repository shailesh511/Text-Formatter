import './App.css';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';

import React,{ useState } from 'react';

function App() {
 const [mode, setMode] = useState('light')
 /* const [effect, setEffect] = useState({color:'black',
backgroundColor:'white'}) */
 
const toggleMode=()=>{
  if(mode==='light')
  {
    setMode('dark');

  }
  else
  {
    setMode('light')
  }
}

  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Textfield mode={mode} toggleMode={toggleMode}/>

   </>
  );
}

export default App;
