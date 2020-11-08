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
      <div id="posterContainer" onClick={this.handleClick}>
        {this.props.reduxState.movies.map((movie) => {
        return <MovieItem key={movie.title} poster={movie.poster} title={movie.title} id={movie.id}/>
      })}
      </div>
      
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);