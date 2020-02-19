import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import React from 'react';
import Search from './Search';
import Snippet from './Snippet';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';
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

const RoutedSnippets = withRouter(Snippets);

export default withHead(RoutedSnippets, {
  title: 'style: Snippets',
});
