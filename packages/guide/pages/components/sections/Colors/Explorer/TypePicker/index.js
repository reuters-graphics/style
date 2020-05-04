import Colors from '@reuters-graphics/style-color';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const getColorsForType = (type) => {
  const schemes = Colors[type];
  const colors = schemes[Object.keys(schemes)[0]].all.map(c => c.hex);
  return colors.map((c, i) => <div key={i} style={{ background: c }} />);
};

const TypePicker = (props) => (
  <div className={classnames(component)}>
    <nav className='breadcrumbs'>
      <ol>
        <li>colors</li>
      </ol>
    </nav>
    <h3>Colors for dataviz</h3>
    <div
      className='button'
      onClick={() => props.updateType('categorical')}
    >
      <div className='demo'>
        {getColorsForType('categorical')}
      </div>
      <p><strong>Categorical:</strong> Good for non-numeric data, like country names.</p>
    </div>
    <div
      className='button'
      onClick={() => props.updateType('sequential')}
    >
      <div className='demo'>
        {getColorsForType('sequential')}
      </div>
      <p><strong>Sequential:</strong> Good for numeric data that increases from low to high, like temperature.</p>
    </div>
    <div
      className='button'
      onClick={() => props.updateType('diverging')}
    >
      <div className='demo'>
        {getColorsForType('diverging')}
      </div>
      <p><strong>Diverging:</strong> Good for data that increases in two directions, like vote margins.</p>
    </div>
    <h3>Colors for design</h3>
    <div
      className='button'
      onClick={() => props.updateType('thematic')}
    >
      <div className='demo'>
        {getColorsForType('thematic')}
      </div>
      <p><strong>Thematic:</strong> Good for design elements and typography.</p>
    </div>
  </div>
);

export default TypePicker;
