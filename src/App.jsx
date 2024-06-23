import { useState } from 'react'

import './App.css'

const imgCards = []

///creating an  array  of obejcts for the cards to remain constant because 
// the cards  dont need to be recreated every time the component is reevaluated.


function App() {
  return (
    <div className="App">
      <h1>Dinosaur Memory Match Game</h1>
      <button>START</button>

    </div>
      
    
  )
}

export default App
