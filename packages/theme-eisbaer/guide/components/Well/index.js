import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Well = (props) => {
  const { Width } = props.classOptions;
  const { wide, wider, widest, fluid } = Width[0];
  const { bootstrap } = Width[1];
  return (
    <article>
      <section
        className={classnames({
          wide,
          wider,
          widest,
          fluid,
          container: bootstrap,
        })}
      >
        {bootstrap && (
          <div className='row'>
            <div className='col' />
            <div className='col' />
            <div className='col' />
          </div>
        )}
      </section>
    </article>
  );
};

const Component = Copyable(Well, 'ejs', {
  Width: [{
    wide: false,
    wider: false,
    widest: false,
    fluid: false,
  }, {
    bootstrap: false,
  }],
});

export default () => (
  <div className={component}>
    <Component />
  </div>
);
