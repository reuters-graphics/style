import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import get from 'lodash/get';

const allTrue = (obj) => Object.keys(obj).every(k => obj[k]);
const allFalse = (obj) => Object.keys(obj).every(k => !obj[k]);
const anyTrue = (obj) => Object.keys(obj).some(k => obj[k]);
const anyFalse = (obj) => Object.keys(obj).some(k => !obj[k]);

const Typography = (props) => {
  const { classOptions } = props;
  const { Color, Size, Font, Background, Transforms, Separator } = classOptions;
  return (
    <section className='body-text'>
      <div
        className={classnames({
          'color-gray': Color['-gray'],
          'color-white': Color['-white'],
          'color-yellow': Color['-yellow'],
          'color-orange': Color['-orange'],
          'color-red': Color['-red'],
          'color-green': Color['-green'],
          'color-blue': Color['-blue'],
          'color-purple': Color['-purple'],
          'small-size': Size['small-size'],
          'paragraph-size': Size['paragraph-size'],
          'blockquote-size': Size['blockquote-size'],
          'font-sans': Font['-sans'],
          'font-serif': Font['-serif'],
          'font-display': Font['-display'],
          'font-monospace': Font['-monospace'],
          spaced: classOptions['Letter spacing'].spaced,
          'spaced-least': classOptions['Letter spacing']['-least'],
          'spaced-less': classOptions['Letter spacing']['-less'],
          'spaced-more': classOptions['Letter spacing']['-more'],
          'spaced-most': classOptions['Letter spacing']['-most'],
          uppercase: Transforms.uppercase,
          lowercase: Transforms.lowercase,
          'background-light': Background['-light'],
          'background-dark': Background['-dark'],
          'background-alpha-lightest': Background['-alpha-lightest'],
          'background-alpha-lighter': Background['-alpha-lighter'],
          'background-alpha-light': Background['-alpha-light'],
          'background-alpha-dark': Background['-alpha-dark'],
          'background-alpha-darker': Background['-alpha-darker'],
          'background-alpha-darkest': Background['-alpha-darkest'],
          'text-shadow': classOptions['Text shadow']['text-shadow'],
          'text-shadow-darker': classOptions['Text shadow']['-darker'],
          'text-shadow-darkest': classOptions['Text shadow']['-darkest'],
          'box-shadow': classOptions['Box shadow']['box-shadow'],
          'box-shadow-low': classOptions['Box shadow']['-low'],
          'box-shadow-high': classOptions['Box shadow']['-high'],
          // Intentionally excluding some combos here that are technically possible
          // via the style rules...
          separated: Separator[0].separated && allFalse(Separator[1]) && allFalse(Separator[2]),
          'separated-over': Separator[0]['-over'] && allFalse(Separator[1]) && allFalse(Separator[2]),
          'separated-under': Separator[0]['-under'] && allFalse(Separator[1]) && allFalse(Separator[2]),
          'separated-darker': Separator[0].separated && Separator[1]['-darker'] && allFalse(Separator[2]),
          'separated-over-darker': Separator[0]['-over'] && Separator[1]['-darker'] && allFalse(Separator[2]),
          'separated-under-darker': Separator[0]['-under'] && Separator[1]['-darker'] && allFalse(Separator[2]),
          'separated-darkest': Separator[0].separated && Separator[1]['-darkest'] && allFalse(Separator[2]),
          'separated-over-darkest': Separator[0]['-over'] && Separator[1]['-darkest'] && allFalse(Separator[2]),
          'separated-under-darkest': Separator[0]['-under'] && Separator[1]['-darkest'] && allFalse(Separator[2]),
          'separated-darker-thicker': Separator[0].separated && Separator[1]['-darker'] && Separator[2]['-thicker'],
          'separated-darker-thickest': Separator[0].separated && Separator[1]['-darker'] && Separator[2]['-thickest'],
          'separated-darkest-thicker': Separator[0].separated && Separator[1]['-darkest'] && Separator[2]['-thicker'],
          'separated-darkest-thickest': Separator[0].separated && Separator[1]['-darkest'] && Separator[2]['-thickest'],
          'separated-over-darker-thicker': Separator[0]['-over'] && Separator[1]['-darker'] && Separator[2]['-thicker'],
          'separated-over-darker-thickest': Separator[0]['-over'] && Separator[1]['-darker'] && Separator[2]['-thickest'],
          'separated-over-darkest-thicker': Separator[0]['-over'] && Separator[1]['-darkest'] && Separator[2]['-thicker'],
          'separated-over-darkest-thickest': Separator[0]['-over'] && Separator[1]['-darkest'] && Separator[2]['-thickest'],
          'separated-under-darker-thicker': Separator[0]['-under'] && Separator[1]['-darker'] && Separator[2]['-thicker'],
          'separated-under-darker-thickest': Separator[0]['-under'] && Separator[1]['-darker'] && Separator[2]['-thickest'],
          'separated-under-darkest-thicker': Separator[0]['-under'] && Separator[1]['-darkest'] && Separator[2]['-thicker'],
          'separated-under-darkest-thickest': Separator[0]['-under'] && Separator[1]['-darkest'] && Separator[2]['-thickest'],
        })}
      >Boudin venison brisket beef tri-tip alcatra shank
      </div>
    </section>
  );
};

const Component = Copyable(Typography, 'ejs', {
  Color: {
    '-black': true,
    '-gray': false,
    '-white': false,
    '-yellow': false,
    '-orange': false,
    '-red': false,
    '-green': false,
    '-blue': false,
    '-purple': false,
  },
  Size: {
    'small-size': false,
    'paragraph-size': false,
    'blockquote-size': true,
  },
  Font: {
    '-sans': false,
    '-serif': true,
    '-monospace': false,
    '-display': false,
  },
  'Letter spacing': {
    spaced: false,
    '-least': false,
    '-less': false,
    '-more': false,
    '-most': false,
  },
  Transforms: {
    uppercase: false,
    lowercase: false,
  },
  Background: {
    '-light': false,
    '-dark': false,
    '-alpha-lightest': false,
    '-alpha-lighter': false,
    '-alpha-light': false,
    '-alpha-dark': false,
    '-alpha-darker': false,
    '-alpha-darkest': false,
  },
  'Text shadow': {
    'text-shadow': false,
    '-darker': false,
    '-darkest': false,
  },
  'Box shadow': {
    'box-shadow': false,
    '-low': false,
    '-high': false,
  },
  Separator: [{
    separated: false,
    '-over': false,
    '-under': false,
  }, {
    '-darker': false,
    '-darkest': false,
  }, {
    '-thicker': false,
    '-thickest': false,
  }],
});

export default () => (
  <div className={component}>
    <Component />
  </div>
);
