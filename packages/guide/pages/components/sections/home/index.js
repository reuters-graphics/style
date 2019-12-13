import React from 'react';
import Reuters from 'Components/common/icons/Reuters';
import Ring from 'Components/common/icons/Ring';
import classnames from 'classnames';
import { component } from './styles.scss';

const Home = (props) => (
  <div className={classnames(component, 'markdown-default')}>
    <div className='jumbo'>
      <div className='container brand'>
        <div className='team-logo'>
          <Ring width='30' /><Reuters width='125' /> Graphics
        </div>
      </div>
      <h1>Style.</h1>
    </div>
  </div>
);

export default Home;
