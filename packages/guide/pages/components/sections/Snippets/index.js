import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Search from './Search';
import Snippet from './Snippet';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withRouter } from 'react-router';

class Snippets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div className={classnames(component)}>
        <Switch>
          <Route path={`${match.url}/:snippetId/`} component={Snippet} />
          <Route path={`${match.url}/`} component={Search} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Snippets);
