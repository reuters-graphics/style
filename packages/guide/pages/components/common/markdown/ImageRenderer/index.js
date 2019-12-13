import React from 'react';
import { component } from './styles.scss';

class Image extends React.Component {
  render() {
    const { src, alt } = this.props;
    return (
      <figure className={component}>
        <img alt={alt || 'An image'} src={src} />
      </figure>
    );
  }
}

export default Image;
