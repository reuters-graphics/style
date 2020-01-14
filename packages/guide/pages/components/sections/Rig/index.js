import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

import Ai2Html from './pages/ai2html';
import Code from './pages/code';
import Copy from './pages/copy';
import Embed from './pages/embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './pages/home';
import Media from './pages/media';
import Metadata from './pages/metadata';
import Nav from './Nav';
import Quickstart from './pages/quickstart';
import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

export default () => {
  const match = useRouteMatch();
  return (
    <div className={component}>
      <NavLink
        to={`${match.path}`}
      >
        <h1 className={classnames({ small: !match.isExact })}>
          <FontAwesomeIcon icon={faWrench} /> Graphics Rig
        </h1>
      </NavLink>
      <Nav />

      <Switch>
        <Route path={`${match.path}quickstart/`} component={Quickstart} />
        <Route path={`${match.path}ai2html/`} component={Ai2Html} />
        <Route path={`${match.path}writing-code/`} component={Code} />
        <Route path={`${match.path}working-with-media-files/`} component={Media} />
        <Route path={`${match.path}copy-and-translation/`} component={Copy} />
        <Route path={`${match.path}metadata/`} component={Metadata} />
        <Route path={`${match.path}embeddable-page/`} component={Embed} />
        <Route path={match.path} component={Home} />
      </Switch>
    </div>
  );
};
