import CodeRenderer from './CodeRenderer';
import React from 'react';
import TurndownService from 'turndown';
import cheerio from 'cheerio';
import classnames from 'classnames';
import { component } from './styles.scss';
import flatten from 'lodash/flatten';
import pretty from 'pretty';
import { renderToStaticMarkup } from 'react-dom/server';

const turndownService = new TurndownService();

const prettify = (html) => {
  return pretty(html).split('\n').slice(5, -3).join('\n').replace(/^ {4}/gm, '');
};

export default (CopyComponent, lang = 'ejs', classOptions = {}, markdown = false) =>
  class Copyable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ...classOptions };
    }

    render() {
      const codeString = renderToStaticMarkup(<CopyComponent classOptions={{ ...this.state }} />);

      const $ = cheerio.load(codeString);
      // Remove base64 image strings...
      $('img').attr('src', 'img.jpg');

      const { state } = this;

      const classCategories = Object.keys(state);

      const renderButtons = (category, options, i = null) => {
        return i !== null ? Object.keys(options).map(option => (
          <button
            className={classnames({ active: this.state[category][i][option] })}
            onClick={() => {
              this.setState((prevState) => {
                const newState = { ...prevState };
                Object.keys(newState[category][i]).forEach((key) => {
                  if (key === option) return;
                  newState[category][i][key] = false;
                });
                newState[category][i][option] = !prevState[category][i][option];
                return newState;
              });
            }}
            key={option}
          >{option}
          </button>
        )) : Object.keys(options).map(option => (
          <button
            className={classnames({ active: this.state[category][option] })}
            onClick={() => {
              this.setState((prevState) => {
                const newState = { ...prevState };
                Object.keys(newState[category]).forEach((key) => {
                  if (key === option) return;
                  newState[category][key] = false;
                });
                newState[category][option] = !prevState[category][option];
                return newState;
              });
            }}
            key={option}
          >{option}
          </button>
        ));
      };

      const renderCategory = (category) => {
        const categoryOpts = this.state[category];
        if (Array.isArray(categoryOpts)) {
          return flatten(categoryOpts.map((categoryOpt, i) => (
            <div className='opt-group' key={i}>{renderButtons(category, categoryOpt, i)}</div>
          )));
        } else {
          return renderButtons(category, categoryOpts);
        }
      };

      return (
        <>
          <article className='container-fluid'>
            <CopyComponent classOptions={{ ...this.state }} />
          </article>
          <div className={component}>
            <div
              className={classnames('class-options', {
                hidden: classCategories.length === 0,
              })}
            >
              {classCategories.map((category) => (
                <div className='options-row' key={category}>
                  <h6>{category}</h6>
                  {renderCategory(category)}
                </div>
              ))}
            </div>
            <div className='copyable-code'>
              <CodeRenderer
                language={lang}
                value={prettify($.html())}
              />
            </div>
            {markdown && (
              <div className='copyable-code'>
                <h6>Markdown</h6>
                <CodeRenderer
                  language='markdown'
                  value={turndownService.turndown(prettify($.html()))}
                />
              </div>
            )}
          </div>
        </>
      );
    }
  };
