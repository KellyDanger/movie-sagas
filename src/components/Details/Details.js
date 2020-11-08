import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
  

  render() {
    
    return(
      <div>
      {this.props.reduxState.details[0] && 
      <>
      <h1>{this.props.reduxState.details[0].title}</h1>
      <img src={this.props.reduxState.details[0].poster} alt={this.props.reduxState.title}/>
      <h3>{this.props.reduxState.details[0].description}</h3>
      </>
      }
      {this.props.reduxState.details.map((movie) => {
        return <p>{movie.name}</p>
      })}
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Details);