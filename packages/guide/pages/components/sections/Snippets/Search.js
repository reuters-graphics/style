import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FuzzySearch from 'fuzzy-search';
import SearchItem from './SearchItem';
import Snippets from 'Snippets';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchableSnippets = Object.keys(Snippets).map((key) =>
  Object.assign({}, Snippets[key].data, { key })
);

const searcher = new FuzzySearch(
  searchableSnippets,
  ['title', 'description'],
  { sort: true }
);

const Search = (props) => {
  const [term, setTerm] = useState('');

  const textInput = React.createRef();

  const handleClick = () => {
    textInput.current.focus();
  };

  const searchSnippets = (term) => searcher.search(term);

  const getSnippets = () => {
    return term === '' ? Object.keys(Snippets).map((key) => (
      <SearchItem {...Snippets[key].data} path={key} key={key} />
    )) : searchSnippets(term).map(({ key }) => (
      <SearchItem {...Snippets[key].data} path={key} key={key} />
    ));
  };

  return (
    <div className='search'>
      <div
        className='search-form'
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={faSearch}
        />
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          ref={textInput}
        />
      </div>
      <div className='search-results'>
        {getSnippets()}
      </div>
    </div>
  );
};

export default Search;
