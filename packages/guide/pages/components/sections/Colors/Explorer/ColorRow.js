import CopyClick from 'Components/common/CopyClick';
import React from 'react';

const ColorRow = (props) => (
  <div className='color-row'>
    <div className='swatch-container inline'>
      <div
        className='swatch'
        style={{ background: props.color.hex }}
      />
    </div>

    <div className='detail inline'>
      <div>
        <span className='tag'>&nbsp;HEX</span> <CopyClick>{props.color.hex}</CopyClick>
      </div>
      <div>
        <span className='tag'>RGBA</span> <CopyClick>{props.color.rgba(1)}</CopyClick>
      </div>
      <div>
        <span className='tag'>SCSS</span> {props.color.variables.map(v => (
          <div key={v} className='inline spaced'>
            <CopyClick>{v}</CopyClick>
          </div>
        ))}
      </div>
      <div>
        <span className='tag'>&nbsp;&nbsp;JS</span> <code><CopyClick>{`${props.scheme}.all[${props.index}]`}</CopyClick></code>

      </div>
    </div>
  </div>
);

export default ColorRow;
