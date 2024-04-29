import React from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App(props) {

  const list = props.menuitems;
  const updatedlist = list.map((listitems) => {
    return <li>{listitems}</li>
    const menuitems =[1,2,3,4,5];
  });

  return (
    <>
      <ul>{updatedlist}</ul>
    </>
  )
 
}

export default App
