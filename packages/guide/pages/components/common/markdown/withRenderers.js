import CodeRenderer from './CodeRenderer';
import ImageRenderer from './ImageRenderer';
import ParagraphRenderer from './ParagraphRenderer';
import React from 'react';

const withRenderers = (ContentComponent) => (
  <div className='markdown-default'>
    <ContentComponent
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

export default withRenderers;
