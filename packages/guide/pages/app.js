import './theme/main.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Colors from 'Components/sections/Colors';
import Fonts from 'Components/sections/Fonts';
import Home from 'Components/sections/Home';
import Nav from 'Components/common/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import Snippets from 'Components/sections/Snippets';

const App = () => (
  <Router>
    <div className='container-fluid'>

      <div className='row'>
        <div className='col col-sm-2'>
          <Nav />
        </div>
        <div className='col col-sm-auto'>
          <Switch>
            <Route path='/fonts/' component={Fonts} />
            <Route path='/colors/' component={Colors} />
            <Route path='/snippets/' component={Snippets} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
