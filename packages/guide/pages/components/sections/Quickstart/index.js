import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import Content from './content.md';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import React from 'react';

const Quickstart = (props) => (
  <div className='markdown-default'>
    <Content
      escapeHtml={false}
      linkTarget='_blank'
      renderers={{
        code: CodeRenderer,
        image: ImageRenderer,
        paragraph: ParagraphRenderer,
      }}
    />
  </div>
);

export default Quickstart;
