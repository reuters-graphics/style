import { Link } from 'react-router-dom';
import React from 'react';

const SearchItem = (props) => (
  <Link to={`/guides/${props.path}/`}>
    <div className='search-item'>
      <h4>{props.title}</h4>
      {props.description && (
        <p>{props.description}</p>
      )}
    </div>
  </Link>
);

export default SearchItem;
