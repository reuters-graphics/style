import CodeRenderer from 'Components/common/markdown/CodeRenderer';
import { Helmet } from 'react-helmet';
import ImageRenderer from 'Components/common/markdown/ImageRenderer';
import ParagraphRenderer from 'Components/common/markdown/ParagraphRenderer';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import TipSheets from 'TipSheets';
import { useParams } from 'react-router-dom';

const TipSheet = (props) => {
  const { tipSheetId } = useParams();
  const { title, description } = TipSheets[tipSheetId].data;
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
          source={TipSheets[tipSheetId].content}
        />
      </div>
    </>
  );
};

export default TipSheet;
