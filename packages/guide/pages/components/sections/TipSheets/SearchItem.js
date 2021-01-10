import { Link } from 'react-router-dom';
import React from 'react';

const Tag = (props) => (
  <div className='tag'>{props.tag}</div>
);

const SearchItem = (props) => (
  <Link to={`/tip-sheets/${props.path}/`}>
    <div className='search-item'>
      <h4>{props.title}</h4>
      {props.description && (
        <p>{props.description}</p>
      )}
      {props.categories && props.categories.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  </Link>
);

export default SearchItem;
