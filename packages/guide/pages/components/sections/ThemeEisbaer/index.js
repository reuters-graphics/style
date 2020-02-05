import Pym from 'pym.js';
import React from 'react';

export default class Theme extends React.Component {
  componentDidMount() {
    this.parent = new Pym.Parent('pym-frame', '/theme-guides/eisbaer/', {});
  }

  render() {
    return (
      <div id='pym-frame' style={{ marginTop: '1em' }} />
    );
  }
}
