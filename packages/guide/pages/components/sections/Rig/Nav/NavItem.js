import { NavLink, useRouteMatch } from 'react-router-dom';

import React from 'react';

const NavItem = (props) => {
  const match = useRouteMatch();
  return (
    <NavLink
      to={`${match.path}${props.link}`}
      className='nav-item'
      activeClassName='active'
    >
      {props.name}
    </NavLink>
  );
};

export default NavItem;
