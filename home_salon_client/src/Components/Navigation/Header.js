import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/' exact>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' exact>
              About
            </Link>
          </li>
          <li>
            <Link to='/packages' exact>
              Packages
            </Link>
          </li>
          <li>
            <Link to='/testimonials' exact>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to='/contact' exact>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
