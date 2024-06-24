import { useState } from 'react'

import './App.css'



///creating an  array  of obejcts for the cards to remain constant because 
// the cards  dont need to be recreated every time the component is reevaluated.


const imgCards = [
  { "src": "/images/dino1Card.png" },
  { "src": "/images/dino2Card.png" },
  { "src": "/images/dino3Card.png" },
  { "src": "/images/dino4Card.png" },
  { "src": "/images/dino5Card.png" },
  { "src": "/images/dino6Card.png" }
];


function App() {

  //creating a state to store the cards in for each individual game that is played to finish
const [gameCards,setGameCards] = useState([])
const [attempts, setAttempts] = useState(0)
  //creating a function to duplicate the cards so that they can be matched and then using the sort method 
  //to shuffle them up based on what it returns and then be assigned an id to be able to match them
  const cardShuffle = () => {
    const cardsShuffled = [...imgCards, ...imgCards]
      .sort(() => Math.random() - 0.5)
      .map((gameCard) => ({ ...gameCard, id: Math.random() }))

      setGameCards(cardsShuffled)
      setAttempts(0)
  }
console.log(gameCards, attempts)
  return (
    <div className="App">
      <h1>Dinosaur Match Memory Game</h1>
      <button onClick={cardShuffle}> New Game </button>
    
    
    <div className='gamecardLayout'>
      

    </div>
  
    </div>

// class gamecard layout is used to map through the state of the shuffled cards to create grid.
  )
}

export default App
