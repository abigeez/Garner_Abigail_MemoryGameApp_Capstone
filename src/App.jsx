import { useState } from 'react'

import './App.css'
import dino_one from '../public/img/dino1Card.png'
import dino_two from '../public/img/dino2Card.png'
import dino_three from '../public/img/dino3Card.png'
import dino_four from '../public/img/dino4Card.png'
import dino_five from '../public/img/dino5Card.png'
import dino_six  from '../public/img/dino6Card.png'
import egg_card from '../public/img/eggCover.png'

///creating an  array  of obejcts for the cards to remain constant because 
// the cards  dont need to be recreated every time the component is reevaluated.


const imgCards = [
  { dino_one },
  { dino_two },
  { dino_three },
  { dino_four },
  { dino_five },
  { dino_six },
  
];


function App() {

  //creating a state to store the cards in for each individual game that is played to finish
  const [gameCards, setGameCards] = useState([])
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
        {gameCards.map(gameCard => (
          <div className='gamecard' key={gameCard.id}>
            <div>
              <img className='dinoSide' src={process.env.PUBLIC_URL + gameCard.src} alt="front of card" />
              <img className='eggSide' src={egg_card} alt="Back side of card" />
            </div>
          </div>

        ))}

      </div>

    </div>

    // gamecard layout above is used to map through the state of the
    // shuffled cards to create grid using a template.
  );
}

export default App
