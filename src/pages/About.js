import React from 'react'
import BannerImage from '../assets/nike.jpg'
import '../styles/About.css'


function About() {
  return (
    <div className="about">
      <div className='aboutTop' style={{ backgroundImage: `url( ${BannerImage})` }}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>A simple website modeled on the existing Nike online store created by a beginner Front End Developer</p>
      </div>
    </div>
  )
}

export default About
