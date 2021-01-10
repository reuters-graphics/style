import './theme/main.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Colors from 'Components/sections/Colors';
import Fonts from 'Components/sections/Fonts';
import Four04 from 'Components/sections/404';
import Guides from 'Components/sections/Guides';
import Home from 'Components/sections/Home';
import Linters from 'Components/sections/Linters';
import Nav from 'Components/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import Rig from 'Components/sections/Rig';
import Snippets from 'Components/sections/Snippets';
import ThemeEisbaer from './components/sections/ThemeEisbaer';
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
                <Route path='/' exact component={Home} />
                <Route path='/graphics-rig/' component={Rig} />
                <Route path='/guides/' component={Guides} />
                <Route path='/fonts/' component={Fonts} />
                <Route path='/colors/' component={Colors} />
                <Route path='/linters/' component={Linters} />
                <Route path='/snippets/' component={Snippets} />
                <Route path='/themes/eisbaer/' component={ThemeEisbaer} />
                <Route path='/404/' component={Four04} />
                <Route path='/404.html' component={Four04} />
                <Route component={Four04} />
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
