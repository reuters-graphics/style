import NavItem from './NavItem';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import { useRouteMatch } from 'react-router-dom';

const Nav = () => {
  const match = useRouteMatch();
  return (
    <div className={component}>
      <div className='alert'>
        <p>These docs are for an outdated version of the graphics rig that will be retired in 2022.</p>
        <p>Some features described in these docs may already be deprecated.</p>
        <p>If you're starting a new project, check out the new <a href='https://reuters-graphics.github.io/docs_graphics-kit/'>Graphics Kit</a>.</p>
      </div>
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
