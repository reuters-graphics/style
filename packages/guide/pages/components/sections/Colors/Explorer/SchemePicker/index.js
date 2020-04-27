import Colors from '@reuters-graphics/style-color';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

const SchemePicker = (props) => {
  const { type, resetType } = props;

  const schemes = Colors[type];

  return (
    <div className={classnames('scheme-options', component)}>
      <nav className='breadcrumbs'>
        <ol>
          <li
            onClick={resetType}
            className='active'
          >colors
          </li>
          <li>{type}</li>
        </ol>
      </nav>
      {Object.keys(schemes).map((key) => {
        const swatches = schemes[key].all.map(color => (
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
};

export default SchemePicker;
