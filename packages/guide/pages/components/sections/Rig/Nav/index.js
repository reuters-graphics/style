import NavItem from './NavItem';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import { useRouteMatch } from 'react-router-dom';

const Nav = () => {
  const match = useRouteMatch();
  return (
    <div className={component}>
      <nav className={classnames({ home: match.isExact })}>
        <NavItem name='Quickstart' link='quickstart/' />
        <NavItem name='Writing code' link='writing-code/' />
        <NavItem name='Working with media files' link='working-with-media-files/' />
        <NavItem name='Embeddable page' link='embeddable-page/' />
        <NavItem name='Copy and translation' link='copy-and-translation/' />
        <NavItem name='Metadata' link='metadata/' />
        <NavItem name='ai2html' link='ai2html/' />
        <NavItem name='Google docs' link='google-docs/' />
        <NavItem name='Charter' link='charter/' />
        <NavItem name='Prerendering JS apps' link='prerendering-js-apps/' />
        <NavItem name='FAQ' link='faq/' />
      </nav>
    </div>
  );
};

export default Nav;
