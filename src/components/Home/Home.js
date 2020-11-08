import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


class Home extends Component {
  componentDidMount = () => {
    this.listMovies();
  }
//dispatch fetch movies request to redux, triggering fetchMovies Saga, sending axios request to movieRouter and receiving back all movies from the DB
  listMovies = () => {
    console.log('These are the movies');
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    }) 
  }
//send an action to the rootSaga to fire off the fetch details saga with a payload of the movie ID
  handleClick = (event) => {
    console.log('clicked', event.target.id);
    this.props.dispatch({
      type: 'FETCH_DETAILS',
      payload: event.target.id
    })
    this.props.history.push(`/details/:${event.target.id}`)
  }

  render() {
    return(
      //consumes MovieItem to display it on the DOM
      <div className="posterContainer" onClick={this.handleClick}>
        {this.props.reduxState.movies.map((movie) => {
        return <MovieItem key={movie.id} poster={movie.poster} title={movie.title} id={movie.id}/>
      })}
      </div>
      
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);