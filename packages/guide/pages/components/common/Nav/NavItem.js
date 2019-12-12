import { NavLink } from 'react-router-dom';
import React from 'react';

const NavItem = (props) => (
  <NavLink
    to={props.link}
    className='nav-item'
    activeClassName='active'
  >
    {props.name}
  </NavLink>
);

export default NavItem;
