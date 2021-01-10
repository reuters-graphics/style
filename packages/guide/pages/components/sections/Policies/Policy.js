import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import { Helmet } from 'react-helmet';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import Policies from 'Policies';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const Policy = (props) => {
  const { policyId } = useParams();
  const { title, description } = Policies[policyId].data;
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
          source={Policies[policyId].content}
        />
      </div>
    </>
  );
};

export default Policy;
