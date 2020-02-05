import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Dateline from './components/Metadata';
import HeroTitle from './components/HeroTitle';
import Nav from './Nav';
import React from 'react';
import Typography from './components/Typography';

export default class Home extends React.Component {
  // componentDidMount() {
  //   this.props.pymChild.sendHeight();
  // }
  //
  // componentDidUpdate() {
  //   this.props.pymChild.sendHeight();
  // }

  render() {
    return (
      <Router basename='/style/theme-guides/eisbaer'>
        <div>
          <Nav />
          <Switch>
            <Route path='/typography'>
              <Typography />
            </Route>
            <Route path='/hero-title'>
              <HeroTitle />
            </Route>
            <Route path='/dateline'>
              <Dateline />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };
}
