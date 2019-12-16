import './theme/main.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Colors from 'Components/sections/Colors';
import Fonts from 'Components/sections/Fonts';
import Home from 'Components/sections/Home';
import Linters from 'Components/sections/Linters';
import Nav from 'Components/Nav';
import Quickstart from 'Components/sections/Quickstart';
import React from 'react';
import ReactDOM from 'react-dom';
import Snippets from 'Components/sections/Snippets';
import { component } from './styles.scss';

const App = () => (
  <Router basename='/style'>
    <div className={component}>
      <Nav />
      <div className='well'>
        <div className='container'>

          <div className='row no-gutters'>
            <div className='col-12'>
              <Switch>
                <Route path='/quickstart/' component={Quickstart} />
                <Route path='/fonts/' component={Fonts} />
                <Route path='/colors/' component={Colors} />
                <Route path='/linters/' component={Linters} />
                <Route path='/snippets/' component={Snippets} />
                <Route path='/' component={Home} />
              </Switch>
            </div>
          </div>
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
