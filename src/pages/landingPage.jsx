import React from 'react'
import Navbar from '../components/Navbar'
import welc_dino from '../img/leggoDino.png'
import "../pages/LandingPage.css"
function LandingPage() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="homePage">
                <h2>Welcome!
                   </h2> 
                   
                   
                </div>
            <a className="dinoLink" href="/playgame"><img src={welc_dino} /> </a>
            <span className="clickMe"> Click on the Dino to go straight to the Game! </span>
        </div>
    )
}

export default LandingPage