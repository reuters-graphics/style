import Accessibility from './Accessibility';
import CodeBlock from 'Components/common/markdown/CodeRenderer';
import ColorRow from './ColorRow';
import Colors from '@reuters-graphics/style-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const SchemeDetail = (props) => {
  const { scheme, type, resetScheme, resetType } = props;
  const colors = Colors[type][scheme].all;
  return (
    <div className={classnames('scheme-detail', component)}>
      <nav className='breadcrumbs'>
        <ol>
          <li onClick={resetType}>colors</li>
          <li onClick={resetScheme}>{type}</li>
          <li>{scheme}</li>
        </ol>
      </nav>

      <h5>JS</h5>
      <CodeBlock
        language='js'
        value={`import { ${scheme} } from '@reuters-graphics/style-color/${type}';`}
      />

      <h5>SCSS</h5>
      <CodeBlock
        language='scss'
        value={`@import "~@reuters-graphics/style-color/scss/${type}/${scheme}";`}
      />
      <h5>Accessibility</h5>
      <Accessibility colors={colors} />
      <h5>Codes</h5>
      {colors.map((color, i) => (
        <ColorRow
          scheme={scheme}
          color={color}
          index={i}
          key={color.hex}
        />
      ))}
    </div>
  );
};

export default SchemeDetail;
