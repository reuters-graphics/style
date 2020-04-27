import React from 'react';
import SchemeDetail from './SchemeDetail/';
import SchemePicker from './SchemePicker/';
import TypePicker from './TypePicker/';

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      scheme: null,
    };
  }

  render() {
    const { scheme, type } = this.state;
    return (
      <div>
        <h2>Color Explorer</h2>
        {!type && (
          <TypePicker
            updateType={(type) => this.setState({ type })}
          />
        )}
        {(type && !scheme) && (
          <SchemePicker
            type={type}
            resetType={(type) => this.setState({ type: null })}
            updateScheme={(scheme) => this.setState({ scheme })}
          />
        )}
        {(type && scheme) && (
          <SchemeDetail
            type={type}
            scheme={scheme}
            resetType={(type) => this.setState({ type: null, scheme: null })}
            resetScheme={() => this.setState({ scheme: null })}
          />
        )}
      </div>
    );
  }
}

export default Explorer;
