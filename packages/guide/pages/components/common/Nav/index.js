import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Nav = (props) => (
  <div className={classnames(component)}>
    <NavLink to='/' activeClassName='active'>
      <h5>Reuters</h5>
    </NavLink>

    <nav className='nav flex-column'>
      <h5>Basey</h5>
      <NavItem name='Fonts' link='/fonts/' />
      <NavItem name='Colors' link='/colors/' />
      <NavItem name='Snippets' link='/snippets/' />
    </nav>
  </div>
);

export default Nav;
