import 'prismjs/themes/prism-dark.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Refractor from 'react-refractor';
import { component } from './styles.scss';
import copy from 'copy-to-clipboard';
import ejs from 'refractor/lang/ejs';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

Refractor.registerLanguage(ejs);

const getLang = (lang) => {
  switch (lang) {
    case 'javascript':
      return 'js';
    default:
      return lang;
  }
};

class CodeBlock extends React.Component {
  render() {
    const { value, language } = this.props;
    return (
      <div className={component}>
        <Refractor
          language={getLang(language ? language.toLowerCase() : 'ejs')}
          value={value}
        />
        <button
          className='copy'
          onClick={() => copy(this.props.value)}
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    );
  }
}

export default CodeBlock;
