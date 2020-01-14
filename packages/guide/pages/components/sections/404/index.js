import { Helmet } from 'react-helmet';
import React from 'react';
import Reuters from 'Components/common/icons/Reuters';
import Ring from 'Components/common/icons/Ring';
import classnames from 'classnames';
import { component } from './styles.scss';

const Home = (props) => (
  <div className={classnames(component, 'markdown-default')}>
    <Helmet>
      <title>404</title>
    </Helmet>
    <div className='jumbo desktop'>
      <div className='container brand'>
        <div className='team-logo'>
          <Ring width='30' /><Reuters width='123' /> Graphics
        </div>
      </div>
      <h1>404</h1>
    </div>
    <div className='jumbo mobile'>
      <div className='container brand'>
        <div className='team-logo'>
          <Ring width='20' /><Reuters width='78' /> Graphics
        </div>
      </div>
      <h1>404</h1>
    </div>
  </div>
);

export default Home;
