import React from 'react';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';

const Theme = () => (
  <div className={component}>
    <iframe
      scrolling='no'
      marginHeight='0'
      frameBorder='0'
      src='/style/theme-guides/eisbaer/'
    />
  </div>
);

export default withHead(Theme, {
  title: 'style: Eisbär',
});
