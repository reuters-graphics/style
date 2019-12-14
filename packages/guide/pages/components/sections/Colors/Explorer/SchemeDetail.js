import CodeBlock from 'Components/common/markdown/CodeRenderer';
import ColorRow from './ColorRow';
import ColorSchemes from '@reuters-graphics/style-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const SchemeDetail = (props) => (
  <div className='scheme-detail'>
    <h3>
      <FontAwesomeIcon
        icon={faArrowCircleLeft}
        onClick={props.resetScheme}
      />
      {props.scheme}
    </h3>
    <h5>JS</h5>
    <CodeBlock
      language='js'
      value={`import { ${props.scheme} } from '@reuters-graphics/style-color';`}
    />

    <h5>SCSS</h5>
    <CodeBlock
      language='scss'
      value={`@import "~@reuters-graphics/style-color/scss/${props.scheme}";`}
    />
    <h5>Codes</h5>
    {ColorSchemes[props.scheme].all.map((color, i) => (
      <ColorRow
        scheme={props.scheme}
        color={color}
        index={i}
        key={color.hex}
      />
    ))}
  </div>
);

export default SchemeDetail;
