import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FuzzySearch from 'fuzzy-search';
import Policies from 'Policies';
import SearchItem from './SearchItem';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchablePolicies = Object.keys(Policies).map((key) =>
  Object.assign({}, Policies[key].data, { key })
);

const searcher = new FuzzySearch(
  searchablePolicies,
  ['title', 'description'],
  { sort: true }
);

const Search = (props) => {
  const [term, setTerm] = useState('');

  const textInput = React.createRef();

  const handleClick = () => {
    textInput.current.focus();
  };

  const searchPolicies = (term) => searcher.search(term);

  const getPolicies = () => {
    return term === '' ? Object.keys(Policies).map((key) => (
      <SearchItem {...Policies[key].data} path={key} key={key} />
    )) : searchPolicies(term).map(({ key }) => (
      <SearchItem {...Policies[key].data} path={key} key={key} />
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
        {getPolicies()}
      </div>
    </div>
  );
};

export default Search;
