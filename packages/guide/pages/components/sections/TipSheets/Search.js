import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FuzzySearch from 'fuzzy-search';
import SearchItem from './SearchItem';
import TipSheets from 'TipSheets';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchableTipSheets = Object.keys(TipSheets).map((key) =>
  Object.assign({}, TipSheets[key].data, { key })
);

const searcher = new FuzzySearch(
  searchableTipSheets,
  ['title', 'description', 'categories'],
  { sort: true }
);

const Search = (props) => {
  const [term, setTerm] = useState('');

  const textInput = React.createRef();

  const handleClick = () => {
    textInput.current.focus();
  };

  const searchTipSheets = (term) => searcher.search(term);

  const getTipSheets = () => {
    return term === '' ? Object.keys(TipSheets).map((key) => (
      <SearchItem {...TipSheets[key].data} path={key} key={key} />
    )) : searchTipSheets(term).map(({ key }) => (
      <SearchItem {...TipSheets[key].data} path={key} key={key} />
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
        {getTipSheets()}
      </div>
    </div>
  );
};

export default Search;
