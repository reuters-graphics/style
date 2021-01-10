import React, { useState } from 'react';
import { faBars, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';
import Reuters from 'Components/common/icons/Reuters';
import Ring from 'Components/common/icons/Ring';
import classnames from 'classnames';
import { component } from './styles.scss';

const Nav = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={classnames(component)}>
      <div
        className={classnames('nav-escape', { clickable: visible })}
        onClick={() => setVisible(false)}
      />
      <div className={classnames('nav-container', { visible })}>
        <a
          className='github-bug'
          href='https://github.com/reuters-graphics/style/tree/master/packages/guide/content'
        ><FontAwesomeIcon icon={faPencilAlt} />
        </a>
        <button
          className='open-menu toggle'
          onClick={() => setVisible(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button
          className='close-menu toggle'
          onClick={() => setVisible(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <NavLink to='/' className='home-link' activeClassName='active'>
          <div className='container'>
            <div className='row no-gutters'>
              <div className='col-auto'>
                <Ring width='40' />
              </div>
              <div className='col'>
                <div className='team-logo'><Reuters width='75' /> Graphics</div>
              </div>
            </div>
          </div>

        </NavLink>

        <nav className='nav flex-column'>
          <NavItem name='Policies' link='/policies/' />
          <NavItem name='Tip Sheets' link='/tip-sheets/' />
          <hr />
          <NavItem name='Graphics rig' link='/graphics-rig/' />
          <NavItem name='Fonts' link='/fonts/' />
          <NavItem name='Colors' link='/colors/' />
          <NavItem name='Linters' link='/linters/' />
          <NavItem name='Theme: Eisbär' link='/themes/eisbaer/' />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
