import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import ColorSchemes from '@reuters-graphics/style-color';
import Content from './content.md';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';

window.colorSchemes = ColorSchemes;

console.log('colorSchemes', ColorSchemes);

const Colors = (props) => (
  <div className={classnames(component, 'markdown-default')}>
    <Content
      escapeHtml={false}
      linkTarget='_blank'
      renderers={{
        code: CodeRenderer,
        image: ImageRenderer,
        paragraph: ParagraphRenderer,
      }}
    />
    <h2 id='color-explorer'>Color explorer</h2>
  </div>
);

export default Colors;
