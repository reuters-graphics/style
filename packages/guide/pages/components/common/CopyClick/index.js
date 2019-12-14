import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import copy from 'copy-to-clipboard';

const CopyClick = (props) => (
  <div className={classnames(component)}>
    <span
      onClick={() => copy(props.children)}
    >{props.children}
    </span>
  </div>
);

export default CopyClick;
