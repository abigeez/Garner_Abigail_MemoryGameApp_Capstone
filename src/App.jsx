import { useState } from 'react'

import './App.css'

const imgCards = [
  { "src": "/images/dino1Card.png" },
  { "src": "/images/dino2Card.png" },
  { "src": "/images/dino3Card.png" },
  { "src": "/images/dino4Card.png" },
  { "src": "/images/dino5Card.png" },
  { "src": "/images/dino6Card.png" }
]

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
