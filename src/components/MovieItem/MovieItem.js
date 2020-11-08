import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {


  render(){
    return(
      //Movie to be listed on dom
      <div>
        <img src={this.props.poster} alt={this.props.title} id={this.props.id}/>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(MovieItem);