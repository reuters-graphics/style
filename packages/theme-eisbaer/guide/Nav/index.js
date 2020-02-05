import { NavLink, useRouteMatch } from 'react-router-dom';

import NavItem from './NavItem';
import React from 'react';
import bear from './bear.jpg';
import classnames from 'classnames';
import { component } from './styles.scss';

const Nav = () => {
  const match = useRouteMatch();
  return (
    <div className={component}>
      <NavLink
        to={`${match.path}`}
      >
        <div className='nav-title'>
          <h1
            className={classnames({ small: !match.isExact })}
          >
            <img src={bear} /> Eisbär
          </h1>
        </div>
      </NavLink>
      <nav className={classnames({ home: match.isExact })}>
        <NavItem name='Typography' link='typography/' />
        <NavItem name='Dateline' link='dateline/' />
        <NavItem name='Hero title' link='hero-title/' />
      </nav>
    </div>
  );
};

export default Nav;
