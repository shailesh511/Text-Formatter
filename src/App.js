import './App.css';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';

import React,{ useState } from 'react';
import Alert from './components/Alert';

function App() {
 const [mode, setMode] = useState('light')
 
const toggleMode=()=>{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='rgb(35 49 72)'
    
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor='white'
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
