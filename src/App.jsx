import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css";
function App() {
const [mode,setMode]=useState(['white','black'])

const modeChange = ()=>{
    setMode([...mode].reverse());
    console.log(mode);
}
  return (
    <div className= {`bg-${mode[0]} w-screen h-screen text-${mode[1]}`}>
    <button onClick={modeChange}>{mode[0]=='white'?'switch to dark mode':'switch to light mode'}</button>
    </div>
  );
}


export default App
