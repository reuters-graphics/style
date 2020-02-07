import Copy from './copy.md';
import Copyable from '../../Copyable';
import React from 'react';

const EndNotes = (props) => {
  return (
    <section className='end-notes'>
      <Copy />
    </section>
  );
};

const Component = Copyable(EndNotes, 'ejs');

export default () => (
  <div>
    <Component />
  </div>
);
