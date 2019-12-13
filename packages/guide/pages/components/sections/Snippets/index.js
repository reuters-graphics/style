import { Route, Switch } from 'react-router-dom';

import React from 'react';
import classnames from 'classnames';
import { component } from './styles.scss';
import { withRouter } from 'react-router';

const Search = () => <h5>Snippets Search</h5>;

const Snip = () => <h5>Snippet</h5>;

class Snippets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div className={classnames(component)}>
        <h5>Snippets</h5>
        <Switch>
          <Route path={`${match.url}/:snippetId`} component={Snip} />
          <Route path={`${match.url}/`} component={Search} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Snippets);
