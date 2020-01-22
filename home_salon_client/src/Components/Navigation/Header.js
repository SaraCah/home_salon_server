import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' data-target={'mobile-demo'} className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </Link>
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
