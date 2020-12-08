import React from 'react'
import "./Footer.css"


import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (



        <div className="footer">

            



    <a href=""
       className="fb">
  <FacebookIcon style={{ fontSize: 50 } }/>  </a>


  <a href="https://twitter.com/NikhilBoudh"
      className="twit" >
  <TwitterIcon style={{ fontSize: 50 } }/>  </a>

  
  <a href="https://www.instagram.com/nikhilboudh453/"
   className="inst" >
  < InstagramIcon style={{ fontSize: 50 } }/>  </a>





  <a href="https://www.linkedin.com/in/nikhil-boudh-26b0aa201/"
   className="link"  >
  <LinkedInIcon style={{ fontSize: 50 } }/>  </a>

        </div>


    )
}

export default Footer;