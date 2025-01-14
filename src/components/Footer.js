import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'> 
          <a href='https://www.instagram.com/kacprosh.12/'>
            <InstagramIcon /> 
          </a>
          <a href='https://github.com/Kacproshh'>
            <GithubIcon />  
          </a> 
          <a href='https://www.linkedin.com/in/kacper-kulesza-316156344/'>
            <LinkedinIcon />
          </a> 

          <a href=''>
            <FacebookIcon /> 
          </a>
            
        </div>
        <p> &copy; 2024 nikestore.com</p>
      
    </div>
  )
}

export default Footer
