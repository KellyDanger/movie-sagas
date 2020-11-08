import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {


  render() {
    return(
      <>
      {JSON.stringify(this.props.reduxState.details.title)}
      
      </>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Details);