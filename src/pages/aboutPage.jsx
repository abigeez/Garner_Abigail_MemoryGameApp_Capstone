import React from 'react'
import Navbar from '../components/Navbar'
import prof_pic from '../img/profilePic.jpg'
import '../pages/AboutPage.css'
import welc_dino from '../img/leggoDino.png'
function AboutPage() {
  return (
    <div className="itsMe">
      <Navbar/>
      <div>
        <h3> About the Designer:</h3>
        <img  src={prof_pic}/>
        <span className="aboutMe">Hi, my name is Abi and I'm the designer and engineer behind the Dinosaur Match Memory Game. 
          I am a Software Engineer who recently graduated from Per Scholas Software Engineering Certification Program. 
          This project was my Capstone project where I had to implement a Full-stack MERN app showcasing all the skills that I've learned during the program. The inspiration behind this game is that Jurassic Park was one of my favorite films growing up! I hope you enjoy playing it as much as I enjoyed making it.   </span>
          
          
      </div> 
      
      </div>
  )
}

export default AboutPage

