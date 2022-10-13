import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



const Footer = () => {
  return (
    <div className="footer">
    <div className="socialMedia">
  <InstagramIcon/>
  <FacebookIcon/>
  <LinkedInIcon/>
  <TwitterIcon/>
    </div>
    <p> &copy; 2021 darelbvcr.com</p>
  </div>
  )
}

export default Footer