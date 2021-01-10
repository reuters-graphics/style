import { Route, Switch } from 'react-router-dom';

import Guide from './Guide';
import Nav from './Nav';
import React from 'react';
import Search from './Search';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';
import { withRouter } from 'react-router';

const Guides = (props) => {
  const { match } = props;

  return (
    <div className={classnames(component)}>
      <Nav />
      <Switch>
        <Route path={`${match.url}/:guideId/`} component={Guide} />
        <Route path={`${match.url}/`} exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
};

const RoutedGuides = withRouter(Guides);

export default withHead(RoutedGuides, {
  title: 'style: Guides',
});
