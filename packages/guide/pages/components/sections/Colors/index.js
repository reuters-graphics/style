import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import Content from 'Content/colors/page.md';
import Explorer from './Explorer/';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';

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
    <Explorer />
  </div>
);

export default withHead(Colors, {
  title: 'style: Colors',
});
