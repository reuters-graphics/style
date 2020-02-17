import { Link, useRouteMatch } from 'react-router-dom';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Nav = () => {
  const match = useRouteMatch();
  return (
    <div className={component}>
      <nav className={classnames({ home: match.isExact })}>
        <h1><Link to='/snippets/'>Snippets</Link></h1>
      </nav>
    </div>
  );
};

export default Nav;
