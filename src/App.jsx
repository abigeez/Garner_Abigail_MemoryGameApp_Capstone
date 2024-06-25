import { useEffect, useState } from 'react'
import './App.css'
import SingularCard from './components/SingularCard'
import Navbar from './components/Navbar'
import dino_one from './img/dino1Card.png'
import dino_two from './img/dino2Card.png'
import dino_three from './img/dino3Card.png'
import dino_four from './img/dino4Card.png'
import dino_five from './img/dino5Card.png'
import dino_six from './img/dino6Card.png'
import egg_card from './img/eggCover.png'

///creating an  array  of obejcts for the cards to remain constant because 
// the cards  dont need to be recreated every time the component is reevaluated.


const imgCards = [
  { src: dino_one, matched: false },
  { src: dino_two, matched: false },
  { src: dino_three, matched: false },
  { src: dino_four, matched: false },
  { src: dino_five, matched: false },
  { src: dino_six, matched: false }

];


function App() {

  //creating a state to store the cards in for each individual game that is played to finish
  const [gameCards, setGameCards] = useState([])
  const [attempts, setAttempts] = useState(0)

  //creating states for the user's initial choices of cards.
  const [selectionOne, setselectionOne] = useState(null)
  const [selectionTwo, setselectionTwo] = useState(null)
  const [deactivated, setDeactivated] = useState(false)


  //creating a function to duplicate the cards so that they can be matched and then using the sort method 
  //to shuffle them up based on what it returns and then be assigned an id to be able to match them
  const cardShuffle = () => {
    const cardsShuffled = [...imgCards, ...imgCards]
      .sort(() => Math.random() - 0.5)
      .map((gameCard) => ({ ...gameCard, id: Math.random() }))
    setselectionOne(null)
    setselectionTwo(null)
    setGameCards(cardsShuffled)
    setAttempts(0)
  }

  // handle a selection
  /// & using a ternary operator to dictate whether or not the value of the card represented through its id is 
  // null or if it has a value to it. 
  const handleSelection = (gameCard) => {
    selectionOne ? setselectionTwo(gameCard) : setselectionOne(gameCard)
  }


  //comparing the two selected cards &  by determining its state on whether or not they match

  useEffect(() => {
    if (selectionOne && selectionTwo) {
      setDeactivated(true)

      if (selectionOne.src === selectionTwo.src) {
        setGameCards(prevGameCards => {
          return prevGameCards.map(gameCard => {
            if (gameCard.src === selectionOne.src) {
              return { ...gameCard, matched: true }
            } else {
              return gameCard
            }
          })
        })
        resetSelection()
      } else {
        setTimeout(() => resetSelection(), 700)
      }
    }

  }, [selectionOne, selectionTwo])

  console.log(gameCards)

  // starting over selections and iterating by one
  const resetSelection = () => {
    setselectionOne(null)
    setselectionTwo(null)
    setAttempts(prevAttempts => prevAttempts + 1)
    setDeactivated(false)
  }

  //having a new game load without having to click new game when you first enter the page"

  useEffect(() => {
    cardShuffle()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <h1>Dinosaur Match Memory Game</h1>
      <button onClick={cardShuffle}> New Game </button>


      <div className='gamecardLayout'>
        {gameCards.map(gameCard => (
          <SingularCard
            key={gameCard.id}
            gameCard={gameCard}
            handleSelection={handleSelection}
            cardRevealed={gameCard === selectionOne || gameCard === selectionTwo || gameCard.matched}
            deactivated={deactivated}
          />

        ))}

      </div>
      <p className="attemptCtr" >Attempts: {attempts} </p>
    </div>

    // gamecard layout above is used to map through the state of the
    // shuffled cards to create grid using a template.
  );
}

export default App
