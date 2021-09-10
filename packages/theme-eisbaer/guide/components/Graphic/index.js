import Copyable from '../../Copyable';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const Graphic = (props) => {
  const { Width, Borders } = props.classOptions;
  const { wide, wider, widest, fluid } = Width;
  const { bordered } = Borders;
  return (
    <section
      className={classnames('graphic', {
        wide, wider, widest, fluid, bordered,
      })}
    >

      <h3>Chart title prosciutto chicken</h3>

      <p>English Beef ribs chicken landjaeger shank. Culpa nulla ham tri-tip. Velit eu hamburger, tail voluptate in dolore aliqua qui lorem short ribs esse.</p>

      <figure>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500' width='100%' style={{ margin: '0 auto', display: 'block' }}>
          <title>Generic chart</title>
          <rect width='800' height='500' style={{ fill: '#ddd' }} />
          <rect x='149.46' y='62' width='100' height='363' style={{ fill: '#999' }} />
          <rect x='283.15' y='149' width='100' height='276' style={{ fill: '#999' }} />
          <rect x='416.85' y='237' width='100' height='188.44' style={{ fill: '#999' }} />
          <rect x='550.54' y='331' width='100' height='94.66' style={{ fill: '#999' }} />
        </svg>
      </figure>
      <aside>
        <p>Note: Consuming raw or undercooked meats, poultry or eggs may increase your risk of foodborne illness.</p>
        <p>Source: USDA</p>
      </aside>
    </section>
  );
};

const Component = Copyable(Graphic, 'ejs', {
  Width: {
    wide: false,
    wider: false,
    widest: false,
    fluid: false,
  },
  Borders: {
    bordered: false,
  },
});

export default () => (
  <div className={component}>
    <Component />
  </div>
);
