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
            <InstagramIcon /> <GithubIcon /> <LinkedinIcon /> <FacebookIcon /> 
            
        </div>
        <p> &copy; 2024 nikestore.com</p>
      
    </div>
  )
}

export default Footer
