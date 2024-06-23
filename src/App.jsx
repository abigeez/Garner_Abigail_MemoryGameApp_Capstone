import { useState } from 'react'

import './App.css'

const imgCards = [
  { "src": "/images/dino1Card.png" },
  { "src": "/images/dino2Card.png" },
  { "src": "/images/dino3Card.png" },
  { "src": "/images/dino4Card.png" },
  { "src": "/images/dino5Card.png" },
  { "src": "/images/dino6Card.png" }
];

///creating an  array  of obejcts for the cards to remain constant because 
// the cards  dont need to be recreated every time the component is reevaluated.


function App() {

  //creating a function to duplicate the cards so that they can be matched together in the game
  //and then using the sort method to shuffle them up and then be assigned an id to be able to match them

  const cardShuffle = () => {
    const cardsShuffled = [...imgCards,...imgCards]
    .sort(()=> Math.random() - 0.5 )
  }

  return (
    <div className="App">
      <h1>Dinosaur Match Memory Game</h1>
      <button>START</button>

    </div>


  )
}

export default App
