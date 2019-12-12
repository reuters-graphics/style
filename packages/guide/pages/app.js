import './theme/main.scss';

import Nav from 'Components/common/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Snippets from 'Snippets';

const App = () => (
  <Router>
    <div className='container-fluid'>

      <div className='row'>
        <div className='col col-sm-2'>
          <Nav />
        </div>
        <div className='col col-sm-auto'>
          <h1>Content</h1>
        </div>
      </div>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
