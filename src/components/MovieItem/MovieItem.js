import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
  render(){
    console.log(this.props);
    
    return(
      <div>
        <img src={this.props.poster} alt={this.props.title}/>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(MovieItem);