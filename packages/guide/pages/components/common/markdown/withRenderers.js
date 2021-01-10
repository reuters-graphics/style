import CodeRenderer from './CodeRenderer';
import ContainerRenderer from './ContainerRenderer';
import HeadingRenderer from './HeadingRenderer';
import ImageRenderer from './ImageRenderer';
import ParagraphRenderer from './ParagraphRenderer';
import React from 'react';
import remarkContainersPlugin from 'remark-containers';
import taskListPlugin from 'remark-task-list';

const withRenderers = (ContentComponent) => (
  <div className='markdown-default'>
    <ContentComponent
      escapeHtml={false}
      renderers={{
        code: CodeRenderer,
        image: ImageRenderer,
        paragraph: ParagraphRenderer,
        heading: HeadingRenderer,
        aside: ContainerRenderer,
        article: ContainerRenderer,
        section: ContainerRenderer,
        div: ContainerRenderer,
      }}
      plugins={[
        [remarkContainersPlugin],
      ]}
    />
  </div>
);

export default withRenderers;
