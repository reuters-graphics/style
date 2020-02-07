import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Clarifications from './components/Clarifications';
import Dateline from './components/Metadata';
import EndNotes from './components/EndNotes';
import Graphic from './components/Graphic';
import HeroTitle from './components/HeroTitle';
import Nav from './Nav';
import NavItem from './Nav/NavItem';
import Photo from './components/Photo';
import Quickstart from './components/Quickstart';
import React from 'react';
import Typography from './components/Typography';

export default class Home extends React.Component {
  render() {
    return (
      <Router basename='/style/theme-guides/eisbaer'>
        <div>
          <Nav>
            <NavItem name='Quickstart' link='quickstart/' />
            <NavItem name='Typography' link='typography/' />
            <NavItem name='Dateline' link='dateline/' />
            <NavItem name='Hero title' link='hero-title/' />
            <NavItem name='Graphic' link='graphic/' />
            <NavItem name='Photo' link='photo/' />
            <NavItem name='Clarifications' link='clarifications/' />
            <NavItem name='End notes' link='end-notes/' />
          </Nav>

          <Switch>
            <Route path='/quickstart'>
              <Quickstart />
            </Route>
            <Route path='/typography'>
              <Typography />
            </Route>
            <Route path='/hero-title'>
              <HeroTitle />
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
            <Route path='/clarifications'>
              <Clarifications />
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
