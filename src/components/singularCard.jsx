
import "../components/SingularCard.css";

import egg_card from '../img/eggCover.png'
import React from 'react'

export default function SingularCard({gameCard}) {
return (
    <div className='gamecard'>
        <div>
            <img className='dinoSide' src={gameCard.src} alt="front of card" />
            <img className='eggSide' src={egg_card} alt="Back side of card" />
        </div>
    </div>
)
}
