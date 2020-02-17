import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import React from 'react';
import Search from './Search';
import Snippet from './Snippet';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withRouter } from 'react-router';

const Snippets = (props) => {
  const { match } = props;

  return (
    <div className={classnames(component)}>
      <Nav />
      <Switch>
        <Route path={`${match.url}/:snippetId/`} component={Snippet} />
        <Route path={`${match.url}/`} exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(Snippets);
