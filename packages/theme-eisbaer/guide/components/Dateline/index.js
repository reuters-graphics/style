import Copyable from '../../Copyable';
import React from 'react';

const Metadata = () => (
  <aside className='article-metadata'>
    <div className='byline-container'>
      <div className='byline'>Graphics by <strong><a href='.'>Mick</a></strong> & <strong><a href='.'>Charlie</a></strong></div>
      <div className='byline'>Photography by <strong><a href='.'>Keith</a></strong></div>
    </div>
    <div className='dateline-container'>
      <div className='published'>
      Published <time className='time' dateTime=''>Jan. 1, 2020</time>
      </div>
      <div className='updated'>
    Last updated <time className='time' dateTime=''>Jan. 3, 2020</time>
      </div>
    </div>
  </aside>
);

export default Copyable(Metadata, 'ejs');
