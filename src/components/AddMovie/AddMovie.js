import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  render() {
    return(
      <p>Add Movie</p>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);