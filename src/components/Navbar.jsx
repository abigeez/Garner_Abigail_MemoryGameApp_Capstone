import React from 'react'
import "../components/Navbar.css"


export default function Navbar() {

  return <nav className="navBar">
<a href ="/" className="siteName">Dinosaur Memory Match Game</a>
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

