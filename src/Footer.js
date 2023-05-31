import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="ref">
            <p>Fav Movies &copy; 2023.</p>
            <p>created by <span className='name'>@Jerry</span></p>

        </div>
      <div className="socials">
        <ul>
            <li>
                <a href="https://web.facebook.com/fernando.jerry1" target='_blank' rel='noreferrer'><FacebookIcon className='search-icon' /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jerry-nwadinobi" target='_blank' rel='noreferrer'><LinkedInIcon className='search-icon'/></a>
            </li>
            <li>
                <a href="https://github.com/fernandojerry?tab=repositories" target='_blank' rel='noreferrer'><GitHubIcon className='search-icon'/></a>
            </li>
            <li>
                <a href="tel:+2347039456008"><PhoneEnabledRoundedIcon className='search-icon'/></a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
