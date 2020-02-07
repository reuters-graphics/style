import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import imgSrc from './bear.jpg';

const HeroTitle = (props) => {
  const { classOptions } = props;
  const { Overlay } = classOptions;

  const hasOverlay = !Object.keys(Overlay).map(k => Overlay[k]).every(c => c === false);

  return (
    <section className='hero-title'>
      <figure>
        <img
          className={classnames({
            'crop-left': classOptions['Image crop']['crop-left'],
            'crop-right': classOptions['Image crop']['crop-right'],
          })}
          src={imgSrc}
          alt='WRITE ME'
        />
        {hasOverlay && (
          <div
            className={classnames('overlay', {
              lightest: Overlay.lightest,
              lighter: Overlay.lighter,
              light: Overlay.light,
              darker: Overlay.darker,
              darkest: Overlay.darkest,
            })}
          />
        )}
      </figure>
      <div
        className={classnames('title', {
          top: classOptions['Title position'][0].top,
          bottom: classOptions['Title position'][0].bottom,
          right: classOptions['Title position'][1].right,
          left: classOptions['Title position'][1].left,
          'color-white': true,
        })}
      >
        <p
          className='section-title color-orange text-shadow'
        >
        Reuters Internet Fashion
        </p>
        <h2 className='spaced text-shadow-darker uppercase color-white important'>
        Eisbär
        </h2>
        <p className='text-shadow-darkest'>
        Cold simple theme for features and graphics.
        </p>
      </div>
    </section>
  );
};

const Component = Copyable(HeroTitle, 'ejs', {
  'Title position': [{
    top: false,
    bottom: false,
  }, {
    right: false,
    left: false,
  }],
  'Image crop': {
    'crop-left': true,
    'crop-right': false,
  },
  Overlay: {
    lightest: false,
    lighter: false,
    light: false,
    dark: false,
    darker: false,
    darkest: false,
  },
});

export default () => (
  <div className={component}>
    <Component />
  </div>
);
