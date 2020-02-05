import CodeRenderer from './CodeRenderer';
import React from 'react';
import cheerio from 'cheerio';
import pretty from 'pretty';
import { renderToStaticMarkup } from 'react-dom/server';

const prettify = (html) => {
  return pretty(html).split('\n').slice(5, -3).join('\n').replace(/^ {4}/gm, '');
};

export default (CopyComponent, lang = 'ejs') =>
  class Copyable extends React.Component {
    render() {
      const codeString = renderToStaticMarkup(<CopyComponent />);

      const $ = cheerio.load(codeString);
      $('img').attr('src', 'img.jpg');

      return (
        <article className='container-fluid'>
          <CopyComponent />
          <CodeRenderer
            language={lang}
            value={prettify($.html())}
          />,
        </article>
      );
    }
  };
