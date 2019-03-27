import React from "react";
import { connect } from "react-redux";

import * as testActions from "../../actions/test";

class Feed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.testNum}</div>
        <button onClick={this.props.test}>Increment</button>
      </React.Fragment>
    );
  }
}

const mapstate = state => {
  return {
    testNum: state.test.trial
  };
};

export default connect(
  mapstate,
  {
    ...testActions
  }
)(Feed);
