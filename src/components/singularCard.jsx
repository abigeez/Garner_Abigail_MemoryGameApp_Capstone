
import "../components/SingularCard.css";


import React from 'react'

export default function SingularCard({gameCard}) {
return (
    <div className='gamecard'>
        <div>
            <img className='dinoSide' src={gameCard.src} alt="front of card" />
            <img className='eggSide' src="/img/eggCover.png" alt="Back side of card" />
        </div>
    </div>
)
}
