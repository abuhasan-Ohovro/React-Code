import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

       const [counter,setCounter]=useState(0)




//let counter = 15;
const addvalue = () =>{
  //console.log("clicked",counter)
 // counter = counter + 1;
 setCounter(counter + 1)
};

const removeValue = () =>{
  setCounter(counter -1 )
}
  return (
    <>
     <h1> Counter Project</h1>
     <h1> Counter value : {counter}</h1>

     <button
     onClick={addvalue}>Add Value{counter}</button>
     <br />
     <button
     onClick={removeValue}>Remove Value{counter}</button>
     <p>"Paragrapth",{counter}</p>
    </>
  )
}

export default App
