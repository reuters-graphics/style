import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FuzzySearch from 'fuzzy-search';
import Guides from 'Guides';
import SearchItem from './SearchItem';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchableGuides = Object.keys(Guides).map((key) =>
  Object.assign({}, Guides[key].data, { key })
);

const searcher = new FuzzySearch(
  searchableGuides,
  ['title', 'description'],
  { sort: true }
);

const Search = (props) => {
  const [term, setTerm] = useState('');

  const textInput = React.createRef();

  const handleClick = () => {
    textInput.current.focus();
  };

  const searchGuides = (term) => searcher.search(term);

  const getGuides = () => {
    return term === '' ? Object.keys(Guides).map((key) => (
      <SearchItem {...Guides[key].data} path={key} key={key} />
    )) : searchGuides(term).map(({ key }) => (
      <SearchItem {...Guides[key].data} path={key} key={key} />
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
        {getGuides()}
      </div>
    </div>
  );
};

export default Search;
