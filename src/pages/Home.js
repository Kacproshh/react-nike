import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/nike.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      
      <div 
      className='headerContainer' 
      style={{ backgroundImage: `url( ${BannerImage})` }}>
        <h1> Nike online store </h1>
        <p> NIKE SHOES FOR EVERY OCCASION </p>
        <Link to="/products">
          <button> ORDER NOW </button>
        </Link>
        </div> 
    </div>
  )
}

export default Home
