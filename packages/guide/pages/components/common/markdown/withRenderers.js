import CodeRenderer from './CodeRenderer';
import HeadingRenderer from './HeadingRenderer';
import ImageRenderer from './ImageRenderer';
import ParagraphRenderer from './ParagraphRenderer';
import React from 'react';

const withRenderers = (ContentComponent) => (
  <div className='markdown-default'>
    <ContentComponent
      escapeHtml={false}
      renderers={{
        code: CodeRenderer,
        image: ImageRenderer,
        paragraph: ParagraphRenderer,
        heading: HeadingRenderer,
      }}
    />
  </div>
);

export default withRenderers;
