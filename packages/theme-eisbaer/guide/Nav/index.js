import { NavLink, useRouteMatch } from 'react-router-dom';

import NavItem from './NavItem';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Nav = () => {
  const match = useRouteMatch();
  return (
    <div className={component}>
      <NavLink
        to={`${match.path}`}
      >
        <h1
          className={classnames({ small: !match.isExact })}
        >
          Eisbär
        </h1>
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
