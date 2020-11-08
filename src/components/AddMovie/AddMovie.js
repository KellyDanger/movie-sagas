import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre_id: 0,
    }
  }
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_GENRES'
    })  
  }

  handleChangeFor = (event, param) => {
      this.setState({
      newMovie: {
        ...this.state.newMovie,
        [param]: event.target.value
      }
    })
  }

  //need to get a list of genres from /api/genre to redux store to populate the genre dropdown. 

  addMovie = () => {
    this.props.dispatch({
      type: 'ADD_MOVIE',
      payload: this.state.newMovie
    })
    this.props.history.push('/');
  }
  //cancel button returns user to home page
  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        <input placeholder="title" type="text" onChange={(event)=>this.handleChangeFor(event, 'title')}/>
        <input placeholder="posterURL" type="text" onChange={(event)=>this.handleChangeFor(event, 'poster')}/>
        <input placeholder="description" type="text" onChange={(event)=>this.handleChangeFor(event, 'description')}/>
        <select onChange={(event) => this.handleChangeFor(event, 'genre_id')}>
          {this.props.reduxState.genres[0] && this.props.reduxState.genres.map((genre) => {
           return(
            <option key={genre.id} value={genre.id}>{genre.name}</option>
           ) 
          })}
          
        </select>
        <button onClick={this.addMovie}>Submit</button>
        <button onClick={this.handleClick} className="backBtn">Cancel</button>
      </div>
      
    )
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);