import Copyable from '../../Copyable';
import React from 'react';
import { component } from './styles.scss';
import imgSrc from './bear.jpg';

const HeroTitle = () => (
  <section className='hero-title'>
    <figure>
      <img className='crop-left' src={imgSrc} alt='WRITE ME' />
    </figure>
    <div className='title color-white'>
      <p className='section-title text-shadow color-orange'>
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

const Component = Copyable(HeroTitle, 'ejs');

export default () => (
  <div className={component}>
    <Component />
  </div>
);
