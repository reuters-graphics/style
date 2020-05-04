import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Nav from './Nav';
import NavItem from './Nav/NavItem';
import React from 'react';
import { component } from './styles.scss';
import loadable from '@loadable/component';

const Quickstart = loadable(() => import('./components/Quickstart'));
const TextElements = loadable(() => import('./components/TextElements'));
const Typography = loadable(() => import('./components/Typography'));
const Well = loadable(() => import('./components/Well'));
const Dateline = loadable(() => import('./components/Dateline'));
const HeroTitle = loadable(() => import('./components/HeroTitle'));
const Headline = loadable(() => import('./components/Headline'));
const Graphic = loadable(() => import('./components/Graphic'));
const Photo = loadable(() => import('./components/Photo'));
const EndNotes = loadable(() => import('./components/EndNotes'));

export default class Home extends React.Component {
  render() {
    return (
      <Router basename='/style/theme-guides/eisbaer'>
        <div className={component}>
          <Nav>
            <NavItem name='Quickstart' link='quickstart/' />
            <NavItem name='Text elements' link='text-elements/' />
            <NavItem name='Typography' link='typography/' />
            <NavItem name='Well' link='well/' />
            <NavItem name='Headline' link='headline/' />
            <NavItem name='Dateline' link='dateline/' />
            <NavItem name='Hero title' link='hero-title/' />
            <NavItem name='Graphic' link='graphic/' />
            <NavItem name='Photo' link='photo/' />
            <NavItem name='End notes' link='end-notes/' />
          </Nav>

          <Switch>
            <Route path='/quickstart'>
              <Quickstart />
            </Route>
            <Route path='/text-elements'>
              <TextElements />
            </Route>
            <Route path='/typography'>
              <Typography />
            </Route>
            <Route path='/Well'>
              <Well />
            </Route>
            <Route path='/hero-title'>
              <HeroTitle />
            </Route>
            <Route path='/headline'>
              <Headline />
            </Route>
            <Route path='/dateline'>
              <Dateline />
            </Route>
            <Route path='/graphic'>
              <Graphic />
            </Route>
            <Route path='/photo'>
              <Photo />
            </Route>
            <Route path='/end-notes'>
              <EndNotes />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };
}
