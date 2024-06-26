import React from 'react'
import "../components/Navbar.css"


export default function Navbar() {

  return <nav className="navBar">
<p className="siteName">Dinosaur Memory Match Game</p>
<ul>
  <li> 
    <a href ="/">Home</a> </li>
   <li> <a href ="/instructions">About</a></li>
    <li><a href ="/playgame">Game</a></li>
   <li> <a href ="/reviews">Reviews</a>
  </li>
</ul>
  </nav>
    
  
}

