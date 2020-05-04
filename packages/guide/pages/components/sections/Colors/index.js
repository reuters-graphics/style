import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import Explorer from './Explorer/';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import Intro from 'Content/colors/intro.md';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import React from 'react';
import WorkingWithColors from 'Content/colors/working-with-colors.md';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';

const Colors = (props) => (
  <div className={classnames(component, 'markdown-default')}>
    <Intro
      escapeHtml={false}
      linkTarget='_blank'
      renderers={{
        code: CodeRenderer,
        image: ImageRenderer,
        paragraph: ParagraphRenderer,
      }}
    />
    <Explorer />
    <WorkingWithColors
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

export default withHead(Colors, {
  title: 'style: Colors',
});
