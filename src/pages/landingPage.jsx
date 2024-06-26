import React from 'react'
import Navbar from '../components/Navbar'
import welc_dino from '../img/leggoDino.png'
function LandingPage() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="homePage">Welcome to The Dinosaur Memory Game!</div>
            <a href="/playgame"><img className="dinoLink"src={welc_dino} /> </a>
        </div>
    )
}

export default LandingPage