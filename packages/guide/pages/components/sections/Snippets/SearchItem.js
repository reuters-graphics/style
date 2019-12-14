import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Tag = (props) => (
  <div className='tag'>{props.tag}</div>
);

const SearchItem = (props) => (
  <Link to={`/snippets/${props.path}/`}>
    <div className='search-item'>
      <h4><FontAwesomeIcon icon={faAngleDoubleRight} /> {props.title}</h4>
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
