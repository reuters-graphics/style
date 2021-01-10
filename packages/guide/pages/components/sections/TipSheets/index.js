import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import React from 'react';
import Search from './Search';
import TipSheet from './TipSheet';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withHead } from 'Components/common/Head';
import { withRouter } from 'react-router';

const TipSheets = (props) => {
  const { match } = props;

  return (
    <div className={classnames(component)}>
      <Nav />
      <Switch>
        <Route path={`${match.url}/:tipSheetId/`} component={TipSheet} />
        <Route path={`${match.url}/`} exact>
          <Search />
        </Route>
      </Switch>
    </div>
  );
};

const RoutedTipSheets = withRouter(TipSheets);

export default withHead(RoutedTipSheets, {
  title: 'style: Tip Sheets',
});
