import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class Home extends Component {
  componentDidMount = () => {
    this.listMovies();
  }

  listMovies = () => {
    console.log('These are the movies');
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    }) 
  }

  render() {
    return(
      <div id="posterContainer">
        {this.props.reduxState.movies.map((movie) => {
        return <MovieItem key={movie.title} poster={movie.poster} title={movie.title}/>
      })}
      </div>
      
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);