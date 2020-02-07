import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Typography = (props) => {
  const { classOptions } = props;
  const { Color, Size, Family, Transforms, Separator } = classOptions;
  return (
    <section className='body-text'>
      <div
        className={classnames({
          'color-gray': Color.gray,
          'color-white': Color.white,
          'color-yellow': Color.yellow,
          'color-orange': Color.orange,
          'color-red': Color.red,
          'color-green': Color.green,
          'color-blue': Color.blue,
          'color-purple': Color.purple,
          'small-size': Size.small,
          'paragraph-size': Size.paragraph,
          'blockquote-size': Size.blockquote,
          'font-sans': Family.sans,
          'font-serif': Family.serif,
          'font-display': Family.display,
          'font-monospace': Family.monospace,
          'spaced-least': classOptions['Letter spacing']['spaced-least'],
          'spaced-less': classOptions['Letter spacing']['spaced-less'],
          spaced: classOptions['Letter spacing'].spaced,
          'spaced-more': classOptions['Letter spacing']['spaced-more'],
          'spaced-most': classOptions['Letter spacing']['spaced-most'],
          uppercase: Transforms.uppercase,
          lowercase: Transforms.lowercase,
          'text-shadow': classOptions['Text shadow'].shadow,
          'text-shadow-darker': classOptions['Text shadow'].darker,
          'text-shadow-darkest': classOptions['Text shadow'].darkest,
          'box-shadow-low': classOptions['Box shadow']['shadow-low'],
          'box-shadow': classOptions['Box shadow'].shadow,
          'box-shadow-high': classOptions['Box shadow']['shadow-high'],
          separated: Separator[0].separated,
          'separated-over': Separator[0].over,
          'separated-under': Separator[0].under,
          'separated-darker': Separator[0].separated && Separator[1].darker,
          'separated-over-darker': Separator[0].over && Separator[1].darker,
          'separated-under-darker': Separator[0].under && Separator[1].darker,
          'separated-darkest': Separator[0].separated && Separator[1].darkest,
          'separated-over-darkest': Separator[0].over && Separator[1].darkest,
          'separated-under-darkest': Separator[0].under && Separator[1].darkest,
        })}
      >Boudin venison brisket beef tri-tip alcatra shank
      </div>
    </section>
  );
};

const Component = Copyable(Typography, 'ejs', {
  Color: {
    black: true,
    gray: false,
    white: false,
    yellow: false,
    orange: false,
    red: false,
    green: false,
    blue: false,
    purple: false,
  },
  Size: {
    small: false,
    paragraph: false,
    blockquote: true,
  },
  Family: {
    sans: false,
    serif: true,
    monospace: false,
    display: false,
  },
  'Letter spacing': {
    'spaced-least': false,
    'spaced-less': false,
    spaced: false,
    'spaced-more': false,
    'spaced-most': false,
  },
  Transforms: {
    uppercase: false,
    lowercase: false,
  },
  'Text shadow': {
    shadow: false,
    darker: false,
    darkest: false,
  },
  'Box shadow': {
    'shadow-low': false,
    shadow: false,
    'shadow-high': false,
  },
  Separator: [{
    separated: false,
    over: false,
    under: false,
  }, {
    darker: false,
    darkest: false,
  }],
});

export default () => (
  <div className={component}>
    <Component />
  </div>
);
