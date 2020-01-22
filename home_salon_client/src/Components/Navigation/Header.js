import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
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
          <Link to='/packages'>Packages</Link>
        </li>
        <li>
          <Link to='/testimonials'>Testimonials</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
