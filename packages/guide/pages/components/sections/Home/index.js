import React from 'react';
import Reuters from 'Components/common/icons/Reuters';
import Ring from 'Components/common/icons/Ring';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';

const Home = (props) => (
  <div className={classnames(component, 'markdown-default')}>
    <div className='jumbo desktop'>
      <div className='container brand'>
        <div className='team-logo'>
          <Ring width='30' /><Reuters width='123' /> Graphics
        </div>
      </div>
      <h1>Style</h1>
    </div>
    <div className='jumbo mobile'>
      <div className='container brand'>
        <div className='team-logo'>
          <Ring width='20' /><Reuters width='78' /> Graphics
        </div>
      </div>
      <h1>Style</h1>
    </div>
  </div>
);

export default withHead(Home);
