import CodeRenderer from './markdown/CodeRenderer';
import Copy from './copy.md';
import React from 'react';
import { component } from './styles.scss';

export default () => (
  <div className={component}>
    <Copy
      escapeHtml={false}
      linkTarget='_blank'
      renderers={{
        code: CodeRenderer,
      }}
    />
  </div>
);
