import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Packages</NavLink>
      </li>
      <li>
        <NavLink to="/">Testimonials</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;