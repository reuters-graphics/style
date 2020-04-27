import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const categoricalColors = ['#c31729', '#476e1e', '#ccc', '#ff8000', '#0d519f', '#946eac'];
const sequentialColors = ['#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#67000d'];
const divergingColors = ['#b2182b', '#d6604d', '#fddbc7', '#d1e5f0', '#4393c3', '#2166ac'];

const TypePicker = (props) => (
  <div className={classnames(component)}>
    <nav className='breadcrumbs'>
      <ol>
        <li>colors</li>
      </ol>
    </nav>
    <div
      className='button'
      onClick={() => props.updateType('categorical')}
    >
      <h4>Categorical</h4>
      <div className='demo'>
        {categoricalColors.map((c, i) => <div key={i} style={{ background: c }} />)}
      </div>
      <p>Good for representing non-numeric data, like country names.</p>
    </div>
    <div
      className='button'
      onClick={() => props.updateType('sequential')}
    >
      <h4>Sequential</h4>
      <div className='demo'>
        {sequentialColors.map((c, i) => <div key={i} style={{ background: c }} />)}
      </div>
      <p>Good for representing numeric data that increases from low to high, like temperature.</p>
    </div>
    <div
      className='button'
      onClick={() => props.updateType('diverging')}
    >
      <h4>Diverging</h4>
      <div className='demo'>
        {divergingColors.map((c, i) => <div key={i} style={{ background: c }} />)}
      </div>
      <p>Good for representing data that increases in two directions, like vote margins.</p>
    </div>
  </div>
);

export default TypePicker;
