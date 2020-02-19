import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import { Helmet } from 'react-helmet';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Snippets from 'Snippets';
import { useParams } from 'react-router-dom';

const Snippet = (props) => {
  const { snippetId } = useParams();
  const { title, description } = Snippets[snippetId].data;
  return (
    <>
      <Helmet>
        <title>{`style: ${title}`}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={`style: ${title}`} />
        <meta property='og:description' content={description} />
      </Helmet>
      <div className='markdown-default'>
        <ReactMarkdown
          escapeHtml={false}
          linkTarget='_blank'
          renderers={{
            code: CodeRenderer,
            image: ImageRenderer,
            paragraph: ParagraphRenderer,
          }}
          source={Snippets[snippetId].content}
        />
      </div>
    </>
  );
};

export default Snippet;
