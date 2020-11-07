import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

  
  render() {
    return(
      <p>Details</p>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Details);