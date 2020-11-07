import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return(
      <p>Home</p>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);