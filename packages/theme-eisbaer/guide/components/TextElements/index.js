import Copy from './copy.md';
import Copyable from '../../Copyable';
import React from 'react';

const Graphic = (props) => {
  return (
    <section className='body-text'>
      <Copy />
    </section>
  );
};

const Component = Copyable(Graphic, 'ejs', {}, true);

export default () => (
  <div>
    <Component />
  </div>
);
