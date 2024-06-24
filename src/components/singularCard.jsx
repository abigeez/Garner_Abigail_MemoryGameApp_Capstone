import React from 'react'
import "../components/singularCard.css";


import React from 'react'

export default function singularCard() {
  return (
    <div className='gamecard' key={gameCard.id}>
    <div>
      <img className='dinoSide' src={gameCard.src} alt="front of card" />
      <img className='eggSide' src="/img/eggCover.png" alt="Back side of card" />
    </div>
  </div>
  )
}
