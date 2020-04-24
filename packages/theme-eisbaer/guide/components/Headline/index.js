import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';

const Headline = (props) => {
  const { classOptions } = props;
  const { Font, Size, Spaced } = classOptions;

  const { serif } = Font;
  const { smaller, bigger, biggest } = Size;

  return (
    <section className={classnames('headline')}>
      <p className='section-title color-red'>
        Reuters Internet Fashion
      </p>
      <h2 className={classnames({
        'font-serif': serif,
        smaller,
        bigger,
        biggest,
        spaced: Spaced.spaced,
        'spaced-more': Spaced['-more'],
        'spaced-most': Spaced['-most'],
      })}
      >
        Eisbär
      </h2>
      <p>
        Cold simple theme for features and graphics.
      </p>
    </section>
  );
};

const Component = Copyable(Headline, 'ejs', {
  Font: {
    serif: false,
  },
  Size: {
    smaller: false,
    bigger: false,
    biggest: false,
  },
  Spaced: {
    spaced: false,
    '-more': false,
    '-most': false,
  },
});

export default () => (
  <div>
    <Component />
  </div>
);
