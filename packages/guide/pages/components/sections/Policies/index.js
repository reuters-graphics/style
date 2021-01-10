import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Policy from './Policy';
import React from 'react';
import Search from './Search';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';
import { withRouter } from 'react-router';

const Policies = (props) => {
  const { match } = props;

  return (
    <div className={classnames(component)}>
      <Nav />
      <Switch>
        <Route path={`${match.url}/:policyId/`} component={Policy} />
        <Route path={`${match.url}/`} exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
};

const RoutedPolicies = withRouter(Policies);

export default withHead(RoutedPolicies, {
  title: 'style: Policies',
});
