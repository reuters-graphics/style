import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import imgSrc from './arctic.jpg';

const Graphic = (props) => {
  const { Width } = props.classOptions;
  const { wide, wider, widest, fluid } = Width;
  return (
    <figure
      className={classnames('photo', {
        wide, wider, widest, fluid,
      })}
    >
      <img src={imgSrc} alt='WRITE ME' />
      <figcaption>Photo by Nick Dale</figcaption>
    </figure>
  );
};

const Component = Copyable(Graphic, 'ejs', {
  Width: {
    wide: false,
    wider: false,
    widest: false,
    fluid: true,
  },
});

export default () => (
  <div className={component}>
    <Component />
  </div>
);
