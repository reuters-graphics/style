import Copy from './copy.md';
import Copyable from '../../Copyable';
import React from 'react';

const Clarifications = (props) => {
  return (
    <section className='clarifications'>
      <Copy />
    </section>
  );
};

const Component = Copyable(Clarifications, 'ejs');

export default () => (
  <div>
    <Component />
  </div>
);
