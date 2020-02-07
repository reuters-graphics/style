import Pym from 'pym.js';
import React from 'react';
import { component } from './styles.scss';

export default class Theme extends React.Component {
  componentDidMount() {
    // this.parent = new Pym.Parent('pym-frame', '/style/theme-guides/eisbaer/', {});
  }

  render() {
    return (
      <div className={component}>
        <iframe
          scrolling='no'
          marginHeight='0'
          frameBorder='0'
          src='/style/theme-guides/eisbaer/'
        />
      </div>
    );
  }
}
