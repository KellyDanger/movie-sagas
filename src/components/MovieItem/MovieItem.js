import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
  render(){
    return(
      <div>
        <img src={this.props.poster} alt={this.props.title}/>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(MovieItem);