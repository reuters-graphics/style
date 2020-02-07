import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Typography = (props) => {
  const { classOptions } = props;
  const { Color, Size, Font, Transforms, Separator } = classOptions;
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
          'text-shadow': classOptions['Text shadow']['text-shadow'],
          'text-shadow-darker': classOptions['Text shadow']['-darker'],
          'text-shadow-darkest': classOptions['Text shadow']['-darkest'],
          'box-shadow': classOptions['Box shadow']['box-shadow'],
          'box-shadow-low': classOptions['Box shadow']['-low'],
          'box-shadow-high': classOptions['Box shadow']['-high'],
          separated: Separator[0].separated,
          'separated-over': Separator[0]['-over'],
          'separated-under': Separator[0]['-under'],
          'separated-darker': Separator[0].separated && Separator[1]['-darker'],
          'separated-over-darker': Separator[0]['-over'] && Separator[1]['-darker'],
          'separated-under-darker': Separator[0]['-under'] && Separator[1]['-darker'],
          'separated-darkest': Separator[0].separated && Separator[1]['-darkest'],
          'separated-over-darkest': Separator[0]['-over'] && Separator[1]['-darkest'],
          'separated-under-darkest': Separator[0]['-under'] && Separator[1]['-darkest'],
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
  }],
});

export default () => (
  <div className={component}>
    <Component />
  </div>
);
