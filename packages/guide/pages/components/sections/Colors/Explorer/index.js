import React from 'react';
import SchemeDetail from './SchemeDetail';
import SchemePicker from './SchemePicker';

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheme: null,
    };
  }

  render() {
    return (
      <div>
        <h2>Color Explorer</h2>
        {this.state.scheme ? (
          <SchemeDetail
            scheme={this.state.scheme}
            resetScheme={() => this.setState({ scheme: null })}
          />
        ) : (
          <SchemePicker
            updateScheme={(scheme) => this.setState({ scheme })}
          />
        )}
      </div>
    );
  }
}

export default Explorer;
