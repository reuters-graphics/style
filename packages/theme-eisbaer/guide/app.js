import '../scss/main.scss';

import Home from './home';
import Pym from 'pym.js';
import React from 'react';
import ReactDOM from 'react-dom';

document.body.onload = addElement;

const pymChild = new Pym.Child({ polling: 500 });

function addElement() {
  const node = document.createElement('div');
  document.body.appendChild(node);
  ReactDOM.render(<Home pymChild={pymChild} />, node);
}
