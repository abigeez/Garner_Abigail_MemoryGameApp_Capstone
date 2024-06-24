import { useState } from 'react'
import './App.css'
import SingularCard from './components/SingularCard'

import dino_one from './img/dino1Card.png'
import dino_two from './img/dino2Card.png'
import dino_three from './img/dino3Card.png'
import dino_four from './img/dino4Card.png'
import dino_five from './img/dino5Card.png'
import dino_six  from './img/dino6Card.png'
import egg_card from './img/eggCover.png'

///creating an  array  of obejcts for the cards to remain constant because 
// the cards  dont need to be recreated every time the component is reevaluated.


const imgCards = [
  {src: dino_one },
  {src: dino_two },
  { src: dino_three },
  { src: dino_four },
  {src: dino_five },
  {src : dino_six },
  
];


function App() {

  //creating a state to store the cards in for each individual game that is played to finish
  const [gameCards, setGameCards] = useState([])
  const [attempts, setAttempts] = useState(0)

  //creating states for the user's initial choices 
  const [decisionOne, setdecisionOne] = useState(null)
  const [decisionTwo, setdecisiontwo] = useState(null)

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
        {gameCards.map(gameCard => (
           <SingularCard key={gameCard.id} gameCard={gameCard} />

        ))}

      </div>

    </div>

    // gamecard layout above is used to map through the state of the
    // shuffled cards to create grid using a template.
  );
}

export default App
