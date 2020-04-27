import CopyClick from 'Components/common/CopyClick';
import React from 'react';

const bracketOrDot = (alias) => {
  return /^\d/.test(alias) ? `['${alias}']` : `.${alias}`;
};

const ColorRow = (props) => {
  const { color } = props;
  return (
    <div className='color-row'>
      <div className='swatch-container inline'>
        <div
          className='swatch'
          style={{ background: color.hex }}
        />
      </div>

      <div className='detail inline'>
        <div>
          <span className='tag'>&nbsp;HEX</span> <CopyClick>{color.hex}</CopyClick>
        </div>
        <div>
          <span className='tag'>RGBA</span> <CopyClick>{color.rgba(1)}</CopyClick>
        </div>
        <div>
          <span className='tag'>SCSS</span> {color.variables.map(v => (
            <div key={v} className='inline spaced'>
              <CopyClick>{v}</CopyClick>
            </div>
          ))}
        </div>
        <div>
          <span className='tag'>&nbsp;&nbsp;JS</span>&nbsp;
          {
            color.aliases.map(alias => (
              <code key={alias}><CopyClick>{`${props.scheme}${bracketOrDot(alias)}`}</CopyClick></code>
            ))
          }
          <code><CopyClick>{`${props.scheme}.all[${props.index}]`}</CopyClick></code>

        </div>
      </div>
    </div>
  );
};

export default ColorRow;
