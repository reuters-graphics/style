import ColorSchemes from '@reuters-graphics/style-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SchemePicker = (props) => (
  <div className='scheme-options'>
    <p>Choose a color scheme to explore.</p>
    {Object.keys(ColorSchemes).map((key) => {
      const swatches = ColorSchemes[key].all.map(color => (
        <span
          className='swatch'
          style={{ background: color.hex }}
          key={color.hex}
        />
      ));
      return (
        <div
          className='scheme-option'
          key={key}
          onClick={() => props.updateScheme(key)}
        >
          <div className='inline'>
            <div>{key}</div>
            <div className='swatch-rail'>{swatches}</div>
          </div>

        </div>
      );
    })}
  </div>
);

export default SchemePicker;
