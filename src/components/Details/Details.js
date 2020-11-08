import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
  //navigates back to home page
  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    
    return(
      //display all details of the selected movie on the DOM
      <div>
      {this.props.reduxState.details[0] && 
      <>
      <h1>{this.props.reduxState.details[0].title}</h1>
      <img className="moviePoster" src={this.props.reduxState.details[0].poster} alt={this.props.reduxState.title}/>
      <h3>{this.props.reduxState.details[0].description}</h3>
      </>
      }
      {/* display each genre assigned to this movie in the DB */}
      {this.props.reduxState.details.map((movie) => {
        return <p key={movie.name}>{movie.name}</p>
      })}
      <button onClick={this.handleClick} className="backBtn">Back To Movies</button>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Details);