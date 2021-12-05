import './App.css';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';

import React,{ useState } from 'react';
import Alert from './components/Alert';

function App() {
 const [mode, setMode] = useState('light')
 const [btnText, setbtnText] = useState('Enable dark mode')
 const [alert, setAlert] = useState(null)
 
const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })

   setTimeout(()=>
   {
     setAlert(null)
   },1000)
   
}

const toggleMode=()=>{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='rgb(35 49 72)'
    setbtnText('Enable light mode')
    showAlert("Dark mode has been enabled","success")
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor='white'
    setbtnText('Enable dark mode')
    showAlert("light mode has been enabled","success")
  }
}


  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText}/>
   <Alert alert={alert}/>
   <Textfield mode={mode} toggleMode={toggleMode}/>

   </>
  );
}

export default App;
