
import "../components/SingularCard.css";

import egg_card from '../img/eggCover.png'
import React from 'react'

//// creating a separate card component so I can simplify the code in the app component and
// can write other logic extensively in this component

export default function SingularCard({ gameCard, handleSelection, cardRevealed, deactivated }) {
    const handleClick = () => {
        if (!deactivated) {
            handleSelection(gameCard)
        }

    }
    return (
        <div className='gamecard'>
            <div className={cardRevealed ? "cardRevealed" : ""}>
                <img className='dinoSide' src={gameCard.src} alt="front of card" />

                <img className='eggSide'
                    src={egg_card}
                    onClick={handleClick}
                    alt="Back side of card" />
            </div>
        </div>
    )
}
